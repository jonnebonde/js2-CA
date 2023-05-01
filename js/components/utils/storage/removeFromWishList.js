import { addToWishList } from "./addToWishList.js";
import { renderWishList } from "../../ui/renderWishList.js";

export function removeFromWishList(event, wishList) {
  let id = event.target.dataset.id;

  const checkIfOnWishList = wishList.findIndex(function (wish) {
    return wish.id === id;
  });

  if (checkIfOnWishList !== -1) {
    wishList.splice(checkIfOnWishList, 1);
    addToWishList(wishList);
    renderWishList(wishList);
  }
}