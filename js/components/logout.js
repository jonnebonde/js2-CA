import { deleteFromLocalStorage } from "./utils/storage/localStorage.js";
import { getToken, getUserName } from "./utils/storage/userStorage.js";
import { keys } from "../settings/storageKeys.js";

export default function userLogout() {
  const user = getUserName();
  const token = getToken();

  if (user && token) {
    const logOutBtn = document.querySelector(".login__container button");

    function logOut() {
      deleteFromLocalStorage(keys[1]);
      deleteFromLocalStorage(keys[2]);
      location.href = "/index.html";
    }

    logOutBtn.addEventListener("click", logOut);
  }
}
