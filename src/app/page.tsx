import Link from "next/link";
import { ArrowRight, BadgeCheck, FlaskConical, MessageCircle } from "lucide-react";
import { accreditations } from "@/content/company";
import { featuredServices } from "@/content/services";
import { SectionHeader } from "@/components/SectionHeader";
import { getSortedCategories } from "@/lib/catalog";

export default function HomePage() {
  const categories = getSortedCategories();

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
            title="Servicios organizados por especialidad"
            description="Encuentra pruebas, normas y requisitos desde un catalogo consultable, con fichas tecnicas y cotizacion conectadas al servicio seleccionado."
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
          <div className="cta-strip">
            <FlaskConical size={28} aria-hidden="true" />
            <div>
              <strong>Explora por familia de servicio</strong>
              <p>Accede directamente a las categorias principales para revisar pruebas, normas y datos de cotizacion.</p>
            </div>
            <div className="tag-list">
              {categories.slice(0, 5).map((category) => (
                <Link className="tag tag--link" href={`/servicios/${category.id}`} key={category.id}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Acreditacion"
            title="Base institucional para decisiones tecnicas"
            description="Acreditaciones, referencias normativas y experiencia documentada para respaldar el control de calidad en obra."
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
          <div className="inline-actions" style={{ marginTop: 24 }}>
            <Link className="button button--primary" href="/acreditacion">
              Ver acreditacion
            </Link>
            <Link className="button button--secondary" href="/contacto">
              Contactar laboratorio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
