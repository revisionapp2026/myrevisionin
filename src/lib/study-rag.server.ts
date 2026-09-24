/**
 * Server-only retrieval helper: pulls the student's own syllabus material out of
 * the database so AI answers are grounded in REVISION content instead of generic
 * knowledge. Uses the publishable key (anon-readable tables only).
 */

type Row = { content: string; unit_id: string };

function env(name: string) {
  return process.env[name] ?? "";
}

async function rest(path: string): Promise<unknown[]> {
  const url = env("SUPABASE_URL");
  const key = env("SUPABASE_PUBLISHABLE_KEY");
  if (!url || !key) return [];
  const res = await fetch(`${url}/rest/v1/${path}`, {
    headers: { apikey: key, Accept: "application/json" },
  });
  if (!res.ok) return [];
  return (await res.json()) as unknown[];
}

const enc = (v: string) => encodeURIComponent(v);

export type Grounding = {
  context: string;
  sources: string[];
};

/** Keywords worth searching for (drops tiny/stop words). */
function keywords(topic: string): string[] {
  const stop = new Set([
    "what",
    "explain",
    "with",
    "from",
    "that",
    "this",
    "about",
    "give",
    "please",
    "does",
    "their",
    "there",
    "which",
    "into",
    "between",
    "meaning",
    "short",
  ]);
  return [...new Set(topic.toLowerCase().match(/[a-z]{4,}/g) ?? [])]
    .filter((w) => !stop.has(w))
    .slice(0, 4);
}

export async function buildGrounding(input: {
  topic: string;
  program: string;
  semester: number;
  subjectId?: string;
  unitId?: string;
}): Promise<Grounding> {
  const sources: string[] = [];
  const chunks: string[] = [];

  // 1. Explicit unit selected in the app: use that unit's own points.
  if (input.unitId) {
    const points = (await rest(
      `revision_points?unit_id=eq.${enc(input.unitId)}&select=content,unit_id&order=display_order&limit=24`,
    )) as Row[];
    if (points.length) {
      sources.push(input.unitId);
      chunks.push(points.map((p) => `- ${p.content}`).join("\n"));
    }
  }

  // 2. Subject selected: pull a spread of points across its units.
  if (!chunks.length && input.subjectId) {
    const units = (await rest(
      `units?subject_id=eq.${enc(input.subjectId)}&select=id&order=unit_number&limit=8`,
    )) as { id: string }[];
    if (units.length) {
      const ids = units.map((u) => u.id);
      const points = (await rest(
        `revision_points?unit_id=in.(${ids.map(enc).join(",")})&select=content,unit_id&limit=40`,
      )) as Row[];
      if (points.length) {
        sources.push(input.subjectId);
        chunks.push(
          points
            .slice(0, 30)
            .map((p) => `- ${p.content}`)
            .join("\n"),
        );
      }
    }
  }

  // 3. Free-text search across the student's semester.
  if (!chunks.length) {
    const words = keywords(input.topic);
    if (words.length) {
      const subjects = (await rest(
        `subjects?program=eq.${enc(input.program)}&semester=eq.${input.semester}&select=id&limit=30`,
      )) as { id: string }[];
      if (subjects.length) {
        const units = (await rest(
          `units?subject_id=in.(${subjects.map((s) => enc(s.id)).join(",")})&select=id&limit=300`,
        )) as { id: string }[];
        if (units.length) {
          const or = words.map((w) => `content.ilike.*${w}*`).join(",");
          const points = (await rest(
            `revision_points?unit_id=in.(${units.map((u) => enc(u.id)).join(",")})&or=(${enc(or)})&select=content,unit_id&limit=24`,
          )) as Row[];
          if (points.length) {
            for (const p of points) if (!sources.includes(p.unit_id)) sources.push(p.unit_id);
            chunks.push(points.map((p) => `- ${p.content}`).join("\n"));
          }
        }
      }
    }
  }

  return {
    context: chunks.join("\n").slice(0, 4000),
    sources: sources.slice(0, 6),
  };
}
