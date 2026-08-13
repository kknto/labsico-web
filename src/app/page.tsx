import Link from "next/link";
import { ArrowRight, BadgeCheck, FlaskConical, MessageCircle } from "lucide-react";
import { accreditations } from "@/content/company";
import { featuredServices } from "@/content/services";
import { SectionHeader } from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="site-shell hero__content">
          <span className="eyebrow">Laboratorio al servicio de la construccion</span>
          <h1>LABSICO</h1>
          <p>
            Control de calidad para concreto, materiales y procesos constructivos con trazabilidad tecnica,
            soporte en campo y enfoque en cumplimiento normativo.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/servicios">
              Ver servicios
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button--secondary" href="/contacto">
              <MessageCircle size={18} aria-hidden="true" />
              Solicitar cotizacion
            </Link>
          </div>
          <div className="metrics" aria-label="Capacidades principales">
            <div className="metric">
              <strong>7</strong>
              <span>familias de servicio</span>
            </div>
            <div className="metric">
              <strong>NMX</strong>
              <span>referencia tecnica</span>
            </div>
            <div className="metric">
              <strong>EMA</strong>
              <span>acreditacion documentada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Catalogo tecnico"
            title="Servicios listos para crecer sin perder orden"
            description="La estructura permite agregar nuevas pruebas, normas y requisitos desde archivos versionados, manteniendo busqueda, modales y cotizacion conectados al mismo catalogo."
          />
          <div className="grid grid--3">
            {featuredServices.slice(0, 6).map((service) => (
              <article className="card service-card" key={service.id}>
                <FlaskConical color="var(--brand-red)" size={24} aria-hidden="true" />
                <div>
                  <span className="tag">{service.categoryName}</span>
                  <h3>{service.name}</h3>
                </div>
                <p>{service.description}</p>
                <Link className="button button--ghost" href={`/servicios?categoria=${service.categoryId}&prueba=${service.slug}`}>
                  Ver ficha
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Acreditacion"
            title="Base institucional para decisiones tecnicas"
            description="La nueva web separa identidad, acreditaciones, servicios y proyectos para que cada bloque pueda mantenerse sin duplicar informacion."
          />
          <div className="grid grid--2">
            {accreditations.map((item) => (
              <article className="card info-card" key={item.name}>
                <BadgeCheck color="var(--brand-blue)" size={28} aria-hidden="true" />
                <h3>{item.name}</h3>
                <p>
                  <strong>{item.entity}</strong> - {item.number}
                </p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
