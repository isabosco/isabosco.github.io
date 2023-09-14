function loadWorkDetails() {
    const workId = new URLSearchParams(window.location.search).get("workId");
    const work = worksData.find(w => w.id === workId);

    if (work) {
        document.querySelector("header h1").textContent = work.title;
        document.querySelector("#work-1-detail img").src = work.imgSrc;
        document.querySelector("#work-1-detail img").alt = work.title;
        document.querySelector("#work-1-detail h2").textContent = work.title;
        document.querySelector("#work-1-detail p").textContent = work.description;
    } else {
        document.querySelector("#work-1-detail").innerHTML = "<p>Work not found.</p>";
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('back-btn').addEventListener('click', function() {
        window.history.back();
    });
});


window.onload = loadWorkDetails


