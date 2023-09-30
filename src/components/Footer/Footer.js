import { initProps, props, getStyle } from "../../utils/index.js";
import { setUpRouterLink } from "../Header/Header.js";

/**
 * @param {props} props
 */
export function Footer_01(props) {
  const Footer = document.createElement("div");

  initProps(Footer, props);
  Footer.setAttribute("singleton", true);
  Footer_01.rootStyleName = "Footer";
  Footer.classList.add("footer_container");
  getStyle(Footer_01);

  let upper = document.createElement("div");
  upper.classList.add("footer_upper");
  upper.appendChild(
    leftSide({ logoPath: props.logoPath, textSubtitle: props.textSubtitle })
  );
  upper.appendChild(rightSide({ sections: props.sections }));
  //
  Footer.appendChild(upper);

  let copyrigth = document.createElement("div");
  copyrigth.classList.add("footer_copyright");
  copyrigth.innerHTML = props.copyrigthText;
  Footer.appendChild(copyrigth);

  return Footer;
}

function leftSide({ logoPath, textSubtitle }) {
  let container = document.createElement("div");
  container.classList.add("about_site");
  let logo = document.createElement("div");
  logo.classList.add("logo_container");
  let img = document.createElement("div");
  img.innerHTML = logoPath;
  logo.appendChild(img);

  let subtitle = document.createElement("div");
  subtitle.classList.add("subtitle");
  subtitle.innerHTML = textSubtitle;

  container.appendChild(logo);
  container.appendChild(subtitle);

  return container;
}

function rightSide({ sections }) {
  let container = document.createElement("div");
  container.classList.add("navigation");
  sections.forEach((section) => {
    container.appendChild(createBlock({ section: section }));
  });

  return container;
}

function createBlock({ section }) {
  ///
  let block = document.createElement("div");
  block.classList.add("block_container");
  let title = document.createElement("div");
  title.innerHTML = section.title;
  title.classList.add("title_section");
  ///
  block.appendChild(title);
  section.data.forEach((data) => {
    let link = document.createElement("a");
    link.setAttribute("href", data.linkTo);
    link.classList.add("link_tag");
    link.innerText = data.label;
    //
    let path = window.location.pathname;
    path == data.linkTo ? link.classList.add("active_tag") : undefined;
    //
    link.addEventListener("click", (e) => {
      setUpRouterLink(e);
    });
    block.appendChild(link);
  });
  ///
  return block;
}
