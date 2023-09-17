import { scrolledInMe } from "../../utils/animate.js";
import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Hero_01(props) {
  const section = document.createElement("div");

  initProps(section, props);
  Hero_01.rootStyleName = "Hero";
  section.classList.add("hero_container");
  getStyle(Hero_01);
  window.addEventListener("scroll", () => {
    console.log(scrolledInMe(section));
  });

  return section;
}

function Hero_01_title({ text }) {
  const container = document.createElement("div");

  return container;
}
