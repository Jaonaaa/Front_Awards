import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Footer_01 } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Hero_01 } from "./components/Hero/Hero_01.js";
import { Section_Horiz } from "./components/Section/Section.js";
import { Transition_01 } from "./components/Transition/Transition.js";
import { sectionsFooter } from "./data/Footer.js";
import { base_url } from "./utils/index.js";
import { handleRoutes } from "./utils/route.js";
// Here you will structure your elements
//
let button = document.createElement("button");
button.innerHTML = "Se Connecter";
const paramsContent = [];

const header = Header({
  attributs: [
    ["id", "header_proto_mid"],
    ["observation", "navbar"],
  ],
  logoPath: "./assets/svg/Tempest_logo.svg",
  linksTag: [
    {
      linkTo: base_url + "/",
      label: "Home",
    },

    {
      linkTo: base_url + "/about",
      label: "Our works",
    },
  ],
  paramsContent: paramsContent,
  btnSideBarOn: {
    icon: "./assets/img/hamburger_icon.png",
    icon_cross: "./assets/img/cross_icon.png",
  },
});
// Hero
let hero_01 = Hero_01({
  title: "Integrate your stack, automate your work",
  description:
    "Evolve at the speed and scale of your business with the leader in low-code automation",
  picPath: "./assets/img/Hero_pic.png",
  buttonText: "Start free trial",
});

//Entrance
let entranceScreen = Screen_01({
  text: ["Holà guys!", "Playground", "Alefa #FTT", "Vary masaka"],
});
let enntranceSection = [
  entranceScreen,
  Section_Horiz(),
  Section_Horiz(),
  Section_Horiz({
    attributs: [["id", "ancrage_Screen_01"]],
    children: [hero_01],
  }),
  Section_Horiz({
    titleOn: {
      title: "Upgrade your skill",
      subtitle:
        "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
    },
  }),
  Section_Horiz({
    titleOn: {
      title: "Stay focused",
      subtitle:
        "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio.",
    },
  }),
];
// Footer
const footer = Footer_01({
  logoPath: "./assets/svg/Tempest_logo.svg",
  textSubtitle:
    "Embark on a Journey of a Lifetime: Explore Diverse Destinations, Create Lasting Memories, and Let Your Wanderlust Take Flight with Us!",
  sections: sectionsFooter,
  copyrigthText: "Corp 2023 Tempest, All rights reserved",
});

///////////////
// transition
const transition = {
  component: Transition_01({
    text_: "Tempest",
    backgroundPath: "./assets/svg/Circular.svg",
  }),
  duration: 1500,
};

const routes = {};
//
routes[base_url + "/"] = [...enntranceSection, header, footer];
routes[base_url + "/about"] = [header, Section_Horiz({}), , footer];
routes[404] = [];

function setUpAll() {
  setUpScreen_01();
}

window.addEventListener("load", () => {
  handleRoutes(routes, setUpAll, transition);
  window.scrollTo(0, 0);
});
