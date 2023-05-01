export function displayMessage(type, message, target) {
  const messageContainer = document.querySelector(target);
  
  messageContainer.innerHTML = `<div class="message ${type}">${message}</div>`;
}
