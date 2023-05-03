/* import { getUserName, getToken } from "../utils/localStorage.js"; */

export default function navBarMenu() {
  const { pathname } = document.location;

  const userName = "";
  const tokenKey = "";

  const menuContainer = document.querySelector(".menu__container");

  const ul = document.createElement("ul");
  ul.classList.add("navbar-nav", "text-center");

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

  if(pathname === "/favourites.html") {
    favouritesLink.classList.add("active");
    favouritesLink.setAttribute("aria-current", "page");
  }



  const liLogin = document.createElement("li");
  liLogin.classList.add("nav-item");
  ul.appendChild(liLogin);

  const loginLink = document.createElement("a");
  loginLink.classList.add("nav-link");
  loginLink.innerText = "Login";

  if (pathname === "/login.html") {
    loginLink.classList.add("active");
    loginLink.setAttribute("aria-current", "page");
  }
  loginLink.setAttribute("href", "/login.html");

  liLogin.appendChild(loginLink);

  const loggedIn = document.createElement("a");
  const loggedinUsername = document.createElement("li");

  if (tokenKey.length !== 0 && userName) {
    liLogin.removeChild(loginLink);
    loggedIn.innerText =  "Add new article";
    loggedIn.classList.add("nav-link");
    loggedIn.setAttribute("href", "/add.html");
    liLogin.appendChild(loggedIn);
    loggedinUsername.innerText = `Welcome ${userName}`;
    ul.appendChild(loggedinUsername);
  }

  if(pathname === "/add.html") {
    loggedIn.classList.add("active");
  }

  menuContainer.appendChild(ul);
}
