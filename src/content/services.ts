import type { ServiceCategory } from "./types";

// Catálogo técnico-comercial de LABSICO, organizado para consulta y solicitud de cotización.
export const serviceCategories: ServiceCategory[] = [
  {
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
  },
  {
    "id": "concretos",
    "name": "Concretos",
    "summary": "Control de concreto fresco y endurecido, muestreo, revenimiento, elaboración de especímenes y resistencia.",
    "order": 20,
    "accent": "blue",
    "items": [
      {
        "id": "concretos-uso-de-aditivos",
        "categoryId": "concretos",
        "name": "Uso de aditivos",
        "slug": "uso-de-aditivos",
        "description": "Aditivo es un material diferente al agua, agregados, cemento hidráulico y fibras de refuerzo que se utiliza como un ingrediente del concreto o mortero y que se añade a la mezcla inmediatamente antes o durante su mezclado. Necesidad de modificar las características del mortero o del concreto de tal forma de que estos se adapten a las condiciones de la obra y los requerimientos del constructor. Como único medio factible para lograr las características deseadas del concreto.",
        "standards": [
          "NMX-C-199-ONNCCE-2010 ADITIVOS TERMINOLOGIA"
        ],
        "scope": "Aditivo es un material diferente al agua, agregados, cemento hidráulico y fibras de refuerzo que se utiliza como un ingrediente del concreto o mortero y que se añade a la mezcla inmediatamente antes o durante su mezclado. Necesidad de modificar las características del mortero o del concreto de tal forma de que estos se adapten a las condiciones de la obra y los requerimientos del constructor. Como único medio factible para lograr las características deseadas del concreto.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-diseno-de-mezclas",
        "categoryId": "concretos",
        "name": "Diseño de mezclas",
        "slug": "diseno-de-mezclas",
        "description": "Optimización de mezclas, reduciendo costos de fabricación aumentando la eficacia de las mismas. Asesoría en elaboración: Concretos convencionales, Concretos estructurales, Concretos autoconsolidables, Concretos permeables, Concretos alta durabilidad, Concreto ligeros, Concreto antideslave, Concretos MR, Concretos autocurables, Morteros.",
        "standards": [
          "NMX-C-155-ONNCCE-2014 CONC INDUSTRIALIZADO Y MET ENSAYO"
        ],
        "scope": "Optimización de mezclas, reduciendo costos de fabricación aumentando la eficacia de las mismas. Asesoría en elaboración: Concretos convencionales, Concretos estructurales, Concretos autoconsolidables, Concretos permeables, Concretos alta durabilidad, Concreto ligeros, Concreto antideslave, Concretos MR, Concretos autocurables, Morteros.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-muestreo-de-concreto",
        "categoryId": "concretos",
        "name": "Muestreo de concreto",
        "slug": "muestreo-de-concreto",
        "description": "El muestreo es el proceso que consiste en la toma de una porción representativa de mezcla de concreto fresco tal y como es entregado en la obra por el proveedor seleccionado del cliente.",
        "standards": [
          "NMX-C-161-ONNCCE-2013 MUESTREO CONC FRESCO"
        ],
        "scope": "El muestreo es el proceso que consiste en la toma de una porción representativa de mezcla de concreto fresco tal y como es entregado en la obra por el proveedor seleccionado del cliente.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-determinacion-de-revenimiento",
        "categoryId": "concretos",
        "name": "Determinación de revenimiento",
        "slug": "determinacion-de-revenimiento",
        "description": "Determinar la consistencia del concreto. Esta es una medida de la fluidez o movilidad relativa de la mezcla de concreto, mediante el cono de revenimiento.",
        "standards": [
          "NMX-C-156-ONNCCE-2010 DET REVENIMIENTO"
        ],
        "scope": "Determinar la consistencia del concreto. Esta es una medida de la fluidez o movilidad relativa de la mezcla de concreto, mediante el cono de revenimiento.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-determinacion-masa-unitaria",
        "categoryId": "concretos",
        "name": "Determinación masa unitaria",
        "slug": "determinacion-masa-unitaria",
        "description": "La masa unitaria se usa para determinar los valores de la misma necesarios para la sección de las proporciones de los agregados en las mezclas de concreto, la masa unitaria puede ser usada también para la determinación de la relaciones masa/volumen para los acuerdos de compra.",
        "standards": [
          "NMX-C-162-ONNCCE-2014 DET MASA UNITARIA"
        ],
        "scope": "La masa unitaria se usa para determinar los valores de la misma necesarios para la sección de las proporciones de los agregados en las mezclas de concreto, la masa unitaria puede ser usada también para la determinación de la relaciones masa/volumen para los acuerdos de compra.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-determinacion-contenido-de-aire",
        "categoryId": "concretos",
        "name": "Determinación contenido de aire",
        "slug": "determinacion-contenido-de-aire",
        "description": "Determina el volumen de vacíos en el concreto fresco, excluyendo el espacio de Determinación del contenido de aire los poros en las partículas del agregado, que se expresa como un porcentaje del volumen total de la mezcla de concreto.",
        "standards": [
          "NMX-C-157-ONNCCE-2006 DET CONT AIRE METODO DE PRESION"
        ],
        "scope": "Determina el volumen de vacíos en el concreto fresco, excluyendo el espacio de Determinación del contenido de aire los poros en las partículas del agregado, que se expresa como un porcentaje del volumen total de la mezcla de concreto.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-elaboracion-de-especimenes-en-obra",
        "categoryId": "concretos",
        "name": "Elaboración de especímenes en obra",
        "slug": "elaboracion-de-especimenes-en-obra",
        "description": "De la muestra de concreto fresco obtenida en obra, se realizan probetas para su análisis posterior.",
        "standards": [
          "NMX-C-160-ONNCCE-2004 ELAB Y CURADO ESPEC EN OBRA"
        ],
        "scope": "De la muestra de concreto fresco obtenida en obra, se realizan probetas para su análisis posterior.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-curado-de-especimenes-en-laboratorio",
        "categoryId": "concretos",
        "name": "Curado de especimenes en laboratorio",
        "slug": "curado-de-especimenes-en-laboratorio",
        "description": "Mantener la hidratación y alcalinidad adecuada para el desarrollo y madurez de los especímenes tomados en obra.",
        "standards": [
          "NMX-C-159-ONNCE-2016 ELAB Y CURADO ESPEC EN LAB"
        ],
        "scope": "Mantener la hidratación y alcalinidad adecuada para el desarrollo y madurez de los especímenes tomados en obra.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-cabeceo-de-especimenes",
        "categoryId": "concretos",
        "name": "Cabeceo de especimenes",
        "slug": "cabeceo-de-especimenes",
        "description": "Preparación con cemento puro o mortero de azufre de las bases de los especímenes para lograr el paralelismo entre las caras para su prueba.",
        "standards": [
          "NMX-C-109-ONNCCE-2013 CABECEO"
        ],
        "scope": "Preparación con cemento puro o mortero de azufre de las bases de los especímenes para lograr el paralelismo entre las caras para su prueba.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-ensaye-a-compresion",
        "categoryId": "concretos",
        "name": "Ensaye a compresión",
        "slug": "ensaye-a-compresion",
        "description": "Los resultados de las pruebas de resistencia a la compresión se usan fundamentalmente para determinar que la mezcla de concreto suministrada cumpla con los requerimientos de la resistencia especificada, ƒ´c, del proyecto.",
        "standards": [
          "NMX-C-083-ONNCCE-2002 DET DE LA RESISTENCIA"
        ],
        "scope": "Los resultados de las pruebas de resistencia a la compresión se usan fundamentalmente para determinar que la mezcla de concreto suministrada cumpla con los requerimientos de la resistencia especificada, ƒ´c, del proyecto.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-ensaye-a-flexion",
        "categoryId": "concretos",
        "name": "Ensaye a flexión",
        "slug": "ensaye-a-flexion",
        "description": "Es el valor obtenido mediante el procedimiento indirecto para determinar la resistencia a la tensión del concreto por el ensaye a la flexión de una viga.",
        "standards": [
          "NMX-C-191-ONNCCE-2004 RESISTENCIA A FLEXION"
        ],
        "scope": "Es el valor obtenido mediante el procedimiento indirecto para determinar la resistencia a la tensión del concreto por el ensaye a la flexión de una viga.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-determinacion-de-modulo-elastico",
        "categoryId": "concretos",
        "name": "Determinacion de módulo elástico",
        "slug": "determinacion-de-modulo-elastico",
        "description": "Obtener el módulo de elasticidad del concreto es un propiedad mecánica que refleja la habilidad que tiene el concreto para deformarse elásticamente.",
        "standards": [
          "NMX-C-128-ONNCCE-2013 DET MOD ELASTICIDAD"
        ],
        "scope": "Obtener el módulo de elasticidad del concreto es un propiedad mecánica que refleja la habilidad que tiene el concreto para deformarse elásticamente.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-extraccion-de-nucleos-prueba-destructiva",
        "categoryId": "concretos",
        "name": "Extraccion de núcleos prueba destructiva",
        "slug": "extraccion-de-nucleos-prueba-destructiva",
        "description": "La obtención, preparación y prueba de corazones extraídos de concreto endurecido; para la determinación de espesores; de su resistencia a la compresión simple; de su resistencia a la tensión por compresión diametral así como de las vigas cortadas en concreto endurecido, para determinar la resistencia a la tensión por flexión.",
        "standards": [
          "NMX-C-169-ONNCCE-2009 EXTR CORAZONES"
        ],
        "scope": "La obtención, preparación y prueba de corazones extraídos de concreto endurecido; para la determinación de espesores; de su resistencia a la compresión simple; de su resistencia a la tensión por compresión diametral así como de las vigas cortadas en concreto endurecido, para determinar la resistencia a la tensión por flexión.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-esclerometro-prueba-no-destructiva",
        "categoryId": "concretos",
        "name": "Esclerómetro prueba no destructiva",
        "slug": "esclerometro-prueba-no-destructiva",
        "description": "Procedimiento para determinar el índice de rebote en el concreto endurecido mediante el empleo del dispositivo conocido como esclerómetro o martillo de rebote; determinación que sirve para evaluar la uniformidad superficial del concreto en el sitio o para delimitar zonas o aéreas de diferentes resistencias o al concreto deteriorado en las estructuras así como para indicar cambios en las características del concreto a través del tiempo.",
        "standards": [
          "NMX-C-192-ONNCCE-2006 ESCLEROMETRO"
        ],
        "scope": "Procedimiento para determinar el índice de rebote en el concreto endurecido mediante el empleo del dispositivo conocido como esclerómetro o martillo de rebote; determinación que sirve para evaluar la uniformidad superficial del concreto en el sitio o para delimitar zonas o aéreas de diferentes resistencias o al concreto deteriorado en las estructuras así como para indicar cambios en las características del concreto a través del tiempo.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-determinacion-tiempo-de-fraguado",
        "categoryId": "concretos",
        "name": "Determinación tiempo de fraguado",
        "slug": "determinacion-tiempo-de-fraguado",
        "description": "Tiempo de fraguado inicial Es el tiempo que transcurre a partir del momento del contacto inicial del cemento con el agua, hasta que el mortero obtenido por el cribado del concreto presenta una resistencia a la penetración de 3 431,3 kPa (35 kg/cm2 ). Tiempo de fraguado final Es el tiempo que transcurre, a partir del momento que el cemento entra en contacto con el agua, hasta que el mortero obtenido por el cribado del concreto presenta una resistencia a la penetración de 27 451 kPa (280,7 kg/cm2 ).",
        "standards": [
          "NMX-C-177-1997-ONNCCE DET TIEMPO FRAGUADO"
        ],
        "scope": "Tiempo de fraguado inicial Es el tiempo que transcurre a partir del momento del contacto inicial del cemento con el agua, hasta que el mortero obtenido por el cribado del concreto presenta una resistencia a la penetración de 3 431,3 kPa (35 kg/cm2 ). Tiempo de fraguado final Es el tiempo que transcurre, a partir del momento que el cemento entra en contacto con el agua, hasta que el mortero obtenido por el cribado del concreto presenta una resistencia a la penetración de 27 451 kPa (280,7 kg/cm2 ).",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-revenimientos-anillo-j",
        "categoryId": "concretos",
        "name": "Revenimientos anillo J",
        "slug": "revenimientos-anillo-j",
        "description": "Se emplea para determinar la capacidad de circulación del concreto. Es una variación del ensaye de flujo por revenimiento. Durante el ensaye, se coloca alrededor del cono una jaula simulada de varillas de refuerzo y se evalúa la capacidad de extensibilidad de la mezcla, al circular hacia el exterior de la jaula sin segregación.",
        "standards": [
          "NMX-C-470-ONNCCE-2015 ANILLO J"
        ],
        "scope": "Se emplea para determinar la capacidad de circulación del concreto. Es una variación del ensaye de flujo por revenimiento. Durante el ensaye, se coloca alrededor del cono una jaula simulada de varillas de refuerzo y se evalúa la capacidad de extensibilidad de la mezcla, al circular hacia el exterior de la jaula sin segregación.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "concretos-extensibilidades-para-concretos-autoconsolidables",
        "categoryId": "concretos",
        "name": "Extensibilidades para concretos autoconsolidables",
        "slug": "extensibilidades-para-concretos-autoconsolidables",
        "description": "Es la medida en términos de expansión cuando se usa una versión modificada de la prueba de revenimiento. La expansión (flujo por revenimiento) del concreto autocompactable típicamente varía de los 455 a 810 mm, dependiendo de los requisitos para el proyecto.",
        "standards": [
          "NMX-C-472-ONNCCE-2013 REV AUTOCONSOLIDABLE"
        ],
        "scope": "Es la medida en términos de expansión cuando se usa una versión modificada de la prueba de revenimiento. La expansión (flujo por revenimiento) del concreto autocompactable típicamente varía de los 455 a 810 mm, dependiendo de los requisitos para el proyecto.",
        "sample": "Concreto fresco en obra o especimenes identificados, segun el tipo de prueba solicitada.",
        "estimatedTime": "Atencion segun programa de colado; resultados de resistencia conforme a la edad de ensaye contratada.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Verificacion en campo, elaboracion o recepcion de especimenes y ensaye en laboratorio conforme a norma.",
        "clientPreparation": [
          "Compartir programa de colado.",
          "Indicar elemento, ubicacion y resistencia de proyecto.",
          "Confirmar edades de ensaye requeridas."
        ],
        "quoteChecklist": [
          "Fecha y hora de colado",
          "Ubicacion de obra",
          "Volumen aproximado",
          "Resistencia de proyecto",
          "Edades de ruptura"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      }
    ],
    "seoDescription": "Ensayes de concreto fresco y endurecido, revenimiento, masa volumetrica, temperatura, cilindros, resistencia y controles especiales."
  },
  {
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
  },
  {
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
  },
  {
    "id": "terraceria",
    "name": "Terracería",
    "summary": "Control de compactación, granulometría y propiedades de materiales térreos.",
    "order": 50,
    "accent": "green",
    "items": [
      {
        "id": "terraceria-muestreo-de-material-terreo",
        "categoryId": "terraceria",
        "name": "Muestreo de material térreo",
        "slug": "muestreo-de-material-terreo",
        "description": "Las terracerías se definen como volúmenes de materiales que se extraen o que sirven de relleno en la construcción de una vía terrestre.",
        "standards": [],
        "scope": "Las terracerías se definen como volúmenes de materiales que se extraen o que sirven de relleno en la construcción de una vía terrestre.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "terraceria-determinacion-del-grado-de-compactacion",
        "categoryId": "terraceria",
        "name": "Determinación del grado de compactación",
        "slug": "determinacion-del-grado-de-compactacion",
        "description": "Prueba de campo para obtener porcentaje de compactación en un terraplén.",
        "standards": [],
        "scope": "Prueba de campo para obtener porcentaje de compactación en un terraplén.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "terraceria-determinacion-de-la-masa-volumetrica-seca-maxima-y-humedad-optima",
        "categoryId": "terraceria",
        "name": "Determinación de la masa volumétrica seca máxima y humedad óptima",
        "slug": "determinacion-de-la-masa-volumetrica-seca-maxima-y-humedad-optima",
        "description": "Relación entre la masa de los sólidos del material y el volumen total del mismo, porcentaje del contenido de agua.",
        "standards": [],
        "scope": "Relación entre la masa de los sólidos del material y el volumen total del mismo, porcentaje del contenido de agua.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "terraceria-granulometrias-y-contenidos-de-finos",
        "categoryId": "terraceria",
        "name": "Granulometrías y contenidos de finos",
        "slug": "granulometrias-y-contenidos-de-finos",
        "description": "Clasificación del agregado mediante el uso de tamices para la obtención de curvas granulométricas.",
        "standards": [],
        "scope": "Clasificación del agregado mediante el uso de tamices para la obtención de curvas granulométricas.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "terraceria-limites-de-plasticidad",
        "categoryId": "terraceria",
        "name": "Límites de plasticidad",
        "slug": "limites-de-plasticidad",
        "description": "Porcentaje de contenido de humedad con que un suelo cambia al disminuir su humedad de la consistencia plástica a la semisólida, o, al aumentar su humedad, de la consistencia semisólida a la plástica.",
        "standards": [],
        "scope": "Porcentaje de contenido de humedad con que un suelo cambia al disminuir su humedad de la consistencia plástica a la semisólida, o, al aumentar su humedad, de la consistencia semisólida a la plástica.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "terraceria-equivalente-de-arena",
        "categoryId": "terraceria",
        "name": "Equivalente de arena",
        "slug": "equivalente-de-arena",
        "description": "El Equivalente de Arena es una prueba de laboratorio, que se realiza con el objeto de determinar qué porcentaje de una muestra se puede considerar como arena.",
        "standards": [],
        "scope": "El Equivalente de Arena es una prueba de laboratorio, que se realiza con el objeto de determinar qué porcentaje de una muestra se puede considerar como arena.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "terraceria-desgaste-por-la-maquina-de-los-angeles",
        "categoryId": "terraceria",
        "name": "Desgaste por la Máquina de Los Ángeles",
        "slug": "desgaste-por-la-maquina-de-los-angeles",
        "description": "El objetivo de la prueba de desgaste por medio de la Máquina de los Ángeles es determinar la resistencia a la trituración o abrasión de los materiales pétreos utilizados en las mezclas asfálticas.",
        "standards": [],
        "scope": "El objetivo de la prueba de desgaste por medio de la Máquina de los Ángeles es determinar la resistencia a la trituración o abrasión de los materiales pétreos utilizados en las mezclas asfálticas.",
        "sample": "Material representativo de banco, capa, tramo o sitio de compactacion, identificado por ubicacion.",
        "estimatedTime": "Programacion segun visita de campo, volumen de muestras y pruebas de laboratorio requeridas.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Muestreo, ensayo de laboratorio o verificacion en campo conforme al control solicitado.",
        "clientPreparation": [
          "Indicar tramo, capa o banco.",
          "Compartir especificacion de compactacion.",
          "Coordinar acceso al frente de trabajo."
        ],
        "quoteChecklist": [
          "Ubicacion del tramo",
          "Tipo de material",
          "Espesor o capa",
          "Especificacion de compactacion",
          "Numero de puntos"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      }
    ],
    "seoDescription": "Pruebas de terraceria, compactacion, pesos volumetricos, humedad, limites, granulometria y control de capas en obra."
  },
  {
    "id": "calidad-agua",
    "name": "Calidad del agua",
    "summary": "Determinaciones químicas y físicas para control de agua en construcción y procesos relacionados.",
    "order": 60,
    "accent": "blue",
    "items": [
      {
        "id": "calidad-agua-determinacion-de-alcalinidad-de-agua",
        "categoryId": "calidad-agua",
        "name": "Determinación de alcalinidad de agua",
        "slug": "determinacion-de-alcalinidad-de-agua",
        "description": "Determinar la alcalinidad a la total como CaCO 3 en muestras de aguas por el método de titulación volumétrica. Alcalinidad a la fenolftaleína Alcalinidad total Carbonatos y bicarbonatos",
        "standards": [],
        "scope": "Determinar la alcalinidad a la total como CaCO 3 en muestras de aguas por el método de titulación volumétrica. Alcalinidad a la fenolftaleína Alcalinidad total Carbonatos y bicarbonatos",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-dureza-total-del-agua",
        "categoryId": "calidad-agua",
        "name": "Determinación de dureza total del agua",
        "slug": "determinacion-de-dureza-total-del-agua",
        "description": "Determinar el contenido de dureza total como CaCO 3 en aguas potables, superficiales o subterráneas, de desechos domésticos o industriales y salinas",
        "standards": [],
        "scope": "Determinar el contenido de dureza total como CaCO 3 en aguas potables, superficiales o subterráneas, de desechos domésticos o industriales y salinas",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-dureza-de-calcio-del-agua",
        "categoryId": "calidad-agua",
        "name": "Determinación de dureza de calcio del agua",
        "slug": "determinacion-de-dureza-de-calcio-del-agua",
        "description": "Determinar el contenido de dureza de calcio como CaCO 3 en aguas potables, superficiales o subterráneas, de desechos domésticos o industriales y salinas",
        "standards": [],
        "scope": "Determinar el contenido de dureza de calcio como CaCO 3 en aguas potables, superficiales o subterráneas, de desechos domésticos o industriales y salinas",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-oxigeno-disuelto",
        "categoryId": "calidad-agua",
        "name": "Determinación de oxígeno disuelto",
        "slug": "determinacion-de-oxigeno-disuelto",
        "description": "Determinar la concentración oxígeno disuelto en aguas, aguas de esteros y agua de mar como mg/L de O 2",
        "standards": [],
        "scope": "Determinar la concentración oxígeno disuelto en aguas, aguas de esteros y agua de mar como mg/L de O 2",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-cloruros-en-agua",
        "categoryId": "calidad-agua",
        "name": "Determinación de cloruros en agua",
        "slug": "determinacion-de-cloruros-en-agua",
        "description": "Determinar el contenido de cloruros en aguas potables, superficiales o subterráneas, de desechos domésticos o industriales y salinas por titulación volumétrica",
        "standards": [],
        "scope": "Determinar el contenido de cloruros en aguas potables, superficiales o subterráneas, de desechos domésticos o industriales y salinas por titulación volumétrica",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-cloro-libre-en-agua",
        "categoryId": "calidad-agua",
        "name": "Determinación de cloro libre en agua",
        "slug": "determinacion-de-cloro-libre-en-agua",
        "description": "Determinar el contenido de cloro (ión hipoclorito y ácido hipocloroso) como mg/L de Cl 2 en muestras de agua, aguas tratadas, aguas de estuario y agua de mar mediante espectrofotometría",
        "standards": [],
        "scope": "Determinar el contenido de cloro (ión hipoclorito y ácido hipocloroso) como mg/L de Cl 2 en muestras de agua, aguas tratadas, aguas de estuario y agua de mar mediante espectrofotometría",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-fierro-total",
        "categoryId": "calidad-agua",
        "name": "Determinación de fierro total",
        "slug": "determinacion-de-fierro-total",
        "description": "Determinar el valor de la concentración de hierro total en muestras de agua utilizando el método espectrofotométrico como mg/L de Fe",
        "standards": [],
        "scope": "Determinar el valor de la concentración de hierro total en muestras de agua utilizando el método espectrofotométrico como mg/L de Fe",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-sulfatos",
        "categoryId": "calidad-agua",
        "name": "Determinación de sulfatos",
        "slug": "determinacion-de-sulfatos",
        "description": "Determinar la concentración de sulfatos en mg/L SO 4 2- de una muestra de agua, agua de estuario, agua residual, aguas salinas y/o congénitas por espectrofotometría",
        "standards": [],
        "scope": "Determinar la concentración de sulfatos en mg/L SO 4 2- de una muestra de agua, agua de estuario, agua residual, aguas salinas y/o congénitas por espectrofotometría",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-color",
        "categoryId": "calidad-agua",
        "name": "Determinación de color",
        "slug": "determinacion-de-color",
        "description": "Determinación de color para aguas, aguas residuales y agua de mar en unidades Pt-Co por espectrofotometría",
        "standards": [],
        "scope": "Determinación de color para aguas, aguas residuales y agua de mar en unidades Pt-Co por espectrofotometría",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-bario",
        "categoryId": "calidad-agua",
        "name": "Determinación de bario",
        "slug": "determinacion-de-bario",
        "description": "Determinar la concentración de bario en una muestra de agua como mg/L de bario en aguas, aguas residuales, aguas industriales, aguas de esteros y agua de mar",
        "standards": [],
        "scope": "Determinar la concentración de bario en una muestra de agua como mg/L de bario en aguas, aguas residuales, aguas industriales, aguas de esteros y agua de mar",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-solidos-suspendidos",
        "categoryId": "calidad-agua",
        "name": "Determinación de sólidos suspendidos",
        "slug": "determinacion-de-solidos-suspendidos",
        "description": "Determinar concentración de sólidos suspendidos en una muestra de agua por el método de espectrofotometría en mg/L de sólidos suspendidos y para el control de procesos en planta",
        "standards": [],
        "scope": "Determinar concentración de sólidos suspendidos en una muestra de agua por el método de espectrofotometría en mg/L de sólidos suspendidos y para el control de procesos en planta",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-solidos-disueltos-totales",
        "categoryId": "calidad-agua",
        "name": "Determinación de sólidos disueltos totales",
        "slug": "determinacion-de-solidos-disueltos-totales",
        "description": "Determinar sólidos disueltos totales en aguas, aguas residuales, aguas congénitas y aguas de mar en rango en ppm / 10.00 ppt por sonda multiparamétrica",
        "standards": [],
        "scope": "Determinar sólidos disueltos totales en aguas, aguas residuales, aguas congénitas y aguas de mar en rango en ppm / 10.00 ppt por sonda multiparamétrica",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-conductividad",
        "categoryId": "calidad-agua",
        "name": "Determinación de conductividad",
        "slug": "determinacion-de-conductividad",
        "description": "Determinar conductividad en aguas, aguas de esteros, aguas residuales, aguas industriales y aguas de mar por medio de sonda multiparamétrica",
        "standards": [],
        "scope": "Determinar conductividad en aguas, aguas de esteros, aguas residuales, aguas industriales y aguas de mar por medio de sonda multiparamétrica",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-salinidad",
        "categoryId": "calidad-agua",
        "name": "Determinación de salinidad",
        "slug": "determinacion-de-salinidad",
        "description": "Determinar la salinidad en aguas, aguas residuales, aguas congénitas y aguas de mar en rango 0 ppt a 1%, sonda multiparamétrica",
        "standards": [],
        "scope": "Determinar la salinidad en aguas, aguas residuales, aguas congénitas y aguas de mar en rango 0 ppt a 1%, sonda multiparamétrica",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-ph",
        "categoryId": "calidad-agua",
        "name": "Determinación de pH",
        "slug": "determinacion-de-ph",
        "description": "Determinar el potencial de hidrogeno (pH) en aguas, aguas residuales, aguas industriales, aguas de esteros y aguas de mar mediante potenciómetro",
        "standards": [],
        "scope": "Determinar el potencial de hidrogeno (pH) en aguas, aguas residuales, aguas industriales, aguas de esteros y aguas de mar mediante potenciómetro",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-temperatura",
        "categoryId": "calidad-agua",
        "name": "Determinación de temperatura",
        "slug": "determinacion-de-temperatura",
        "description": "Determinar la temperatura de análisis, sonda multiparamétrica o termómetro de inmersión parcial",
        "standards": [],
        "scope": "Determinar la temperatura de análisis, sonda multiparamétrica o termómetro de inmersión parcial",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "calidad-agua-determinacion-de-indices-de-saturacion-de-agua",
        "categoryId": "calidad-agua",
        "name": "• Determinación de Índices de saturación de agua",
        "slug": "determinacion-de-indices-de-saturacion-de-agua",
        "description": "Análisis de propiedades iónicas e incrustantes del agua y estimación de la tendencia incrustante. Evaluación por riesgo de formación de depósitos de carbonato de calcio",
        "standards": [],
        "scope": "Análisis de propiedades iónicas e incrustantes del agua y estimación de la tendencia incrustante. Evaluación por riesgo de formación de depósitos de carbonato de calcio",
        "sample": "Muestra de agua en recipiente limpio, identificada por origen, fecha y uso previsto.",
        "estimatedTime": "Programacion segun parametros solicitados y recepcion de muestra.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Recepcion de muestra y determinacion de parametros fisicos o quimicos conforme a alcance contratado.",
        "clientPreparation": [
          "Identificar origen de la muestra.",
          "Evitar contaminacion del recipiente.",
          "Indicar uso previsto del agua."
        ],
        "quoteChecklist": [
          "Origen del agua",
          "Uso previsto",
          "Parametros requeridos",
          "Numero de muestras",
          "Fecha de muestreo"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      }
    ],
    "seoDescription": "Analisis de calidad del agua para uso en construccion, control fisico-quimico y verificacion de parametros aplicables."
  },
  {
    "id": "mecanica-suelos",
    "name": "Mecánica de suelos",
    "summary": "Exploración, caracterización y documentación técnica del subsuelo.",
    "order": 70,
    "accent": "steel",
    "items": [
      {
        "id": "mecanica-suelos-sevs-sondeo-electrico-vertical-no-invasiva",
        "categoryId": "mecanica-suelos",
        "name": "SEVS (Sondeo Eléctrico Vertical) – No Invasiva",
        "slug": "sevs-sondeo-electrico-vertical-no-invasiva",
        "description": "Técnica geofísica que mide la distribución de la resistividad eléctrica del subsuelo. Se utiliza para explorar el terreno y conocer sus características.",
        "standards": [],
        "scope": "Técnica geofísica que mide la distribución de la resistividad eléctrica del subsuelo. Se utiliza para explorar el terreno y conocer sus características.",
        "sample": "Muestra alterada, inalterada, punto de exploracion o informacion del sitio segun el estudio requerido.",
        "estimatedTime": "Programacion segun alcance de exploracion, condiciones del sitio y entregables solicitados.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Exploracion, muestreo, ensaye y analisis geotecnico conforme al objetivo del proyecto.",
        "clientPreparation": [
          "Compartir ubicacion y acceso al predio.",
          "Indicar tipo de estructura o proyecto.",
          "Entregar planos o antecedentes disponibles."
        ],
        "quoteChecklist": [
          "Ubicacion del predio",
          "Tipo de obra",
          "Area o numero de puntos",
          "Profundidad objetivo",
          "Entregable requerido"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "mecanica-suelos-sacs-sondeo-avance-controlado-invasiva",
        "categoryId": "mecanica-suelos",
        "name": "SACS (Sondeo Avance Controlado) - Invasiva",
        "slug": "sacs-sondeo-avance-controlado-invasiva",
        "description": "Técnica de perforación que se utiliza para detectar cavidades y conocer la calidad de la roca",
        "standards": [],
        "scope": "Técnica de perforación que se utiliza para detectar cavidades y conocer la calidad de la roca",
        "sample": "Muestra alterada, inalterada, punto de exploracion o informacion del sitio segun el estudio requerido.",
        "estimatedTime": "Programacion segun alcance de exploracion, condiciones del sitio y entregables solicitados.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Exploracion, muestreo, ensaye y analisis geotecnico conforme al objetivo del proyecto.",
        "clientPreparation": [
          "Compartir ubicacion y acceso al predio.",
          "Indicar tipo de estructura o proyecto.",
          "Entregar planos o antecedentes disponibles."
        ],
        "quoteChecklist": [
          "Ubicacion del predio",
          "Tipo de obra",
          "Area o numero de puntos",
          "Profundidad objetivo",
          "Entregable requerido"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "mecanica-suelos-geotomografo",
        "categoryId": "mecanica-suelos",
        "name": "Geotomógrafo",
        "slug": "geotomografo",
        "description": "Obtención de imágenes de resistividad del subsuelo y obtención de cortes geoeléctricos diseñado para la exploración de campos extensos y con profundidades intermedias brindando una precisión fiable que a su vez de manera inmediata muestra gráficamente las mediciones tomadas del subsuelo con una capacidad de tomar múltiples mediciones con un solo tendido de electrodos a través del mismo cable.",
        "standards": [],
        "scope": "Obtención de imágenes de resistividad del subsuelo y obtención de cortes geoeléctricos diseñado para la exploración de campos extensos y con profundidades intermedias brindando una precisión fiable que a su vez de manera inmediata muestra gráficamente las mediciones tomadas del subsuelo con una capacidad de tomar múltiples mediciones con un solo tendido de electrodos a través del mismo cable.",
        "sample": "Muestra alterada, inalterada, punto de exploracion o informacion del sitio segun el estudio requerido.",
        "estimatedTime": "Programacion segun alcance de exploracion, condiciones del sitio y entregables solicitados.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "method": "Exploracion, muestreo, ensaye y analisis geotecnico conforme al objetivo del proyecto.",
        "clientPreparation": [
          "Compartir ubicacion y acceso al predio.",
          "Indicar tipo de estructura o proyecto.",
          "Entregar planos o antecedentes disponibles."
        ],
        "quoteChecklist": [
          "Ubicacion del predio",
          "Tipo de obra",
          "Area o numero de puntos",
          "Profundidad objetivo",
          "Entregable requerido"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      },
      {
        "id": "mecanica-suelos-informe-documental",
        "categoryId": "mecanica-suelos",
        "name": "Informe documental",
        "slug": "informe-documental",
        "description": "Determinación de la capacidad de carga, Estratigrafía del suelo, Determinación del Nivel Freático, Identificación de zonas inestables y Recomendaciones de cimentación.",
        "standards": [],
        "scope": "Determinación de la capacidad de carga, Estratigrafía del suelo, Determinación del Nivel Freático, Identificación de zonas inestables y Recomendaciones de cimentación.",
        "sample": "Muestra alterada, inalterada, punto de exploracion o informacion del sitio segun el estudio requerido.",
        "estimatedTime": "Programacion segun alcance de exploracion, condiciones del sitio y entregables solicitados.",
        "deliverables": [
          "Reporte tecnico de resultados",
          "Identificacion de muestra o elemento",
          "Normas de referencia aplicables",
          "Ficha técnica del servicio"
        ],
        "featured": true,
        "method": "Exploracion, muestreo, ensaye y analisis geotecnico conforme al objetivo del proyecto.",
        "clientPreparation": [
          "Compartir ubicacion y acceso al predio.",
          "Indicar tipo de estructura o proyecto.",
          "Entregar planos o antecedentes disponibles."
        ],
        "quoteChecklist": [
          "Ubicacion del predio",
          "Tipo de obra",
          "Area o numero de puntos",
          "Profundidad objetivo",
          "Entregable requerido"
        ],
        "notes": [
          "La disponibilidad, alcance final y condiciones de servicio se confirman al cotizar."
        ]
      }
    ],
    "seoDescription": "Servicios de mecanica de suelos, exploracion, capacidad de carga, estratigrafia, compactacion y recomendaciones de cimentacion."
  }
];

export const featuredServices = serviceCategories.flatMap((category) =>
  category.items.filter((item) => item.featured).map((item) => ({ ...item, categoryName: category.name }))
);
