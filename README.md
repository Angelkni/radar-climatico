# Actividad 4: Miniaplicación Web consumiendo una API REST

## Descripción de la API
Se seleccionó la API pública y gratuita **Open-Meteo Weather API**, la cual permite consultar información meteorológica actualizada en tiempo real de forma directa, sin requerir registros previos ni claves de acceso (*API Keys*).

## Endpoint Utilizado
- **URL Base / Endpoint:** 
  `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`
- **Parámetros:** 
  - `latitude` y `longitude`: Coordenadas geográficas específicas de la ubicación consultada (ej. Monterrey, N.L., Berlín, Tokio, etc.).
  - `current_weather=true`: Filtro para obtener únicamente el registro de las condiciones meteorológicas actuales.

## Instrucciones de Uso
1. Clonar o descargar el repositorio en el equipo local.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar el archivo `index.html` mediante un servidor local (por ejemplo, la extensión *Live Server*).
4. Seleccionar un país/ciudad del menú desplegable y hacer clic en el botón de escaneo para visualizar de forma dinámica la temperatura, la condición atmosférica y la velocidad del viento.

## Tecnologías Utilizadas
- **HTML5** para la estructura semántica.
- **CSS3** para el diseño visual responsivo y efectos luminosos personalizados de alto contraste.
- **JavaScript (ES6+)** utilizando `fetch()` y `async/await` para el consumo asíncrono del servicio web y manipulación dinámica del DOM.
