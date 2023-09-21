import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
// Card icon on top a description // no button
export function Card_02(props) {
  const card = document.createElement("div");

  Card_02.rootStyleName = "Card";
  card.classList.add("card_container_02");
  getStyle(Card_02);

  card.appendChild(
    Card_content({
      title: props.title,
      content: props.content,
      icon: props.icon,
    })
  );

  initProps(card, props, true);

  return card;
}

function Card_content({ title, content, icon }) {
  let container = document.createElement("div");
  container.classList.add("card_content_container");

  let iconContainer = document.createElement("div");
  iconContainer.classList.add("icon_container");
  let img = document.createElement("img");
  img.src = icon;
  iconContainer.appendChild(img);

  let titleContainer = document.createElement("div");
  titleContainer.classList.add("title");
  titleContainer.innerHTML = title;

  let contentContainer = document.createElement("div");
  contentContainer.classList.add("card_content");
  contentContainer.innerHTML = content;

  container.appendChild(iconContainer);
  container.appendChild(titleContainer);
  container.appendChild(contentContainer);

  return container;
}
