import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Button_01(props) {
  const button = document.createElement("div");

  initProps(button, props, true);
  Button_01.rootStyleName = "Button";
  button.classList.add("button_container");
  getStyle(Button_01);

  button.appendChild(button_content({ text: props.title, icon: props.iconOn }));
  if (props.onClick) toCall(button, props.onClick);
  return button;
}

function button_content({
  text = "Click me",
  icon = "./assets/svg/arrow_right_icon.svg",
}) {
  let container = document.createElement("div");
  container.classList.add("content_container");
  container.innerHTML = `<span > ${text} </span> <img src="${icon}"  />`;

  return container;
}
function toCall(button, callBack) {
  button.addEventListener("click", callBack);
}
