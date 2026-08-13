import { ServicesExplorer } from "@/features/services/ServicesExplorer";
import { SectionHeader } from "@/components/SectionHeader";

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
        <ServicesExplorer initialCategory={params.categoria} initialService={params.prueba} />
      </div>
    </section>
  );
}
