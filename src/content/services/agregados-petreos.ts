import type { ServiceCategory } from "../types";

export const agregadosPetreosCategory: ServiceCategory = {
  "id": "agregados-petreos",
  "name": "Agregados pétreos",
  "summary": "Caracterización, muestreo y control de agregados finos y gruesos para mezclas de concreto.",
  "order": 10,
  "accent": "red",
  "items": [
    {
      "id": "agregados-petreos-diseno-de-curvas-granulometricas",
      "categoryId": "agregados-petreos",
      "name": "Diseño de curvas granulométricas",
      "slug": "diseno-de-curvas-granulometricas",
      "description": "Diseño de curvas granulometricas, pueden ser unos tamices, en ese colocamos agregado para cribarlo e ir obteniendo las curvas.",
      "standards": [
        "NMX-C-111-ONNCCE-2014 agregados"
      ],
      "scope": "Diseño de curvas granulometricas, pueden ser unos tamices, en ese colocamos agregado para cribarlo e ir obteniendo las curvas.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-muestreo-de-agregados",
      "categoryId": "agregados-petreos",
      "name": "Muestreo de agregados",
      "slug": "muestreo-de-agregados",
      "description": "Establecer el muestreo de agregados que se utilizan para la investigación preliminar de fuentes potenciales de suministro; el control de los agregados en la fuente de abastecimiento; el control de las operaciones en el sitio de uso y la aceptación o rechazo de los agregados.",
      "standards": [
        "NMX-C-030-ONNCCE-2004 MUESTREO AGG"
      ],
      "scope": "Establecer el muestreo de agregados que se utilizan para la investigación preliminar de fuentes potenciales de suministro; el control de los agregados en la fuente de abastecimiento; el control de las operaciones en el sitio de uso y la aceptación o rechazo de los agregados.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "featured": true,
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-prueba-densidad-y-absorcion-agregado-fino",
      "categoryId": "agregados-petreos",
      "name": "Prueba densidad y absorción agregado fino",
      "slug": "prueba-densidad-y-absorcion-agregado-fino",
      "description": "Determinación de la densidad relativa aparente y la absorción del agregado fino en la condición saturada y superficialmente seca.",
      "standards": [
        "NMX-C-165-ONNCCE-2014 DET DENSIDAD Y ABS AGG FINO"
      ],
      "scope": "Determinación de la densidad relativa aparente y la absorción del agregado fino en la condición saturada y superficialmente seca.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "featured": true,
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-prueba-densidad-y-absorcion-agregado-grueso",
      "categoryId": "agregados-petreos",
      "name": "Prueba densidad y absorcion agregado grueso",
      "slug": "prueba-densidad-y-absorcion-agregado-grueso",
      "description": "Método de prueba para la determinación de la masa específica y la absorción de agua del agregado grueso.",
      "standards": [
        "NMX-C-164-ONNCCE-2014 DET DENSIDAD Y ABS AGG GRUESO"
      ],
      "scope": "Método de prueba para la determinación de la masa específica y la absorción de agua del agregado grueso.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-prueba-para-pesos-volumetrico-suelto",
      "categoryId": "agregados-petreos",
      "name": "Prueba para pesos volumétrico suelto",
      "slug": "prueba-para-pesos-volumetrico-suelto",
      "description": "Es la relación entre el peso de un material y el volumen ocupado por si mismo, expresado en kilogramos por metro cubico, para el casa del suelto únicamente la fuerza a utilizar es la caída libre del material a una distancia establecida, para ambos tipo de agregados grueso o fino.",
      "standards": [
        "NMX-C-073-ONNCCE-2004 MASA VOL AGG"
      ],
      "scope": "Es la relación entre el peso de un material y el volumen ocupado por si mismo, expresado en kilogramos por metro cubico, para el casa del suelto únicamente la fuerza a utilizar es la caída libre del material a una distancia establecida, para ambos tipo de agregados grueso o fino.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-determinacion-de-impurezas",
      "categoryId": "agregados-petreos",
      "name": "Determinación de impurezas",
      "slug": "determinacion-de-impurezas",
      "description": "Determinación de la presencia de materia orgánica dañina en agregados finos utilizados en la fabricación de morteros o concretos de cemento hidráulico. Esta prueba es un índice de contaminación y proporciona en su caso, una advertencia acerca de la necesidad de efectuar otras pruebas antes de su utilización.",
      "standards": [
        "NMX-C-076-ONNCCE-2002 IMP ORG DE AGG, NMX-C-088-ONNCCE-1997 IMP ORG DE AGG FINO"
      ],
      "scope": "Determinación de la presencia de materia orgánica dañina en agregados finos utilizados en la fabricación de morteros o concretos de cemento hidráulico. Esta prueba es un índice de contaminación y proporciona en su caso, una advertencia acerca de la necesidad de efectuar otras pruebas antes de su utilización.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-prueba-calculo-de-curva-granulometrica",
      "categoryId": "agregados-petreos",
      "name": "Prueba cálculo de curva granulométrica",
      "slug": "prueba-calculo-de-curva-granulometrica",
      "description": "Método para el análisis granulométrico de agregados finos y gruesos con el fin de determinar la distribución de las partículas de diferentes tamaños a través de las cribas.",
      "standards": [
        "NMX-C-077-1997-ONNCCE GRANULOMETR AGG MET PRUE"
      ],
      "scope": "Método para el análisis granulométrico de agregados finos y gruesos con el fin de determinar la distribución de las partículas de diferentes tamaños a través de las cribas.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "featured": true,
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    },
    {
      "id": "agregados-petreos-prueba-perdidas-por-lavado-malla-no-200",
      "categoryId": "agregados-petreos",
      "name": "Prueba perdidas por lavado malla No. 200",
      "slug": "prueba-perdidas-por-lavado-malla-no-200",
      "description": "Prueba para determinar el contenido de partículas más finas de la criba F 0.075 (No. 200) por medio de lavado. Durante esta prueba, las partículas de arcilla y otras que se disuelven por el agua de lavado, y las que son solubles en el agua, son separadas.",
      "standards": [
        "NMX-C-084-ONNCCE-2006 PERDIDA POR LAVADO"
      ],
      "scope": "Prueba para determinar el contenido de partículas más finas de la criba F 0.075 (No. 200) por medio de lavado. Durante esta prueba, las partículas de arcilla y otras que se disuelven por el agua de lavado, y las que son solubles en el agua, son separadas.",
      "sample": "Muestra representativa de agregado fino o grueso, identificada por banco, lote, frente o acopio.",
      "estimatedTime": "Programacion de 2 a 5 dias habiles segun volumen, ensaye y recepcion de muestra.",
      "deliverables": [
        "Reporte tecnico de resultados",
        "Identificacion de muestra o elemento",
        "Normas de referencia aplicables",
        "Ficha técnica del servicio"
      ],
      "method": "Muestreo, preparacion y ensaye conforme a la norma indicada para el material recibido.",
      "clientPreparation": [
        "Identificar banco, lote o acopio.",
        "Evitar contaminacion durante traslado.",
        "Enviar datos de proyecto y uso del agregado."
      ],
      "quoteChecklist": [
        "Tipo de agregado",
        "Ubicacion del banco o acopio",
        "Norma requerida",
        "Cantidad de muestras",
        "Fecha requerida"
      ],
      "notes": [
        "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
      ]
    }
  ],
  "seoDescription": "Pruebas de agregados petreos para control granulometrico, muestreo, densidad, absorcion, impurezas y calidad de materiales para concreto."
};
