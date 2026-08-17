import type { Metadata } from "next";
import { Suspense } from "react";
import { ServicesExplorer } from "@/features/services/ServicesExplorer";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Servicios de laboratorio | LABSICO",
  description:
    "Catalogo de pruebas y servicios LABSICO para concreto, agregados, soldadura, acero, terraceria, agua y mecanica de suelos."
};

type ServicesPageProps = {
  searchParams: Promise<{
    categoria?: string;
    prueba?: string;
  }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = await searchParams;

  return (
    <section className="services-page">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Servicios"
          title="Catalogo modular de pruebas y servicios"
          description="Explora por familia, filtra por norma o abre una ficha tecnica-comercial para solicitar cotizacion del servicio especifico."
        />
        <Suspense fallback={<p>Cargando catalogo...</p>}>
          <ServicesExplorer initialCategory={params.categoria} initialService={params.prueba} />
        </Suspense>
      </div>
    </section>
  );
}
