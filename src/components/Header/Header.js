import { route } from "../../utils/route.js";
import { initProps, props, getStyle } from "../../utils/index.js";
import { ParamsBox } from "./Params.js";

/**
 * @param {props} props
 */
export function Header(props) {
  const header = document.createElement("div");

  header.setAttribute("singleton", true);
  initProps(header, props);
  Header.rootStyleName = "Header";
  getStyle(Header);

  let logo = Logo(
    { class: ["logo_container"], attributs: [["id", "logo_header"]] },
    "./assets/img/sakafo.png",
    "/"
  );

  let navigation_menu = NavigationMenu(
    {
      class: ["navigation"],
    },
    props.linksTag
  );

  let paramsBox = ParamsBox({
    children: props.paramsContent,
    attributs: [["id", "params_box"]],
  });

  header.appendChild(logo);
  header.appendChild(navigation_menu);
  header.appendChild(paramsBox);

  return header;
}

/**
 *
 * @param {props} props
 * @param {Array} tags
 * @returns {HTMLElement}
 */
function NavigationMenu(props, tags = []) {
  const navigation_menu = document.createElement("div");
  initProps(navigation_menu, props);
  let tags_ = tags.map((tag) => {
    return TagsMenu(tag.label, tag.linkTo);
  });
  tags_.map((tag) => navigation_menu.appendChild(tag));
  return navigation_menu;
}
/**
 *
 * @param {String} label
 * @param {String} linkTo
 * @returns {HTMLElement}
 */
function TagsMenu(label, linkTo) {
  const Tag = document.createElement("div");
  Tag.classList.add("tag_box");

  let link = document.createElement("a");
  link.setAttribute("href", linkTo);
  link.classList.add("link_tag");
  link.innerText = label;
  window.location.pathname == linkTo
    ? link.classList.add("active_tag")
    : undefined;

  link.addEventListener("click", (e) => {
    setUpRouterLink(e);
  });

  Tag.appendChild(link);
  return Tag;
}
function setUpRouterLink(event) {
  route(event);
  checkActiveTag();
}
function checkActiveTag() {
  let tagsLink = document.querySelectorAll(".link_tag");
  tagsLink.forEach((tag) => {
    if (window.location.href == tag.href) {
      tag.classList.add("active_tag");
    } else {
      tag.classList.remove("active_tag");
    }
  });
}
/**
 *
 * @param {props} props
 * @param {String} picture
 * @param {String} linkTo
 * @returns {HTMLElement}
 */
function Logo(props, picture = "", linkTo = undefined) {
  const logo = document.createElement("div");
  initProps(logo, props);

  let img = document.createElement("img");
  img.setAttribute("src", picture);
  if (linkTo != undefined)
    img.addEventListener("click", (event) => {
      img.href = linkTo;
      route(event);
    });

  logo.appendChild(img);
  return logo;
}
