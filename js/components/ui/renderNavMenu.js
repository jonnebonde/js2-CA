import { user, token } from "../utils/storage/userStorage.js";

export default function navBarMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".menu__container");

  const ul = document.createElement("ul");
  ul.classList.add("navbar-nav", "text-center", "links__container");

  const liHome = document.createElement("li");
  liHome.classList.add("nav-item");
  ul.appendChild(liHome);

  const homeLink = document.createElement("a");
  homeLink.classList.add("nav-link");
  homeLink.setAttribute("href", "/index.html");
  homeLink.innerText = "Home";

  if (pathname === "/index.html") {
    homeLink.classList.add("active");
    homeLink.setAttribute("aria-current", "page");
  }
  liHome.appendChild(homeLink);

  const liFavourites = document.createElement("li");
  liFavourites.classList.add("nav-item");
  ul.appendChild(liFavourites);

  const favouritesLink = document.createElement("a");
  favouritesLink.classList.add("nav-link");
  favouritesLink.innerText = "Favourites";
  favouritesLink.setAttribute("href", "/favourites.html");

  liFavourites.appendChild(favouritesLink);

  if (pathname === "/favourites.html") {
    favouritesLink.classList.add("active");
    favouritesLink.setAttribute("aria-current", "page");
  }

  const loginContainer = document.createElement("ul");
  loginContainer.classList.add("navbar-nav", "text-center", "login__container");

  const liLogin = document.createElement("li");
  liLogin.classList.add("nav-item");
  loginContainer.appendChild(liLogin);

  const loginLink = document.createElement("a");
  loginLink.classList.add("nav-link");
  loginLink.innerText = "Login";

  if (pathname === "/login.html") {
    loginLink.classList.add("active");
    loginLink.setAttribute("aria-current", "page");
  }
  loginLink.setAttribute("href", "/login.html");

  liLogin.appendChild(loginLink);

  const loggedInAddArticleLi = document.createElement("li");
  loggedInAddArticleLi.classList.add("nav-item");

  const loggedInAddArticleLink = document.createElement("a");
  loggedInAddArticleLink.classList.add("nav-link");
  loggedInAddArticleLink.setAttribute("href", "/add.html");
  loggedInAddArticleLink.innerText = "Add Article";

  if (pathname === "/add.html") {
    loggedInAddArticleLink.classList.add("active");
    loggedInAddArticleLink.setAttribute("aria-current", "page");
  }

  const loggedInLogoutLi = document.createElement("li");
  loggedInLogoutLi.classList.add("nav-item");

  const loggedInLogOutButton = document.createElement("button");
  loggedInLogOutButton.classList.add("btn");
  loggedInLogOutButton.setAttribute("type", "button");
  loggedInLogOutButton.innerText = "Logout";

  menuContainer.appendChild(ul);

  const userNameContainer = document.createElement("div");
  userNameContainer.classList.add("username__container");

  if (token && user) {
    loginContainer.appendChild(userNameContainer);

    userNameContainer.innerText = `${user}`;

    loginContainer.removeChild(liLogin);

    loginContainer.appendChild(loggedInAddArticleLi);
    loggedInAddArticleLi.appendChild(loggedInAddArticleLink);

    loginContainer.appendChild(loggedInLogoutLi);
    loggedInLogoutLi.appendChild(loggedInLogOutButton);
  }

  menuContainer.appendChild(loginContainer);
}
