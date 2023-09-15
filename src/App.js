import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Header } from "./components/Header/Header.js";
import { Section_Horiz } from "./components/Section/Section.js";
import { handleRoutes } from "./utils/route.js";
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

//Entrance
let entranceScreen = Screen_01({ text: "Hello World" });
let enntranceSection = [
  entranceScreen,
  Section_Horiz(),
  Section_Horiz(),
  Section_Horiz(),
];

///////////////
const routes = {
  "/": [...enntranceSection, header],
  "/about": [...enntranceSection, header],
  404: [],
};

function setUpAll() {
  setUpScreen_01();
}
handleRoutes(routes, setUpAll);
