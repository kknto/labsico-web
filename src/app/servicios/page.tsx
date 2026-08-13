import { ServicesExplorer } from "@/features/services/ServicesExplorer";
import { SectionHeader } from "@/components/SectionHeader";
import { pendingServiceGroups } from "@/content/company";

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
        <section className="pending-services" aria-labelledby="pending-services-title">
          <div>
            <span className="eyebrow" style={{ color: "var(--brand-red)" }}>
              Pendiente de confirmar
            </span>
            <h2 id="pending-services-title">Servicios encontrados en la pagina anterior</h2>
            <p>
              Estos servicios estaban en el codigo antiguo, pero no aparecian activos en la interfaz principal. Quedan
              documentados para decidir si se agregan al catalogo cotizable.
            </p>
          </div>
          <div className="grid grid--2">
            {pendingServiceGroups.map((group) => (
              <article className="card info-card" key={group.name}>
                <span className="tag">{group.status}</span>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
