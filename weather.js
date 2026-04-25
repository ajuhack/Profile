// Weather Dashboard Configuration
const API_KEY = 'USE_YOUR_OPENWEATHERMAP_API_KEY_HERE'; // Get free key from https://openweathermap.org/api
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Weather Icons Mapping
const weatherIcons = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '🌤️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
};

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// Event Listeners
if (searchBtn) {
    searchBtn.addEventListener('click', searchCity);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchCity();
        }
    });
}

// Search City
function searchCity() {
    const city = searchInput.value.trim();
    if (!city) return;
    fetchWeather(city);
    searchInput.value = '';
}

// Fetch Weather Data
async function fetchWeather(city) {
    try {
        showLoading(true);
        hideError();
        
        // Check if API key is set
        if (API_KEY === 'USE_YOUR_OPENWEATHERMAP_API_KEY_HERE') {
            showError('⚠️ Please update API_KEY in weather.js with your OpenWeatherMap API key');
            showLoading(false);
            return;
        }

        // Get coordinates from city name
        const geoResponse = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`
        );

        if (!geoResponse.ok) {
            throw new Error('City not found');
        }

        const geoData = await geoResponse.json();
        const { lat, lon } = geoData.coord;

        // Get detailed weather and forecast
        const weatherResponse = await fetch(
            `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        const forecastResponse = await fetch(
            `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(weatherData);
        display5DayForecast(forecastData);
        displayHourlyForecast(forecastData);
        displayAdditionalInfo(weatherData);

        showLoading(false);
    } catch (error) {
        showLoading(false);
        showError(`Error: ${error.message}`);
    }
}

// Display Current Weather
function displayCurrentWeather(data) {
    const currentSection = document.getElementById('currentWeather');
    if (!currentSection) return;

    const { main, weather, wind, clouds, visibility, sys, name, country } = data;
    const weatherIcon = weatherIcons[weather[0].icon] || '🌡️';
    const uvIndex = calculateUVIndex(data.dt, sys.sunrise, sys.sunset);
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    currentSection.innerHTML = `
        <div class="weather-header">
            <div class="weather-icon">${weatherIcon}</div>
            <div class="weather-info">
                <h2>${name}, ${country}</h2>
                <p>${date}</p>
                <p>${main.temp}°C - ${weather[0].main}</p>
                <p>Feels like ${main.feels_like}°C</p>
            </div>
        </div>
        <div class="weather-metrics">
            <div class="metric">
                <div class="metric-label">Humidity</div>
                <div class="metric-value">${main.humidity}%</div>
            </div>
            <div class="metric">
                <div class="metric-label">Wind Speed</div>
                <div class="metric-value">${wind.speed} m/s</div>
            </div>
            <div class="metric">
                <div class="metric-label">Pressure</div>
                <div class="metric-value">${main.pressure} hPa</div>
            </div>
            <div class="metric">
                <div class="metric-label">Visibility</div>
                <div class="metric-value">${(visibility / 1000).toFixed(1)} km</div>
            </div>
            <div class="metric">
                <div class="metric-label">Cloud Coverage</div>
                <div class="metric-value">${clouds.all}%</div>
            </div>
            <div class="metric">
                <div class="metric-label">UV Index</div>
                <div class="metric-value" style="color: ${getUVColor(uvIndex)}">${uvIndex.toFixed(1)}</div>
            </div>
        </div>
    `;
}

// Display 5-Day Forecast
function display5DayForecast(data) {
    const forecastSection = document.getElementById('forecastSection');
    const forecastGrid = document.getElementById('forecastGrid');
    if (!forecastGrid) return;

    const dailyData = {};

    // Group data by date
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyData[date]) {
            dailyData[date] = [];
        }
        dailyData[date].push(item);
    });

    // Get one entry per day
    const days = Object.entries(dailyData).slice(0, 5);

    forecastGrid.innerHTML = days.map(([date, items]) => {
        const mainItem = items[Math.floor(items.length / 2)];
        const temps = items.map(i => i.main.temp);
        const high = Math.max(...temps);
        const low = Math.min(...temps);
        const icon = weatherIcons[mainItem.weather[0].icon];
        const dateObj = new Date(mainItem.dt * 1000);
        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

        return `
            <div class="forecast-card">
                <div class="forecast-date">${dayName}</div>
                <div class="forecast-icon">${icon}</div>
                <div class="forecast-temp">${high.toFixed(0)}° / ${low.toFixed(0)}°</div>
                <div class="forecast-condition">${mainItem.weather[0].main}</div>
            </div>
        `;
    }).join('');

    if (forecastSection) {
        forecastSection.style.display = 'block';
    }
}

// Display Hourly Forecast
function displayHourlyForecast(data) {
    const hourlySection = document.getElementById('hourlySection');
    const hourlyScroll = document.getElementById('hourlyScroll');
    if (!hourlyScroll) return;

    hourlyScroll.innerHTML = data.list.slice(0, 8).map(item => {
        const time = new Date(item.dt * 1000).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        const icon = weatherIcons[item.weather[0].icon];
        const temp = item.main.temp.toFixed(0);

        return `
            <div class="hourly-card">
                <div class="hourly-time">${time}</div>
                <div class="hourly-icon">${icon}</div>
                <div class="hourly-temp">${temp}°C</div>
            </div>
        `;
    }).join('');

    if (hourlySection) {
        hourlySection.style.display = 'block';
    }
}

// Display Additional Info
function displayAdditionalInfo(data) {
    const additionalSection = document.getElementById('additionalInfo');
    if (!additionalSection) return;

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const moonPhase = calculateMoonPhase(new Date());
    const uvIndex = calculateUVIndex(data.dt, data.sys.sunrise, data.sys.sunset);
    const uvLevel = getUVLevel(uvIndex);

    additionalSection.innerHTML = `
        <div class="info-grid">
            <div class="info-item">
                <div class="info-icon">🌅</div>
                <div class="info-label">Sunrise</div>
                <div class="info-value">${sunrise}</div>
            </div>
            <div class="info-item">
                <div class="info-icon">🌆</div>
                <div class="info-label">Sunset</div>
                <div class="info-value">${sunset}</div>
            </div>
            <div class="info-item">
                <div class="info-icon">🌙</div>
                <div class="info-label">Moon Phase</div>
                <div class="info-value">${moonPhase}</div>
            </div>
            <div class="info-item">
                <div class="info-icon">☀️</div>
                <div class="info-label">UV Index</div>
                <div class="info-value" style="color: ${getUVColor(uvIndex)}">${uvLevel}</div>
            </div>
        </div>
    `;

    additionalSection.style.display = 'block';
}

// Helper Functions
function calculateMoonPhase(date) {
    const phases = ['🌑 New Moon', '🌒 Waxing Crescent', '🌓 First Quarter', '🌔 Waxing Gibbous', 
                    '🌕 Full Moon', '🌖 Waning Gibbous', '🌗 Last Quarter', '🌘 Waning Crescent'];
    const dayOfCycle = Math.floor((date - new Date(2000, 0, 6)) / 86400000) % 29.53;
    const phaseIndex = Math.floor((dayOfCycle / 29.53) * 8);
    return phases[phaseIndex];
}

function calculateUVIndex(dt, sunrise, sunset) {
    const hour = new Date(dt * 1000).getHours();
    const isDaytime = dt > sunrise && dt < sunset;
    return isDaytime ? Math.max(1, 8 * Math.sin((hour - 6) * Math.PI / 12)) : 0;
}

function getUVLevel(uvIndex) {
    if (uvIndex < 3) return '🟢 Low';
    if (uvIndex < 6) return '🟡 Moderate';
    if (uvIndex < 8) return '🟠 High';
    if (uvIndex < 11) return '🔴 Very High';
    return '🟣 Extreme';
}

function getUVColor(uvIndex) {
    if (uvIndex < 3) return '#4CAF50';
    if (uvIndex < 6) return '#FFC107';
    if (uvIndex < 8) return '#FF9800';
    if (uvIndex < 11) return '#F44336';
    return '#9C27B0';
}

function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = show ? 'block' : 'none';
    }
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}

function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.style.display = 'none';
    }
}

// Load default weather on page load
document.addEventListener('DOMContentLoaded', function() {
    fetchWeather('London');
});