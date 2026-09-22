import { NextResponse } from "next/server";
import { runOmniAI } from "@/lib/omni-ai-core";

export async function GET() {
  return NextResponse.json({
    name: "OMNI GOD AI",
    status: "online",
    capabilities: ["assistant", "memory-ready", "knowledge-ready", "agents-ready", "automation-ready", "crm-ready"],
    providerConfigured: Boolean(process.env.AI_API_URL && process.env.AI_API_KEY),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.message || typeof body.message !== "string") {
      return NextResponse.json({ error: "message is required" }, { status: 400 });
    }
    const result = await runOmniAI({
      message: body.message,
      history: Array.isArray(body.history) ? body.history : [],
      context: body.context,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "OMNI AI request failed" },
      { status: 500 }
    );
  }
}
