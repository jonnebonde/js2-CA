import { renderArticles } from "../../ui/renderArticles.js";

export function searchArticles(articles) {
  const searchByTitle = document.querySelector("#title");

  function filterArticles(event) {
    const searchValue = event.target.value.trim();

    const filteredArticles = articles.filter(function (article) {
      if (article.title.trim().toLowerCase().startsWith(searchValue.toLowerCase())) {
        return true;
      }
    });

    if (searchValue) {
      renderArticles(filteredArticles);
    } else {
      renderArticles(articles);
    }
  }

  searchByTitle.addEventListener("keyup", function (e) {
    filterArticles(e);
  });
}
