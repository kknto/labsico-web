import type { InternalPlatform } from "./types";

const REPORTES_URL = process.env.INTERNAL_REPORTES_URL || "https://reportes-seybaplaya.onrender.com";
const SLIPFORM_URL = process.env.INTERNAL_SLIPFORM_URL || "https://deslizados-labsico.onrender.com";
const GESTION_URL = process.env.INTERNAL_GESTION_URL;

const configuredPlatforms: InternalPlatform[] = [
  {
    id: "reportes-clientes",
    name: "Reportes de clientes",
    description:
      "Plataforma para cargar, consultar y descargar reportes de clientes autorizados.",
    owner: "Laboratorio / Administracion",
    group: "Reportes",
    status: "Disponible",
    url: REPORTES_URL,
    envKey: "INTERNAL_REPORTES_URL"
  },
  {
    id: "deslizados",
    name: "Plataforma de deslizados",
    description:
      "Acceso interno al sistema de seguimiento operativo para procesos de deslizado y control relacionado.",
    owner: "Operacion / Obra",
    group: "Obra",
    status: "Disponible",
    url: SLIPFORM_URL,
    envKey: "INTERNAL_SLIPFORM_URL"
  },
  {
    id: "gestion-empresa",
    name: "Gestion de la empresa",
    description:
      "Acceso a la plataforma operativa para gestion financiera, divisiones, gastos, ingresos y cierres.",
    owner: "Direccion / Administracion",
    group: "Administracion",
    status: "Disponible",
    url: GESTION_URL,
    envKey: "INTERNAL_GESTION_URL"
  }
];

export const internalPlatforms = configuredPlatforms.filter(
  (platform): platform is InternalPlatform & { url: string } => Boolean(platform.url)
);
