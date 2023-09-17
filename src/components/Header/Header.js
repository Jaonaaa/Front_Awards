import { route } from "../../utils/route.js";
import {
  initProps,
  props,
  getStyle,
  base_url,
  wait,
} from "../../utils/index.js";
import { ParamsBox } from "./Params.js";

const timerHide = 1000;
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
    props.logoPath,
    "/"
  );

  let navigation_menu = NavigationMenu(
    {
      class: ["navigation"],
    },
    props.linksTag
  );
  if (props.paramsContent == undefined) props.paramsContent = [];
  if (props.btnSideBarOn) {
    props.paramsContent.push(
      buttonShowSideBar({
        pathIcon: props.btnSideBarOn.icon,
        linksTag: props.linksTag,
      })
    );
  }

  let paramsBox = ParamsBox({
    children: props.paramsContent,
    attributs: [["id", "params_box"]],
  });

  header.appendChild(logo);
  header.appendChild(navigation_menu);
  header.appendChild(paramsBox);
  visibleHeader(header);

  return header;
}

/**
 *
 * @param {HTMLElement} header
 */
function visibleHeader(header) {
  // window.addEventListener("wheel", (event) => {
  //   if (document.body.classList.contains("unmoved")) return null;
  //   if (event.deltaY > 0) {
  //     // L'utilisateur fait défiler vers le bas
  //     header.classList.add("hidden_header");
  //   } else if (event.deltaY < 0) {
  //     // L'utilisateur fait défiler vers le haut
  //     header.classList.remove("hidden_header");
  //   }
  // });
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (document.body.classList.contains("unmoved")) return null;

    if (st > lastScrollTop) {
      // L'utilisateur fait défiler vers le bas
      header.classList.add("hidden_header");
    } else {
      // L'utilisateur fait défiler vers le haut
      header.classList.remove("hidden_header");
    }
    lastScrollTop = st;
  });
}
export function showHeader() {
  let header = document.getElementById("header_proto_mid");
  if (header) {
    header.classList.remove("hidden_header");
  }
}

function buttonShowSideBar({ pathIcon, linksTag }) {
  const btn = document.createElement("div");
  btn.innerHTML = `<img src="${pathIcon}" alt="icon" />`;
  btn.setAttribute("id", "btn-show-sidebar");
  setUpButtonShowSideBar(btn, linksTag);
  return btn;
}

function createLayers(linksTag) {
  if (!LayersActive()) {
    let container = document.createElement("div");
    container.classList.add("layers-container");
    container.innerHTML = `
      <div class="right-layer"></div>
      <div class="right-layer right-layer--2"></div>
      <div class="right-layer right-layer--3"></div>
  `;
    document.body.appendChild(container);
    // add content
    container.appendChild(createListNavigation(linksTag));
  }
}

function createListNavigation(linksTag) {
  let container = document.createElement("div");
  container.classList.add("hide-list-navigation");
  container.classList.add("list-navigation");

  let rows = linksTag.map((link) => {
    return rowListNavigation(link);
  });
  rows.forEach((row) => {
    container.appendChild(row);
  });

  wait(() => {
    container.classList.remove("hide-list-navigation");
    checkActiveTag();
  }, timerHide);
  return container;
}

function rowListNavigation(linkTag) {
  let row = document.createElement("div");
  row.classList.add("row-list-nav");

  let link = document.createElement("a");
  link.setAttribute("href", linkTag.linkTo);
  link.classList.add("link_tag");
  link.innerText = linkTag.label;
  link.addEventListener("click", (e) => {
    setUpRouterLink(e);
  });
  row.appendChild(link);

  return row;
}

function LayersActive() {
  if (document.querySelector(".layers-container") != undefined) return true;
  else return false;
}

function removeLayers() {
  let layers = document.querySelector(".layers-container");
  if (layers != undefined) {
    let layerIn = document.querySelector(".right-layer");
    if (!layerIn.classList.contains("active"))
      layers.parentNode.removeChild(layers);
  }
}

function switchNavigationParams() {
  let nav = document.querySelector(".navigation");
  if (nav != undefined) {
    let layer = document.querySelector(".right-layer");
    if (!layer.classList.contains("active"))
      wait(() => {
        nav.classList.toggle("hide-navigation");
      }, timerHide);
    else nav.classList.toggle("hide-navigation");
  }
}
/**
 * @param {HTMLElement} btn
 */
function setUpButtonShowSideBar(btn, linksTag) {
  btn.addEventListener("click", (e) => {
    handleBtnEvent(btn);
    if (LayersActive()) {
      wait(removeLayers, timerHide);
    } else createLayers(linksTag);
    wait(() => {
      var layerClass = ".right-layer";
      var layers = document.querySelectorAll(layerClass);
      layers.forEach((layer, index) => {
        if (index == layers.length - 1) layer.classList.toggle("full");
        else layer.classList.toggle("active");
      });
      switchNavigationParams();
      toggleOverflowBody();
    }, 1);
  });
}

function toggleOverflowBody() {
  let layers = document.querySelector(".layers-container");

  if (document.body.classList.contains("unmoved")) {
    if (layers != undefined) layers.classList.add("remove-layers-container");
    document.body.classList.remove("unmoved");
  } else {
    document.body.classList.add("unmoved");
  }
}
/**
 *
 * @param {HTMLElement} btn
 */
function handleBtnEvent(btn) {
  btn.classList.add("hide-btn-show-sidebar");
  wait(() => {
    btn.classList.remove("hide-btn-show-sidebar");
  }, timerHide);
}

// Navigation
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

  let path = window.location.pathname;

  path == linkTo ? link.classList.add("active_tag") : undefined;

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
    let path = window.location.href;
    if (path == tag.href) {
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
