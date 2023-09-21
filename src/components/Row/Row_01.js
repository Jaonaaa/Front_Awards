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
  setUpChildren(row);
  return row;
}

function setUpChildren(row) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChild(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.9,
    }
  );
  observer.observe(row);
}

function animateChild(parent) {
  let timer = 0;
  Array.from(parent.children).forEach((child) => {
    console.log("child: " + child);
  });
}
