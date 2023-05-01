import { getWishList } from "./components/utils/storage/getWishList.js";
import { renderWishList } from "./components/ui/renderWishList.js";

function wishList() {
  const currentWishList = getWishList();
  renderWishList(currentWishList);
}

wishList();
