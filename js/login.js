import navBarMenu from "./components/ui/renderNavMenu.js";
import { getToken, getUserName} from "./components/utils/storage/userStorage.js";
import displayMessage from "./components/displayMessage.js";
import { checkLength } from "./components/utils/checkLength.js";
import { authLoginCredentials } from "./components/utils/api/apiLogin.js";

navBarMenu()

const token = getToken();
const user = getUserName();

if(user && token) {
  location.href = "/";
}

const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const usernameMessage = document.querySelector("#usernameHelp");
const passwordMessage = document.querySelector("#passwordHelp");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const usernameValue = checkLength(usernameInput.value, 0);
  const passwordValue = checkLength(passwordInput.value, 0);

  if (usernameValue) {
    usernameMessage.textContent = "We'll never share your username with anyone";
    usernameInput.classList.remove("error__input");
    usernameInput.classList.add("success__input");
  } else {
    displayMessage("Username is required", "#usernameHelp", "error");
    usernameInput.classList.remove("success__input");
    usernameInput.classList.add("error__input");
  }

  if (passwordValue) {
    passwordMessage.textContent = "Your password is safe with us.";
    passwordInput.classList.remove("error__input");
    passwordInput.classList.add("success__input");
  } else {
    displayMessage("Password is required", "#passwordHelp", "error");
    passwordInput.classList.remove("success__input");
    passwordInput.classList.add("error__input");
  }

  if (usernameValue && passwordValue) {
    authLoginCredentials(usernameValue, passwordValue);
  }
}
