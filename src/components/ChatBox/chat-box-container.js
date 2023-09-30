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
        name: "Tempest Bot",
        photo: "./assets/img/robot.png",
      },
    })
  );

  return element;
}

export const CHATBOX = ChatBoxContainer();
