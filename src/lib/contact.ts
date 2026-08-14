export type QuotePayload = {
  name: string;
  phone: string;
  email?: string;
  project?: string;
  service?: string;
  comments?: string;
  company?: string;
  startedAt?: string;
};

const limits = {
  name: 100,
  phone: 40,
  email: 160,
  project: 160,
  service: 180,
  comments: 800,
  company: 120,
  startedAt: 40
};

function sanitize(value: string | undefined, maxLength: number) {
  return value?.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function sanitizeQuotePayload(payload: Partial<QuotePayload>): Partial<QuotePayload> {
  return {
    name: sanitize(payload.name, limits.name),
    phone: sanitize(payload.phone, limits.phone),
    email: sanitize(payload.email, limits.email),
    project: sanitize(payload.project, limits.project),
    service: sanitize(payload.service, limits.service),
    comments: sanitize(payload.comments, limits.comments),
    company: sanitize(payload.company, limits.company),
    startedAt: sanitize(payload.startedAt, limits.startedAt)
  };
}

export function normalizeWhatsAppNumber(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function buildQuoteMessage(payload: QuotePayload) {
  const rows = [
    "Hola LABSICO, quiero solicitar una cotizacion.",
    payload.name ? `Nombre: ${payload.name}` : null,
    payload.phone ? `Telefono: ${payload.phone}` : null,
    payload.email ? `Correo: ${payload.email}` : null,
    payload.project ? `Proyecto: ${payload.project}` : null,
    payload.service ? `Servicio: ${payload.service}` : null,
    payload.comments ? `Comentarios: ${payload.comments}` : null
  ].filter(Boolean);

  return rows.join("\n");
}

export function buildWhatsAppUrl(whatsappNumber: string, payload: QuotePayload) {
  const number = normalizeWhatsAppNumber(whatsappNumber);
  const text = encodeURIComponent(buildQuoteMessage(payload));
  return `https://wa.me/${number}?text=${text}`;
}

export function buildMailtoUrl(email: string, payload: QuotePayload) {
  const subject = encodeURIComponent(`Solicitud de cotizacion LABSICO - ${payload.service || "Servicio"}`);
  const body = encodeURIComponent(buildQuoteMessage(payload));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export function validateQuotePayload(payload: Partial<QuotePayload>) {
  const errors: Record<string, string> = {};

  if (!payload.name?.trim()) {
    errors.name = "Indica tu nombre.";
  }
  if (!payload.phone?.trim()) {
    errors.phone = "Indica un telefono de contacto.";
  }
  if (!payload.service?.trim()) {
    errors.service = "Selecciona o describe el servicio requerido.";
  }
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Indica un correo valido.";
  }
  if (payload.company) {
    errors.form = "Solicitud invalida.";
  }
  if (payload.startedAt) {
    const startedAt = Number(payload.startedAt);
    if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1800) {
      errors.form = "Espera un momento antes de enviar la solicitud.";
    }
  }

  return errors;
}
