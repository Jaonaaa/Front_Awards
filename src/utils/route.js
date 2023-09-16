import { renderRoot } from "../index.js";

let routes = {};
let setUpAll = () => {};
export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  console.log("Render Root");
  renderRoot(route);
  setUpAll();
};

export function handleRoutes(routesParams, setUp) {
  routes = routesParams;
  setUpAll = setUp;
  window.onpopstate = handleLocation;
  window.route = route;
  console.log("HandleLocation");
  handleLocation();
}
