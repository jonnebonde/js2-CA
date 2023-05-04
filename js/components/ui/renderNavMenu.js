import { getUserName, getToken } from "../utils/storage/userStorage.js";

export default function navBarMenu() {
  const { pathname } = document.location;

  const userName = getUserName();
  const tokenKey = getToken();

  console.log(userName)

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

  if(pathname === "/favourites.html") {
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


  const dropDownMenuContainer = document.createElement("div");
  dropDownMenuContainer.classList.add("dropdown");

  const dropDownToggleBtn = document.createElement("button");
  dropDownToggleBtn.classList.add("btn", "btn-secondary", "dropdown-toggle");
  dropDownToggleBtn.setAttribute("type", "button");
  dropDownToggleBtn.setAttribute("data-bs-toggle", "dropdown");
  dropDownToggleBtn.setAttribute("aria-expanded", "false")

  dropDownMenuContainer.appendChild(dropDownToggleBtn);

  const dropDownMenu = document.createElement("ul");
  dropDownMenu.classList.add("dropdown-menu");

  const dropDownMenuLi = document.createElement("li");
  const dropDownAddLink = document.createElement("a");

  const dropDownMenuLogoutLi = document.createElement("li")
  const dropDownLogOut = document.createElement("a");



  if (tokenKey.length !== 0 && userName) {
    loginContainer.removeChild(liLogin);
    loginContainer.appendChild(dropDownMenuContainer);

    dropDownToggleBtn.innerText = `Welcome ${userName}`;

    dropDownMenuContainer.appendChild(dropDownMenu);
    dropDownMenu.appendChild(dropDownMenuLi);
    dropDownMenuLi.appendChild(dropDownAddLink);

    dropDownAddLink.classList.add("dropdown-item");
    dropDownAddLink.setAttribute("href", "/add.html");
    dropDownAddLink.innerText = "New Article";

    dropDownMenu.appendChild(dropDownMenuLogoutLi);
    dropDownMenuLogoutLi.appendChild(dropDownLogOut);

    dropDownLogOut.classList.add("dropdown-item");
    dropDownLogOut.setAttribute("id", "logout-btn")
    dropDownLogOut.setAttribute("href", "#");
    dropDownLogOut.innerText = "Log out";
  }

  if(pathname === "/add.html") {
    loggedIn.classList.add("active");
  }

  menuContainer.appendChild(ul);
  menuContainer.appendChild(loginContainer)
}
