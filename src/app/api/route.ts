import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export async function POST(request: Request) {
	const { message } = await request.json();
	console.log({
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	});

	if (!message) {
		return NextResponse.json({ error: "Message is required" }, { status: 400 });
	}

	try {
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: "dabielf@gmail.com",
			subject: "new message from chatGPT",
			text: message,
		});

		return NextResponse.json({ response: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
