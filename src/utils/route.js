import { removeHeaderForced } from "../components/Header/Header.js";
import { renderRoot } from "../index.js";
import { wait } from "./index.js";

let routes = {};
let setUpAll = () => {};
let transitionComponent = { component: "", duration: 0 };
export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  addTransition(event.target.innerHTML);
  wait(handleLocation, transitionComponent.duration / 2);
};

function addTransition(text) {
  transitionComponent.component.textComponent.innerHTML = text;

  document.body.appendChild(transitionComponent.component);
  document.body.style.pointerEvents = "none";
  wait(() => {
    document.body.removeAttribute("style");
    transitionComponent.component.parentNode.removeChild(
      transitionComponent.component
    );
  }, transitionComponent.duration);
  resetBodyToTop();
}

function resetBodyToTop() {
  window.scrollTo(0, 0);
  if (!document.body.classList.contains("unmoved")) {
    document.body.classList.add("unmoved");
    wait(() => {
      document.body.classList.remove("unmoved");
    }, 100);
  }
  // header navbar on
  else {
    removeHeaderForced();
    document.body.classList.remove("unmoved");
  }
}

const handleLocation = async () => {
  let path = window.location.pathname;

  const route = routes[path] || routes[404];
  renderRoot(route);
  setUpAll();
};

export function handleRoutes(routesParams, setUp, transition) {
  routes = routesParams;
  transitionComponent = transition;
  setUpAll = setUp;
  window.onpopstate = handleLocation;
  window.route = route;
  handleLocation();
}
