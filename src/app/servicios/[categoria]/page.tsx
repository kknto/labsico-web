import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { MediaFrame } from "@/components/MediaFrame";
import { SectionHeader } from "@/components/SectionHeader";
import { StructuredData } from "@/components/StructuredData";
import { ServicesExplorer } from "@/features/services/ServicesExplorer";
import { findCategoryById, getSortedCategories } from "@/lib/catalog";

type CategoryPageProps = {
  params: Promise<{
    categoria: string;
  }>;
};

export function generateStaticParams() {
  return getSortedCategories().map((category) => ({
    categoria: category.id
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const category = findCategoryById(categoria);

  if (!category) {
    return {
      title: "Servicio no encontrado | LABSICO"
    };
  }

  return {
    title: `${category.name} | Servicios LABSICO`,
    description: category.seoDescription ?? category.summary,
    alternates: {
      canonical: `/servicios/${category.id}`
    }
  };
}

export default async function ServiceCategoryPage({ params }: CategoryPageProps) {
  const { categoria } = await params;
  const category = findCategoryById(categoria);

  if (!category) {
    notFound();
  }

  const featured = category.items.slice(0, 6);

  return (
    <>
      <section className="section section--muted">
        <div className="site-shell">
          <Link className="button button--ghost back-link" href="/servicios">
            <ArrowLeft size={18} aria-hidden="true" />
            Todos los servicios
          </Link>
          <nav className="breadcrumbs" aria-label="Ruta de navegacion">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <Link href="/servicios">Servicios</Link>
            <span>/</span>
            <span>{category.name}</span>
          </nav>
          <SectionHeader
            eyebrow="Categoria de servicio"
            title={category.name}
            description={category.seoDescription ?? category.summary}
          />
          <div className="grid grid--3">
            <article className="card info-card">
              <MediaFrame image={category.image} label={category.name} />
              <FlaskConical color="var(--brand-red)" size={28} aria-hidden="true" />
              <h3>{category.items.length} servicios disponibles</h3>
              <p>{category.summary}</p>
            </article>
            {featured.map((service) => (
              <article className="card info-card" key={service.id}>
                <span className="tag">{service.standards[0] ?? "Alcance tecnico"}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link className="button button--secondary" href={`/servicios?categoria=${category.id}&prueba=${service.slug}`}>
                  Ver ficha
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Catalogo"
            title={`Pruebas de ${category.name}`}
            description="Filtra por nombre, norma o alcance y abre la ficha para solicitar cotizacion del servicio exacto."
          />
          <Suspense fallback={<p>Cargando catalogo...</p>}>
            <ServicesExplorer initialCategory={category.id} />
          </Suspense>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Cotizacion"
            title={`Solicitar ${category.name}`}
            description="Comparte los datos basicos del proyecto para preparar la solicitud de cotizacion."
          />
          <ContactForm />
        </div>
      </section>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: category.name,
          provider: {
            "@type": "LocalBusiness",
            name: "LABSICO"
          },
          areaServed: "Quintana Roo",
          description: category.seoDescription ?? category.summary,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Servicios de ${category.name}`,
            itemListElement: category.items.slice(0, 20).map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.name,
                description: service.description
              }
            }))
          }
        }}
      />
    </>
  );
}
