function getCurrent() {
    return fetch("https://xkcd.vercel.app/?comic=latest")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.num)
        .catch(error => {
            console.error("Error fetching current XKCD comic:", error);
            throw error;
        });
}

function getComic(number) {
    let customUrl = `https://xkcd.vercel.app/?comic=${number}`;
    fetch(customUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const image = data.img;
            const title = data.title;
            const transcript = data.transcript;
            const alt = data.alt;
            const day = data.day;
            const month = data.month;
            const year = data.year;

            const date = `${day}-${month}-${year}`;

            $('#xkcd-image').attr('src', image);
            $('#xkcd-title').text(title);
            $('#xkcd-date').text(date);
            $('#xkcd-transcript').text(transcript);
            $('#xkcd-alt').text(alt);

            console.log(data)
        })
        .catch(error => {
            console.error("Error fetching XKCD comic:", error);
        });
}

$(document).ready(function () {
    let number;
    getCurrent()
        .then((num) => {
            number = num;
            getComic(number);
        });

    $('#fetch-button').click(function () {
        const inputNumber = $('#number-input').val();
        if (!isNaN(inputNumber)) {
            number = inputNumber;
            getComic(number);
        } else {
            alert("Please enter a valid number");
        }
    });

    $('#prev-button').click(function () {
        number -= 1;
        getComic(number);
    });

    $('#next-button').click(function () {
        number += 1;
        getComic(number);
    });
});
