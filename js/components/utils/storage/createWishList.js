import { addToWishList } from "./addToWishList.js";
import { getWishList } from "./getWishList.js";

export function createWishList(event) {
  if (event.target.innerText === "remove from wishlist") {
    event.target.innerText = "add to wishlist";
  } else {
    event.target.innerText = "remove from wishlist";
  }

  let id = event.target.dataset.id;
  let title = event.target.dataset.title;
  let price = event.target.dataset.price;

  const currentWishList = getWishList();

  const checkIfOnWishList = currentWishList.find(function (wish) {
    return wish.id === id;
  });

  if (checkIfOnWishList === undefined) {
    const wishItem = { id: id, title: title, price: price };
    currentWishList.push(wishItem);
    addToWishList(currentWishList);
  } else {
    const newWish = currentWishList.filter((wish) => wish.id !== id);

    addToWishList(newWish);
  }
}
