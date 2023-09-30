export const props = {
  user: {
    name: "",
    photo: "",
  },
};

/**
 *
 * @param {props} param0
 * @returns {HTMLDivElement}
 */
export function ChatBox({ user }) {
  const element = document.createElement("div");
  element.classList.add("chat-box");

  element.innerHTML = `
    <div class="chat-box-header">
      <div class="chat-box-header-left">
        <span class="chat-box-header-left-avatar">
          <img src="${user.photo}" />
        </span>
        <span class="chat-box-header-left-name">
          ${user.name}
        </span>
      </div>
      <div class="chat-box-header-right">
       
      </div>
    </div>
    <h3 class="chat-box-title">Message</h3>
    <div class="message-box">
      <span class="message-image-container">
        <img class="message-image" src="/assets/img/robot.png" />
      </span>
    </div>
    <div class="chat-box-input-container">
      <input type="text" class="chat-box-input" placeholder="Ecrivez ici" />
      <span class="chat-box-send-btn">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
          ></path>
        </svg>
      </span>
    </div>
  `;

  element
    .querySelector(".message-box")
    .appendChild(message("Que puis-je faire pour vous aider ?"));

  return element;
}

function message(content) {
  const span = document.createElement("span");
  span.classList.add("message");

  Array.from(content).forEach((letter) => {
    let s = document.createElement("span");
    s.innerHTML = letter;
    if (letter == " ") {
      s.classList.add("message-space");
    }

    span.appendChild(s);
  });

  return span;
}
