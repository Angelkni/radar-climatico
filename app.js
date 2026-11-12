const citySelect = document.getElementById('citySelect');
const fetchBtn = document.getElementById('fetchBtn');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('errorMsg');
const weatherCard = document.getElementById('weatherCard');

// Países y capitales configurados (México actualizado a Monterrey, Nuevo León)
const cities = {
    mexico: { name: "México (Monterrey, N.L.)", lat: 25.6866, lon: -100.3161 },
    germany: { name: "Alemania (Berlín)", lat: 52.5200, lon: 13.4050 },
    japan: { name: "Japón (Tokio)", lat: 35.6762, lon: 139.6503 },
    canada: { name: "Canadá (Ottawa)", lat: 45.4215, lon: -75.6972 },
    spain: { name: "España (Madrid)", lat: 40.4168, lon: -3.7038 },
    brazil: { name: "Brasil (Brasilia)", lat: -15.8267, lon: -47.9218 },
    australia: { name: "Australia (Canberra)", lat: -35.2809, lon: 149.1300 }
};

fetchBtn.addEventListener('click', consultarClima);

async function consultarClima() {
    const cityKey = citySelect.value;

    weatherCard.classList.add('hidden');
    errorMsg.classList.add('hidden');

    if (!cityKey) {
        mostrarError('Selecciona un país de la lista para escanear.');
        return;
    }

    loading.classList.remove('hidden');
    const city = cities[cityKey];

    // API pública de Open-Meteo
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Error al conectar con el servidor meteorológico.');
        }

        const data = await response.json();
        renderizarClima(city.name, data.current_weather);

    } catch (error) {
        mostrarError(error.message);
    } finally {
        loading.classList.add('hidden');
    }
}

function renderizarClima(cityName, current) {
    const temperatura = current.temperature;
    const viento = current.windspeed;
    const codigoClima = current.weathercode;

    let condicion = "Despejado / Soleado";
    if (codigoClima > 0 && codigoClima < 4) condicion = "Parcialmente nublado";
    if (codigoClima >= 45 && codigoClima <= 48) condicion = "Neblina";
    if (codigoClima >= 51 && codigoClima <= 67) condicion = "Lluvia moderada";
    if (codigoClima >= 71) condicion = "Nevada";

    weatherCard.innerHTML = `
        <h2>📍 ${cityName}</h2>
        <p>Temperatura actual: <strong>${temperatura} °C</strong></p>
        <p>Condición atmosférica: <strong>${condicion}</strong></p>
        <p>Velocidad del viento: <strong>${viento} km/h</strong></p>
    `;
    weatherCard.classList.remove('hidden');
}

function mostrarError(mensaje) {
    errorMsg.textContent = mensaje;
    errorMsg.classList.remove('hidden');
}