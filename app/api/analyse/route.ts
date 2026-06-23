import { NextResponse } from 'next/server'

export function GET() {
  //A general GET request to the route will return a 200 status code and a JSON object with a "Hello" and "World" key-value pair.
  return NextResponse.json({ "Hello": "World", "Status": "OK" }, { status: 200 })
}

export async function POST(req: Request) {
  const { input } = await req.json()
  console.log("[analyse] received request", { input })
  // If the input is missing, return a 400 status code and a JSON object with an "error" key-value pair.
  if (!input) {
    console.log("[analyse] missing input, returning 400")
    return NextResponse.json({ error: "Missing input" }, { status: 400 })
  }
  try {
    console.log("[analyse] calling Hugging Face API")
    // Make a POST request to the Hugging Face API with the input and the API key.
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/distilbert/distilbert-base-uncased-finetuned-sst-2-english",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: input }),
      }
    );
    console.log("[analyse] Hugging Face response status", response.status, response.statusText)
    // Response would be a Array of Array of Objects. We sort the array based on the score and return the label with the highest score.
    const results = await response.json();
    console.log("[analyse] Hugging Face raw results", JSON.stringify(results))
    const result = results[0] as { label: string, score: number }[]
    const sorted = result.sort((a, b) => b.score - a.score)
    console.log("[analyse] sorted scores", JSON.stringify(sorted))
    const sentiment = sorted[0].label || "NEUTRAL"
    console.log("[analyse] resolved sentiment", sentiment)
    return NextResponse.json({ sentiment }, { status: 200 })
  }
  catch (e) {
    console.error("[analyse] error while analysing input", e)
    return NextResponse.json({ error: "Server Error. Try again in a while." }, { status: 500 })
  }
}
