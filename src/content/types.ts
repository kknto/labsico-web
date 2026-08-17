export type ServiceItem = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  standards: string[];
  scope: string;
  sample: string;
  estimatedTime: string;
  deliverables: string[];
  method?: string;
  clientPreparation?: string[];
  quoteChecklist?: string[];
  notes?: string[];
  featured?: boolean;
};

export type ContentImage = {
  src: string;
  alt: string;
};

export type ServiceCategory = {
  id: string;
  name: string;
  summary: string;
  seoDescription?: string;
  image?: ContentImage;
  order: number;
  accent: "red" | "blue" | "steel" | "green";
  items: ServiceItem[];
};

export type ProjectCase = {
  id: string;
  name: string;
  client: string;
  location: string;
  period: string;
  services: string[];
  summary: string;
  image?: ContentImage;
  detail?: string;
};

export type Accreditation = {
  name: string;
  entity: string;
  number: string;
  description: string;
  scope?: string[];
  status?: string;
  link?: string;
};

export type AccreditationScope = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type CompanyValue = {
  name: string;
  description: string;
};

export type InternalPlatform = {
  id: string;
  name: string;
  description: string;
  owner: string;
  group: "Reportes" | "Obra" | "Administracion" | "Documentos";
  status: string;
  url?: string;
  envKey: string;
};
