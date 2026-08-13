import { validateCatalogIntegrity } from "@/lib/catalog";

export default function CatalogHealthPage() {
  const errors = validateCatalogIntegrity();

  return (
    <section className="section">
      <div className="site-shell">
        <h1 style={{ color: "var(--ink)", fontSize: 44 }}>Catalog health</h1>
        {errors.length === 0 ? (
          <p>Catalogo valido: no hay ids o slugs duplicados.</p>
        ) : (
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
