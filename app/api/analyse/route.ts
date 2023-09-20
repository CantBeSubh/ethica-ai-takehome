import { NextResponse } from 'next/server'

export function GET() {
    //A general GET request to the route will return a 200 status code and a JSON object with a "Hello" and "World" key-value pair.
    return NextResponse.json({ "Hello": "World", "Status": "OK" }, { status: 200 })
}

export async function POST(req: Request) {
    const { input } = await req.json()
    // If the input is missing, return a 400 status code and a JSON object with an "error" key-value pair.
    if (!input) {
        return NextResponse.json({ error: "Missing input" }, { status: 400 })
    }
    try {
        // Make a POST request to the Hugging Face API with the input and the API key.
        const response = await fetch(
            "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
            {
                headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` },
                method: "POST",
                body: JSON.stringify(input),
            }
        );
        // Response would be a Array of Array of Objects. We sort the array based on the score and return the label with the highest score.
        const results = await response.json();
        const result = results[0] as { label: string, score: number }[]
        const sentiment = result.sort((a, b) => b.score - a.score)[0].label || "NEUTRAL"
        return NextResponse.json({ sentiment }, { status: 200 })
    }
    catch (e) {
        return NextResponse.json({ error: "Server Error. Try again in a while." }, { status: 500 })
    }
}