import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { SectionHeader } from "@/components/SectionHeader";
import { projectCases } from "@/content/company";

export const metadata: Metadata = {
  title: "Proyectos | LABSICO",
  description:
    "Casos de seguimiento tecnico y control de calidad ejecutados por LABSICO en proyectos de construccion."
};

export default function ProjectsPage() {
  return (
    <section className="section section--muted">
      <div className="site-shell">
        <SectionHeader
          eyebrow="Casos de exito"
          title="Proyectos con seguimiento tecnico"
          description="Casos migrados desde la pagina anterior, con cliente, periodo, alcance tecnico y servicios ejecutados."
        />
        <div className="grid grid--3">
          {projectCases.map((project) => (
            <article className="card project-card" key={project.id}>
              <MediaFrame image={project.image} label={project.name} />
              <div className="tag-list">
                {project.services.map((service) => (
                  <span className="tag" key={service}>
                    {service}
                  </span>
                ))}
              </div>
              <h3>{project.name}</h3>
              <p>
                <strong>{project.client}</strong>
              </p>
              <p>{project.summary}</p>
              {project.detail ? <p>{project.detail}</p> : null}
              <p>
                {project.location} - {project.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
