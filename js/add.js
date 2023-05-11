import navBarMenu from "./components/ui/renderNavMenu.js";
import userLogout from "./components/logout.js";
import displayMessage from "./components/displayMessage.js";
import { checkLength } from "./components/utils/checkLength.js";
import { user, token } from "./components/utils/storage/userStorage.js";
import { addArticle } from "./components/utils/api/apiAddArticle.js";

navBarMenu();
userLogout();

if (user && token) {
  const addArticleForm = document.querySelector("#add_article__form");

  addArticleForm.style.display = "block";

  const titleInput = document.querySelector("#inputTitleArticle");
  const summaryInput = document.querySelector("#inputSummaryArticle");
  const authorInput = document.querySelector("#inputAuthorArticle");

  const titleMessage = document.querySelector("#titleHelp");
  const summaryMessage = document.querySelector("#summaryHelp");
  const authorMessage = document.querySelector("#authorHelp");

  addArticleForm.addEventListener("submit", validateAddArticleForm);

  function validateAddArticleForm(event) {
    event.preventDefault();

    const titleValue = checkLength(titleInput.value.trim(), 2);
    const summaryValue = checkLength(summaryInput.value.trim(), 15);
    const authorValue = checkLength(authorInput.value.trim(), 5);

    if (titleValue) {
      titleMessage.textContent = "Title for your article is required.";
      titleInput.classList.remove("error__input");
      titleInput.classList.add("success__input");
    } else {
      displayMessage("Title is required", "#titleHelp", "error");
      titleInput.classList.remove("success__input");
      titleInput.classList.add("error__input");
    }

    if (summaryValue) {
      summaryMessage.textContent = "Summary for your article is required.";
      summaryInput.classList.remove("error__input");
      summaryInput.classList.add("success__input");
    } else {
      displayMessage("Summary is required", "#summaryHelp", "error");
      summaryInput.classList.remove("success__input");
      summaryInput.classList.add("error__input");
    }

    if (authorValue) {
      authorMessage.textContent = "An author for your article is required.";
      authorInput.classList.remove("error__input");
      authorInput.classList.add("success__input");
    } else {
      displayMessage("Author is required", "#authorHelp", "error");
      authorInput.classList.remove("success__input");
      authorInput.classList.add("error__input");
    }

    if (titleValue && summaryValue && authorValue) {
      console.log(titleValue, summaryValue, authorValue);
      addArticle(titleValue, summaryValue, authorValue);
    }
  }
} else {
  location.href = "/index.html";
}
