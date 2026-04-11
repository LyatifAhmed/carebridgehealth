import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function display(value: string) {
  return value.trim() ? value.trim() : "Not provided";
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:190px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;vertical-align:top;">
        ${escapeHtml(display(value))}
      </td>
    </tr>
  `;
}

function buildAdminHtml(data: {
  name: string;
  clinic: string;
  email: string;
  website: string;
  specialty: string;
  message: string;
}) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 14px 0;">New partner application — CareBridge Health</h2>

      <p style="margin:0 0 18px 0;color:#475569;font-size:14px;">
        A new clinic or provider partnership application has been submitted through the website.
      </p>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Full name", data.name)}
          ${row("Clinic / organisation", data.clinic)}
          ${row("Email", data.email)}
          ${row("Website", data.website)}
          ${row("Specialty", data.specialty)}
          ${row("Message", data.message)}
        </tbody>
      </table>
    </div>
  `;
}

function buildApplicantHtml(data: {
  name: string;
  clinic: string;
  specialty: string;
}) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#0f172a;max-width:640px;margin:0 auto;">
      <div style="padding:32px 24px;border:1px solid #e2e8f0;border-radius:20px;background:#ffffff;">
        <p style="margin:0 0 12px 0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;">
          CareBridge Health
        </p>

        <h1 style="margin:0 0 18px 0;font-size:28px;line-height:1.2;">
          We’ve received your partner application
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Hi ${escapeHtml(data.name)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Thank you for your interest in working with CareBridge Health.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          We’ve received your application and will review it carefully against our current partnership criteria, specialty fit, and overall alignment.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0 0 8px 0;font-size:14px;color:#475569;">
            Clinic / organisation: <strong>${escapeHtml(display(data.clinic))}</strong>
          </p>
          <p style="margin:0;font-size:14px;color:#475569;">
            Specialty: <strong>${escapeHtml(display(data.specialty))}</strong>
          </p>
        </div>

        <p style="margin:0 0 16px 0;color:#475569;">
          Please note that submission does not guarantee acceptance into our network. We work with a limited number of carefully selected clinics and providers.
        </p>

        <p style="margin:0;color:#475569;">
          Warm regards,<br />
          <strong style="color:#0f172a;">CareBridge Health</strong>
        </p>
      </div>
    </div>
  `;
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
    const fromEmail =
      process.env.CONSULTATION_FROM_EMAIL ||
      "CareBridge Health <onboarding@resend.dev>";

    if (!toEmail || !process.env.RESEND_API_KEY) {
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
      html: buildAdminHtml({
        name,
        clinic,
        email,
        website,
        specialty,
        message,
      }),
    });

    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We’ve received your partner application",
      html: buildApplicantHtml({
        name,
        clinic,
        specialty,
      }),
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