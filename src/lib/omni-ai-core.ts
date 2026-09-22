export type OmniMessage = { role: "user" | "assistant" | "system"; content: string };

export type OmniAIRequest = {
  message: string;
  history?: OmniMessage[];
  context?: Record<string, unknown>;
};

const SYSTEM_PROMPT = `You are OMNI GOD AI, the intelligence layer inside OmniCRM. You help users operate their business across CRM, sales, finance, projects, HR, inventory, marketing, support and workflows. Be accurate, concise and action-oriented. Never claim an action was completed unless the application actually executed it. When tools are available, plan the action, execute only authorized operations, and report the result. Learn user preferences through explicit feedback and durable memory, but do not silently infer sensitive personal information.`;

export async function runOmniAI(input: OmniAIRequest) {
  const apiUrl = process.env.AI_API_URL;
  const apiKey = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL || "default";

  if (apiUrl && apiKey) {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...(input.history || []).slice(-20),
          { role: "user", content: input.message },
        ],
        temperature: 0.2,
      }),
    });
    if (!response.ok) throw new Error(`AI provider returned ${response.status}`);
    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content ?? data?.output_text;
    if (!content) throw new Error("AI provider returned no text");
    return { content, provider: "configured", model };
  }

  return {
    content: localCRMResponse(input.message),
    provider: "local-fallback",
    model: "crm-intent-engine",
  };
}

function localCRMResponse(message: string) {
  const q = message.toLowerCase();
  if (q.includes("lead")) return "I can help manage leads. Connect an AI provider in Railway (AI_API_URL, AI_API_KEY and optionally AI_MODEL) to enable full natural-language CRM actions.";
  if (q.includes("pipeline")) return "I can analyse your sales pipeline once CRM data access is connected to the OMNI AI tool layer.";
  if (q.includes("report") || q.includes("analytics")) return "OMNI AI is ready for business reporting. The next layer connects live CRM records so reports are generated from your actual data.";
  if (q.includes("automate") || q.includes("workflow")) return "Automation mode is available through the OMNI AI orchestration layer. Connect your approved tools and workflows to let the agent plan and execute tasks.";
  return "OMNI GOD AI is connected to OmniCRM. I’m ready to use the CRM intelligence, memory, knowledge, tools and automation layers as they are enabled.";
}
