import { initProps, props, getStyle } from "../utils/index.js";
/**
 *
 * @param {props} props
 */
export function Header(props) {
  const header = document.createElement("div");

  initProps(header, props);
  Header.rootStyleName = "Header";
  getStyle(Header);
  header.setAttribute("id", "header_proto_mid");

  let logo_ = logo(
    { class: ["logo_container"], attributs: [["id", "hello"]] },
    "./assets/img/sakafo.png"
  );

  header.innerHTML = `${logo_}`;
  return header;
}
/**
 *
 * @param {props} props
 * @param {String} picture
 * @returns {String}
 */
function logo(props = undefined, picture = "") {
  const logo = document.createElement("div");
  initProps(logo, props);
  logo.innerHTML = `
    <img src="${picture}"></img>
  `;
  return logo.outerHTML;
}
