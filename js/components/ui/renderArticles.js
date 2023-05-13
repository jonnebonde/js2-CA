import { resultsContainer } from "../constants/constants.js";
import displayMessage from "../displayMessage.js";
import { newDateFormat } from "../reformatDate.js";
import { getFromLocalStorage } from "../utils/storage/localStorage.js";
import { createFavouritesList } from "../utils/storage/createFavouritesList.js";
import { keys } from "../../settings/storageKeys.js";
import { token, user } from "../utils/storage/userStorage.js";

export function renderArticles(items) {
  resultsContainer.innerHTML = "";

  const favouritesKey = keys[0];

  if (items.length === 0) {
    displayMessage("No products found", ".results__container", "error");
  }

  const favsList = getFromLocalStorage(favouritesKey);

  let btnText = "Add to favourites";

  for (let favs of items) {
    const isOnFavsList = favsList.find(function (article) {
      return parseInt(article.id) === favs.id;
    });

    if (isOnFavsList) {
      btnText = "Remove from favourites";
    } else {
      btnText = "Add to favourites";
    }

    const date = newDateFormat(favs.published_at);

    const cardContainer = document.createElement("article");
    cardContainer.classList.add("card");
    cardContainer.innerHTML = `
    <h4></h4>
    <p></p>
    <span></span>
    <time></time>
    <div>
      <button></button>
    </div>
    `;

    cardContainer.querySelector("h4").innerText = favs.title;
    cardContainer.querySelector("span").innerText = "Author: " + favs.author;
    cardContainer.querySelector("p").innerText = favs.summary;
    cardContainer.querySelector("time").innerText = "Published: " + date;

    const btnContainer = cardContainer.querySelector("div");
    btnContainer.classList.add("btn__container");

    const favBtn = cardContainer.querySelector("button");
    favBtn.innerText = btnText;
    favBtn.setAttribute("data-id", favs.id);
    favBtn.setAttribute("data-title", favs.title);
    favBtn.setAttribute("data-author", favs.author);
    favBtn.setAttribute("data-summary", favs.summary);
    favBtn.setAttribute("data-date", favs.published_at);
    favBtn.setAttribute("id", "favBtn");

    resultsContainer.append(cardContainer);

    if (token && user) {
      const editBtn = document.createElement("a");
      editBtn.innerText = "Edit";
      editBtn.setAttribute("href", "/edit.html?id=" + favs.id);
      btnContainer.append(editBtn);
    }
  }

  const favButton = resultsContainer.querySelectorAll("#favBtn");

  favButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      createFavouritesList(e, favouritesKey);
    });
  });
}
