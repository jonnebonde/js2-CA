import { resultsContainer } from "../constants/constants.js";
import { displayMessage } from "./displayMessage.js";
import { getWishList } from "../utils/storage/getWishList.js";
import { createWishList } from "../utils/storage/createWishList.js";

export function renderProducts(items) {
  resultsContainer.innerHTML = "";

  if (items.length === 0) {
    displayMessage("error", "No products found", ".results__container");
  }

  const wishList = getWishList();

  let btnText = "add to wishlist";

  for (let wish of items) {
    const isOnWishList = wishList.find(function (product) {
      return parseInt(product.id) === wish.id;
    });

    if (isOnWishList) {
      btnText = "remove from wishlist";
    } else {
      btnText = "add to wishlist";
    }

    resultsContainer.innerHTML += `<div class="card">
    <h4>${wish.title}</h4>
    <span>Price: ${wish.price}</span>
    <Button data-id="${wish.id}" data-title="${wish.title}" data-price="${wish.price}">${btnText}</Button>
    </div>`;
  }

  const wishListButton = document.querySelectorAll(".card button");

  wishListButton.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      createWishList(e);
    });
  });
}
