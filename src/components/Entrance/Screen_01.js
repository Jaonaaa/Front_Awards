import { initProps, props, getStyle } from "../../utils/index.js";
import { scrolledInMe } from "../../utils/Animate.js";

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
      <span class="text-screen"> ${props.text} </span>
  </div>
  <div class="img_left">
      <img src=".//assets/img/girl_left.jpg" alt="" />
  </div>
  <div class="img_right">
      <img src="./assets/img/girl.jpg" alt="" />
  </div>
  `;

  return screen;
}

export function setUpScreen_01() {
  let sec2 = document.querySelectorAll(".section_part")[1];
  sec2.style.height = "45vh";
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
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
}
