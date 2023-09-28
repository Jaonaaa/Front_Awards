import { initProps, props, getStyle, wait } from "../../utils/index.js";
import { Input_ } from "../Fomulaire/Input.js";

/**
 * @param {props} props
 */
export function Login_01(props) {
  const login = document.createElement("div");

  initProps(login, props, true);
  Login_01.rootStyleName = "Login";
  login.classList.add("log_container_01");
  getStyle(Login_01);

  let left = leftSide({ ...props });
  let right = rightSide({ ...props });

  login.appendChild(left);
  login.appendChild(right);

  return login;
}

function leftSide({ title, subtitle, logoPath }) {
  let left = document.createElement("div");
  left.classList.add("left_container");
  //
  let logo = document.createElement("div");
  logo.classList.add("logo_container");
  let img = document.createElement("img");
  img.src = logoPath;
  logo.appendChild(img);
  //
  let titleC = document.createElement("div");
  titleC.classList.add("title_container");
  titleC.innerHTML = title;
  let subtitleC = document.createElement("div");
  subtitleC.classList.add("subtitle_container");
  subtitleC.innerHTML = subtitle;
  //

  left.appendChild(logo);
  left.appendChild(titleC);
  left.appendChild(subtitleC);
  left.appendChild(Input_({ label: "Email", name: "email" }));
  left.appendChild(
    Input_({ label: "Password", name: "pwd", type: "password" })
  );

  return left;
}

function rightSide({ picPath }) {
  let right = document.createElement("div");
  right.classList.add("right_container");
  let img = document.createElement("img");
  img.src = picPath;
  right.appendChild(img);
  return right;
}

// function setUpChildren(row) {
//   let observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           animateChild(entry.target);
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.4,
//     }
//   );
//   observer.observe(row);
// }
// function hideChildren(parent) {
//   Array.from(parent.children).forEach((child) => {
//     child.style.opacity = 0;
//     child.style.transform = `translateY(20%)`;
//   });
// }

// function animateChild(parent) {
//   let timer = 0;
//   Array.from(parent.children).forEach((child) => {
//     wait(() => {
//       child.removeAttribute("style");
//     }, timer);
//     timer += 150;
//   });
// }
