# Proyecto de Documentación con DocFX

Este proyecto está configurado para generar documentación estática utilizando **DocFX**, una herramienta para generar documentación a partir de comentarios de código y archivos markdown.

## ¿Qué es DocFX?

**DocFX** es una solución de generación de documentación que puede generar documentación en formato HTML a partir de múltiples fuentes, como comentarios de código XML y archivos Markdown. Es útil para proyectos que requieren documentación técnica clara y detallada.

## Requisitos

- Tener **DocFX** instalado. Si no lo tienes, puedes instalarlo siguiendo las instrucciones en la página oficial: [DocFX Documentation](https://dotnet.github.io/docfx/).

## Estructura del Proyecto

- **docfx.json**: El archivo de configuración principal donde se define el contenido que será documentado y el formato de salida.
- **/articles**: Carpeta donde se almacenan los archivos de documentación en formato Markdown.
- **/api**: Carpeta donde se genera la documentación de la API a partir de los comentarios de código.

## Crear una nueva ruta de documentación

Para añadir una nueva página o sección a tu documentación, sigue estos pasos:

### 1. Crear una nueva ruta de archivo markdown

- Dirígete a la carpeta `/articles` o la carpeta donde quieras añadir tu nueva documentación.
- Crea un archivo `.md` (Markdown). Por ejemplo, si quieres documentar una nueva funcionalidad, crea un archivo llamado `nueva-funcionalidad.md`:

```bash
cd articles
touch nueva-funcionalidad.md
En el archivo nueva-funcionalidad.md, escribe el contenido de la documentación:
markdown
Copiar código
# Nueva Funcionalidad

Esta es la documentación para la nueva funcionalidad del proyecto.

## Detalles

Aquí puedes añadir información detallada sobre la funcionalidad, ejemplos de uso, notas, etc.
2. Actualizar la navegación en docfx.json
Para hacer que la nueva página sea accesible desde la barra de navegación de la documentación, necesitas agregarla al archivo docfx.json. Busca la sección toc (tabla de contenidos) en el archivo docfx.json y añade una referencia a tu nuevo archivo:

json
Copiar código
{
  "name": "Nueva Funcionalidad",
  "href": "articles/nueva-funcionalidad.md"
}
3. Compilar y servir el proyecto
Una vez que hayas creado o actualizado la documentación, puedes compilar y servir el proyecto de la siguiente manera:

bash
Copiar código
docfx docfx.json --serve
Este comando generará la documentación en formato HTML y abrirá un servidor local para que puedas navegar por tu documentación a través del navegador web.

Contribuir
Para agregar más documentación, simplemente sigue los pasos indicados para crear nuevas páginas en Markdown. Recuerda siempre actualizar el archivo docfx.json para que las nuevas rutas sean visibles en la navegación del sitio.

```
