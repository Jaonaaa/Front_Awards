import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Transition_01(props) {
  const transition = document.createElement("div");

  initProps(transition, props, true);
  Transition_01.rootStyleName = "Transition";
  transition.classList.add("transition_container");
  getStyle(Transition_01);
  transition.textComponent = text_({ text_: transition.text });
  transition.appendChild(transition.textComponent);
  transition.appendChild(background_({ backgroundPath: props.backgroundPath }));

  return transition;
}

function text_({ text_ }) {
  let container = document.createElement("div");
  container.classList.add("text_container");
  container.innerHTML = text_;
  return container;
}

function background_({ backgroundPath }) {
  let bg = document.createElement("div");
  bg.classList.add("background_container");
  let img = document.createElement("img");
  img.src = backgroundPath;
  bg.appendChild(img);

  return bg;
}
