# StarsDogs Project

Este proyecto es una aplicación web desarrollada con Astro, diseñada para mostrar información sobre diferentes razas de perros y sus características.

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   ├── favicon.svg
│   └── img/
├── src/
│   ├── components/
│   │   ├── Caracteristicas.tsx
│   │   ├── Card.astro
│   │   ├── CarruselCachorros.tsx
│   │   ├── FormularioContacto.tsx
│   │   ├── Galeria.tsx
│   │   ├── Hero.tsx
│   │   ├── NavBar.astro
│   │   ├── TarjetaCachorro.tsx
│   │   └── Testimonios.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── cachorros.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial sobre `src/components/`, pero es donde nos gusta poner cualquier componente de Astro/React/Vue/Svelte/Preact.

Cualquier recurso estático, como imágenes, puede colocarse en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`           | Construye tu sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro               |

## 👀 ¿Quieres saber más?

Siéntete libre de consultar [nuestra documentación](https://docs.astro.build) o unirte a nuestro [servidor de Discord](https://astro.build/chat).

## Descripción del Proyecto

StarsDogs es una aplicación web que permite a los usuarios explorar diferentes razas de perros, ver sus características, y obtener información útil sobre cada una. La aplicación está diseñada para ser intuitiva y fácil de usar, proporcionando una experiencia de usuario atractiva y educativa.
