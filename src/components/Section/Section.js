import { initProps, props, getStyle, wait } from "../../utils/index.js";

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
    let head = section_head({
      title: props.titleOn.title,
      subtitle: props.titleOn.subtitle,
    });
    section.appendChild(head);
  }
}
function section_head({ title, subtitle }) {
  const head = document.createElement("div");
  head.classList.add("section_head");

  head.innerHTML = `
  <div class="title hide"> ${title} </div>

  <div class="subtitle hide"> ${subtitle} </div>
  `;
  setUpSection_head(head);
  return head;
}

/**
 *
 * @param {HTMLElement} container
 */
function setUpSection_head(container) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log;
          animation_head(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.9,
    }
  );
  observer.observe(container);
}
/**
 *
 * @param {HTMLElement} head
 */
function animation_head(head) {
  let timer = 100;
  Array.from(head.children).forEach((child) => {
    wait(() => {
      child.classList.remove("hide");
    }, timer);
    timer += 350;
  });
}
