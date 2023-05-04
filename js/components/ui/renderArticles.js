import { resultsContainer } from "../constants/constants.js";
import displayMessage from "../displayMessage.js";
import { newDateFormat } from "../reformatDate.js";
import { getFromLocalStorage } from "../utils/storage/localStorage.js";
import { createFavouritesList } from "../utils/storage/createFavouritesList.js";
import { keys } from "../../settings/storageKeys.js";

export function renderArticles(items) {
  resultsContainer.innerHTML = "";

  const favouritesKey = keys[0];

  if (items.length === 0) {
    displayMessage("No products found", ".results__container", "error" );
  }

  const favsList = getFromLocalStorage(favouritesKey);

  let btnText = "add to favourites";

  for (let favs of items) {
    const isOnFavsList = favsList.find(function (article) {
      return parseInt(article.id) === favs.id;
    });

    if (isOnFavsList) {
      btnText = "remove from favourites";
    } else {
      btnText = "add to favourites";
    }

    const date = newDateFormat(favs.published_at);


    console.log(date)

    resultsContainer.innerHTML += `<div class="card">
    <h4>${favs.title}</h4>
    <p>Author: ${favs.author}</p>
    <p>Published: ${date}</p>
    <Button data-id="${favs.id}" data-title="${favs.title}" data-author="${favs.author}" data-summary="${favs.summary}" data-date="${favs}">${btnText}</Button>
    </div>`;
  }

  const favButton = document.querySelectorAll(".card button");

  favButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      createFavouritesList(e, favouritesKey);
    });
  });
}
