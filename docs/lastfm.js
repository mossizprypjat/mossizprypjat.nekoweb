$(document).ready(function () {
    // Last.fm API endpoint for recent tracks
    const username = "mossizprypjat";
    const apiKey = "7ac96f7c093377bb4fb4f935e0868581";
    const apiUrl = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + username + "&api_key=" + apiKey + "&limit=1&format=json";

    // Fetch data from Last.fm
    $.getJSON(apiUrl, function (data) {
        // Check if data was returned successfully
        if (data && data.recenttracks && data.recenttracks.track.length > 0) {
            var track = data.recenttracks.track[0];
            var artist = track.artist["#text"];
            var song = track.name;
            var imageUrl = track.image[2]["#text"]; // You can use different image sizes, here using 300x300

            // Construct HTML content to display last played song
            var html = "<hyper>" + artist;
            html += "<p>" + song + "</p>";
            html += "<img src='" + imageUrl + "' alt='Album Cover'>";

            // Update the div with id 'lastPlayed' with the HTML content
            $("#lastPlayed").html(html);
        } else {
            // If no data is returned or there was an error
            $("#lastPlayed").html("<p>No recent tracks found.</p>");
        }
    });
});
