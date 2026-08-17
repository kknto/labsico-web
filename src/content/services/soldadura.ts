import type { ServiceCategory } from "../types";

export const soldaduraCategory: ServiceCategory = {
  "id": "soldadura",
  "name": "Soldadura",
  "summary": "Ensayos no destructivos e inspección asociada a uniones soldadas.",
  "order": 30,
  "accent": "steel",
  "items": [
    {
      "id": "soldadura-prueba-liquidos-penetrantes",
      "categoryId": "soldadura",
      "name": "Prueba Líquidos Penetrantes",
      "slug": "prueba-liquidos-penetrantes",
      "description": "La inspección por líquidos penetrantes es un tipo de ensayo no destructivo que se utiliza para detectar e identificar discontinuidades presentes en la superficie de los materiales examinados, que pueden afectar el desempeno del material.",
      "standards": [],
      "scope": "La inspección por líquidos penetrantes es un tipo de ensayo no destructivo que se utiliza para detectar e identificar discontinuidades presentes en la superficie de los materiales examinados, que pueden afectar el desempeno del material.",
      "sample": "Elemento, junta o probeta preparada de acuerdo con el procedimiento e inspeccion requerida.",
      "estimatedTime": "Programacion de visita o laboratorio segun numero de juntas, procedimiento y acceso al elemento.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "featured": true,
      "method": "Inspeccion visual o ensayo no destructivo conforme al procedimiento y norma aplicable.",
      "clientPreparation": [
        "Liberar acceso seguro al elemento.",
        "Compartir procedimiento o especificacion aplicable.",
        "Limpiar la zona de inspeccion cuando aplique."
      ],
      "quoteChecklist": [
        "Tipo de junta o elemento",
        "Cantidad de puntos",
        "Norma o codigo requerido",
        "Ubicacion",
        "Disponibilidad de acceso"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    }
  ],
  "seoDescription": "Ensayos e inspecciones para soldadura, liquidos penetrantes, ultrasonido, calificacion y control no destructivo."
};
