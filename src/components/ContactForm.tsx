"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { getAllServices } from "@/lib/catalog";
import type { QuotePayload } from "@/lib/contact";

type ContactFormProps = {
  initialServiceSlug?: string;
};

type ApiResponse = {
  url?: string;
  errors?: Record<string, string>;
};

export function ContactForm({ initialServiceSlug }: ContactFormProps) {
  const services = useMemo(() => getAllServices(), []);
  const initialService = services.find((service) => service.slug === initialServiceSlug);
  const [payload, setPayload] = useState<QuotePayload>({
    name: "",
    phone: "",
    email: "",
    project: "",
    service: initialService?.name ?? "",
    comments: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [quoteUrl, setQuoteUrl] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuoteUrl("");

    const response = await fetch("/api/quote-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = (await response.json()) as ApiResponse;

    if (!response.ok) {
      setErrors(data.errors ?? { form: "No se pudo preparar la solicitud." });
      return;
    }

    setErrors({});
    setQuoteUrl(data.url ?? "");
  }

  return (
    <form className="form card info-card" onSubmit={handleSubmit}>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            value={payload.name}
            onChange={(event) => setPayload({ ...payload, name: event.target.value })}
            autoComplete="name"
            maxLength={100}
            required
          />
          {errors.name ? <span className="error-text">{errors.name}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="phone">Telefono</label>
          <input
            id="phone"
            value={payload.phone}
            onChange={(event) => setPayload({ ...payload, phone: event.target.value })}
            autoComplete="tel"
            maxLength={40}
            required
          />
          {errors.phone ? <span className="error-text">{errors.phone}</span> : null}
        </div>
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            value={payload.email}
            onChange={(event) => setPayload({ ...payload, email: event.target.value })}
            autoComplete="email"
            maxLength={160}
          />
          {errors.email ? <span className="error-text">{errors.email}</span> : null}
        </div>
        <div className="field">
          <label htmlFor="project">Proyecto</label>
          <input
            id="project"
            value={payload.project}
            onChange={(event) => setPayload({ ...payload, project: event.target.value })}
            maxLength={160}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="service">Servicio o prueba</label>
        <select
          id="service"
          value={payload.service}
          onChange={(event) => setPayload({ ...payload, service: event.target.value })}
        >
          <option value="">Selecciona una opcion</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.categoryName} - {service.name}
            </option>
          ))}
        </select>
        {errors.service ? <span className="error-text">{errors.service}</span> : null}
      </div>
      <div className="field">
        <label htmlFor="comments">Comentarios</label>
        <textarea
          id="comments"
          value={payload.comments}
          onChange={(event) => setPayload({ ...payload, comments: event.target.value })}
          maxLength={800}
        />
      </div>
      {errors.form ? <span className="error-text">{errors.form}</span> : null}
      <div className="inline-actions">
        <button className="button button--primary" type="submit">
          <Send size={18} aria-hidden="true" />
          Preparar WhatsApp
        </button>
        {quoteUrl ? (
          <a className="button button--secondary" href={quoteUrl} target="_blank" rel="noreferrer">
            Abrir solicitud
          </a>
        ) : null}
      </div>
    </form>
  );
}
