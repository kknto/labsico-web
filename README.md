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

## Contenido editable

El catalogo vive en `src/content/services.ts`. Para agregar una prueba, crear un nuevo `ServiceItem` dentro de su categoria con `id` y `slug` unicos.

La primera version no depende de imagenes de fondo. Cuando existan fotografias finales, deben agregarse como assets propios y referenciarse desde los componentes correspondientes.

## Accesos internos

La ruta `/accesos` concentra plataformas internas y requiere clave de acceso. Las plataformas configuradas por defecto son:

- Reportes de clientes: `https://reportes-seybaplaya.onrender.com`
- Plataforma de deslizados: `https://deslizados-labsico.onrender.com`
- Gestion de la empresa: pendiente de URL

El dominio adquirido para concentrar los desarrollos es `labsico.tech`; falta configurar DNS/dominios personalizados cuando se defina el despliegue final.

## Despliegue en Render

El repositorio incluye `render.yaml` para crear el servicio desde Blueprint.

1. Subir este repositorio a GitHub.
2. En Render, elegir `New +` > `Blueprint`.
3. Conectar `kknto/labsico-web`.
4. Confirmar el servicio `labsico-web`.
5. Cambiar `INTERNAL_ACCESS_CODE` e `INTERNAL_ACCESS_SECRET` en Render antes de compartir el acceso interno.
6. Cuando exista la plataforma de gestion, configurar `INTERNAL_GESTION_URL`.
