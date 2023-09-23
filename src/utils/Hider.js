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
    hider.parentNode.removeChild(hider);
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
  return container;
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
