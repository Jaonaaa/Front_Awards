import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Hero_01 } from "./components/Hero/Hero_01.js";
import { ContentAndPicture } from "./components/RowContent/ContentAndPicture.js";
import { Section_Center } from "./components/Section/Section_01.js";
import { Transition_01 } from "./components/Transition/Transition.js";
import {
  blogSection,
  brandKitSection,
  hero,
  stayFocus,
  upgrade,
} from "./data/Content.js";
import { footer_C_01 } from "./data/Footer.js";
import { header } from "./data/Header.js";
import { createHider } from "./utils/Hider.js";
import { base_url } from "./utils/index.js";
import { handleRoutes } from "./utils/route.js";
// Here you will structure your elements

// Hero

///

//Entrance
let entranceScreen = Screen_01({
  background: base_url + "/assets/img/butterfly.png",
  text: ["Frontend <br> Awards", "Playground", "Have Fun!"],
});

let entranceSection = [
  entranceScreen,
  Section_Center(),
  Section_Center(),
  Section_Center({
    attributs: [["id", "ancrage_Screen_01"]],
    children: [hero],
  }),
  upgrade,
  stayFocus,
  Section_Center({
    englobed: {
      type: "tilt",
    },
    titleOn: {
      title: "Test it",
      subtitle:
        "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
    },
  }),
  brandKitSection,
];

///////////////
// transition // add un handle Route
const transition = {
  component: Transition_01({
    text_: "Tempest",
    backgroundPath: "./assets/svg/Circular.svg",
  }),
  duration: 1490,
};

const routes = {};
////...entranceSection
routes[base_url + "/"] = [...entranceSection, header, footer_C_01];
routes[base_url + "/about"] = [header, brandKitSection, footer_C_01];
routes[base_url + "/blog"] = [header, blogSection, footer_C_01];

routes[404] = [];

function setUpAll() {
  setUpScreen_01();
}

window.addEventListener("load", () => {
  handleRoutes(routes, setUpAll, transition);
  window.scrollTo(0, 0);
});
