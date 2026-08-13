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
  notes?: string[];
  featured?: boolean;
};

export type ServiceCategory = {
  id: string;
  name: string;
  summary: string;
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
  detail?: string;
};

export type Accreditation = {
  name: string;
  entity: string;
  number: string;
  description: string;
  link?: string;
};

export type CompanyValue = {
  name: string;
  description: string;
};

export type PendingServiceGroup = {
  name: string;
  description: string;
  status: string;
  items: string[];
};

export type InternalPlatform = {
  id: string;
  name: string;
  description: string;
  owner: string;
  status: string;
  url?: string;
  envKey: string;
};
