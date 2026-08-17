import type { ServiceCategory } from "../types";

export const aceroCategory: ServiceCategory = {
  "id": "acero",
  "name": "Acero",
  "summary": "Verificación de propiedades mecánicas de acero para elementos y refuerzo.",
  "order": 40,
  "accent": "blue",
  "items": [
    {
      "id": "acero-prueba-de-tension",
      "categoryId": "acero",
      "name": "Prueba de Tensión",
      "slug": "prueba-de-tension",
      "description": "Es el ensayo que permite conocer las características del acero cuando se somete a esfuerzos de tracción. Determinar la resistencia a la rotura y las principales propiedades mecánicas del material.",
      "standards": [],
      "scope": "Es el ensayo que permite conocer las características del acero cuando se somete a esfuerzos de tracción. Determinar la resistencia a la rotura y las principales propiedades mecánicas del material.",
      "sample": "Varilla, probeta o pieza metalica identificada por lote, diametro, grado y proveedor.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun cantidad de piezas y ensaye requerido.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "featured": true,
      "method": "Recepcion, identificacion y ensaye mecanico conforme a norma o especificacion solicitada.",
      "clientPreparation": [
        "Identificar diametro, grado y lote.",
        "Enviar piezas sin dano por corte inadecuado.",
        "Compartir certificado de proveedor si existe."
      ],
      "quoteChecklist": [
        "Diametro o seccion",
        "Grado del acero",
        "Numero de muestras",
        "Proveedor o lote",
        "Norma requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "acero-prueba-de-doblado",
      "categoryId": "acero",
      "name": "Prueba de Doblado",
      "slug": "prueba-de-doblado",
      "description": "Este ensayo mide la capacidad de la barra para doblarse hasta llegar a un doblez de radio mínimo sin agrietarse.",
      "standards": [],
      "scope": "Este ensayo mide la capacidad de la barra para doblarse hasta llegar a un doblez de radio mínimo sin agrietarse.",
      "sample": "Varilla, probeta o pieza metalica identificada por lote, diametro, grado y proveedor.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun cantidad de piezas y ensaye requerido.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "method": "Recepcion, identificacion y ensaye mecanico conforme a norma o especificacion solicitada.",
      "clientPreparation": [
        "Identificar diametro, grado y lote.",
        "Enviar piezas sin dano por corte inadecuado.",
        "Compartir certificado de proveedor si existe."
      ],
      "quoteChecklist": [
        "Diametro o seccion",
        "Grado del acero",
        "Numero de muestras",
        "Proveedor o lote",
        "Norma requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    }
  ],
  "seoDescription": "Ensayes de acero de refuerzo y materiales metalicos para verificar propiedades mecanicas y cumplimiento normativo."
};
