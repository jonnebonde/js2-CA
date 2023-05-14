import { addLocalStorage } from "./localStorage.js";
import { renderFavourites } from "../../ui/renderFavourites.js";

export function removeFromList(id, list, key) {

  console.log(typeof(id), list, key)

  const checkIfOnList = list.findIndex(function (item) {
    console.log(typeof(item.id), typeof(id), item.id, id)
    return item.id === id;
  });

  console.log(checkIfOnList)

  if (checkIfOnList !== -1) {
    list.splice(checkIfOnList, 1);
    addLocalStorage(list, key);
    renderFavourites(list, key);
  }
}
