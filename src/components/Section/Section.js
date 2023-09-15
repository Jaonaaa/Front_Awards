import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Section_Horiz(props) {
  const section = document.createElement("div");

  initProps(section, props);
  Section_Horiz.rootStyleName = "Section";
  section.classList.add("section_part");
  getStyle(Section_Horiz);
  section.addEventListener("click", () => {
    console.log("Hello");
    section.style.setProperty("--po", "blue");
  });
  return section;
}
