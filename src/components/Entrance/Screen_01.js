import { initProps, props, getStyle } from "../../utils/index.js";
import { scrolledInMe } from "../../utils/animate.js";

/**
 * @param {props} props
 */
export function Screen_01(props) {
  const screen = document.createElement("div");

  initProps(screen, props);
  Screen_01.rootStyleName = "Entrance";
  getStyle(Screen_01);

  screen.setAttribute("id", "screen");

  screen.innerHTML = `
  <div class="screen-box">
      <div class="container-text">
        <span class="text-screen"> ${props.text} </span>
      </div>
  </div>
  <div class="img_left">
      <img src=".//assets/img/girl_left.jpg" alt="" />
  </div>
  <div class="img_right">
      <img src="./assets/img/girl.jpg" alt="" />
  </div>
  `;
  screen.appendChild(
    ButtonScreen_01({ pathPic: "./assets/img/arrow_down.png" })
  );

  return screen;
}

export function ButtonScreen_01({ pathPic }) {
  const button = document.createElement("div");
  button.classList.add("button_screen");
  button.innerHTML = `
  <div class="button_screen_paper"> 
    <img src="${pathPic}" alt="icon" />
    </img> `;
  button.addEventListener("click", () => {
    scrollToSection(document.getElementById("ancrage_Screen_01"));
  });
  return button;
}

export function scrollToSection(section) {
  if (section != undefined) section.scrollIntoView({ behavior: "smooth" });
}

export function setUpScreen_01() {
  let sec2 = document.querySelectorAll(".section_part")[1];
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
        let percentScroll = scrolledInMe(sec, 20, 2);
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
