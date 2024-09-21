var urlToGetAllOpenBugs = "https://api.github.com/repos/mossizprypjat/mossizprypjat.nekoweb/issues?state=open";
var urlToGetAllCommits = "https://api.github.com/repos/mossizprypjat/mossizprypjat.nekoweb/commits";


$(document).ready(function () {
    $.getJSON(urlToGetAllOpenBugs, function (allIssues) {
        $("issues").append("found " + allIssues.length + " issues</br>");
        $.each(allIssues, function (i, issue) {
            if (issue.body) {
                $("issues")
                    .append("<div class=\"issue\">" + issue.number + " - " + issue.title + "<br>" + issue.body +"</div>");
            }
            else {
                $("issues")
                    .append("<div class=\"issue\"><b>" + issue.number + "</b> - " + issue.title + "</div>");
            }

        });
    });

    $.getJSON(urlToGetAllCommits, function (allCommits) {
        $("updates").append("found " + allCommits.length + " commits</br>");
        $.each(allCommits, function (i, commitData) {
            console.log(commitData);
            var commit = commitData.commit;
            var sha = commitData.sha;
            var author = commit.author.name;
            var date = commit.author.date;
            var message = commit.message;

            $("updates").append("<div class=\"issue\">" +
                "<b>Date:</b> " + date + "<br>" +
                "<b>Message:</b> " + message + "</div>"
            );
        });
    });
});
