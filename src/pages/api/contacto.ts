import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const webhookUrl = import.meta.env.N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.warn("N8N_WEBHOOK_URL configuration missing.");
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500
      });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Webhook proxy failed" }), { status: 502 });
    }
  } catch (error) {
    console.error("API error proxying to n8n:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
