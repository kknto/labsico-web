import { serviceCategories } from "@/content/services";

export function getSortedCategories() {
  return [...serviceCategories].sort((a, b) => a.order - b.order);
}

export function getAllServices() {
  return getSortedCategories().flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryName: category.name,
      categoryAccent: category.accent
    }))
  );
}

export function findServiceBySlug(slug: string) {
  return getAllServices().find((service) => service.slug === slug);
}

export function validateCatalogIntegrity() {
  const categoryIds = new Set<string>();
  const serviceIds = new Set<string>();
  const serviceSlugs = new Set<string>();
  const errors: string[] = [];

  for (const category of serviceCategories) {
    if (categoryIds.has(category.id)) {
      errors.push(`Duplicate category id: ${category.id}`);
    }
    categoryIds.add(category.id);

    for (const item of category.items) {
      if (item.categoryId !== category.id) {
        errors.push(`Service ${item.id} points to ${item.categoryId}, expected ${category.id}`);
      }
      if (serviceIds.has(item.id)) {
        errors.push(`Duplicate service id: ${item.id}`);
      }
      if (serviceSlugs.has(item.slug)) {
        errors.push(`Duplicate service slug: ${item.slug}`);
      }
      serviceIds.add(item.id);
      serviceSlugs.add(item.slug);
    }
  }

  return errors;
}
