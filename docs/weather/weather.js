const API_KEY = 'rpZIedEqT9SSGNUa13dg3iYTyGwk6SrH';

const jsonData = `{"0": "Unknown",
"1000": "Clear, Sunny",
"1100": "Mostly Clear",
"1101": "Partly Cloudy",
"1102": "Mostly Cloudy",
"1001": "Cloudy",
"1103": "Partly Cloudy and Mostly Clear",
"2100": "Light Fog",
"2101": "Mostly Clear and Light Fog",
"2102": "Partly Cloudy and Light Fog",
"2103": "Mostly Cloudy and Light Fog",
"2106": "Mostly Clear and Fog",
"2107": "Partly Cloudy and Fog",
"2108": "Mostly Cloudy and Fog",
"2000": "Fog",
"4204": "Partly Cloudy and Drizzle",
"4203": "Mostly Clear and Drizzle",
"4205": "Mostly Cloudy and Drizzle",
"4000": "Drizzle",
"4200": "Light Rain",
"4213": "Mostly Clear and Light Rain",
"4214": "Partly Cloudy and Light Rain",
"4215": "Mostly Cloudy and Light Rain",
"4209": "Mostly Clear and Rain",
"4208": "Partly Cloudy and Rain",
"4210": "Mostly Cloudy and Rain",
"4001": "Rain",
"4211": "Mostly Clear and Heavy Rain",
"4202": "Partly Cloudy and Heavy Rain",
"4212": "Mostly Cloudy and Heavy Rain",
"4201": "Heavy Rain",
"5115": "Mostly Clear and Flurries",
"5116": "Partly Cloudy and Flurries",
"5117": "Mostly Cloudy and Flurries",
"5001": "Flurries",
"5100": "Light Snow",
"5102": "Mostly Clear and Light Snow",
"5103": "Partly Cloudy and Light Snow",
"5104": "Mostly Cloudy and Light Snow",
"5122": "Drizzle and Light Snow",
"5105": "Mostly Clear and Snow",
"5106": "Partly Cloudy and Snow",
"5107": "Mostly Cloudy and Snow",
"5000": "Snow",
"5101": "Heavy Snow",
"5119": "Mostly Clear and Heavy Snow",
"5120": "Partly Cloudy and Heavy Snow",
"5121": "Mostly Cloudy and Heavy Snow",
"5110": "Drizzle and Snow",
"5108": "Rain and Snow",
"5114": "Snow and Freezing Rain",
"5112": "Snow and Ice Pellets",
"6000": "Freezing Drizzle",
"6003": "Mostly Clear and Freezing drizzle",
"6002": "Partly Cloudy and Freezing drizzle",
"6004": "Mostly Cloudy and Freezing drizzle",
"6204": "Drizzle and Freezing Drizzle",
"6206": "Light Rain and Freezing Drizzle",
"6205": "Mostly Clear and Light Freezing Rain",
"6203": "Partly Cloudy and Light Freezing Rain",
"6209": "Mostly Cloudy and Light Freezing Rain",
"6200": "Light Freezing Rain",
"6213": "Mostly Clear and Freezing Rain",
"6214": "Partly Cloudy and Freezing Rain",
"6215": "Mostly Cloudy and Freezing Rain",
"6001": "Freezing Rain",
"6212": "Drizzle and Freezing Rain",
"6220": "Light Rain and Freezing Rain",
"6222": "Rain and Freezing Rain",
"6207": "Mostly Clear and Heavy Freezing Rain",
"6202": "Partly Cloudy and Heavy Freezing Rain",
"6208": "Mostly Cloudy and Heavy Freezing Rain",
"6201": "Heavy Freezing Rain",
"7110": "Mostly Clear and Light Ice Pellets",
"7111": "Partly Cloudy and Light Ice Pellets",
"7112": "Mostly Cloudy and Light Ice Pellets",
"7102": "Light Ice Pellets",
"7108": "Mostly Clear and Ice Pellets",
"7107": "Partly Cloudy and Ice Pellets",
"7109": "Mostly Cloudy and Ice Pellets",
"7000": "Ice Pellets",
"7105": "Drizzle and Ice Pellets",
"7106": "Freezing Rain and Ice Pellets",
"7115": "Light Rain and Ice Pellets",
"7117": "Rain and Ice Pellets",
"7103": "Freezing Rain and Heavy Ice Pellets",
"7113": "Mostly Clear and Heavy Ice Pellets",
"7114": "Partly Cloudy and Heavy Ice Pellets",
"7116": "Mostly Cloudy and Heavy Ice Pellets",
"7101": "Heavy Ice Pellets",
"8001": "Mostly Clear and Thunderstorm",
"8003": "Partly Cloudy and Thunderstorm",
"8002": "Mostly Cloudy and Thunderstorm",
"8000": "Thunderstorm",
"10000": "Clear, Sunny",
"11000": "Mostly Clear",
"11010": "Partly Cloudy",
"11020": "Mostly Cloudy",
"10010": "Cloudy",
"11030": "Partly Cloudy and Mostly Clear",
"21000": "Light Fog",
"21010": "Mostly Clear and Light Fog",
"21020": "Partly Cloudy and Light Fog",
"21030": "Mostly Cloudy and Light Fog",
"21060": "Mostly Clear and Fog",
"21070": "Partly Cloudy and Fog",
"21080": "Mostly Cloudy and Fog",
"20000": "Fog",
"42040": "Partly Cloudy and Drizzle",
"42030": "Mostly Clear and Drizzle",
"42050": "Mostly Cloudy and Drizzle",
"40000": "Drizzle",
"42000": "Light Rain",
"42130": "Mostly Clear and Light Rain",
"42140": "Partly Cloudy and Light Rain",
"42150": "Mostly Cloudy and Light Rain",
"42090": "Mostly Clear and Rain",
"42080": "Partly Cloudy and Rain",
"42100": "Mostly Cloudy and Rain",
"40010": "Rain",
"42110": "Mostly Clear and Heavy Rain",
"42020": "Partly Cloudy and Heavy Rain",
"42120": "Mostly Cloudy and Heavy Rain",
"42010": "Heavy Rain",
"51150": "Mostly Clear and Flurries",
"51160": "Partly Cloudy and Flurries",
"51170": "Mostly Cloudy and Flurries",
"50010": "Flurries",
"51000": "Light Snow",
"51020": "Mostly Clear and Light Snow",
"51030": "Partly Cloudy and Light Snow",
"51040": "Mostly Cloudy and Light Snow",
"51220": "Drizzle and Light Snow",
"51050": "Mostly Clear and Snow",
"51060": "Partly Cloudy and Snow",
"51070": "Mostly Cloudy and Snow",
"50000": "Snow",
"51010": "Heavy Snow",
"51190": "Mostly Clear and Heavy Snow",
"51200": "Partly Cloudy and Heavy Snow",
"51210": "Mostly Cloudy and Heavy Snow",
"51100": "Drizzle and Snow",
"51080": "Rain and Snow",
"51140": "Snow and Freezing Rain",
"51120": "Snow and Ice Pellets",
"60000": "Freezing Drizzle",
"60030": "Mostly Clear and Freezing drizzle",
"60020": "Partly Cloudy and Freezing drizzle",
"60040": "Mostly Cloudy and Freezing drizzle",
"62040": "Drizzle and Freezing Drizzle",
"62060": "Light Rain and Freezing Drizzle",
"62050": "Mostly Clear and Light Freezing Rain",
"62030": "Partly Cloudy and Light Freezing Rain",
"62090": "Mostly Cloudy and Light Freezing Rain",
"62000": "Light Freezing Rain",
"62130": "Mostly Clear and Freezing Rain",
"62140": "Partly Cloudy and Freezing Rain",
"62150": "Mostly Cloudy and Freezing Rain",
"60010": "Freezing Rain",
"62120": "Drizzle and Freezing Rain",
"62200": "Light Rain and Freezing Rain",
"62220": "Rain and Freezing Rain",
"62070": "Mostly Clear and Heavy Freezing Rain",
"62020": "Partly Cloudy and Heavy Freezing Rain",
"62080": "Mostly Cloudy and Heavy Freezing Rain",
"62010": "Heavy Freezing Rain",
"71100": "Mostly Clear and Light Ice Pellets",
"71110": "Partly Cloudy and Light Ice Pellets",
"71120": "Mostly Cloudy and Light Ice Pellets",
"71020": "Light Ice Pellets",
"71080": "Mostly Clear and Ice Pellets",
"71070": "Partly Cloudy and Ice Pellets",
"71090": "Mostly Cloudy and Ice Pellets",
"70000": "Ice Pellets",
"71050": "Drizzle and Ice Pellets",
"71060": "Freezing Rain and Ice Pellets",
"71150": "Light Rain and Ice Pellets",
"71170": "Rain and Ice Pellets",
"71030": "Freezing Rain and Heavy Ice Pellets",
"71130": "Mostly Clear and Heavy Ice Pellets",
"71140": "Partly Cloudy and Heavy Ice Pellets",
"71160": "Mostly Cloudy and Heavy Ice Pellets",
"71010": "Heavy Ice Pellets",
"80010": "Mostly Clear and Thunderstorm",
"80030": "Partly Cloudy and Thunderstorm",
"80020": "Mostly Cloudy and Thunderstorm",
"80000": "Thunderstorm",
"10001": "Clear",
"11001": "Mostly Clear",
"11011": "Partly Cloudy",
"11021": "Mostly Cloudy",
"10011": "Cloudy",
"11031": "Partly Cloudy and Mostly Clear",
"21001": "Light Fog",
"21011": "Mostly Clear and Light Fog",
"21021": "Partly Cloudy and Light Fog",
"21031": "Mostly Cloudy and Light Fog",
"21061": "Mostly Clear and Fog",
"21071": "Partly Cloudy and Fog",
"21081": "Mostly Cloudy and Fog",
"20001": "Fog",
"42041": "Partly Cloudy and Drizzle",
"42031": "Mostly Clear and Drizzle",
"42051": "Mostly Cloudy and Drizzle",
"40001": "Drizzle",
"42001": "Light Rain",
"42131": "Mostly Clear and Light Rain",
"42141": "Partly Cloudy and Light Rain",
"42151": "Mostly Cloudy and Light Rain",
"42091": "Mostly Clear and Rain",
"42081": "Partly Cloudy and Rain",
"42101": "Mostly Cloudy and Rain",
"40011": "Rain",
"42111": "Mostly Clear and Heavy Rain",
"42021": "Partly Cloudy and Heavy Rain",
"42121": "Mostly Cloudy and Heavy Rain",
"42011": "Heavy Rain",
"51151": "Mostly Clear and Flurries",
"51161": "Partly Cloudy and Flurries",
"51171": "Mostly Cloudy and Flurries",
"50011": "Flurries",
"51001": "Light Snow",
"51021": "Mostly Clear and Light Snow",
"51031": "Partly Cloudy and Light Snow",
"51041": "Mostly Cloudy and Light Snow",
"51221": "Drizzle and Light Snow",
"51051": "Mostly Clear and Snow",
"51061": "Partly Cloudy and Snow",
"51071": "Mostly Cloudy and Snow",
"50001": "Snow",
"51011": "Heavy Snow",
"51191": "Mostly Clear and Heavy Snow",
"51201": "Partly Cloudy and Heavy Snow",
"51211": "Mostly Cloudy and Heavy Snow",
"51101": "Drizzle and Snow",
"51081": "Rain and Snow",
"51141": "Snow and Freezing Rain",
"51121": "Snow and Ice Pellets",
"60001": "Freezing Drizzle",
"60031": "Mostly Clear and Freezing drizzle",
"60021": "Partly Cloudy and Freezing drizzle",
"60041": "Mostly Cloudy and Freezing drizzle",
"62041": "Drizzle and Freezing Drizzle",
"62061": "Light Rain and Freezing Drizzle",
"62051": "Mostly Clear and Light Freezing Rain",
"62031": "Partly cloudy and Light Freezing Rain",
"62091": "Mostly Cloudy and Light Freezing Rain",
"62001": "Light Freezing Rain",
"62131": "Mostly Clear and Freezing Rain",
"62141": "Partly Cloudy and Freezing Rain",
"62151": "Mostly Cloudy and Freezing Rain",
"60011": "Freezing Rain",
"62121": "Drizzle and Freezing Rain",
"62201": "Light Rain and Freezing Rain",
"62221": "Rain and Freezing Rain",
"62071": "Mostly Clear and Heavy Freezing Rain",
"62021": "Partly Cloudy and Heavy Freezing Rain",
"62081": "Mostly Cloudy and Heavy Freezing Rain",
"62011": "Heavy Freezing Rain",
"71101": "Mostly Clear and Light Ice Pellets",
"71111": "Partly Cloudy and Light Ice Pellets",
"71121": "Mostly Cloudy and Light Ice Pellets",
"71021": "Light Ice Pellets",
"71081": "Mostly Clear and Ice Pellets",
"71071": "Partly Cloudy and Ice Pellets",
"71091": "Mostly Cloudy and Ice Pellets",
"70001": "Ice Pellets",
"71051": "Drizzle and Ice Pellets",
"71061": "Freezing Rain and Ice Pellets",
"71151": "Light Rain and Ice Pellets",
"71171": "Rain and Ice Pellets",
"71031": "Freezing Rain and Heavy Ice Pellets",
"71131": "Mostly Clear and Heavy Ice Pellets",
"71141": "Partly Cloudy and Heavy Ice Pellets",
"71161": "Mostly Cloudy and Heavy Ice Pellets",
"71011": "Heavy Ice Pellets",
"80011": "Mostly Clear and Thunderstorm",
"80031": "Partly Cloudy and Thunderstorm",
"80021": "Mostly Cloudy and Thunderstorm",
"80001": "Thunderstorm"}
`
const weatherDescriptions = JSON.parse(jsonData);

function getWeatherDescription(code) {
    return weatherDescriptions[code] || "Code not found";
}

function fetchWeather(location) {
    $('#location-name').text(location);
    let apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_KEY}`;
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            displayWeatherData(data);
        },
        error: function (error) {
            console.error('Error fetching weather:', error);
            alert('Error fetching weather: ' + error + '😿😿😿');
        }
    });
}

function toggleTheme(weatherCode) {
    var sheets = document.getElementsByTagName('link');
    sheets[0].href = weatherCode;
}

function displayWeatherData(data) {
    const weatherDiv = $('#weather');
    weatherDiv.empty();

    const timelines = data.timelines;
    console.log(timelines);

    function displayDaily() {
        const daily = timelines.daily;
        weatherDiv.append(`
                    <div id="weather-info" style="overflow-x:auto;">
                        <table id="weather-data">
                            <tr>
                                <th class="time"><span>Time</span></th>
                                <th><span>Temp</span></th>
                                <th class="rain"><span>Rain</span></th>
                                <th class="wind hide-mobile"><span>Wind</span></th>
                                <th class="humidity hide-mobile"><span>Humidity</span></th>
                                <th class="pressure hide-mobile"><span>Pressure</span></th>
                                <th class="description hide-mobile"><span>Description</span></th>
                            </tr>
                        </table>
                    </div>
                `);

        weatherData = $('#weather-data');
        daily.forEach(interval => {
            const time = formatDateTimeDaily(interval.time);
            const {
                temperatureMax,
                temperatureMin,
                temperatureAvg,
                precipitationProbabilityAvg,
                windSpeedAvg,
                humidityAvg,
                pressureSurfaceLevelAvg,
                weatherCodeMax
            } = interval.values;
            const description = getWeatherDescription(weatherCodeMax);
            weatherData.append(`
                            <tr>
                                <td>${time}</td>
                                <td>${temperatureMin}°C, ${temperatureAvg}°C, ${temperatureMax}°C</td>
                                <td>${precipitationProbabilityAvg}%</td>
                                <td class="hide-mobile">${Number((windSpeedAvg * 3.6).toFixed(1))} km/h</td>
                                <td class="hide-mobile">${humidityAvg}%</td>
                                <td class="hide-mobile">${pressureSurfaceLevelAvg} hPa</td>
                                <td class="hide-mobile">${description}</td>
                            </tr>
                `);
        });
    }

    function displayHourly() {
        const hourly = timelines.hourly;
        weatherDiv.append(`
                    <div id="weather-info" style="overflow-x:auto;">
                        <table id="weather-data">
                            <tr>
                                <th class="time"><span>Time</span></th>
                                <th><span>Temp</span></th>
                                <th class="rain"><span>Rain</span></th>
                                <th class="wind hide-mobile"><span>Wind</span></th>
                                <th class="humidity hide-mobile"><span>Humidity</span></th>
                                <th class="pressure hide-mobile"><span>Pressure</span></th>
                                <th class="description hide-mobile"><span>Description</span></th>
                            </tr>
                        </table>
                    </div>
                `);

        weatherData = $('#weather-data');
        hourly.forEach(interval => {
            const time = formatDateTimeHourly(interval.time);
            const {
                temperature,
                precipitationProbability,
                windSpeed,
                humidity,
                pressureSurfaceLevel,
                weatherCode
            } = interval.values;
            const description = getWeatherDescription(weatherCode);
            weatherData.append(`
                            <tr>
                                <td>${time}</td>
                                <td>${temperature}°C</td>
                                <td>${precipitationProbability}%</td>
                                <td class="hide-mobile">${Number((windSpeed * 3.6).toFixed(1))} km/h</td>
                                <td class="hide-mobile">${humidity}%</td>
                                <td class="hide-mobile">${pressureSurfaceLevel} hPa</td>
                                <td class="hide-mobile">${description}</td>
                            </tr>
                `);
        });
    }

    function displayMinutely() {
        const minutely = timelines.minutely;
        weatherDiv.append(`
                    <div id="weather-info" style="overflow-x:auto;">
                        <table id="weather-data">
                            <tr>
                                <th class="time"><span>Time</span></th>
                                <th><span>Temp</span></th>
                                <th class="rain"><span>Rain</span></th>
                                <th class="wind hide-mobile"><span>Wind</span></th>
                                <th class="humidity hide-mobile"><span>Humidity</span></th>
                                <th class="pressure hide-mobile"><span>Pressure</span></th>
                                <th class="description hide-mobile"><span>Description</span></th>
                            </tr>
                        </table>
                    </div>
                `);

        weatherData = $('#weather-data');
        minutely.forEach(interval => {
            const time = formatDateTimeMinutely(interval.time);
            const {
                temperature,
                precipitationProbability,
                windSpeed,
                humidity,
                pressureSurfaceLevel,
                weatherCode
            } = interval.values;
            const description = getWeatherDescription(weatherCode);
            weatherData.append(`
                            <tr>
                                <td>${time}</td>
                                <td>${temperature}°C</td>
                                <td>${precipitationProbability}%</td>
                                <td class="hide-mobile">${Number((windSpeed * 3.6).toFixed(1))} km/h</td>
                                <td class="hide-mobile">${humidity}%</td>
                                <td class="hide-mobile">${pressureSurfaceLevel} hPa</td>
                                <td class="hide-mobile">${description}</td>
                            </tr>
                `);
        });
    }


    let timespan = $('input[name="timespan"]:checked').val();
    if (timespan === "minutely") {
        console.log("timespan", timespan);
        displayMinutely();
    } else if (timespan === "hourly") {
        console.log("timespan", timespan);
        displayHourly();
    } else {
        console.log("timespan", timespan);
        displayDaily();
    }

}

function formatDateTimeDaily(date) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
}

function formatDateTimeHourly(date) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
    };
    return new Date(date).toLocaleDateString(undefined, options);
}

function formatDateTimeMinutely(date) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Date(date).toLocaleDateString(undefined, options);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let location = `${latitude},${longitude}`;
                fetchWeather(location);
            },
            function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.log("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.log("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.log("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        console.log("An unknown error occurred.");
                        break;
                }
            }
        )
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


$(document).ready(function () {
    $('#weather').text("No location and/or timespan specified");
    getLocation();

    function fetchFromInput() {
        const location = $('#location-input').val();
        console.log(location)
        if (location) {
            fetchWeather(location);
        } else {
            getLocation();
        }
    }

    // Click event for the button
    $('#fetch-button').click(fetchFromInput);

    // Keypress event for the input field
    $(document).keypress(function (event) {
        // Check if the pressed key is Enter
        if (event.keyCode === 13) {
            fetchFromInput();
        }
    });

    $('#location-button').click(getLocation);

});
