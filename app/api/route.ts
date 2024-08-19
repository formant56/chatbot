import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { query } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: query },
        ],
      });
      res.status(200).json(response);
    } catch (error) {
      console.error("Error getting data", error);
      res.status(500).json({ error: "Error getting data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
