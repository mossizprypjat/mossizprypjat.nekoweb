const pageviewsCount = document.getElementById('pageviews-count');
const visitsCount = document.getElementById('visits-count');

if (sessionStorage.getItem('visit') === null) {
    // yippee nieuwe visitor
    updateCounter('type=visitor-pageview');
} else {
    // pageview
    updateCounter('type=pageview');
}

function updateCounter(type) {
    fetch('http://localhost?' + type)
        .then(res => res.json())
        .then(data => {
            pageviewsCount.textContent = data.pageviews;
            visitsCount.textContent = data.visits;
        })
}

sessionStorage.setItem('visit', 'x');
