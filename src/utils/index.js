export const props = {
  children: [],
  class: [],
  attributs: [],
};

/**
 * @param {props} props
 * @param {HTMLElement} target
 */
export function initProps(target = undefined, props) {
  if (props != undefined && target != undefined) {
    addAttributs(target, props.attributs);
    addClasses(target, props.class);
  }
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
  document.head.appendChild(link_tag);
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
 * @param {Array} classes
 */
export function addClasses(target, classes) {
  if (classes != undefined && target != undefined)
    classes.map((classe) => target.classList.add(classe));
}
