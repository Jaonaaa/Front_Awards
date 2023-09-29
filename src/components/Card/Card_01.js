import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Card_01(props) {
  const card = document.createElement("div");

  Card_01.rootStyleName = "Card";
  card.classList.add("card_container");
  getStyle(Card_01);

  card.appendChild(
    Card_content({ title: props.title, content: props.content })
  );
  if (props.picAssociated)
    card.appendChild(pictureCorner({ imgPath: props.picAssociated }));
  initProps(card, props, true);

  return card;
}

function Card_content({ title, content }) {
  let container = document.createElement("div");
  container.classList.add("card_content_container");

  let titleContainer = document.createElement("div");
  titleContainer.classList.add("title");
  titleContainer.innerHTML = title;

  let contentContainer = document.createElement("div");
  contentContainer.classList.add("card_content");
  contentContainer.innerHTML = content;

  container.appendChild(titleContainer);
  container.appendChild(contentContainer);

  return container;
}

function pictureCorner({ imgPath }) {
  let img = document.createElement("img");
  img.src = imgPath;
  img.classList.add("img_corner");
  return img;
}
