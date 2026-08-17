"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, Search } from "lucide-react";
import { getAllServices, getSortedCategories } from "@/lib/catalog";
import type { ServiceItem } from "@/content/types";
import { ServiceModal } from "./ServiceModal";

type SearchParams = {
  initialCategory?: string;
  initialService?: string;
};

export function ServicesExplorer({ initialCategory, initialService }: SearchParams) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = useMemo(() => getSortedCategories(), []);
  const services = useMemo(() => getAllServices(), []);
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? categories[0]?.id ?? "");
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [selectedService, setSelectedService] = useState<
    (ServiceItem & { categoryName: string; categoryAccent: string }) | null
  >(() => services.find((service) => service.slug === initialService) ?? null);

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "todos" || service.categoryId === activeCategory;
    const haystack = [
      service.name,
      service.description,
      service.categoryName,
      service.standards.join(" "),
      service.scope
    ]
      .join(" ")
      .toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase().trim());
  });

  function updateUrl(next: { category?: string; service?: string | null; query?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    const category = next.category ?? activeCategory;
    const normalizedQuery = next.query ?? query;

    if (category && category !== categories[0]?.id) {
      params.set("categoria", category);
    } else {
      params.delete("categoria");
    }

    if (next.service) {
      params.set("prueba", next.service);
    } else if (next.service === null) {
      params.delete("prueba");
    }

    if (normalizedQuery.trim()) {
      params.set("q", normalizedQuery.trim());
    } else {
      params.delete("q");
    }

    const suffix = params.toString();
    router.replace(suffix ? `${pathname}?${suffix}` : pathname, { scroll: false });
  }

  function selectCategory(categoryId: string) {
    setActiveCategory(categoryId);
    updateUrl({ category: categoryId, service: null });
  }

  function selectService(service: ServiceItem & { categoryName: string; categoryAccent: string }) {
    setSelectedService(service);
    updateUrl({ category: service.categoryId, service: service.slug });
  }

  function clearFilters() {
    const defaultCategory = categories[0]?.id ?? "";
    setActiveCategory(defaultCategory);
    setQuery("");
    setSelectedService(null);
    router.replace(pathname, { scroll: false });
  }

  return (
    <>
      <div className="services-layout">
        <aside className="services-panel card" aria-label="Categorias de servicios">
          <label className="field">
            <span>Buscar prueba, servicio o norma</span>
            <span style={{ position: "relative" }}>
              <Search
                size={18}
                aria-hidden="true"
                style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}
              />
              <input
                className="search-field"
                style={{ paddingLeft: 38 }}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  updateUrl({ query: event.target.value });
                }}
                placeholder="Ej. revenimiento, ASTM C39"
              />
            </span>
          </label>
          <div className="category-list">
            <button
              className="category-button"
              type="button"
              aria-pressed={activeCategory === "todos"}
              onClick={() => selectCategory("todos")}
            >
              Todos los servicios
              <span>{services.length}</span>
            </button>
            {categories.map((category) => (
              <div className="category-entry" key={category.id}>
                <button
                  className="category-button"
                  type="button"
                  aria-pressed={activeCategory === category.id}
                  onClick={() => selectCategory(category.id)}
                >
                  {category.name}
                  <span>{category.items.length}</span>
                </button>
                <Link href={`/servicios/${category.id}`}>Pagina de categoria</Link>
              </div>
            ))}
          </div>
        </aside>
        <section className="service-results" aria-live="polite">
          <p>
            {filteredServices.length} resultado{filteredServices.length === 1 ? "" : "s"}
          </p>
          {!filteredServices.length ? (
            <article className="service-row card">
              <div>
                <h3>Sin resultados</h3>
                <p>No encontramos pruebas que coincidan con la busqueda actual.</p>
              </div>
              <button className="button button--secondary" type="button" onClick={clearFilters}>
                Ver todos
              </button>
            </article>
          ) : null}
          {filteredServices.map((service) => (
            <article className="service-row card" key={service.id}>
              <div>
                <div className="service-card__meta">
                  <span className="tag">{service.categoryName}</span>
                  {service.standards.slice(0, 3).map((standard) => (
                    <span className="tag" key={standard}>
                      {standard}
                    </span>
                  ))}
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-row__details">
                  <span className="tag">{service.estimatedTime}</span>
                  <span className="tag">{service.sample}</span>
                </div>
              </div>
              <button className="button button--secondary" type="button" onClick={() => selectService(service)}>
                Ver ficha
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </article>
          ))}
        </section>
      </div>
      {selectedService ? (
        <ServiceModal
          service={selectedService}
          onClose={() => {
            setSelectedService(null);
            updateUrl({ service: null });
          }}
        />
      ) : null}
    </>
  );
}
