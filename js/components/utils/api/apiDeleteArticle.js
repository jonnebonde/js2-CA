import { baseUrl } from "../../../settings/api.js";
import { token } from "../storage/userStorage.js";
import displayMessage from "../../displayMessage.js";

export function deleteArticle(id) {
  const deleteArticleBtn = document.querySelector("#deleteArticle");

  deleteArticleBtn.addEventListener("click", deleteFromApi);

  async function deleteFromApi() {
    const doDelete = confirm("Are you sure you want to delete this article?");

    if (doDelete) {
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
        location.href = "/index.html";
      } catch (error) {
        displayMessage("An error occured, try again", ".message__container", "error");
      }
    }
  }
}
