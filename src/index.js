/**
 *
 * @param {HTMLElement[]} children
 */
export function renderRoot(children) {
  const root = createRoot();
  if (children != undefined) children.map((child) => root.appendChild(child));
}

function createRoot() {
  let root = document.getElementById("root");
  root = root == undefined ? document.createElement("div") : root;
  root.setAttribute("id", "root");
  document.body.prepend(root);
  return root;
}
