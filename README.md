# LABSICO Web

Sitio web modular para LABSICO, laboratorio de control de calidad de concreto y servicios para la industria de la construccion.

## Desarrollo local

```powershell
npm install
npm run dev
```

La app corre en `http://localhost:3000`.

## Scripts

- `npm run dev`: servidor local.
- `npm run lint`: revision de Next/ESLint.
- `npm run typecheck`: TypeScript sin emitir archivos.
- `npm run build`: build de produccion.
- `npm run start:render`: start command para Render Web Service.

## Contenido

El catalogo vive en `src/content/services.ts`. Para agregar una prueba, crear un nuevo `ServiceItem` dentro de su categoria con `id` y `slug` unicos.

Rutas principales publicadas:

- `/servicios`: catalogo completo con busqueda y fichas.
- `/servicios/[categoria]`: paginas SEO por categoria de servicio.
- `/acreditacion`: acreditacion, referencias normativas y alcance tecnico.
- `/contacto`: solicitud de cotizacion por WhatsApp o correo prellenado.

La app genera `sitemap.xml` y `robots.txt` desde el catalogo versionado.

## Accesos internos

La ruta `/accesos` concentra plataformas internas y requiere clave de acceso. Las plataformas activas son:

- Reportes de clientes: `https://reportes-seybaplaya.onrender.com`
- Plataforma de deslizados: `https://deslizados-labsico.onrender.com`

El dominio principal del sitio es `labsico.tech`.

Variables obligatorias para el acceso interno en produccion:

- `INTERNAL_ACCESS_CODE`: clave privada de ingreso.
- `INTERNAL_ACCESS_SECRET`: secreto largo para firmar la cookie de sesion.
- `INTERNAL_COOKIE_SECURE=true`: fuerza cookies seguras sobre HTTPS.

## Despliegue en Render

El repositorio incluye `render.yaml` para crear y mantener el Web Service desde Blueprint.

1. Subir este repositorio a GitHub.
2. En Render, elegir `New +` > `Blueprint`.
3. Conectar `kknto/labsico-web`.
4. Confirmar el servicio `labsico-web`.
5. Definir `INTERNAL_ACCESS_CODE` durante la creacion del Blueprint o desde Environment.
6. Verificar el dominio `labsico.tech` en la seccion Custom Domains de Render.
