document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('back-btn').addEventListener('click', function() {
        window.history.back();
    });

    const container = document.getElementById('exhibitions-container');
    
    exhibitions.forEach(exhibition => {
        appendArticle(exhibition, container);
    });
});


const appendArticle = (exhibition, container) => {
    const article = document.createElement('article');
    
    const h2 = document.createElement('h2');
    h2.textContent = exhibition.title;
    article.appendChild(h2);
    
    const p = document.createElement('p');
    p.textContent = exhibition.date;
    article.appendChild(p);
    
    container.appendChild(article);
}