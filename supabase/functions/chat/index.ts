const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are SWAMN Assistant — a friendly, concise AI guide for the SWAMN project.

About SWAMN:
- SWAMN is a student-led initiative building autonomous bots and docking systems to help clean rivers, lakes and water bodies.
- Mission: cleaner waters through smart, affordable, autonomous environmental tech.
- Core tech: autonomous surface bot, smart docking station, AI-driven navigation, embedded systems.

Team:
- Aviraaj — Business Evaluator (Strategy & Viability)
- Rishi Singh — Lead Innovator (Bot & Dock Designer)
- Vaibhav Raj — Co-Developer (Systems & Integration)
- Aayush Kumar Singh — Branding, Media & Communications
- Manan — Finance Manager
- Satvik — Pitch & Storytelling

Contact: support@swamn.com. Website has a "Join the Mission" form for suggestions or to join the team.

Rules:
- Be brief (2–4 sentences usually). Friendly, professional tone.
- If asked something off-topic, gently redirect to SWAMN topics.
- If asked to join, partner, or contact, point them to the Join the Mission button or support@swamn.com.
- Never invent facts about the team beyond what's listed.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...(messages ?? []),
          ],
          stream: true,
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit reached. Try again shortly." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
