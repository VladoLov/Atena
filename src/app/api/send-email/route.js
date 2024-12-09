/* import EmailTemplate from "../../components/email-template.jsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <derby_i@yahoo.com>",
      to: ["lovric_v@hotmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
} */

/* import { Resend } from "resend";

 const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your Resend API key

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message, name } = req.body;

    try {
      // Use Resend API to send an email
      const data = await resend.emails.send({
        from: "derby_i@yahoo.com", // Replace with your email address
        to: email,
        subject: `Message from ${name}`,
        html: `<p>${message}</p>`,
      });

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
} */

import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, name, message, lastName } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Atena Genomics <info@atenagenomics.com>", // Use a verified domain or the default Resend address
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
