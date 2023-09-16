import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Header } from "./components/Header/Header.js";
import { Section_Horiz } from "./components/Section/Section.js";
import { handleRoutes } from "./utils/route.js";
// Here you will structure your elements
//
let button = document.createElement("button");
button.innerHTML = "Se Connecter";
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
let entranceScreen = Screen_01({ text: "TempesT" });
let enntranceSection = [
  entranceScreen,
  Section_Horiz(),
  Section_Horiz(),
  Section_Horiz({ attributs: [["id", "ancrage_Screen_01"]] }),
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

window.addEventListener("load", () => {
  handleRoutes(routes, setUpAll);
  window.scrollTo(0, 0);
});

// var element = document.querySelectorAll(".section_part")[2]; // Remplacez 'elementID' par l'ID de l'élément cible

// setTimeout(() => {
//   element.scrollIntoView({ behavior: "smooth" }); // Utilisez 'auto' pour un défilement instantané
// }, 2200);
// Faites défiler la fenêtre jusqu'à l'élément
