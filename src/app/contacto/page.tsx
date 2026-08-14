import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { publicContact } from "@/content/company";

export const metadata: Metadata = {
  title: "Contacto y cotizacion | LABSICO",
  description:
    "Solicita cotizacion de pruebas de concreto, agregados, acero, soldadura, terraceria, agua y mecanica de suelos con LABSICO."
};

type ContactPageProps = {
  searchParams: Promise<{
    servicio?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <section className="section">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Contacto"
          title="Solicita una cotizacion tecnica"
          description="Comparte el servicio, datos del proyecto y comentarios. La web prepara la solicitud para enviarla por WhatsApp o correo sin guardar informacion en base de datos."
        />
        <div className="contact-band">
          <aside className="map-panel">
            <h2>LABSICO</h2>
            <p>{publicContact.address}</p>
            <div className="inline-actions" style={{ marginTop: 18 }}>
              <Link className="button button--secondary" href={publicContact.mapUrl} target="_blank">
                <MapPin size={18} aria-hidden="true" />
                Abrir mapa
              </Link>
            </div>
          </aside>
          <div className="grid">
            <div className="grid grid--2">
              <article className="card info-card">
                <Phone color="var(--brand-blue)" aria-hidden="true" />
                <h3>Telefono</h3>
                <p>{publicContact.phone}</p>
              </article>
              <article className="card info-card">
                <Mail color="var(--brand-red)" aria-hidden="true" />
                <h3>Correo</h3>
                <p>{publicContact.email}</p>
              </article>
            </div>
            <article className="card info-card">
              <MapPin color="var(--brand-blue)" aria-hidden="true" />
              <h3>Dirección</h3>
              <p>{publicContact.address}</p>
            </article>
            <ContactForm initialServiceSlug={params.servicio} />
          </div>
        </div>
      </div>
    </section>
  );
}
