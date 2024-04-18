function fetchWeather() {
    const Url = `https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`;

    $.ajax({
        url: Url,
        method: 'GET',
        success: function (data) {
            // Check if the data contains any sol keys
            const soles = Object.keys(data.soles);
            console.log("soles", soles)
            if (soles.length > 0) {
                const latestData = data.soles[0];
                console.log("latest data", latestData)

                // Extract relevant data
                const date = latestData.terrestrial_date;
                const minTemp = latestData.min_temp; // Min temperature in Celsius
                const maxTemp = latestData.max_temp; // Max temperature in Celsius
                const pressure = latestData.pressure; // Average pressure in Pascal
                const atmosphere = latestData.atmo_opacity;
                const sunset = latestData.sunset;
                const sunrise = latestData.sunrise;
                const uvIndex = latestData.local_uv_irradiance_index

                // Display data
                $('#sol-date').text(date);
                $('#min-temp').text(minTemp);
                $('#max-temp').text(maxTemp);
                $('#pressure').text(pressure);
                $('#atmosphere').text(atmosphere);
                $('#sunset').text(sunset);
                $('#sunrise').text(sunrise);
                $('#uvIndex').text(uvIndex);
            } else {
                console.error('No weather data available.');
                $('#weather-info').text('No weather data available');
            }
        },
        error: function (error) {
            console.error('Error fetching weather data:', error);
        }
    });
}

$(document).ready(function () {
    fetchWeather();
});
