import { NextResponse } from "next/server";
import { publicContact } from "@/content/company";
import {
  buildWhatsAppUrl,
  sanitizeQuotePayload,
  validateQuotePayload,
  type QuotePayload
} from "@/lib/contact";

export async function POST(request: Request) {
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

  const url = buildWhatsAppUrl(publicContact.whatsapp, {
    name: payload.name!.trim(),
    phone: payload.phone!.trim(),
    email: payload.email?.trim(),
    project: payload.project?.trim(),
    service: payload.service!.trim(),
    comments: payload.comments?.trim()
  });

  return NextResponse.json({ url });
}
