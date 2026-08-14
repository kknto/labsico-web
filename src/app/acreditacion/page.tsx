import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ClipboardCheck, FileCheck2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { accreditations, accreditationScopes } from "@/content/company";

export const metadata: Metadata = {
  title: "Acreditacion y alcance | LABSICO",
  description:
    "Acreditacion, referencias normativas y alcance tecnico de LABSICO para ensayos de materiales de construccion."
};

export default function AccreditationPage() {
  return (
    <>
      <section className="section section--muted">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Acreditacion"
            title="Respaldo tecnico para control de calidad"
            description="LABSICO documenta sus servicios con normas de referencia, trazabilidad de muestras y reportes tecnicos para obra, laboratorio y supervision."
          />
          <div className="grid grid--3">
            {accreditations.map((item) => (
              <article className="card info-card" key={item.name}>
                <BadgeCheck color="var(--brand-blue)" size={30} aria-hidden="true" />
                <span className="tag">{item.status}</span>
                <h3>{item.name}</h3>
                <p>
                  <strong>{item.entity}</strong> - {item.number}
                </p>
                <p>{item.description}</p>
                {item.scope?.length ? (
                  <div className="tag-list">
                    {item.scope.map((scope) => (
                      <span className="tag" key={scope}>
                        {scope}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Alcance"
            title="Como se controla cada servicio"
            description="La cotizacion define el metodo, muestra, tiempos, entregables y condiciones de ejecucion segun el servicio solicitado."
          />
          <div className="grid grid--3">
            {accreditationScopes.map((scope) => (
              <article className="card info-card" key={scope.id}>
                <ClipboardCheck color="var(--brand-red)" size={28} aria-hidden="true" />
                <h3>{scope.title}</h3>
                <p>{scope.description}</p>
                <div className="tag-list">
                  {scope.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="cta-strip">
            <FileCheck2 size={28} aria-hidden="true" />
            <div>
              <strong>Consulta el servicio exacto antes de cotizar</strong>
              <p>Las fichas por categoria muestran normas, muestra, entregables y datos necesarios para preparar la solicitud.</p>
            </div>
            <Link className="button button--primary" href="/servicios">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
