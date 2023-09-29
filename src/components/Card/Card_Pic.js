import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
// Card icon on top a description // no button
export function Card_Pic(props) {
  const card = document.createElement("div");

  Card_Pic.rootStyleName = "Card";
  card.classList.add("card_container_Pic");
  getStyle(Card_Pic);

  initProps(card, props, true);
  card.appendChild(Card_content({ ...props }));

  return card;
}

function Card_content({ imgPath }) {
  let img = document.createElement("img");
  img.src = imgPath;

  return img;
}
