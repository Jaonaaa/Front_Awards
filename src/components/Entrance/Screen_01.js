import { initProps, props, getStyle, wait } from "../../utils/index.js";
import { scrolledInMe } from "../../utils/animate.js";
import { showHeader } from "../Header/Header.js";

/**
 * @param {props} props
 */
export function Screen_01(props) {
  const screen = document.createElement("div");

  initProps(screen, props);
  Screen_01.rootStyleName = "Entrance";
  getStyle(Screen_01);

  screen.setAttribute("id", "screen");
  let container = ContainerScreen_01({ text: props.text });
  screen.appendChild(container);

  let img_left = document.createElement("div");
  img_left.classList.add("img_left");
  img_left.innerHTML = ` <img src=".//assets/img/girl_left.jpg" alt="" />"`;

  let img_right = document.createElement("div");
  img_right.classList.add("img_right");
  img_right.innerHTML = ` <img src="./assets/img/girl.jpg" alt="" />`;

  screen.appendChild(img_left);
  screen.appendChild(img_right);

  screen.appendChild(
    ButtonScreen_01({ pathPic: "./assets/img/arrow_down.png" })
  );

  return screen;
}

function ContainerScreen_01({ text }) {
  const screen = document.createElement("div");
  screen.classList.add("screen-box");
  screen.appendChild(TextScreen_01({ text: text }));
  return screen;
}

function TextScreen_01({ text }) {
  const container = document.createElement("div");
  container.classList.add("container-text");
  const textRow = document.createElement("span");
  textRow.classList.add("text-screen");
  textRow.innerHTML = text[0];

  container.appendChild(textRow);
  setUpSwapText(textRow, text);

  return container;
}

function setUpSwapText(textRow, textArray) {
  let count = 0;
  if (textArray.length > 1)
    setInterval(() => {
      //
      textRow.style.transform = "translateY(-100%)";
      wait(() => {
        textRow.style.transform = "translateY(100%)";
        textRow.style.opacity = 0;
        textRow.innerHTML = textArray[count];
        textRow.style.transition = "all 0.01s ease-in-out";
      }, 610);
      wait(() => {
        textRow.removeAttribute("style");
      }, 700);
      count += 1;
      if (textArray.length == count) count = 0;
    }, 4500);
}
function ButtonScreen_01({ pathPic }) {
  const button = document.createElement("div");
  button.classList.add("button_screen");
  button.innerHTML = `
  <div class="button_screen_paper"> 
    <img src="${pathPic}" alt="icon" />
    </img> `;
  button.addEventListener("click", () => {
    wait(showHeader, 750);
    scrollToSection(document.getElementById("ancrage_Screen_01"));
  });
  return button;
}

export function scrollToSection(section) {
  if (section != undefined) section.scrollIntoView({ behavior: "smooth" });
}

export function setUpScreen_01() {
  if (document.getElementById("screen") == undefined) return null;
  let sec2 = document.querySelectorAll(".section_part")[1];
  if (sec2 == undefined) return null;
  sec2.style.height = "45vh";
  let scrolledView = 0;
  ////
  const handleScroll = () => {
    let sections = document.querySelectorAll(".section_part");
    sections.forEach((sec, index) => {
      let percentScroll = scrolledInMe(sec, 0, 2);
      sec.style.setProperty("--scroll", percentScroll + "%");
      if (index == 1) {
        let screen = document.getElementById("screen");
        screen.style.transform = `translateY(-${percentScroll}%)`;
      } else if (index == 0) {
        document.documentElement.style.setProperty(
          "--scroll-bars-animation",
          Math.max(percentScroll, 2)
        );
        scrolledView = Math.max(percentScroll, 2);
        handleReachFull(scrolledView);
      } else {
        let percentScroll = scrolledInMe(sec, 0, 1);
        sec.style.setProperty("--scroll", percentScroll + "%");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
}

function handleReachFull(reach) {
  let screenText = document.querySelector(".text-screen");
  if (screenText) {
    if (reach == 100) {
      screenText.classList.add("text-screen-full");
    } else {
      screenText.classList.remove("text-screen-full");
    }
  }
}
