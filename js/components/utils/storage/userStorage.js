import { addLocalStorage, getFromLocalStorage } from "./localStorage.js";
import { keys } from "../../../settings/storageKeys.js";

export function saveToken(token) {
  addLocalStorage(token, keys[2]);
}

function getToken() {
  return getFromLocalStorage(keys[2]);
}

export function saveUser(user) {
  addLocalStorage(user, keys[1]);
}

function getUserName() {
  const user = getFromLocalStorage(keys[1]);
  if (user) {
    return user.username;
  }

  return null;
}

export const token = getToken();
export const user = getUserName();
