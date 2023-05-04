import navBarMenu from "./components/ui/renderNavMenu.js";
import { getToken, getUserName, saveToken, saveUser } from "./components/utils/storage/userStorage.js";
import displayMessage from "./components/displayMessage.js";
import { baseUrl } from "./settings/api.js";

navBarMenu()

const token = getToken();
const user = getUserName();

if(user && token) {
  location.href = "/";
}

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const messageContainer = document.querySelector(".message__container");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  messageContainer.innerText = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length !== 0 && passwordValue.length !== 0) {
    authLoginCredentials(usernameValue, passwordValue);
  }
  displayMessage("Please fill out all fields", ".message__container", "error");
}

async function authLoginCredentials(username, password) {
  const url = baseUrl + "/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
      console.log(json.user, json.jwt);

      saveToken(json.jwt);
      saveUser(json.user);

      displayMessage("Success", ".message__container", "success");
      redirect();
    }

    if (json.error) {
      displayMessage("invalid login credentials", ".message__container", "error");
    }
  } catch (error) {
    console.log(error);
  }
}

function redirect() {
  setTimeout(function () {
    location.href = "/";
  }, 1000);
}