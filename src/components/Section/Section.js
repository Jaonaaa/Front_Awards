import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Section_Horiz(props) {
  const section = document.createElement("div");

  if (props) handleSectionProps(section, props);
  initProps(section, props, true);
  Section_Horiz.rootStyleName = "Section";
  section.classList.add("section_part");
  getStyle(Section_Horiz);

  // section.addEventListener("click", () => {
  //   section.style.setProperty("--po", "blue");
  // });

  return section;
}

function handleSectionProps(section, props) {
  if (props.titleOn) {
    let head = section_title({
      title: props.titleOn.title,
      subtitle: props.titleOn.subtitle,
    });
    section.appendChild(head);
  }
}
function section_title({ title, subtitle }) {
  const head = document.createElement("div");
  head.classList.add("section_head");

  head.innerHTML = `
  <div class="title"> ${title} </div>

  <div class="subtitle"> ${subtitle} </div>
  `;

  return head;
}
