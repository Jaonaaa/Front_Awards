export const props = {
  author: {
    name: "",
    pseudo: "",
    photo: "",
  },
  content: "",
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
          CommentCardAnimate(commentCard);
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

/**
 * @param {HTMLDivElement} commentCard
 * @return {void}
 */
export function CommentCardAnimate(commentCard) {
  const elements = commentCard.querySelectorAll(`
    img, 
    .comment-card-content p,
    .comment-card-content-text,
    .comment-card-icons .number,
    .comment-card-icons svg
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
        duration: 600,
        delay: (index + 1) * 100,
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
export function CommentCard({ author, content }) {
  const element = document.createElement("div");
  element.classList.add("comment-card");

  element.innerHTML = `
    <div class="comment-card-details">
      <span class="comment-card-photo">
        <img src="${author.photo}" alt="${author.name}" />
      </span>
      <span class="comment-card-content">
        <p class="comment-card-author-name">${author.name}</p>
        <p class="comment-card-author-pseudo">@${author.pseudo}</p>
      </span>
      
    </div>
    <p class="comment-card-content-text">${content}</p>
    <div class="comment-card-icons">
      <div class="icon">
        <span class="number">10</span>
        <span class="svg">
          <svg
            id="heart-svg"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  `;

  const heartSvg = element.querySelector("#heart-svg");
  heartSvg.addEventListener("click", () => {
    if (!heartSvg.classList.contains("on-heart-animate")) {
      heartSvg.classList.remove("out-heart-animate");
      heartSvg.classList.add("on-heart-animate");
    } else {
      heartSvg.classList.remove("on-heart-animate");
      heartSvg.classList.add("out-heart-animate");
    }
  });

  setUpChildren(element);

  return element;
}
