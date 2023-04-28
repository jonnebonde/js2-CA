import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

console.log(baseUrl)

const url = baseUrl + "articles";


export async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log("Something went wrong trying to fetch API");
    displayMessage(error, ".results__container");
  }
}

getApi();