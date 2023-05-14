import { baseUrl } from "../../../settings/api.js";
import { token } from "../storage/userStorage.js";
import displayMessage from "../../displayMessage.js";
import { removeFromList } from "../storage/removeFromList.js";
import { keys } from "../../../settings/storageKeys.js";
import { getFromLocalStorage } from "../storage/localStorage.js";

export function deleteArticle(id) {
  const deleteArticleBtn = document.querySelector("#deleteArticle");

  deleteArticleBtn.addEventListener("click", deleteFromApi);

  async function deleteFromApi() {
    const doDelete = confirm("Are you sure you want to delete this article?");

    if (doDelete) {
      deleteArticleBtn.innerText = "Deleting...";
      deleteArticleBtn.classList.add("btn--loading");
      const url = baseUrl + "/articles/" + id;

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        displayMessage("Article deleted", ".message__container", "success");
        removeFromFavList(json.id);
        location.href = "/index.html";
      } catch (error) {
        displayMessage("An error occured, try again", ".message__container", "error");
      }
    }
  }
}

function removeFromFavList(id) {
  const itemId = id.toString();
  const favourites = getFromLocalStorage(keys[0]);
  removeFromList(itemId, favourites, keys[0]);
}
