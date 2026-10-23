# Órbita — Universo profesional de David Rocha

Mapa interactivo de empresas, proyectos, personas, relaciones, planes, prompts y mapas de calor. Incluye creación de etiquetas propias y conexiones en borrador con guardar/descartar.

## Datos del mapa

Esta copia pública incluye el código fuente. Se omitieron `dist/data.json` y `dist/index.html` porque contienen los datos completos del mapa profesional. Sin el JSON no se puede generar ni ejecutar el sitio completo.

Para trabajar localmente, crea la carpeta `dist` y guarda allí tu exportación JSON del mapa como `dist/data.json`. Ambos archivos están excluidos de Git para evitar publicarlos por accidente. Para alojar el mapa completo, utiliza almacenamiento con el acceso adecuado.

## Ejecutar

Requiere Node.js. No necesita dependencias externas.

```sh
npm run build
npm test
python -m http.server 4173 --directory dist
```

Abre http://localhost:4173. Para Vercel, importa este repositorio; vercel.json define la compilación y salida.

## Persistencia actual

Los cambios se guardan en localStorage del navegador. Sobreviven a recargas, pero **no se sincronizan entre personas, navegadores ni dispositivos**. Si se borran los datos del navegador se pierde esa copia local. Exportar/importar JSON permite respaldar y transportar el mapa. El HTML portátil conserva una copia completa.

Subir o editar código en GitHub no comparte automáticamente los cambios hechos dentro de la aplicación. El despliegue original de ChatGPT Sites tampoco se actualiza automáticamente desde este repositorio.

## Edición compartida pendiente

Falta conectar un backend con autenticación, permisos de lectura/edición y almacenamiento central. Se debe guardar con control de versión para detectar cambios concurrentes y evitar sobrescribir ediciones ajenas. Al iniciar debe poder importarse el JSON con los cambios locales de David. No incluir credenciales en el HTML ni habilitar escritura anónima.

## Archivos

- app.js: interfaz, edición, mapas y persistencia local.
- style.css y shell.html: estilos y estructura.
- dist/data.json: datos iniciales; no contiene cambios posteriores del navegador.
- build.mjs: genera la página autocontenida; build.py es la alternativa Python.
- check-data.cjs y check-update.cjs: validación y migraciones.

Contiene información del ecosistema profesional. La visibilidad de estos datos depende de la configuración del repositorio y del alojamiento. No incluye claves ni configuración privada del alojamiento original.
