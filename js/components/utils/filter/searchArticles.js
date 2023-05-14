import { renderArticles } from "../../ui/renderArticles.js";

export function searchArticles(articles) {
  const searchByTitle = document.querySelector("#title");

  function filterArticles(event) {
    const { value } = event.target;
    const searchValue = value.trim().toLowerCase();

    const filteredArticles = articles.filter(function (article) {
      if (article.title.trim().toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    if (searchValue) {
      renderArticles(filteredArticles);
    } else {
      renderArticles(articles);
    }
  }

  searchByTitle.addEventListener("keyup", (e) => {
    filterArticles(e);
  });
}
