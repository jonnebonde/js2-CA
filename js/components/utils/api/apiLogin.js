import { baseUrl } from "../../../settings/api.js";
import displayMessage from "../../displayMessage.js";
import { saveToken, saveUser } from "../storage/userStorage.js";

export async function authLoginCredentials(username, password) {
  const url = baseUrl + "/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
      console.log(json.user, json.jwt);

      saveToken(json.jwt);
      saveUser(json.user);

      displayMessage("Success", ".message__container", "success");
      location.href = "/";
    }

    if (json.error) {
      displayMessage("invalid login credentials", ".message__container", "error");
    }
  } catch (error) {
    console.log(error);
  }
}