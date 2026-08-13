import { cookies } from "next/headers";
import type { Metadata } from "next";
import { ExternalLink, LockKeyhole } from "lucide-react";
import { InternalAccessForm } from "@/components/InternalAccessForm";
import { InternalLogoutButton } from "@/components/InternalLogoutButton";
import { SectionHeader } from "@/components/SectionHeader";
import { internalPlatforms } from "@/content/internalPlatforms";
import { INTERNAL_ACCESS_COOKIE, verifyInternalAccessToken } from "@/lib/internalAccess";

export const metadata: Metadata = {
  title: "Accesos internos | LABSICO",
  robots: {
    index: false,
    follow: false
  }
};

export default async function InternalAccessPage() {
  const cookieStore = await cookies();
  const hasAccess = verifyInternalAccessToken(cookieStore.get(INTERNAL_ACCESS_COOKIE)?.value);

  if (!hasAccess) {
    return (
      <section className="section section--muted">
        <div className="site-shell internal-access-shell">
          <SectionHeader
            eyebrow="Accesos internos"
            title="Plataformas de LABSICO"
            description="Entrada protegida para herramientas internas de reportes y operaciones."
          />
          <InternalAccessForm />
        </div>
      </section>
    );
  }

  return (
    <section className="section section--muted">
      <div className="site-shell">
        <div className="internal-access-header">
          <SectionHeader
            eyebrow="Accesos internos"
            title="Plataformas de LABSICO"
            description="Accesos centralizados para personal autorizado de LABSICO."
          />
          <InternalLogoutButton />
        </div>
        <div className="grid grid--3">
          {internalPlatforms.map((platform) => (
            <article className="card info-card internal-platform-card" key={platform.id}>
              <LockKeyhole color="var(--brand-blue)" size={26} aria-hidden="true" />
              <div>
                <span className="tag">{platform.status}</span>
                <h3>{platform.name}</h3>
              </div>
              <p>{platform.description}</p>
              <p>
                <strong>Responsable:</strong> {platform.owner}
              </p>
              {platform.url ? (
                <a className="button button--primary" href={platform.url} target="_blank" rel="noreferrer">
                  Abrir plataforma
                  <ExternalLink size={17} aria-hidden="true" />
                </a>
              ) : (
                <p className="error-text">Configura {platform.envKey} en Render para activar este acceso.</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
