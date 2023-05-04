import { baseUrl } from "./settings/api.js";
import apiCall from "./components/utils/api/apiCall.js";
import { renderArticles } from "./components/ui/renderArticles.js";
import displayMessage from "./components/displayMessage.js";
import { searchArticles } from "./components/utils/filter/searchArticles.js";
import navBarMenu from "./components/ui/renderNavMenu.js";
import userLogout from "./components/logout.js";

navBarMenu();
userLogout()

const apiUrl = baseUrl + "/articles";

async function getProducts() {
  try {
    const data = await apiCall(apiUrl);
    console.log(data)
    renderArticles(data)
    searchArticles(data)
  } catch (error) {
    displayMessage("Something went wrong, try to refresh page", ".results__container", "error");
    console.log(error)
  
  }
}

getProducts();