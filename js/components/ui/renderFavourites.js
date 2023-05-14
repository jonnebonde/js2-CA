import { favouritesContainer, cleanBtnContainer } from "../constants/constants.js";
import { removeFromList } from "../utils/storage/removeFromList.js";
import displayMessage from "../displayMessage.js";
import { keys } from "../../settings/storageKeys.js";
import { deleteFromLocalStorage } from "../utils/storage/localStorage.js";

export function renderFavourites(favsList, key) {
  favouritesContainer.innerHTML = "";

  if (favsList.length === 0) {
    displayMessage("No favourites", ".favourites__container", "error");
    cleanBtnContainer.style.display = "none";
  } else {
    cleanBtnContainer.style.display = "block";

    favsList.forEach((favs) => {
      const favouriteCardContainer = document.createElement("article");
      favouriteCardContainer.classList.add("card");

      favouriteCardContainer.innerHTML = `
      <h4></h4>
      <span></span>
      <p></p>
      <button></button>
      `;

      favouriteCardContainer.querySelector("h4").innerText = favs.title;
      favouriteCardContainer.querySelector("span").innerText = "Author: " + favs.author;
      favouriteCardContainer.querySelector("p").innerText = favs.summary;

      const favBtn = favouriteCardContainer.querySelector("button");
      favBtn.innerText = "Remove from favourites";
      favBtn.setAttribute("data-id", favs.id);

      favouritesContainer.append(favouriteCardContainer);

      const clearFavoritesBtn = document.querySelector(".clean--btn__container button");

      clearFavoritesBtn.addEventListener("click", function () {
        deleteFromLocalStorage(keys[0]);
        renderFavourites([], keys[0]);
      });
    });
  }

  const favButton = document.querySelectorAll(".card button");

  favButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      removeFromList(id, favsList, key);
    });
  });
}
