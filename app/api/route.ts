import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `${query}` },
      ],
    });
    console.log(response);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting data", error);
    return NextResponse.json({ error: "Error getting data" }, { status: 500 });
  }
}
