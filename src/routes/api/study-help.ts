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

type AIProvider = "lovable" | "gemini" | "deepseek" | "bazar";

async function callLovableAI(
  systemPrompt: string,
  grounding: string,
  instructions: string,
  apiKey: string,
): Promise<Response> {
  const response = await fetch("https://api.lovable.ai/gateway/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "system", content: `Syllabus context:\n${grounding}` },
        { role: "user", content: instructions },
      ],
      stream: true,
    }),
  });
  return response;
}

async function callGeminiAI(
  systemPrompt: string,
  grounding: string,
  instructions: string,
  apiKey: string,
): Promise<Response> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: `${systemPrompt}\n\nSyllabus context:\n${grounding}\n\n${instructions}` },
            ],
          },
        ],
      }),
    },
  );
  return response;
}

async function callDeepSeekAI(
  systemPrompt: string,
  grounding: string,
  instructions: string,
  apiKey: string,
): Promise<Response> {
  const response = await fetch("https://deepseek-v31.p.rapidapi.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "deepseek-v31.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
    body: JSON.stringify({
      messages: [
        { role: "system", content: `${systemPrompt}\n\nSyllabus context:\n${grounding}` },
        { role: "user", content: instructions },
      ],
      model: "DeepSeek-V3.2",
    }),
  });
  return response;
}

async function callBazarAI(
  systemPrompt: string,
  grounding: string,
  instructions: string,
  apiKey: string,
): Promise<Response> {
  const response = await fetch("https://api.bazar.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `${systemPrompt}\n\nSyllabus context:\n${grounding}` },
        { role: "user", content: instructions },
      ],
      stream: true,
    }),
  });
  return response;
}

async function callAIWithFallback(
  systemPrompt: string,
  grounding: string,
  instructions: string,
): Promise<Response> {
  const providers: AIProvider[] = ["lovable", "gemini", "deepseek", "bazar"];
  const keys: Record<AIProvider, string | undefined> = {
    lovable: process.env["LOVABLE_API_KEY"],
    gemini: process.env["GEMINI_API_KEY"],
    deepseek: process.env["DEEPSEEK_API_KEY"],
    bazar: process.env["BAZAR_API_KEY"],
  };

  const callFunctions: Record<AIProvider, typeof callLovableAI> = {
    lovable: callLovableAI,
    gemini: callGeminiAI,
    deepseek: callDeepSeekAI,
    bazar: callBazarAI,
  };

  for (const provider of providers) {
    const apiKey = keys[provider];
    if (!apiKey) {
      console.log(`[study] ${provider} API key not configured, skipping`);
      continue;
    }

    try {
      console.log(`[study] Trying ${provider} AI...`);
      const response = await callFunctions[provider](systemPrompt, grounding, instructions, apiKey);
      if (response.ok) {
        console.log(`[study] ${provider} AI succeeded`);
        return response;
      }
      console.log(`[study] ${provider} AI failed with status ${response.status}`);
    } catch (error) {
      console.log(`[study] ${provider} AI error:`, error);
    }
  }

  throw new Error("All AI providers failed");
}

export const Route = createFileRoute("/api/study-help")({
  server: {
    handlers: {
      POST: async ({ request }) => {
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

        const fullPrompt = `${instructions}\n\nTopic: ${topic}${grounding.context ? `\n\nContext:\n${grounding.context}` : ""}`;

        // Try Gemini first (free API)
        const geminiKey = process.env["GEMINI_API_KEY"] || process.env["VITE_GEMINI_API_KEY"];
        if (geminiKey) {
          try {
            console.log("[study] Trying Gemini AI...");
            const response = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${geminiKey}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  contents: [{ parts: [{ text: fullPrompt }] }],
                }),
              },
            );

            if (response.ok) {
              const data = await response.json();
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
              return new Response(text, {
                headers: {
                  "Content-Type": "text/plain; charset=utf-8",
                  "Cache-Control": "no-store",
                  "X-Grounded-Sources": String(grounding.sources.length),
                },
              });
            }
            console.log("[study] Gemini failed:", response.status);
          } catch (error) {
            console.log("[study] Gemini error:", error);
          }
        }

        // Try DeepSeek
        const deepseekKey = process.env["DEEPSEEK_API_KEY"] || process.env["VITE_DEEPSEEK_API_KEY"];
        if (deepseekKey) {
          try {
            console.log("[study] Trying DeepSeek AI...");
            const response = await fetch("https://deepseek-v31.p.rapidapi.com/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-rapidapi-host": "deepseek-v31.p.rapidapi.com",
                "x-rapidapi-key": deepseekKey,
              },
              body: JSON.stringify({
                messages: [{ role: "user", content: fullPrompt }],
                model: "DeepSeek-V3.2",
              }),
            });

            if (response.ok) {
              const data = await response.json();
              const text = data.choices?.[0]?.message?.content || "";
              return new Response(text, {
                headers: {
                  "Content-Type": "text/plain; charset=utf-8",
                  "Cache-Control": "no-store",
                  "X-Grounded-Sources": String(grounding.sources.length),
                },
              });
            }
            console.log("[study] DeepSeek failed:", response.status);
          } catch (error) {
            console.log("[study] DeepSeek error:", error);
          }
        }

        // Try Bazar
        const bazarKey = process.env["BAZAR_API_KEY"] || process.env["VITE_BAZAR_API_KEY"];
        if (bazarKey) {
          try {
            console.log("[study] Trying Bazar AI...");
            const response = await fetch("https://api.bazar.ai/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${bazarKey}`,
              },
              body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: fullPrompt }],
              }),
            });

            if (response.ok) {
              const data = await response.json();
              const text = data.choices?.[0]?.message?.content || "";
              return new Response(text, {
                headers: {
                  "Content-Type": "text/plain; charset=utf-8",
                  "Cache-Control": "no-store",
                  "X-Grounded-Sources": String(grounding.sources.length),
                },
              });
            }
            console.log("[study] Bazar failed:", response.status);
          } catch (error) {
            console.log("[study] Bazar error:", error);
          }
        }

        console.error("[study] All AI providers failed");
        return new Response("Study buddy temporarily unavailable. Please try again.", {
          status: 500,
        });
      },
    },
  },
});
