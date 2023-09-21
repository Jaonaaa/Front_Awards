import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Row_01(props) {
  const row = document.createElement("div");

  initProps(row, props, true);
  Row_01.rootStyleName = "Row";
  row.classList.add("row_container");
  getStyle(Row_01);
  hideChildren(row);
  setUpChildren(row);
  return row;
}

function setUpChildren(row) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChild(entry.target);
          console.log("Animaated");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );
  observer.observe(row);
}
function hideChildren(parent) {
  Array.from(parent.children).forEach((child) => {
    child.style.opacity = 0;
    child.style.transform = `translateY(20%)`;
  });
}

function animateChild(parent) {
  let timer = 0;
  Array.from(parent.children).forEach((child) => {
    wait(() => {
      child.removeAttribute("style");
    }, timer);
    timer += 150;
  });
  wait(() => {
    timer;
  }, timer);
}
