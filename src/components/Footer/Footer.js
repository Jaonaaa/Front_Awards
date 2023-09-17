import { initProps, props, getStyle } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Footer_01(props) {
  const Footer = document.createElement("div");

  initProps(Footer, props);
  Footer_Horiz.rootStyleName = "Footer";
  Footer.classList.add("footer_container");
  getStyle(Footer_Horiz);

  return Footer;
}
