// https://www.cbox.ws/admin?preproc=switch&box=5-949913

displayViewCounter("mossizprypjat");

async function fetchViewCounter(name) {
    return await fetch("https://nekoweb.org/api/site/info/mossizprypjat")
        .then(x => x.json()).then(x => x.views);
}

async function displayViewCounter(name) {
    const views = await fetchViewCounter(name)
    let counters = document.querySelectorAll(".view-counter");
    for (let i in counters) {
        counters[i].innerText = views;
    }
    console.log(counters)
}
