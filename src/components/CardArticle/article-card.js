const props = {
  image: "",
  title: "",
  category: "",
  author: "",
  date: "",
};

/**
 *
 * @param {props} props
 * @returns {HTMLDivElement}
 */
export function ArticleCard(props) {
  const element = document.createElement("div");
  element.classList.add("article-card");

  element.innerHTML = `
    <div class="card_container_article_T">
    <img src="${props.image}" class="article-card-image" />
    </div>
    <h4 class="article-card-category">${toSpan(props.category)}</h4>
    <h2 class="article-card-title">${toSpan(props.title)}</h2>
    <div class="article-card-author">${toSpan(
      props.author + " - " + props.date
    )}</div>
  `;

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateIn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );
  observer.observe(element);

  return element;
}

/**
 *
 * @param {HTMLDivElement} articleCard
 * @returns {void}
 */
export function animateIn(articleCard) {
  const elements = Array.from(articleCard.querySelectorAll("span"));
  elements.unshift(
    Array.from(articleCard.querySelectorAll(".article-card-image"))[0]
  );

  elements.forEach((element, index) => {
    element.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
      ],
      {
        duration: 500,
        fill: "forwards",
        delay: index * 30,
        easing: "cubic-bezier(.39,.68,0,1.01)",
      }
    );
  });
}

/**
 *
 * @param {string} text
 * @returns {string}
 */
function toSpan(text) {
  const letters = Array.from(text);
  let response = "";
  letters.forEach((character) => {
    response += `<span class="${
      character == " " ? "space" : ""
    }">${character}</span>`;
  });

  return response;
}
