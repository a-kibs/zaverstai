// select-фильтр
const select = document.querySelector(".article-theme-selector");
const articles = document.querySelectorAll(".articles-item");

select.onchange = function () {
    const value = select.options[select.selectedIndex].value;
    articles.forEach(article => {
        if (value === "all") {
            article.classList.remove("visually-hidden");
        }
        else {
            const tags = article.querySelector(".article-tags").dataset.tags;
            if (tags.indexOf(value) !== -1) {
                article.classList.remove("visually-hidden");
            } else {
                article.classList.add("visually-hidden");
            }
        }
    });
}

