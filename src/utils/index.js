export const props = {
  children: [],
  class: [],
  attributs: [],
};
/// /Front_Awards
//
export const base_url = "https://tempestfrontend.netlify.app";
/**
 * @param {props} props
 * @param {HTMLElement} target
 */
export function initProps(target = undefined, props, addChildren = false) {
  if (props != undefined && target != undefined) {
    addAttributs(target, props.attributs);
    addClasses(target, props.class);
    if (addChildren) addTheChildren(target, props.children);
  }
}

export function wait(function_name, delay) {
  return setTimeout(() => {
    function_name();
  }, delay);
}
/**
 *
 * @param {Function} fonction
 */
export function getStyle(fonction) {
  let function_name = fonction.name;
  let link_tag = document.createElement("link");
  link_tag.rel = "stylesheet";
  link_tag.href = `./css/${fonction.rootStyleName}/${function_name}.css`;
  if (!checkIfStyleAlreadyCalled(link_tag.href))
    document.head.appendChild(link_tag);
}
function checkIfStyleAlreadyCalled(href) {
  let alreadySet = false;
  let linksTag = document.querySelectorAll("link");
  linksTag.forEach((link) => {
    if (link.href == href) alreadySet = true;
  });
  return alreadySet;
}
/**
 *
 * @param {HTMLElement} target
 * @param {Array} attributes
 */
export function addAttributs(target, attributes) {
  if (attributes != undefined && target != undefined)
    attributes.map((attributes) =>
      target.setAttribute(attributes[0], attributes[1])
    );
}
/**
 *
 * @param {HTMLElement} target
 * @param {Array} attributes
 */
export function addTheChildren(target, children) {
  if (children != undefined && target != undefined)
    children.map((child) => target.appendChild(child));
}
/**
 *
 * @param {HTMLElement} target
 * @param {Array} classes
 */
export function addClasses(target, classes) {
  if (classes != undefined && target != undefined)
    classes.map((classe) => target.classList.add(classe));
}
