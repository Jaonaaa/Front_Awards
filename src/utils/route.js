import { renderRoot } from "../index.js";
import { base_url } from "./index.js";

let routes = {};
let setUpAll = () => {};
export const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  let path = window.location.pathname;
  path = path.split(base_url)[1];
  console.log("path: " + path);
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
