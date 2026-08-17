import type { ServiceCategory } from "./types";
import { agregadosPetreosCategory } from "./services/agregados-petreos";
import { concretosCategory } from "./services/concretos";
import { soldaduraCategory } from "./services/soldadura";
import { aceroCategory } from "./services/acero";
import { terraceriaCategory } from "./services/terraceria";
import { calidadAguaCategory } from "./services/calidad-agua";
import { mecanicaSuelosCategory } from "./services/mecanica-suelos";

export const serviceCategories: ServiceCategory[] = [
  agregadosPetreosCategory,
  concretosCategory,
  soldaduraCategory,
  aceroCategory,
  terraceriaCategory,
  calidadAguaCategory,
  mecanicaSuelosCategory
];

export const featuredServices = serviceCategories.flatMap((category) =>
  category.items.filter((item) => item.featured).map((item) => ({ ...item, categoryName: category.name }))
);
