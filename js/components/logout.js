import { deleteFromLocalStorage } from "./utils/storage/localStorage.js";
import { getToken, getUserName } from "./utils/storage/userStorage.js";
import { keys } from "../settings/storageKeys.js";
import navBarMenu from "./ui/renderNavMenu.js";

export default function userLogout() {
  const user = getUserName();
  const token = getToken();

  if (user && token) {
    const logOutBtn = document.querySelector("#logout-btn");

    function logOut() {
      console.log("dafg");
      deleteFromLocalStorage(keys[1]);
      deleteFromLocalStorage(keys[2]);
      location.href = "/";
    }

    logOutBtn.addEventListener("click", logOut);
  }
}
