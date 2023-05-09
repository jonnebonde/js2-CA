import navBarMenu from "./components/ui/renderNavMenu.js";
import userLogout from "./components/logout.js";
import { getUserName, getToken } from "./components/utils/storage/userStorage.js";


navBarMenu();
userLogout();

const token = getToken();
const user = getUserName();

console.log(user, token)

if (user && token) {

  


  
} else {
  location.href = "/index.html";
}


