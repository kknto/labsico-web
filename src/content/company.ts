import type { Accreditation, CompanyValue, ProjectCase } from "./types";

export const publicContact = {
  whatsapp: process.env.NEXT_PUBLIC_LABSICO_WHATSAPP || "5219982134937",
  email: process.env.NEXT_PUBLIC_LABSICO_EMAIL || "contacto@labsico.mx",
  phone: process.env.NEXT_PUBLIC_LABSICO_PHONE || "+52 1 998-213-4937",
  address:
    process.env.NEXT_PUBLIC_LABSICO_ADDRESS ||
    "C. 6 99, 77536 Cancun, Q.R. Plus Code 44V9+QX Cancun, Quintana Roo",
  mapUrl:
    process.env.NEXT_PUBLIC_LABSICO_MAP_URL ||
    "https://www.google.com/maps/search/?api=1&query=C.%206%2099%2C%2077536%20Cancun%2C%20Q.R.%2044V9%2BQX%20Cancun%2C%20Quintana%20Roo"
};

export const accreditations: Accreditation[] = [
  {
    name: "Laboratorio de ensayo acreditado",
    entity: "ema, a.c.",
    number: "C-1861-357/24",
    description:
      "Acreditacion como Laboratorio de Ensayo bajo NMX-EC-17025-IMNC-2018 / ISO/IEC 17025:2017, requisitos generales para la competencia de laboratorios de ensayo y calibracion."
  },
  {
    name: "Normativa de referencia",
    entity: "NOM / NMX / ASTM / ACI",
    number: "Segun alcance contratado",
    description:
      "Servicios orientados a cumplimiento normativo y control tecnico para proyectos de construccion."
  },
  {
    name: "Laboratorios independientes",
    entity: "Laboratorios independientes al servicio de la construccion, A.C.",
    number: "Socio No. 458",
    description:
      "Afiliacion institucional publicada en la pagina actual de LABSICO para respaldar presencia en el sector."
  }
];

export const companyValues: CompanyValue[] = [
  {
    name: "Etica",
    description: "Trabajo tecnico con criterios claros, trazabilidad y responsabilidad profesional."
  },
  {
    name: "Confianza",
    description: "Informacion util para que clientes y obra tomen decisiones con evidencia."
  },
  {
    name: "Excelencia",
    description: "Mejora continua en atencion, ensayos, documentacion y seguimiento."
  },
  {
    name: "Honestidad",
    description: "Comunicacion transparente sobre alcances, resultados y limitaciones."
  },
  {
    name: "Puntualidad",
    description: "Coordinacion de campo y laboratorio enfocada en tiempos de obra."
  },
  {
    name: "Trabajo en equipo",
    description: "Colaboracion entre laboratorio, tecnicos, constructores y supervision."
  }
];

export const projectCases: ProjectCase[] = [
  {
    id: "muelle-marina-hacienda-del-mar",
    name: "Muelle Marina Hacienda del Mar",
    client: "Marenter S.A. de C.V.",
    location: "Quintana Roo",
    period: "Febrero / Marzo",
    services: ["Concreto fresco", "Concreto endurecido"],
    summary: "Control de calidad de concreto para pilotes, trabes y elementos del muelle.",
    detail:
      "Control de calidad de concreto en estado fresco y endurecido para 12 pilotes del muelle con diametros de 6 y 8 m; inspeccion del concreto utilizado en trabes."
  },
  {
    id: "multideportivo-ut",
    name: "Multideportivo UT",
    client: "IA Constructora Peninsular S.A. de C.V. (Mexico)",
    location: "Cancun, Quintana Roo",
    period: "Marzo",
    services: ["Concreto fresco", "Concreto endurecido", "Cimentacion"],
    summary: "Control de calidad para cimentacion de multideportivo universitario.",
    detail:
      "Control de calidad al concreto en estado fresco y endurecido para cimentacion de multideportivo, incluyendo dados y zapatas."
  },
  {
    id: "levantamiento-topografico-izgra",
    name: "Levantamiento Topografico",
    client: "Banco Izgra Pto. Morelos",
    location: "Puerto Morelos, Quintana Roo",
    period: "Abril",
    services: ["Topografia", "Volumetria"],
    summary: "Levantamiento para calcular volumen de materiales en banco.",
    detail:
      "Levantamiento topografico para calculo de volumen de arena, grava, gravilla, piedra y cementante."
  },
  {
    id: "parque-madre-felipe-carrillo",
    name: "Parque de la Madre Felipe Carrillo Puerto",
    client: "Grupo Promotora de Vivienda Mexico S.A. de C.V.",
    location: "Felipe Carrillo Puerto",
    period: "Mayo / Agosto",
    services: ["Agregados", "Terraceria", "Concretos", "Acero", "Topografia"],
    summary: "Control de calidad en obra para materiales de construccion.",
    detail:
      "Control de calidad para agregados, material de relleno, relleno fluido, block, bovedilla, vigueta, mortero, concreto fresco, concreto endurecido, ensaye de varilla y topografia."
  },
  {
    id: "anfiteatro-felipe-carrillo",
    name: "Anfiteatro Felipe Carrillo Puerto",
    client: "Grupo Promotora de Vivienda Mexico S.A. de C.V.",
    location: "Felipe Carrillo Puerto",
    period: "Mayo / Agosto",
    services: ["Agregados", "Terraceria", "Concretos", "Acero", "Topografia"],
    summary: "Control de calidad integral para obra publica y materiales.",
    detail:
      "Control de calidad para agregados, material de relleno, relleno fluido, block, bovedilla, vigueta, mortero, concreto fresco, concreto endurecido, ensaye de varilla, ensaye de madera y topografia."
  },
  {
    id: "multideportivo-infonavit-felipe-carrillo",
    name: "Multideportivo Infonavit Felipe Carrillo Puerto",
    client: "Grupo Promotora de Vivienda Mexico S.A. de C.V.",
    location: "Felipe Carrillo Puerto",
    period: "Mayo / Agosto",
    services: ["Agregados", "Terraceria", "Concretos", "Acero", "Topografia"],
    summary: "Control de calidad para materiales de construccion en obra.",
    detail:
      "Control de calidad para agregados, material de relleno, relleno fluido, block, bovedilla, vigueta, mortero, concreto fresco, concreto endurecido, ensaye de varilla, ensaye de madera y topografia."
  },
  {
    id: "hotel-fairmont-remodelacion-lobby",
    name: "Hotel Fairmont Remodelacion Lobby",
    client: "Deco Construcciones",
    location: "Quintana Roo",
    period: "Julio",
    services: ["Concreto fresco", "Concreto endurecido"],
    summary: "Control de calidad para concreto en remodelacion y elementos exteriores.",
    detail:
      "Control de calidad en obra para concreto en estado fresco y endurecido en paso a desnivel de lobby, jardineras y guarniciones."
  }
];
