// async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// query({"inputs": "I like you. I love you"}).then((response) => {
// 	console.log(JSON.stringify(response));
// });

import { NextResponse } from 'next/server'
export function GET(req: Request) {
    return NextResponse.json({ "Hello": "World", "Status": "OK" }, { status: 200 })
}

export async function POST(req: Request) {
    const { input } = await req.json()
    const response = await fetch(
        "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
        {
            headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` },
            method: "POST",
            body: JSON.stringify(input),
        }
    );
    const results = await response.json();
    const result = results[0] as { label: string, score: number }[]
    const sentiment = result.sort((a, b) => b.score - a.score)[0].label || "NEUTRAL"
    return NextResponse.json({ sentiment }, { status: 200 })
}