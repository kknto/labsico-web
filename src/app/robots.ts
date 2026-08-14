import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/accesos", "/api", "/catalog-health"]
      }
    ],
    sitemap: "https://labsico.tech/sitemap.xml"
  };
}
