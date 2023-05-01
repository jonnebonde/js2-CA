import { wishKey } from "../../constants/constants.js"

export function addToWishList(item) {
  localStorage.setItem(wishKey, JSON.stringify(item))
}