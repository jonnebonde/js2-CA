import { wishListContainer } from "../constants/constants.js";
import { removeFromWishList } from "../utils/storage/removeFromWishList.js";
import { displayMessage } from "./displayMessage.js";

export function renderWishList(wishList) {
  wishListContainer.innerHTML = "";

  if (wishList.length === 0) {
    displayMessage("error", "No wishList", ".wish__container");
  }

  wishList.forEach((wishes) => {
    wishListContainer.innerHTML += `<div class="card">
  <h4>${wishes.title}</h4>
  <span>Price: ${wishes.price}</span>
  <Button data-id="${wishes.id}">Remove from wishlist</Button>
  </div>`;
  });

  const wishButton = document.querySelectorAll(".card button");

  wishButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      removeFromWishList(e, wishList);
    });
  });
}
