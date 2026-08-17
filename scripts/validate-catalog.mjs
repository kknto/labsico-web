import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import vm from "node:vm";

const categoryDir = "src/content/services";
const categoryIds = new Set();
const serviceIds = new Set();
const slugs = new Set();
const errors = [];

function readCategory(file) {
  const source = readFileSync(join(categoryDir, file), "utf8");
  const start = source.indexOf("= {");
  const end = source.lastIndexOf("};");

  if (start < 0 || end < 0) {
    errors.push(`Cannot parse ${file}`);
    return null;
  }

  return vm.runInNewContext(`(${source.slice(start + 2, end + 1)})`);
}

for (const file of readdirSync(categoryDir).filter((entry) => entry.endsWith(".ts"))) {
  const category = readCategory(file);
  if (!category) {
    continue;
  }

  if (categoryIds.has(category.id)) {
    errors.push(`Duplicate category id: ${category.id}`);
  }
  categoryIds.add(category.id);

  if (!category.seoDescription || !category.items?.length) {
    errors.push(`Incomplete category: ${category.id}`);
  }

  for (const service of category.items) {
    if (service.categoryId !== category.id) {
      errors.push(`Invalid categoryId for ${service.id}`);
    }
    if (serviceIds.has(service.id)) {
      errors.push(`Duplicate service id: ${service.id}`);
    }
    if (slugs.has(service.slug)) {
      errors.push(`Duplicate service slug: ${service.slug}`);
    }
    if (!service.method || !service.clientPreparation?.length || !service.quoteChecklist?.length) {
      errors.push(`Incomplete service card: ${service.id}`);
    }

    serviceIds.add(service.id);
    slugs.add(service.slug);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Catalogo valido: ${categoryIds.size} categorias, ${serviceIds.size} servicios.`);
