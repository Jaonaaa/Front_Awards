import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Card_01(props) {
  const card = document.createElement("div");

  initProps(card, props, true);
  Card_01.rootStyleName = "Card";
  card.classList.add("card_container");
  getStyle(Card_01);

  return card;
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
  <div class="title "> ${title} </div>
  <div class="subtitle "> ${subtitle} </div>
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
