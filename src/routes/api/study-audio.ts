import { createFileRoute } from "@tanstack/react-router";

/**
 * Turns a short revision summary into spoken audio (WAV) using Lovable AI.
 */
export const Route = createFileRoute("/api/study-audio")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"] || process.env["VITE_LOVABLE_API_KEY"];
        if (!apiKey)
          return new Response(
            "The study buddy is temporarily unavailable on this server. Please try again later.",
            { status: 500 },
          );

        let body: { text?: unknown };
        try {
          body = (await request.json()) as { text?: unknown };
        } catch {
          return new Response("Invalid request.", { status: 400 });
        }

        const text = typeof body.text === "string" ? body.text.trim().slice(0, 1800) : "";
        if (text.length < 20) {
          return new Response("Nothing to read out yet.", { status: 400 });
        }

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Lovable-API-Key": apiKey,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "google/gemini-3.1-flash-tts-preview",
            contents: [
              {
                role: "user",
                parts: [{ text: `Read this revision summary clearly and calmly:\n${text}` }],
              },
            ],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } },
            },
          }),
        });

        if (!upstream.ok) {
          const detail = await upstream.text().catch(() => "");
          const message =
            upstream.status === 402
              ? "Audio explanations are unavailable — the workspace is out of AI credits."
              : upstream.status === 429
                ? "Too many requests right now. Please try again in a moment."
                : `Could not create the audio (${upstream.status}). ${detail.slice(0, 160)}`;
          return new Response(message, { status: upstream.status || 500 });
        }

        const audio = await upstream.arrayBuffer();
        return new Response(audio, {
          headers: { "Content-Type": "audio/wav", "Cache-Control": "no-store" },
        });
      },
    },
  },
});
