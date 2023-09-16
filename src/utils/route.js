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
  // let pathArray = path.split(base_url);
  // path =
  //   pathArray.length == 2 ? path.split(base_url)[1] : path.split(base_url)[0];
  const route = routes[path] || routes[404];
  renderRoot(route);
  setUpAll();
};

export function handleRoutes(routesParams, setUp) {
  routes = routesParams;
  setUpAll = setUp;
  window.onpopstate = handleLocation;
  window.route = route;
  handleLocation();
}
