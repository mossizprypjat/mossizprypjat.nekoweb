let url = "https://catfact.ninja/fact";

function catfactBtn_pressed(){
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            const catfact = data.fact;
            $('#catfact').text(catfact);
        },
        error: function (error) {
            console.error('Error fetching APoD:', error);
            alert('Error fetching catfact: ' + JSON.parse(error.responseText).msg + '😿😿😿');
        }
    });
}

$(document).ready(function () {
    catfactBtn_pressed();

    $('#catfact-button').click(function (){
        catfactBtn_pressed();
    })
})
