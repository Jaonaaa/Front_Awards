/**
 *
 * @param {HTMLElement[]} children
 */
export function renderRoot(children) {
  const root = createRoot();
  // root.innerHTML = "";
  if (children != undefined) children.map((child) => insertChild(child, root));
}

function createRoot() {
  let root = document.getElementById("root");
  if (root == undefined) {
    root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.prepend(root);
  }
  return root;
}

/**
 *
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 */
function insertChild(child, parent) {
  console.log(child, parent);
  if (child.getAttribute("singleton") && isMyChild(child, parent)) {
    return undefined;
  } else {
    parent.appendChild(child);
  }
}
/**
 *
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 */
function isMyChild(child, parent) {
  let is = false;
  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i] == child) is = true;
  }

  return is;
}
