import { createLoader } from "./utils/Loader.js";
import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Section_Center } from "./components/Section/Section_01.js";
import { Transition_01 } from "./components/Transition/Transition.js";
import {
  blogSection,
  brandKitSection,
  comments,
  formulaire,
  hero,
  partenaires,
  stayFocus,
  upgrade,
} from "./data/Content.js";
import { footer_C_01 } from "./data/Footer.js";
import { header } from "./data/Header.js";
import { base_url } from "./utils/index.js";
import { handleRoutes } from "./utils/route.js";
import { ArticlesSection } from "./components/CardArticle/articles-secion.js";
import { Outils } from "./components/Outils/Outils.js";
import { darkMode, lightMode } from "./data/Themes.js";
// Here you will structure your elements

//Entrance
let entranceScreen = Screen_01({
  background: base_url + "/assets/img/butterfly.png",
  text: ["Tempest AI", "For you", "Here we are!"],
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
  partenaires,
  comments,
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

let articles = ArticlesSection({
  images: [
    "./assets/img/robot1.jpg",
    "./assets/img/robot2.jpg",
    "./assets/img/robot3.jpg",
  ],
  titles: ["🚀 Latest update ", "📣 New updates", "🚀 Tempest News"],
  categories: ["Tempest AI", "Tempest AI", "Tempest AI"],
  authors: ["Midi Madagascar", "Jejoo", "Basy vava"],
  dates: ["September 29, 2023", "September 15, 2023", "September 14, 2023"],
});

// outils
const outils = Outils({ themes: [lightMode, darkMode] });

const routes = {};
////...entranceSection
routes[base_url + "/"] = [...entranceSection, header, footer_C_01, outils];
routes[base_url + "/features"] = [
  header,
  brandKitSection,
  formulaire,
  footer_C_01,
  outils,
];
routes[base_url + "/actu"] = [
  header,
  blogSection,
  articles,
  footer_C_01,
  outils,
];
routes[404] = [];

function setUpAll() {
  setUpScreen_01();
}
//

let loaderScreen = createLoader();

window.addEventListener("load", () => {
  loaderScreen.clean();
  setTimeout(() => {
    window.scrollTo(0, 0);
    handleRoutes(routes, setUpAll, transition);
  }, 5);
});
