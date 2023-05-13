import { addLocalStorage } from "./localStorage.js";
import { renderFavourites } from "../../ui/renderFavourites.js";

export function removeFromList(event, list, key) {
  let id = event.target.dataset.id;

  const checkIfOnList = list.findIndex(function (item) {
    return item.id === id;
  });

  if (checkIfOnList !== -1) {
    list.splice(checkIfOnList, 1);
    addLocalStorage(list, key);
    renderFavourites(list, key);
  }
}
