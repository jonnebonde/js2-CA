export default function displayMessage(message, target, type) {
  const messageContainer = document.querySelector(target);
  messageContainer.innerHTML = `<div class="message ${type}">${message}</div>`;
}