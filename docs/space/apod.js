// space.js
const apiKey = "WQxpeAqkAEeQbMEdHbOXyxK68ERKjUa33TbhGPYA";
let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
let currentDate = new Date();

function fetchApod(date) {
    $('#apod-image').hide();
    $('#apod-video').hide();

    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date.toISOString().split('T')[0]}`;
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            const title = data.title;
            const date = data.date;
            const explanation = data.explanation;

            let url;
            if (data.media_type === "image") {
                url = data.hdurl;
                $('#apod-image').attr('src', url).show();
            } else {
                url = data.url;
                $('#apod-video').attr('src', url).show();
            }

            $('#apod-title').text(title);
            $('#apod-date').text(date);
            $('#apod-explanation').text(explanation);
        },
        error: function (error) {
            console.error('Error fetching APoD:', error);
            alert('Error fetching APoD: ' + JSON.parse(error.responseText).msg + '😿😿😿');
        }
    });
}

$(document).ready(function () {
    fetchApod(currentDate); // Fetch the APoD for the current date

    function fetchApodFromInput() {
        const inputDate = $('#date-input').val();
        const selectedDate = new Date(inputDate);
        if (!isNaN(selectedDate.getTime())) {
            currentDate = selectedDate;
            fetchApod(selectedDate);
        } else {
            alert("Please enter a valid date in the format YYYY-MM-DD.");
        }
    }

    // Click event for the button
    $('#fetch-button').click(fetchApodFromInput);

    // Keypress event for the input field
    $(document).keypress(function(event) {
        // Check if the pressed key is Enter
        if (event.keyCode === 13) {
            fetchApodFromInput();
        }
    });

    $('#prev-button').click(function () {
        currentDate.setDate(currentDate.getDate() - 1);
        fetchApod(currentDate);
    });

    $('#next-button').click(function () {
        currentDate.setDate(currentDate.getDate() + 1);
        fetchApod(currentDate);
    });
});
