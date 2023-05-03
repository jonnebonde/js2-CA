import { baseUrl } from "./settings/api.js";
import apiCall from "./components/utils/api/apiCall.js";
import { renderArticles } from "./components/ui/renderArticles.js";
import displayMessage from "./components/displayMessage.js";
import { searchArticles } from "./components/utils/filter/searchArticles.js";
import navBarMenu from "./components/ui/renderNavMenu.js";

navBarMenu()

const apiUrl = baseUrl + "/articles";

async function getProducts() {
  try {
    const data = await apiCall(apiUrl);
    console.log(data)
    renderArticles(data)
    searchArticles(data)
  } catch (error) {
    displayMessage("error", "Something went wrong, try to refresh page", ".results__container");
    console.log(error)
  
  }
}

getProducts();