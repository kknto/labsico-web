import type { Accreditation, CompanyValue, PendingServiceGroup, ProjectCase } from "./types";

export const publicContact = {
  whatsapp: process.env.NEXT_PUBLIC_LABSICO_WHATSAPP || "5219982134937",
  email: process.env.NEXT_PUBLIC_LABSICO_EMAIL || "contacto@labsico.mx",
  phone: process.env.NEXT_PUBLIC_LABSICO_PHONE || "+52 1 998-213-4937",
  address:
    process.env.NEXT_PUBLIC_LABSICO_ADDRESS ||
    "SM.99, MZA. 58 LT. 21 Calle 6, Mpio. Benito Juárez, CP 77536, Cancún, Quintana Roo",
  mapUrl:
    process.env.NEXT_PUBLIC_LABSICO_MAP_URL ||
    "https://www.google.com/maps/search/?api=1&query=Labsico%20Laboratorio%20al%20servicio%20de%20la%20construccion%20Cancun"
};

export const accreditations: Accreditation[] = [
  {
    name: "Laboratorio de ensayo acreditado",
    entity: "ema, a.c.",
    number: "C-1861-357/24",
    description:
      "Acreditación como Laboratorio de Ensayo bajo NMX-EC-17025-IMNC-2018 / ISO/IEC 17025:2017, requisitos generales para la competencia de laboratorios de ensayo y calibración."
  },
  {
    name: "Normativa de referencia",
    entity: "NOM / NMX / ASTM / ACI",
    number: "Segun alcance contratado",
    description:
      "Servicios orientados a cumplimiento normativo y control técnico para proyectos de construcción."
  },
  {
    name: "Laboratorios independientes",
    entity: "Laboratorios independientes al servicio de la construcción, A.C.",
    number: "Socio N° 458",
    description:
      "Afiliación institucional publicada en la página actual de LABSICO para respaldar presencia en el sector."
  }
];

export const companyValues: CompanyValue[] = [
  {
    name: "Ética",
    description: "Trabajo técnico con criterios claros, trazabilidad y responsabilidad profesional."
  },
  {
    name: "Confianza",
    description: "Información útil para que clientes y obra tomen decisiones con evidencia."
  },
  {
    name: "Excelencia",
    description: "Mejora continua en atención, ensayos, documentación y seguimiento."
  },
  {
    name: "Honestidad",
    description: "Comunicación transparente sobre alcances, resultados y limitaciones."
  },
  {
    name: "Puntualidad",
    description: "Coordinación de campo y laboratorio enfocada en tiempos de obra."
  },
  {
    name: "Trabajo en equipo",
    description: "Colaboración entre laboratorio, técnicos, constructores y supervisión."
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
      "Control de calidad de concreto en estado fresco y endurecido para 12 pilotes del muelle con diámetros de 6 y 8 m; inspección del concreto utilizado en trabes."
  },
  {
    id: "multideportivo-ut",
    name: "Multideportivo UT",
    client: "IA Constructora Peninsular S.A. de C.V. (México)",
    location: "Cancún, Quintana Roo",
    period: "Marzo",
    services: ["Concreto fresco", "Concreto endurecido", "Cimentación"],
    summary: "Control de calidad para cimentación de multideportivo universitario.",
    detail:
      "Control de calidad al concreto en estado fresco y endurecido para cimentación de multideportivo, incluyendo dados y zapatas."
  },
  {
    id: "levantamiento-topografico-izgra",
    name: "Levantamiento Topográfico",
    client: "Banco Izgra Pto. Morelos",
    location: "Puerto Morelos, Quintana Roo",
    period: "Abril",
    services: ["Topografía", "Volumetría"],
    summary: "Levantamiento para calcular volumen de materiales en banco.",
    detail:
      "Levantamiento topográfico para cálculo de volumen de arena, grava, gravilla, piedra y cementante."
  },
  {
    id: "parque-madre-felipe-carrillo",
    name: "Parque de la Madre Felipe Carrillo Puerto",
    client: "Grupo Promotora de Vivienda México S.A. de C.V.",
    location: "Felipe Carrillo Puerto",
    period: "Mayo / Agosto",
    services: ["Agregados", "Terracería", "Concretos", "Acero", "Topografía"],
    summary: "Control de calidad en obra para materiales de construcción.",
    detail:
      "Control de calidad para agregados, material de relleno, relleno fluido, block, bovedilla, vigueta, mortero, concreto fresco, concreto endurecido, ensaye de varilla y topografía."
  },
  {
    id: "anfiteatro-felipe-carrillo",
    name: "Anfiteatro Felipe Carrillo Puerto",
    client: "Grupo Promotora de Vivienda México S.A. de C.V.",
    location: "Felipe Carrillo Puerto",
    period: "Mayo / Agosto",
    services: ["Agregados", "Terracería", "Concretos", "Acero", "Topografía"],
    summary: "Control de calidad integral para obra pública y materiales.",
    detail:
      "Control de calidad para agregados, material de relleno, relleno fluido, block, bovedilla, vigueta, mortero, concreto fresco, concreto endurecido, ensaye de varilla, ensaye de madera y topografía."
  },
  {
    id: "multideportivo-infonavit-felipe-carrillo",
    name: "Multideportivo Infonavit Felipe Carrillo Puerto",
    client: "Grupo Promotora de Vivienda México S.A. de C.V.",
    location: "Felipe Carrillo Puerto",
    period: "Mayo / Agosto",
    services: ["Agregados", "Terracería", "Concretos", "Acero", "Topografía"],
    summary: "Control de calidad para materiales de construcción en obra.",
    detail:
      "Control de calidad para agregados, material de relleno, relleno fluido, block, bovedilla, vigueta, mortero, concreto fresco, concreto endurecido, ensaye de varilla, ensaye de madera y topografía."
  },
  {
    id: "hotel-fairmont-remodelacion-lobby",
    name: "Hotel Fairmont Remodelación Lobby",
    client: "Deco Construcciones",
    location: "Quintana Roo",
    period: "Julio",
    services: ["Concreto fresco", "Concreto endurecido"],
    summary: "Control de calidad para concreto en remodelación y elementos exteriores.",
    detail:
      "Control de calidad en obra para concreto en estado fresco y endurecido en paso a desnivel de lobby, jardineras y guarniciones."
  }
];

export const pendingServiceGroups: PendingServiceGroup[] = [
  {
    name: "Topografía",
    description:
      "Servicios encontrados en la página antigua dentro de una sección comentada. Quedan documentados para revisión antes de activarlos como catálogo cotizable.",
    status: "Pendiente de confirmar alcance comercial",
    items: [
      "Levantamiento de poligonal",
      "Levantamiento de conjunto",
      "Levantamiento arquitectónico",
      "Curvas de nivel",
      "Trazo de lotificación",
      "Trazo de caminos",
      "Trazo general de obra",
      "Trazo de urbanización",
      "Volúmenes de materiales",
      "Líneas de control GNSS",
      "Proyectos de terracería"
    ]
  }
];
