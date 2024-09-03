import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const client = new MongoClient(process.env.DATABASE_URL);

export async function POST(req: NextRequest) {
  try {
    // must give value to the request from the fetching client
    const { query } = await req.json();
    if (!query) {
      return NextResponse.json({ error: "Missing query", status: 400 });
    }
    await client.connect();
    console.log("success");
    const coll = client.db("ClusterFirstBoss").collection("RudeChatRsponses");

    const result = await coll.insertOne(query);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Error connecting to MongoDB:",
      status: 401,
    });
  } finally {
    await client.close();
  }
}
