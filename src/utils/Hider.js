export function createHider({ children = [], type = "small" }) {
  let hider = document.createElement("div");
  hider.setAttribute("id", "hider");
  removeHider(hider);
  document.body.appendChild(hider);
}

/**
 *
 * @param {HTMLElement} hider
 */
function removeHider(hider) {
  hider.addEventListener("click", () => {
    hider.parentNode.removeChild(hider);
  });
}
