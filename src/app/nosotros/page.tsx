import type { Metadata } from "next";
import { BadgeCheck, ClipboardCheck, HardHat, Microscope } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { accreditations, companyValues } from "@/content/company";

export const metadata: Metadata = {
  title: "Nosotros | LABSICO",
  description:
    "Conoce la capacidad tecnica, valores, laboratorio y enfoque de control de calidad de LABSICO para proyectos de construccion."
};

const capabilities = [
  {
    icon: Microscope,
    title: "Laboratorio y campo",
    text: "Servicios de ensayo, muestreo y seguimiento tecnico para materiales de construccion."
  },
  {
    icon: ClipboardCheck,
    title: "Trazabilidad",
    text: "Fichas, normas, entregables y requisitos conectados al catalogo para evitar duplicidad."
  },
  {
    icon: BadgeCheck,
    title: "Cumplimiento",
    text: "Enfoque en requisitos NOM, NMX, ASTM, ACI y acreditacion aplicable."
  },
  {
    icon: HardHat,
    title: "Obra",
    text: "Experiencia en procesos constructivos, control de calidad y acompanamiento en sitio."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Nosotros"
            title="Una base tecnica para servir mejor a la construccion"
            description="LABSICO se presenta con una estructura clara para comunicar capacidad, acreditacion y servicios sin depender de pantallas fijas tipo presentacion."
          />
          <div className="grid grid--2">
            <div className="card info-card">
              <h3>Mision</h3>
              <p>
                Proporcionar servicios integrales de ensayo, inspeccion y control de calidad que ayuden a los
                clientes a tomar decisiones tecnicas confiables durante sus proyectos de construccion.
              </p>
            </div>
            <div className="card info-card">
              <h3>Vision</h3>
              <p>
                Consolidarse como laboratorio de referencia con personal competente, procesos trazables y
                servicios alineados a normas nacionales e internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-shell grid grid--2" style={{ alignItems: "center" }}>
          <div className="lab-placeholder" aria-hidden="true">
            <span>LABSICO</span>
            <strong>Ensayo, inspeccion y control</strong>
          </div>
          <div className="grid">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card info-card" key={item.title}>
                  <Icon color="var(--brand-red)" size={26} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Valores"
            title="Principios de trabajo"
            description="Valores institucionales migrados desde la pagina anterior y redactados como criterios practicos para laboratorio, campo y atencion al cliente."
          />
          <div className="grid grid--3">
            {companyValues.map((value) => (
              <article className="card info-card" key={value.name}>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="site-shell">
          <SectionHeader
            eyebrow="Acreditacion"
            title="Respaldo institucional"
            description="Datos publicados por LABSICO para comunicar acreditacion, normas de referencia y afiliacion sectorial."
          />
          <div className="grid grid--3">
            {accreditations.map((item) => (
              <article className="card info-card" key={`${item.entity}-${item.number}`}>
                <BadgeCheck color="var(--brand-blue)" size={26} aria-hidden="true" />
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
