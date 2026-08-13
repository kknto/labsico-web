import { NextResponse } from "next/server";
import { publicContact } from "@/content/company";
import { buildWhatsAppUrl, validateQuotePayload, type QuotePayload } from "@/lib/contact";

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<QuotePayload>;
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
