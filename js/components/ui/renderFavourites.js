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
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");

      const cardTitle = document.createElement("h4");
      cardTitle.innerText = favs.title;
      cardContainer.appendChild(cardTitle);

      const cardAuthor = document.createElement("span");
      cardAuthor.innerText = "Author: " + favs.author;
      cardContainer.appendChild(cardAuthor);

      const cardButton = document.createElement("button");
      cardButton.innerText = "Remove from wishlist";
      cardButton.setAttribute("data-id", favs.id);
      cardContainer.appendChild(cardButton);

      favouritesContainer.appendChild(cardContainer);

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
      removeFromList(e, favsList, key);
    });
  });
}
