import { GalleryCard } from "./gallery-card.js";

const props = {
  n: 0,
  images: [],
  title: "",
  text: "",
  width: 0,
  height: 0,
  borderRadius: 0,
};

/**
 *
 * @param {props} props
 * @returns {HTMLDivElement}
 */
export function GalleryBlock(props) {
  const element = document.createElement("div");
  element.classList.add("gallery-block");

  element.style.height = props.height + "px";
  element.style.width = props.width * props.n + "px";

  element.innerHTML = `
    <link rel="stylesheet" href="./css/gallery/gallery-block.css" />
    <div class="gallery-card-desc">
      <p class="gallery-card-title">${props.title}</p>
      <p class="gallery-card-text">${props.text}</p>
    </div>
  `;
  for (let index = 0; index < props.n; index++) {
    element.appendChild(GalleryCard(props));
  }

  let container = document.createElement("container");
  container.classList.add("gallery-container");

  container.appendChild(element);

  return container;
}
