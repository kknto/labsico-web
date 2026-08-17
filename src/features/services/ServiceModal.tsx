"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { publicContact } from "@/content/company";
import { buildWhatsAppUrl } from "@/lib/contact";
import type { ServiceItem } from "@/content/types";

type ServiceModalProps = {
  service: ServiceItem & { categoryName: string };
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const quoteUrl = buildWhatsAppUrl(publicContact.whatsapp, {
    name: "",
    phone: "",
    service: service.name,
    comments: `Me interesa recibir informacion y cotizacion para ${service.name}.`
  });

  return (
    <Modal title={service.name} eyebrow={service.categoryName} onClose={onClose}>
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
            {service.method ? (
              <div className="definition">
                <strong>Metodo de trabajo</strong>
                <p>{service.method}</p>
              </div>
            ) : null}
          </div>
          {service.clientPreparation?.length ? (
            <div>
              <strong>Preparacion del cliente</strong>
              <div className="tag-list" style={{ marginTop: 10 }}>
                {service.clientPreparation.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {service.quoteChecklist?.length ? (
            <div>
              <strong>Datos para cotizar</strong>
              <div className="tag-list" style={{ marginTop: 10 }}>
                {service.quoteChecklist.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
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
    </Modal>
  );
}
