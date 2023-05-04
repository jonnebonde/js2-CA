import { getFromLocalStorage } from "./components/utils/storage/localStorage.js";
import { renderFavourites } from "./components/ui/renderFavourites.js";
import { keys } from "./settings/storageKeys.js";
import navBarMenu from "./components/ui/renderNavMenu.js";
import userLogout from "./components/logout.js";

navBarMenu()
userLogout()

function favouritesList() {

  const favsKey = keys[0];
  const favsList = getFromLocalStorage(favsKey);
  renderFavourites(favsList, favsKey);
}

favouritesList();