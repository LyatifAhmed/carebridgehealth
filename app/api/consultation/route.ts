import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ConsultationPayload = {
  fullName: string;
  email: string;
  whatsapp: string;
  treatment: string;
  note: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600;width:180px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;">
        ${escapeHtml(value || "Not provided")}
      </td>
    </tr>
  `;
}

function buildAdminHtml(data: ConsultationPayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px 0;">New consultation request — CareBridge Health</h2>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Full name", data.fullName)}
          ${row("Email", data.email)}
          ${row("WhatsApp", data.whatsapp)}
          ${row("Treatment", data.treatment)}
          ${row("Notes", data.note || "None")}
        </tbody>
      </table>
    </div>
  `;
}

function buildCustomerHtml(data: ConsultationPayload) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.7;color:#0f172a;max-width:640px;margin:0 auto;">
      <div style="padding:32px 24px;border:1px solid #e2e8f0;border-radius:20px;background:#ffffff;">
        <p style="margin:0 0 12px 0;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#64748b;">
          CareBridge Health
        </p>

        <h1 style="margin:0 0 18px 0;font-size:28px;line-height:1.2;">
          We’ve received your consultation request
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Hi ${escapeHtml(data.fullName)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Thank you for contacting CareBridge Health.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          We’ve received your request and will review it carefully before
          getting back to you with the next step.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;font-size:14px;color:#475569;">
            Requested treatment: <strong>${escapeHtml(data.treatment)}</strong>
          </p>
        </div>

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
    const data = (await req.json()) as ConsultationPayload;

    if (!data.fullName || !data.email || !data.whatsapp || !data.treatment) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.CONSULTATION_TO_EMAIL;
    const fromEmail =
      process.env.CONSULTATION_FROM_EMAIL ||
      "CareBridge Health <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    if (!adminEmail) {
      return NextResponse.json(
        { error: "CONSULTATION_TO_EMAIL is not configured." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: data.email,
      subject: `New consultation request from ${data.fullName}`,
      html: buildAdminHtml(data),
    });

    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "We’ve received your consultation request",
      html: buildCustomerHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("consultation route error", error);

    return NextResponse.json(
      { error: "Failed to send consultation request." },
      { status: 500 }
    );
  }
}