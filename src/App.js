import { renderRoot } from "./index.js";
import { Header } from "./components/Header/Header.js";
import { Section_Horiz } from "./components/Section/Section.js";
// Here you will structure your elements
//
let button = document.createElement("button");
button.innerHTML = "Hello World";
const paramsContent = [button];
const header = Header({
  attributs: [
    ["id", "header_proto_mid"],
    ["observation", "navbar"],
  ],
  linksTag: [
    {
      linkTo: "/",
      label: "Home",
    },

    {
      linkTo: "/about",
      label: "Our works",
    },
  ],
  paramsContent: paramsContent,
});

let section = [Section_Horiz(), Section_Horiz(), Section_Horiz()];
///
/////
const routes = {
  "/": [header, ...section],
  "/about": [header, ...section],
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

/////
const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener("click", () => {
    var id = button.getAttribute("id");

    var layerClass = "." + id + "-layer";
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
      layer.classList.toggle("active");
    }
  });
}
