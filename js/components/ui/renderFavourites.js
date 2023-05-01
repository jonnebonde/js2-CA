import { favouritesContainer } from "../constants/constants.js";
import { removeFromList } from "../utils/storage/removeFromList.js";
import { displayMessage } from "./displayMessage.js";

export function renderFavourites(favsList, key) {
  favouritesContainer.innerHTML = "";

  if (favsList.length === 0) {
    displayMessage("error", "No favourites", ".favourites__container");
  }

  favsList.forEach((favs) => {
    favouritesContainer.innerHTML += `<div class="card">
  <h4>${favs.title}</h4>
  <span>Author: ${favs.author}</span>
  <Button data-id="${favs.id}">Remove from wishlist</Button>
  </div>`;
  });

  const favButton = document.querySelectorAll(".card button");

  favButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      removeFromList(e, favsList, key);
    });
  });
}
