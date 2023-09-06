import { renderRoot } from "./index.js";
import { Header } from "./components/Header.js";
// Here you will structure your elements
const header = Header({ attributs: [["id", "header_proto_mid"]] });

const routes = {
  "/": [header],
  "/about": [header],
  404: [],
};
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  renderRoot(route);
};
window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// //routes
// function route(event) {
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
//   handleLocation();
// }

// async function handleLocation() {
//   let path = window.location.pathname;
//   let route = routes[path] || routes[404];
//   renderRoot(route);
// }

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();
