import type { MetadataRoute } from "next";
import { getSortedCategories } from "@/lib/catalog";

const baseUrl = "https://labsico.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/servicios", "/acreditacion", "/proyectos", "/nosotros", "/contacto"];
  const categoryRoutes = getSortedCategories().map((category) => `/servicios/${category.id}`);

  return [...staticRoutes, ...categoryRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/servicios") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/servicios") ? 0.9 : 0.7
  }));
}
