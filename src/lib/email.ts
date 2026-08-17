import nodemailer from "nodemailer";
import { publicContact } from "@/content/company";
import { buildQuoteMessage, type QuotePayload } from "./contact";

export type EmailResult =
  | { sent: true }
  | { sent: false; reason: "not_configured" | "failed" };

function isEmailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendQuoteEmail(payload: QuotePayload): Promise<EmailResult> {
  if (!isEmailConfigured()) {
    return { sent: false, reason: "not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.QUOTE_TO_EMAIL || publicContact.email,
      replyTo: payload.email || undefined,
      subject: `Solicitud de cotizacion LABSICO - ${payload.service || "Servicio"}`,
      text: buildQuoteMessage(payload)
    });

    return { sent: true };
  } catch {
    return { sent: false, reason: "failed" };
  }
}
