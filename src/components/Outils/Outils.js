import { darkMode, lightMode } from "../../data/Themes.js";
import { paintIcon } from "../../data/svg.js";
import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Outils(props) {
  const container = document.createElement("div");

  initProps(container, props, true);

  Outils.rootStyleName = "Outils";
  container.setAttribute("id", "outils_box");
  getStyle(Outils);
  let button = getOutilsContent(container);
  container.appendChild(button);
  addBubbleTheme(container, props.themes);

  return container;
}

function addBubbleTheme(outils, themes) {
  themes.forEach((theme, index) => {
    outils.appendChild(themeBubble(index + 1, theme));
  });
}

function getOutilsContent(outils) {
  let button = document.createElement("div");
  button.classList.add("outils_btn");
  button.innerHTML = paintIcon;
  let open = true;
  button.addEventListener("click", () => {
    let children = outils.querySelectorAll(".theme_container");
    let timer = 0;
    let up = 20;
    let upArray = [];
    if (open) {
      ///
      children.forEach((child, index) => {
        setTimeout(() => {
          child.style.transform = `translate(-50%,-${upArray[index]}%)`;
        }, timer);
        timer += 100;
        up += 20;
        upArray.push(timer + up);
      });
      ///
      open = false;
    } else {
      children.forEach((child) => {
        setTimeout(() => {
          child.removeAttribute("style");
        }, timer);
        timer += 100;
      });
      open = true;
    }
  });
  window.addEventListener("scroll", () => {
    open = true;
    let children = outils.querySelectorAll(".theme_container");
    let timer = 0;
    children.forEach((child) => {
      setTimeout(() => {
        child.removeAttribute("style");
      }, timer);
      timer += 100;
    });
  });
  return button;
}

function themeBubble(count, theme) {
  let bubble = document.createElement("div");
  bubble.classList.add("theme_container");
  bubble.innerHTML = count;
  bubble.addEventListener("click", () => {
    toogleTheme(theme);
  });
  return bubble;
}

function toogleTheme(theme) {
  document.documentElement.style.setProperty(
    "--text-basic-color",
    theme.color_text_basic
  );
  document.documentElement.style.setProperty(
    "--text-bold-color",
    theme.color_text_bold
  );
  document.documentElement.style.setProperty(
    "--primary-color",
    theme.primaryColor
  );
  document.documentElement.style.setProperty(
    "--primary-color-hovered",
    theme.primaryColorHovered
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    theme.secondaryColor
  );
  document.documentElement.style.setProperty(
    "--button-entrance-bg",
    theme.buttonEntranceBg
  );
  document.documentElement.style.setProperty(
    "--button-entrance-bg-hovered",
    theme.buttonEntranceBgHovered
  );
  document.documentElement.style.setProperty(
    "--inactive-link-color",
    theme.inactiveLinkColor
  );
  document.documentElement.style.setProperty(
    "--active-link-color",
    theme.activeLinkColor
  );
  document.documentElement.style.setProperty("--input-bg", theme.inputBg);
  document.documentElement.style.setProperty("--bg_color", theme.bgColor);
  document.documentElement.style.setProperty(
    "--box-shadow",
    theme.boxShadowColor
  );
  document.documentElement.style.setProperty(
    "--box-shadow-hovered",
    theme.boxShadowColorHovered
  );

  localStorage.setItem("theme_user", JSON.stringify(theme));
}

let themeUser = localStorage.getItem("theme_user");
if (themeUser) {
  toogleTheme(JSON.parse(themeUser));
}
