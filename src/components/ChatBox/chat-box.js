export const props = {
  user: {
    name: "",
    photo: "",
  },
};

/**
 *
 * @param {HTMLDivElement} commentCard
 * @return {void}
 */
function setUpChildren(commentCard) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChatBox(commentCard);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );
  observer.observe(commentCard);
}

function animateChatBox(chatBox) {
  const elements = chatBox.querySelectorAll(`
    .chat-box-header-left-avatar,
    .chat-box-header-left-name,
    .chat-box-title,
    .message-box .message-image, 
    .message-box span,
    .chat-box-input-container
  `);

  elements.forEach((child, index) => {
    child.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 400,
        delay: (index + 1) * 10,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  });
}

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
    <div class="message-box-container">
      <div class="message-box">
        <span class="message-image-container">
          <img class="message-image" src="/assets/img/robot.png" />
        </span>
      </div>
    </div>
    <div class="chat-box-input-container">
      <input type="text" class="chat-box-input" placeholder="Ecrivez ici" />
      <span class="chat-box-send-btn">
        <svg
          class="send-svg"
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

  // animateChatBox(element);
  setUpChildren(element);

  const svgSender = element.querySelector(".send-svg");
  svgSender.addEventListener("click", () => {
    const child = document.createElement("div");
    child.classList.add("message-box");
    child.classList.add("new-message-box");
    child.innerHTML = `
      <span class="message-image-container">
        <img class="message-image" src="./assets/img/entrance_right.jpg" />
      </span>
    `;
    child.appendChild(message(element.querySelector(".chat-box-input").value));
    element.querySelector(".chat-box-input").value = "";

    const children = Array.from(
      child.querySelectorAll(`
      .message-image, 
      span
    `)
    );
    children.unshift(child);

    element.querySelector(".message-box-container").appendChild(child);

    children.forEach((hello, index) => {
      hello.animate(
        [
          {
            opacity: 1,
            transform: "translateY(0)",
          },
        ],
        {
          duration: 400,
          delay: (index + 1) * 50,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });
  });

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
