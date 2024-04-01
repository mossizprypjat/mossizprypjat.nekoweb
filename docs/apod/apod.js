// apod.js
const apiKey = 'WQxpeAqkAEeQbMEdHbOXyxK68ERKjUa33TbhGPYA';
let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
let currentDate = new Date();

function fetchApod(date) {
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date.toISOString().split('T')[0]}`;
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            const imageUrl = data.url;
            const title = data.title;
            const explanation = data.explanation;

            $('#apod-image').attr('src', imageUrl);
            $('#apod-title').text(title);
            $('#apod-explanation').text(explanation);
        },
        error: function (error) {
            console.error('Error fetching APoD:', error);
        }
    });
}

$(document).ready(function () {
    fetchApod(currentDate); // Fetch the APoD for the current date

    $('#fetch-button').click(function () {
        const inputDate = $('#date-input').val();
        const selectedDate = new Date(inputDate);
        if (!isNaN(selectedDate.getTime())) {
            fetchApod(selectedDate);
        } else {
            alert("Please enter a valid date in the format YYYY-MM-DD.");
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
