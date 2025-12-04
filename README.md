# Espacio Nagare SPA

Single Page Application para el dojo Espacio Nagare (Shorin Ryu Shin Shun Kan · Puerto Madryn) con frontend en Vue 3 + Vite y servidor Node.js que sirve la carpeta generada (`client/dist`) en producción.

## Requisitos

- Node.js 18.x (el proyecto no instala polyfills para versiones anteriores)
- npm 9+

## Comandos locales

```bash
# Instalar dependencias del cliente
npm run client:install

# Entorno de desarrollo (Vite)
npm run dev

# Build productivo (genera client/dist)
npm run build

# Servidor Node entregando la carpeta dist
npm start
```

## Despliegue continuo en GitHub Pages

La rama `main` contiene el código fuente. Cada vez que se hace push a `main`, el workflow `deploy.yml`:

1. Instala dependencias y ejecuta `npm run build`.
2. Empaqueta `client/dist` como artefacto.
3. Publica ese artefacto mediante GitHub Pages (Actions), sin intervención manual.

Para que funcione:

- Activá GitHub Pages en la configuración del repositorio y elegí la opción **GitHub Actions**.
- El nombre del repositorio (`poximan.github.io`) corresponde a un sitio de usuario, por lo que la URL final será `https://poximan.github.io/`. No es necesario ajustar la opción `base` de Vite.

Si querés probar el build local que se sube a Pages, corré `npm run build` y revisá el contenido de `client/dist`.
