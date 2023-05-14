import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../displayMessage.js";
import { token } from "../storage/userStorage.js";

export async function updateArticle(title, summary, author, id) {
  const url = baseUrl + "/articles/" + id.value;

  const data = JSON.stringify({ title: title, summary: summary, author: author });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.updated_at) {
      displayMessage("Article updated", ".message__container", "success");
      location.href = "/index.html";
    }

    if (json.error) {
      displayMessage(json.message, ".message__container", "error");
    }
  } catch (error) {
    console.log(error);
  }
}
