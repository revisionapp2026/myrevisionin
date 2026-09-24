import { createFileRoute } from "@tanstack/react-router";
import { buildGrounding } from "@/lib/study-rag.server";

type Mode = "explain" | "flashcards" | "quiz" | "audio-script";

const MODE_INSTRUCTIONS: Record<Mode, string> = {
  explain: [
    "Answer with plain text using this exact structure and headings:",
    "EXPLANATION",
    "4 to 7 short bullet points starting with '- ', exam-ready, simple English.",
    "KEY POINTS TO REMEMBER",
    "3 to 5 one-line bullet points starting with '- '.",
    "PRACTICE QUESTIONS",
    "4 numbered questions a student may get in the exam, mixing short and long answer types.",
    "Keep the whole answer under 400 words.",
  ].join("\n"),
  flashcards: [
    "Produce exactly 8 revision flashcards and nothing else.",
    "Output one card per line in this exact format:",
    "question :: answer",
    "The question is under 15 words. The answer is one or two short sentences a student can recall in the exam.",
    "No numbering, no headings, no blank lines.",
  ].join("\n"),
  quiz: [
    "Produce exactly 6 multiple-choice practice questions and nothing else.",
    "Output one question per line in this exact format:",
    "question :: option A | option B | option C | option D :: correct option letter :: one line reason",
    "No numbering, no headings, no blank lines.",
  ].join("\n"),
  "audio-script": [
    "Write a spoken revision summary the student can listen to.",
    "Plain flowing sentences only, no headings, no bullet points, no numbers lists.",
    "Start with the topic name, then the core idea, then the points most likely asked in the exam.",
    "Keep it between 90 and 140 words, calm and clear for an Indian college student.",
  ].join("\n"),
};

export const Route = createFileRoute("/api/study-help")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          console.error("[study] LOVABLE_API_KEY is missing in this deployment's environment");
          return new Response(
            "The study buddy is temporarily unavailable on this server. Please try again later.",
            { status: 500 },
          );
        }

        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return new Response("Invalid request.", { status: 400 });
        }

        const topic = typeof body["topic"] === "string" ? body["topic"].trim().slice(0, 400) : "";
        if (topic.length < 3) {
          return new Response("Please type a topic or question first.", { status: 400 });
        }
        const modeRaw = String(body["mode"] ?? "explain");
        const mode: Mode = (["explain", "flashcards", "quiz", "audio-script"] as Mode[]).includes(
          modeRaw as Mode,
        )
          ? (modeRaw as Mode)
          : "explain";
        const programId = body["program"] === "bba" ? "bba" : "bcom";
        const programLabel = programId === "bba" ? "BBA" : "B.Com";
        const semester =
          Number(body["semester"]) >= 1 && Number(body["semester"]) <= 6
            ? Number(body["semester"])
            : 1;
        const subjectId = typeof body["subjectId"] === "string" ? body["subjectId"] : undefined;
        const unitId = typeof body["unitId"] === "string" ? body["unitId"] : undefined;
        const subjectName =
          typeof body["subjectName"] === "string" ? body["subjectName"].slice(0, 120) : "";
        const unitName = typeof body["unitName"] === "string" ? body["unitName"].slice(0, 160) : "";

        const grounding = await buildGrounding({
          topic,
          program: programId,
          semester,
          ...(subjectId ? { subjectId } : {}),
          ...(unitId ? { unitId } : {}),
        }).catch(() => ({ context: "", sources: [] as string[] }));

        const instructions = [
          `You are REVISION Buddy, a personal revision tutor for an Indian ${programLabel} student in Semester ${semester}.`,
          subjectName ? `The student is revising the subject: ${subjectName}.` : "",
          unitName ? `Current chapter: ${unitName}.` : "",
          grounding.context
            ? "Use the STUDY MATERIAL below as your main source. Follow its wording and terminology; add your own explanation only to fill gaps."
            : "No stored material matched, so answer from your own knowledge of this syllabus.",
          MODE_INSTRUCTIONS[mode],
          "Do not use markdown symbols such as #, * or **.",
        ]
          .filter(Boolean)
          .join("\n");

        const input = grounding.context
          ? `Topic or question: ${topic}\n\nSTUDY MATERIAL\n${grounding.context}`
          : `Topic or question: ${topic}`;

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Lovable-API-Key": apiKey,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            instructions,
            input,
            stream: true,
            store: false,
            reasoning: { effort: "low" },
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const detail = await upstream.text().catch(() => "");
          const message =
            upstream.status === 402
              ? "AI study help is temporarily unavailable — the workspace is out of AI credits."
              : upstream.status === 429
                ? "Too many requests right now. Please try again in a moment."
                : `Study help failed (${upstream.status}). ${detail.slice(0, 200)}`;
          return new Response(message, { status: upstream.status || 500 });
        }

        const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
        const writer = writable.getWriter();
        const encoder = new TextEncoder();

        void (async () => {
          const reader = upstream.body!.getReader();
          const decoder = new TextDecoder();
          let buffer = "";
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split("\n");
              buffer = lines.pop() ?? "";
              for (const line of lines) {
                if (!line.startsWith("data:")) continue;
                const payload = line.slice(5).trim();
                if (!payload || payload === "[DONE]") continue;
                try {
                  const event = JSON.parse(payload) as { type?: string; delta?: string };
                  if (event.type === "response.output_text.delta" && event.delta) {
                    await writer.write(encoder.encode(event.delta));
                  }
                } catch {
                  /* ignore partial frames */
                }
              }
            }
          } catch {
            /* upstream ended unexpectedly */
          } finally {
            await writer.close().catch(() => {});
          }
        })();

        return new Response(readable, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Grounded-Sources": String(grounding.sources.length),
          },
        });
      },
    },
  },
});
