import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../displayMessage.js";
import { token } from "../storage/userStorage.js";

export async function addArticle(title, summary, author) {
  const url = baseUrl + "/articles";

  const data = JSON.stringify({ title: title, summary: summary, author: author });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("Success", ".message__container", "success");
      location.href = "/index.html";
    }

    if (json.error) {
      displayMessage(json.message, ".message__container", "error");
    }
  } catch (error) {
    console.log(error);
  }
}
