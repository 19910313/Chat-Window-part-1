const chatWindow = document.getElementById("chat");
const chatSendBtn = chatWindow.children[2].firstElementChild.lastElementChild;
const chatInput = chatWindow.children[2].firstElementChild.firstElementChild;
let messages = [];
function initChat() {
  let chatHidden = !!localStorage.getItem("chatHidden");
  if (!chatHidden) {
    openChat();
  }
  chatSendBtn.addEventListener("click", sendMessage);
}
function sendMessage(e) {
  e.preventDefault();

  console.log("ok!");
}
function openChat() {
  chatWindow.classList.remove("hidden");
  //   chatHidden = false;
  localStorage.removeItem("chatHidden");
}
function closeChat() {
  chatWindow.classList.add("hidden");
  //   chatHidden = true;
  localStorage.setItem("chatHidden", true);
}
