import displayMessage from "./components/displayMessage.js";
import navBarMenu from "./components/ui/renderNavMenu.js";
import userLogout from "./components/logout.js";
import apiCall from "./components/utils/apiCall.js";
import { baseUrl } from "./settings/api.js";
import { loaderContainer } from "./components/constants/constants.js";
import { populateEditForm } from "./components/ui/populateEditForm.js";
import { checkLength } from "./components/utils/checkLength.js";
import { updateArticle } from "./components/utils/api/apiupdateArticle.js";
import { token, user } from "./components/utils/storage/userStorage.js";
import { deleteArticle } from "./components/utils/api/apiDeleteArticle.js";

navBarMenu();
userLogout();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id || !token || !user) {
  document.location.href = "index.html";
}

const url = baseUrl + "/articles/" + id;
const editForm = document.querySelector("#edit_article__form");

(async function () {
  try {
    const data = await apiCall(url);
    console.log(data);
    populateEditForm(data);
    deleteArticle(data.id); 
  } catch (error) {
    displayMessage("error", ".message__container", "error");
    location.href = "index.html";
  } finally {
    loaderContainer.style.display = "none";
    editForm.style.display = "block"; 
  }
})();

const editArticleTitleInput = editForm.querySelector("#editTitleArticle");
const editArticleSummaryInput = editForm.querySelector("#editSummaryArticle");
const editArticleAuthorInput = editForm.querySelector("#editAuthorArticle");
const editArticleId = editForm.querySelector("#editArticleId");

const submitBtn = editForm.querySelector(".submit__btn");

editForm.addEventListener("submit", submitEditForm);

function submitEditForm(event) {
  event.preventDefault();

  const titleEdited = checkLength(editArticleTitleInput.value.trim(), 2);
  const summaryEdited = checkLength(editArticleSummaryInput.value.trim(), 15);
  const authorEdited = checkLength(editArticleAuthorInput.value.trim(), 5);

  const titleMessage = document.querySelector("#titleHelp");
  const summaryMessage = document.querySelector("#summaryHelp");
  const authorMessage = document.querySelector("#authorHelp");

  if (titleEdited) {
    titleMessage.textContent = "";
    editArticleTitleInput.classList.remove("error__input");
    editArticleTitleInput.classList.add("success__input");
  } else {
    displayMessage("Title is required", "#titleHelp", "error");
    editArticleTitleInput.classList.remove("success__input");
    editArticleTitleInput.classList.add("error__input");
  }

  if (summaryEdited) {
    summaryMessage.textContent = "";
    editArticleSummaryInput.classList.remove("error__input");
    editArticleSummaryInput.classList.add("success__input");
  } else {
    displayMessage("Summary is required", "#summaryHelp", "error");
    editArticleSummaryInput.classList.remove("success__input");
    editArticleSummaryInput.classList.add("error__input");
  }

  if (authorEdited) {
    authorMessage.textContent = "";
    editArticleAuthorInput.classList.remove("error__input");
    editArticleAuthorInput.classList.add("success__input");
  } else {
    displayMessage("Author is required", "#authorHelp", "error");
    editArticleAuthorInput.classList.remove("success__input");
    editArticleAuthorInput.classList.add("error__input");
  }

  if (titleEdited && summaryEdited && authorEdited) {
    submitBtn.textContent = "Loading...";
    submitBtn.classList.add("btn--loading");
    updateArticle(titleEdited, summaryEdited, authorEdited, editArticleId);
  }
}
