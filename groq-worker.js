/* =========================================================
   Cloudflare Worker — secure Groq proxy for the live site
   ---------------------------------------------------------
   Why: GitHub Pages is static, so a browser-side key would be
   public. This Worker keeps your key as a server-side SECRET
   and the browser only ever talks to the Worker.

   DEPLOY (5 minutes, free):
   1. Go to https://dash.cloudflare.com  ->  Workers & Pages  ->  Create Worker
   2. Replace the worker code with this file's contents and Deploy.
   3. Worker  ->  Settings  ->  Variables  ->  add a SECRET:
        Name:  GROQ_API_KEY      Value: <your groq key>
   4. (Optional, recommended) set ALLOWED_ORIGIN to your site, e.g.
        https://rohitkumarmanne-442.github.io
   5. Copy the Worker URL (e.g. https://groq-proxy.<you>.workers.dev)
      and paste it into config.js -> groqProxyUrl, then commit ONLY that
      (config.js is gitignored, so instead hardcode it in script.js
       PROXY_URL or set window.AGENT_CONFIG in index.html).
   ========================================================= */

export default {
  async fetch(request, env) {
    const ALLOWED_ORIGIN = env.ALLOWED_ORIGIN || "*";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return new Response("POST only", { status: 405, headers: cors });

    try {
      const body = await request.json(); // { messages, model }
      const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: body.model || "llama-3.3-70b-versatile",
          messages: body.messages,
          temperature: 0.4,
          max_tokens: 600,
        }),
      });
      const data = await resp.json();
      return new Response(JSON.stringify(data), {
        status: resp.status,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  },
};
