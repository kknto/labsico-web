import { NextResponse } from "next/server";
import { publicContact } from "@/content/company";
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  sanitizeQuotePayload,
  validateQuotePayload,
  type QuotePayload
} from "@/lib/contact";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 6;
const attempts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = attempts.get(clientKey);

  if (!current || current.resetAt <= now) {
    attempts.set(clientKey, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json({ errors: { form: "Demasiadas solicitudes. Intenta mas tarde." } }, { status: 429 });
  }

  let rawPayload: Partial<QuotePayload>;

  try {
    rawPayload = (await request.json()) as Partial<QuotePayload>;
  } catch {
    return NextResponse.json({ errors: { form: "Solicitud invalida." } }, { status: 400 });
  }

  const payload = sanitizeQuotePayload(rawPayload);
  const errors = validateQuotePayload(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const quotePayload = {
    name: payload.name!.trim(),
    phone: payload.phone!.trim(),
    email: payload.email?.trim(),
    project: payload.project?.trim(),
    service: payload.service!.trim(),
    comments: payload.comments?.trim()
  };

  const url = buildWhatsAppUrl(publicContact.whatsapp, quotePayload);
  const emailUrl = buildMailtoUrl(publicContact.email, quotePayload);

  return NextResponse.json({ url, emailUrl });
}
