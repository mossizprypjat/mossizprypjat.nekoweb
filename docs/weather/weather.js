const API_KEY = 'rpZIedEqT9SSGNUa13dg3iYTyGwk6SrH';

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

function displayWeatherData(data) {
    const weatherDiv = $('#weather');
    weatherDiv.empty();

    const timelines = data.timelines;
    console.log(timelines);

    function displayDaily() {
        const daily = timelines.daily;
        weatherDiv.append(`
                    <div id="weather-info">
                        <table id="weather-data">
                            <tr>
                                <td><strong>Time</strong></td>
                                <td><strong>Temperature (Max, Avg, Min)</strong></td>
                                <td><strong>Rain</strong></td>
                                <td><strong>Wind</strong></td>
                                <td><strong>Humidity</strong></td>
                                <td><strong>Pressure</strong></td>
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
                weathercode
            } = interval.values;
            //TODO: via weather_codes.json de text voor de weathercode weergeven
            weatherData.append(`
                            <tr>
                                <td>${time}</td>
                                <td>${temperatureMin}°C, ${temperatureAvg}°C, ${temperatureMax}°C</td>
                                <td>${precipitationProbabilityAvg}%</td>
                                <td>${Number((windSpeedAvg * 3.6).toFixed(1))} km/h</td>
                                <td>${humidityAvg}%</td>
                                <td>${pressureSurfaceLevelAvg} hPa</td>
                            </tr>
                `);
        });}

    function displayHourly() {
        const hourly = timelines.hourly;
        weatherDiv.append(`
                    <div id="weather-info">
                        <table id="weather-data">
                            <tr>
                                <td><strong>Time</strong></td>
                                <td><strong>Temperature</strong></td>
                                <td><strong>Rain</strong></td>
                                <td><strong>Wind</strong></td>
                                <td><strong>Humidity</strong></td>
                                <td><strong>Pressure</strong></td>
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
                weathercode
            } = interval.values;
            //TODO: via weather_codes.json de text voor de weathercode weergeven
            weatherData.append(`
                            <tr>
                                <td>${time}</td>
                                <td>${temperature}°C</td>
                                <td>${precipitationProbability}%</td>
                                <td>${Number((windSpeed * 3.6).toFixed(1))} km/h</td>
                                <td>${humidity}%</td>
                                <td>${pressureSurfaceLevel} hPa</td>
                            </tr>
                `);
        });}

    function displayMinutely() {
        const minutely = timelines.minutely;
        weatherDiv.append(`
                    <div id="weather-info">
                        <table id="weather-data">
                            <tr>
                                <td><strong>Time</strong></td>
                                <td><strong>Temperature</strong></td>
                                <td><strong>Rain</strong></td>
                                <td><strong>Wind</strong></td>
                                <td><strong>Humidity</strong></td>
                                <td><strong>Pressure</strong></td>
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
                weathercode
            } = interval.values;
            //TODO: via weather_codes.json de text voor de weathercode weergeven
            weatherData.append(`
                            <tr>
                                <td>${time}</td>
                                <td>${temperature}°C</td>
                                <td>${precipitationProbability}%</td>
                                <td>${Number((windSpeed * 3.6).toFixed(1))} km/h</td>
                                <td>${humidity}%</td>
                                <td>${pressureSurfaceLevel} hPa</td>
                            </tr>
                `);
        });}


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

function weatherCodeToWeather(weatherCode) {
    //TODO: via weather_codes.json de text voor de weathercode weergeven
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
