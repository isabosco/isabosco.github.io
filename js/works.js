document.addEventListener("DOMContentLoaded", function () {
  const worksContainer = document.getElementById("works-container");
  const backBtn = document.getElementById("back-btn");

  // Data for the works
  const worksData = [
    { title: "work-1", year: 1990, imgSrc: "images/untitled  (fortune cookie corner) 1990.jpeg" },
    { title: "work-2", year: 1992, imgSrc: "images/Untitled  (Rossmore) 1992.jpeg" },
    { title: "work-3", year: 1993, imgSrc: "images/untitled  Print on Paper Endless Supply 1992 93.jpeg" },
    { title: "work-4", year: 1993, imgSrc: "images/untitled (couple )1993.jpeg" },
    { title: "work-5", year: 1991, imgSrc: "images/untitled (go-go dancing platform) 1991.jpeg" },
    { title: "work-6", year: 1990, imgSrc: "images/untitled (usa today) 90.jpeg" },
  ];

  // Function to create a work element
  const createWork = (work) => {
    const a = document.createElement("a");
    a.href = `work-detail.html?workId=${work.title}`;

    const section = document.createElement("section");
    section.id = work.title;

    const h2 = document.createElement("h2");
    h2.textContent = work.title;

    const p = document.createElement("p");
    p.textContent = `Year: ${work.year}`;

    const img = document.createElement("img");
    img.src = work.imgSrc;
    img.alt = work.title;

    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(img);
    a.appendChild(section);
    worksContainer.appendChild(a);
  };

  // Function to display works based on the selected year
  const displayWorks = (year) => {
    worksContainer.innerHTML = "";
    const filteredData = year === "all" ? worksData : worksData.filter((work) => work.year === parseInt(year));
    filteredData.forEach((work) => {
      createWork(work);
    });
  };

  // Initial display of all works
  displayWorks("all");

  // Add click event listener to the back button
  backBtn.addEventListener("click", function () {
    window.history.back();
  });

  // Add click event listeners to filter buttons
  const filterButtons = document.querySelectorAll("#filter-buttons button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const year = button.getAttribute("data-filter");
      displayWorks(year);
    });
  });
});
