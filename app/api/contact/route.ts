import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const topics = ["General enquiry", "Privacy / data request", "Website feedback", "Other"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const topic = typeof body.topic === "string" ? body.topic : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website : "";
    if (website) return NextResponse.json({ ok: true });
    if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !topics.includes(topic) || message.length < 10 || message.length > 5000) {
      return NextResponse.json({ error: "Please check the required fields." }, { status: 400 });
    }
    const to = process.env.CONSULTATION_TO_EMAIL;
    const from = process.env.CONSULTATION_FROM_EMAIL;
    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Contact service is temporarily unavailable." }, { status: 503 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `CareBridge contact: ${topic}`,
      text: `New CareBridge Health contact message\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
    });
    if (result.error || !result.data?.id) {
      console.error("Contact delivery failed", result.error?.name);
      return NextResponse.json({ error: "We could not deliver your message. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process your request." }, { status: 400 });
  }
}
