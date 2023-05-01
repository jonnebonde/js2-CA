import { url } from "./components/constants/constants.js";
import apiCall from "./components/utils/api/apiCall.js";
import { renderProducts } from "./components/ui/renderProducts.js";
import { displayMessage } from "./components/ui/displayMessage.js";
import { searchProducts } from "./components/utils/filter/searchProducts.js";


async function getProducts() {
  try {
    const data = await apiCall(url);

    renderProducts(data)
    searchProducts(data)
  } catch (error) {
    displayMessage("error", "Something went wrong, try to refresh page", ".results__container");
    console.log(error)
  
  }
}

getProducts();