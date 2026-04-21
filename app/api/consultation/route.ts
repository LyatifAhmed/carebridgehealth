import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ConsultationPayload = {
  fullName: string;
  email: string;
  whatsapp: string;
  treatment: string;
  treatmentCity: string;
  location: string;
  timeframe: string;
  note: string;
  consentDataProcessing: boolean;
  consentDisclaimer: boolean;
};

function escapeHtml(value: string) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function display(value?: string) {
  return value?.trim() ? value.trim() : "Not provided";
}

function yesNo(value?: boolean) {
  return value ? "Yes" : "No";
}

function row(label: string, value?: string) {
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

function buildAdminHtml(
  data: ConsultationPayload,
  meta: {
    submittedAt: string;
    ip: string;
    userAgent: string;
  }
) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;max-width:760px;margin:0 auto;">
      <h2 style="margin:0 0 16px 0;">New consultation request — CareBridge Health</h2>

      <p style="margin:0 0 18px 0;color:#475569;font-size:14px;">
        A new private treatment plan review request has been submitted through the website.
      </p>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Full name", data.fullName)}
          ${row("Email", data.email)}
          ${row("WhatsApp", data.whatsapp)}
          ${row("Treatment", data.treatment)}
          ${row("Preferred destination", data.treatmentCity)}
          ${row("Location", data.location)}
          ${row("Timeframe", data.timeframe)}
          ${row("Notes", data.note)}
        </tbody>
      </table>

      <h3 style="margin:28px 0 12px 0;font-size:16px;">Consent and submission record</h3>

      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tbody>
          ${row("Data processing consent given", yesNo(data.consentDataProcessing))}
          ${row("Disclaimer accepted", yesNo(data.consentDisclaimer))}
          ${row("Submitted at", meta.submittedAt)}
          ${row("IP address", meta.ip)}
          ${row("User agent", meta.userAgent)}
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
          We’ve received your treatment review request
        </h1>

        <p style="margin:0 0 16px 0;color:#475569;">
          Hi ${escapeHtml(data.fullName)},
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Thank you for contacting CareBridge Health.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          We’ve received your enquiry and will review it carefully before getting back to you with the most suitable next step.
        </p>

        <p style="margin:0 0 16px 0;color:#475569;">
          Where appropriate, this may include helping you think more clearly about destination fit, treatment pathway, and whether your case should move into direct review through a relevant partner clinic.
        </p>

        <div style="margin:24px 0;padding:16px 18px;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0 0 8px 0;font-size:14px;color:#475569;">
            Requested treatment: <strong>${escapeHtml(display(data.treatment))}</strong>
          </p>
          <p style="margin:0 0 8px 0;font-size:14px;color:#475569;">
            Preferred destination: <strong>${escapeHtml(display(data.treatmentCity))}</strong>
          </p>
          <p style="margin:0;font-size:14px;color:#475569;">
            Timeframe: <strong>${escapeHtml(display(data.timeframe))}</strong>
          </p>
        </div>

        <p style="margin:0 0 16px 0;color:#475569;">
          CareBridge Health is an independent coordination service and not a clinic or medical provider. Any treatment, clinical review, suitability assessment, and medical decisions remain the responsibility of the relevant provider.
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
    const data = (await req.json()) as ConsultationPayload;

    if (
      !data.fullName ||
      !data.email ||
      !data.whatsapp ||
      !data.treatment ||
      !data.treatmentCity ||
      !data.location ||
      !data.timeframe
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!data.consentDataProcessing || !data.consentDisclaimer) {
      return NextResponse.json(
        { error: "Required consent fields were not accepted." },
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

    const submittedAt = new Date().toISOString();

    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      realIp ||
      "Unavailable";

    const userAgent = req.headers.get("user-agent") || "Unavailable";

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: data.email,
      subject: `New consultation request from ${data.fullName}`,
      html: buildAdminHtml(data, {
        submittedAt,
        ip,
        userAgent,
      }),
    });

    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "We’ve received your treatment review request",
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