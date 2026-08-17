"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { getAllServices } from "@/lib/catalog";
import type { QuotePayload } from "@/lib/contact";

type ContactFormProps = {
  initialServiceSlug?: string;
};

type ApiResponse = {
  url?: string;
  email?: { sent: boolean; reason?: string };
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
    comments: "",
    company: "",
    jobLocation: "",
    targetDate: "",
    sampleCount: "",
    website: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [quoteUrl, setQuoteUrl] = useState("");
  const [emailStatus, setEmailStatus] = useState<ApiResponse["email"]>();
  const [startedAt] = useState(() => String(Date.now()));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuoteUrl("");
    setEmailStatus(undefined);

    const response = await fetch("/api/quote-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, startedAt })
    });
    const data = (await response.json()) as ApiResponse;

    if (!response.ok) {
      setErrors(data.errors ?? { form: "No se pudo preparar la solicitud." });
      return;
    }

    setErrors({});
    setQuoteUrl(data.url ?? "");
    setEmailStatus(data.email);
  }

  return (
    <form className="form card info-card" onSubmit={handleSubmit}>
      <div className="field honeypot-field" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input
          id="website"
          value={payload.website}
          onChange={(event) => setPayload({ ...payload, website: event.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
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
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            value={payload.company}
            onChange={(event) => setPayload({ ...payload, company: event.target.value })}
            maxLength={120}
          />
        </div>
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
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="project">Proyecto</label>
          <input
            id="project"
            value={payload.project}
            onChange={(event) => setPayload({ ...payload, project: event.target.value })}
            maxLength={160}
          />
        </div>
        <div className="field">
          <label htmlFor="jobLocation">Ubicacion de obra</label>
          <input
            id="jobLocation"
            value={payload.jobLocation}
            onChange={(event) => setPayload({ ...payload, jobLocation: event.target.value })}
            maxLength={180}
          />
        </div>
      </div>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="targetDate">Fecha tentativa</label>
          <input
            id="targetDate"
            type="date"
            value={payload.targetDate}
            onChange={(event) => setPayload({ ...payload, targetDate: event.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="sampleCount">Numero de muestras</label>
          <input
            id="sampleCount"
            value={payload.sampleCount}
            onChange={(event) => setPayload({ ...payload, sampleCount: event.target.value })}
            maxLength={80}
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
      {emailStatus ? (
        <div className={`form-status ${emailStatus.sent ? "form-status--success" : "form-status--warning"}`}>
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>
            {emailStatus.sent
              ? "Solicitud enviada por correo. Tambien puedes abrir WhatsApp para dar seguimiento inmediato."
              : "Solicitud preparada. El correo automatico no esta configurado; usa WhatsApp para enviarla."}
          </span>
        </div>
      ) : null}
      <div className="inline-actions">
        <button className="button button--primary" type="submit">
          <Send size={18} aria-hidden="true" />
          Preparar solicitud
        </button>
        {quoteUrl ? (
          <a className="button button--secondary" href={quoteUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Enviar por WhatsApp
          </a>
        ) : null}
      </div>
    </form>
  );
}
