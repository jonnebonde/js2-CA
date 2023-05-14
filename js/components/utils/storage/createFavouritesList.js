import { addLocalStorage, getFromLocalStorage } from "./localStorage.js";

export function createFavouritesList(event, key) {
  const { id, title, author, summary } = event.target.dataset;

  if (event.target.innerText === "Remove from favourites") {
    event.target.innerText = "Add to favourites";
  } else {
    event.target.innerText = "Remove from favourites";
  }

  const currentFavsList = getFromLocalStorage(key);

  const checkIfOnFavsList = currentFavsList.find(function (fav) {
    return fav.id === id;
  });

  if (checkIfOnFavsList === undefined) {
    const favItem = { id: id, title: title, author: author, summary: summary };
    currentFavsList.push(favItem);
    addLocalStorage(currentFavsList, key);
  } else {
    const newFavItem = currentFavsList.filter((favs) => favs.id !== id);

    addLocalStorage(newFavItem, key);
  }
}
