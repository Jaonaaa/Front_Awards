import { renderRoot } from "./index.js";
import { Header } from "./components/Header.js";
// Here you will structure your elements
//
const header = Header({
  attributs: [
    ["id", "header_proto_mid"],
    ["observation", "navbar"],
  ],
  class: ["name"],
  linksTag: [
    {
      linkTo: "/",
      label: "Home",
    },
    {
      linkTo: "/hello",
      label: "Hello",
    },
    {
      linkTo: "/about",
      label: "A propos",
    },
  ],
});

///
/////
const routes = {
  "/": [header],
  "/about": [],
  404: [],
};
export const route = (event) => {
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
