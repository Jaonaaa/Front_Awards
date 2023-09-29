import { wait } from "./index.js";

export function createHider({ children = [], type = "default" }) {
  let hider = document.createElement("div");
  hider.setAttribute("id", "hider");
  let content = handleContainer(type, hider);
  hider.appendChild(content);
  removeHider(hider, content);
  addChildren(content, children);
  document.body.appendChild(hider);
}

/**
 * @param {HTMLElement} hider
 */
function removeHider(hider, child) {
  hider.addEventListener("click", () => {
    slideOut(child, hider);
    wait(() => {
      hider.parentNode.removeChild(hider);
    }, 300);
  });
}

function handleContainer(type = "default", parent) {
  let container = null;
  if (type === "default") container = autoSizeContainer();
  else if (type === "small") container = smallContainer();
  else if (type === "full") container = fullContainer();
  else container = autoSizeContainer();
  container.setAttribute("id", "hider_container");

  container.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  return container;
}

function smallContainer() {
  let container = document.createElement("div");
  container.classList.add("small_hider_container");
  return container;
}

function fullContainer() {
  let container = document.createElement("div");
  container.classList.add("full_hider_container");

  let closerBtn = document.createElement("div");
  closerBtn.classList.add("closer_btn_hider");
  let icon_closer = document.createElement("img");
  icon_closer.src = "./assets/img/cross_icon.png";
  closerBtn.appendChild(icon_closer);

  container.appendChild(closerBtn);
  hanldeCloseBtn(closerBtn);

  return container;
}

function hanldeCloseBtn(btn) {
  btn.addEventListener("click", () => {
    let hider = btn.parentNode.parentNode;
    if (hider) {
      slideOut(hider.firstElementChild, hider);
      wait(() => {
        hider.parentNode.removeChild(hider);
      }, 300);
    }
  });
}

function slideOut(modal, hider) {
  modal.classList.add("slide-out");
  hider.classList.add("slide-out");
  //
}

function autoSizeContainer() {
  let container = document.createElement("div");
  container.classList.add("default_hider_container");
  return container;
}

/**
 *
 * @param {HTMLElement} container
 * @param {Array} children
 */
function addChildren(container, children) {
  children.forEach((child) => {
    if (child instanceof HTMLElement) container.appendChild(child);
  });
}

export function removeHiderGlobal() {
  let hider = document.getElementById("hider_container");
  if (hider) hider.parentNode.removeChild(hider);
}
