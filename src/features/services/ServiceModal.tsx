"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { publicContact } from "@/content/company";
import { buildWhatsAppUrl } from "@/lib/contact";
import type { ServiceItem } from "@/content/types";

type ServiceModalProps = {
  service: ServiceItem & { categoryName: string };
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const quoteUrl = buildWhatsAppUrl(publicContact.whatsapp, {
    name: "",
    phone: "",
    service: service.name,
    comments: `Me interesa recibir informacion y cotizacion para ${service.name}.`
  });

  useEffect(() => {
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal__header">
          <div>
            <span className="tag">{service.categoryName}</span>
            <h2 id="service-modal-title">{service.name}</h2>
          </div>
          <button ref={closeButtonRef} className="icon-button" type="button" onClick={onClose} aria-label="Cerrar">
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="modal__body">
          <p>{service.description}</p>
          <div className="definition-grid">
            <div className="definition">
              <strong>Normas</strong>
              <p>{service.standards.join(", ")}</p>
            </div>
            <div className="definition">
              <strong>Alcance</strong>
              <p>{service.scope}</p>
            </div>
            <div className="definition">
              <strong>Muestra requerida</strong>
              <p>{service.sample}</p>
            </div>
            <div className="definition">
              <strong>Tiempo estimado</strong>
              <p>{service.estimatedTime}</p>
            </div>
          </div>
          <div>
            <strong>Entregables</strong>
            <div className="tag-list" style={{ marginTop: 10 }}>
              {service.deliverables.map((deliverable) => (
                <span className="tag" key={deliverable}>
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
          {service.notes?.length ? (
            <div>
              <strong>Notas</strong>
              {service.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          ) : null}
          <div className="inline-actions">
            <a className="button button--primary" href={quoteUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              Solicitar por WhatsApp
            </a>
            <Link className="button button--secondary" href={`/contacto?servicio=${service.slug}`}>
              Completar formulario
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
