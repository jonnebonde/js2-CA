import { addLocalStorage, getFromLocalStorage } from "./localStorage.js";

export function createFavouritesList(event, key) {
  if (event.target.innerText === "Remove from favourites") {
    event.target.innerText = "Add to favourites";
  } else {
    event.target.innerText = "Remove from favourites";
  }

  let id = event.target.dataset.id;
  let title = event.target.dataset.title;
  let author = event.target.dataset.author;
  let summary = event.target.dataset.summary;

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
