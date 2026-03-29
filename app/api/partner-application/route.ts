import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const clinic = typeof body.clinic === "string" ? body.clinic.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const website =
      typeof body.website === "string" ? body.website.trim() : "";
    const specialty =
      typeof body.specialty === "string" ? body.specialty.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !clinic || !email || !specialty) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONSULTATION_TO_EMAIL;
    const fromEmail = process.env.CONSULTATION_FROM_EMAIL;

    if (!toEmail || !fromEmail || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New partner application: ${clinic}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">New partner application</h2>

          <p><strong>Full name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Clinic / organisation:</strong> ${escapeHtml(clinic)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
          <p><strong>Specialty:</strong> ${escapeHtml(specialty)}</p>

          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;white-space:pre-wrap;">
              ${escapeHtml(message || "No additional message.")}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("partner application route error", error);
    return NextResponse.json(
      { error: "Something went wrong while sending the application." },
      { status: 500 }
    );
  }
}