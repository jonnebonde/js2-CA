import { wishKey } from "../../constants/constants.js";

export function getWishList() {
  const wishList = localStorage.getItem(wishKey);

  if (!wishList) {
      return [];
  } else {
      return JSON.parse(wishList);
  }
}