document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-container button");
    const searchInput = document.querySelector("#search");
  
    searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const results = [...getMatchingWorks(searchTerm), ...getMatchingExhibitions(searchTerm)];
      displayResults(results);
    });
  });
  
  const getMatchingWorks = (term) => 
    worksData
      .filter(work => work.title.toLowerCase().includes(term) || work.description.toLowerCase().includes(term))
      .map(work => work.title);
  
  const getMatchingExhibitions = (term) => 
    exhibitions
      .filter(exhibition => exhibition.title.toLowerCase().includes(term) || exhibition.date.toLowerCase().includes(term))
      .map(exhibition => `${exhibition.title} - ${exhibition.date}`);
  
  function createListItem(result) {
    const li = document.createElement("li");
    const a = document.createElement("a");
  
    const matchedWork = worksData.find(work => result.includes(work.title));
    a.href = matchedWork ? `work-detail.html?workId=${matchedWork.id}` : "exhibitions.html";
    a.textContent = result;
    
    li.appendChild(a);
    return li;
  }
  
  function displayResults(results) {
    const resultContainer = document.createElement("div");
    resultContainer.id = "search-results";
  
    if (!results.length) {
      resultContainer.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    resultContainer.innerHTML = "<h2>Search Results</h2>";
    const ul = document.createElement("ul");
  
    results.forEach(result => ul.appendChild(createListItem(result)));
    
    resultContainer.appendChild(ul);
    resultContainer.className = "search-results";
  
    const oldResults = document.querySelector("#search-results");
    oldResults?.remove();
  
    const searchWrapper = document.querySelector(".search-wrapper");
    searchWrapper.appendChild(resultContainer);
  }
  