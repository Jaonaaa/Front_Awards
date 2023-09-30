import { ChatBox } from "./chat-box.js";

function ChatBoxContainer() {
  const element = document.createElement("div");
  element.classList.add("chat-box-container");
  element.innerHTML = `
    <link rel="stylesheet" href="./css/Chatbox/chat-box.css" />
  `;

  element.appendChild(
    ChatBox({
      user: {
        name: "Dazai Osamu",
        photo: "./assets/img/dazai.png",
      },
    })
  );

  return element;
}

export const CHATBOX = ChatBoxContainer();
