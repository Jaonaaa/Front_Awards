import { scrolledInMe } from "../../utils/animate.js";
import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Hero_01(props) {
  const hero = document.createElement("div");

  initProps(hero, props);
  Hero_01.rootStyleName = "Hero";
  hero.classList.add("hero_container");
  getStyle(Hero_01);
  // window.addEventListener("scroll", () => {
  //   // console.log(scrolledInMe(hero));
  // });

  hero.appendChild(
    Hero_01_LeftSide({
      text: props.title,
      subtitle: props.description,
      buttonText: props.buttonText,
      callback: props.onClick,
    })
  );
  hero.appendChild(Hero_01_RightSide({ PicPath: props.picPath }));
  observeHero_01(hero);
  return hero;
}

function Hero_01_LeftSide({ text, subtitle, buttonText, callback }) {
  const container = document.createElement("div");
  container.classList.add("hero_left_container");

  let titleContainer = document.createElement("div");
  titleContainer.classList.add("title");
  titleContainer.innerHTML = text;
  hide(titleContainer);

  let subtitleContainer = document.createElement("div");
  subtitleContainer.classList.add("subtitle");
  subtitleContainer.innerHTML = subtitle;
  hide(subtitleContainer);

  container.appendChild(titleContainer);
  container.appendChild(subtitleContainer);
  container.appendChild(
    Hero_01_Button({ text: buttonText, callback: callback })
  );

  return container;
}

function observeHero_01(hero) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSide_Hero_01(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.8,
    }
  );
  observer.observe(hero);
}

function hide(element) {
  element.classList.add("hide");
}

function animateSide_Hero_01(hero) {
  let leftSide = hero.querySelector(".hero_left_container");
  let rightSide = hero.querySelector(".hero_right_container");
  // Left Side
  let timer = 0;
  Array.from(leftSide.children).forEach((child) => {
    wait(() => {
      child.classList.remove("hide");
    }, timer);
    timer += 350;
  });
  timer -= 150;
  wait(() => {
    rightSide.classList.remove("hide");
  }, timer);
}

function Hero_01_RightSide({ PicPath }) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("hero_right_container");
  let img = document.createElement("img");
  img.src = PicPath;

  imgContainer.appendChild(img);
  hide(imgContainer);
  return imgContainer;
}

function Hero_01_Button({ text, callback }) {
  const container = document.createElement("div");
  container.classList.add("container_button");
  const button = document.createElement("button");
  button.innerHTML = text;

  button.addEventListener("click", callback);
  container.appendChild(button);
  hide(container);
  return container;
}
