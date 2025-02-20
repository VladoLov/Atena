import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  if (!resend) {
    console.warn("Skipping email API during build: RESEND_API_KEY not found");
    return NextResponse.json(
      { success: false, error: "Email service unavailable" },
      { status: 503 }
    );
  }
  const { email, name, message, lastName } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Atena Genomics <atenagenomics.com>", // Use a verified domain or the default Resend address
      to: ["info@atenagenomics.com"], // Change this line
      replyTo: email, // Add this line
      subject: `New message from ${name}`,
      react: (
        <EmailTemplate firstName={name} message={message} lastName={lastName} />
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
