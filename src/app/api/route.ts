import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { message } = await request.json();

	if (!message) {
		return NextResponse.json({ error: "Message is required" }, { status: 400 });
	}

	// Process the message here
	const response = `Received message: ${message}`;
	console.log({ response });

	return NextResponse.json({ response });
}
