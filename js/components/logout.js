import { deleteFromLocalStorage } from "./utils/storage/localStorage.js";
import { token, user } from "./utils/storage/userStorage.js";
import { keys } from "../settings/storageKeys.js";

export default function userLogout() {
  if (user && token) {
    const logOutBtn = document.querySelector(".login__container button");

    function logOut() {
      const logOutConfirm = confirm("Are you sure you want to log out?");

      if (logOutConfirm) {
        deleteFromLocalStorage(keys[1]);
        deleteFromLocalStorage(keys[2]);
        location.href = "/index.html";
      }
    }
    logOutBtn.addEventListener("click", logOut);
  }
}
