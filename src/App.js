import { createLoader } from "./utils/Loader.js";
import { Card_Pic } from "./components/Card/Card_Pic.js";
import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Row_01 } from "./components/Row/Row_01.js";
import { Section_Center } from "./components/Section/Section_01.js";
import { Transition_01 } from "./components/Transition/Transition.js";
import {
  blogSection,
  brandKitSection,
  formulaire,
  hero,
  stayFocus,
  upgrade,
} from "./data/Content.js";
import { footer_C_01 } from "./data/Footer.js";
import { header } from "./data/Header.js";
import { base_url } from "./utils/index.js";
import { handleRoutes } from "./utils/route.js";
import { ArticlesSection } from "./components/CardArticle/articles-secion.js";
// Here you will structure your elements

// Hero

///

//Entrance
let entranceScreen = Screen_01({
  background: base_url + "/assets/img/butterfly.png",
  text: ["Hello <br> ", "Playground", "Have Fun!"],
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
    classColor: "whitey",
    titleOn: {
      title: "Our Partners",
      subtitle:
        "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
    },
    children: [
      Row_01({
        class: ["centered"],
        children: [
          Card_Pic({ imgPath: "./assets/logo_svg/Pulse.svg" }),
          Card_Pic({ imgPath: "./assets/logo_svg/bocasay.svg" }),
          Card_Pic({ imgPath: "./assets/logo_svg/etech.svg" }),
          Card_Pic({ imgPath: "./assets/logo_svg/airtel.svg" }),
          Card_Pic({ imgPath: "./assets/logo_svg/myAgency.svg" }),
        ],
      }),
    ],
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
routes[base_url + "/about"] = [
  header,
  brandKitSection,
  formulaire,
  footer_C_01,
];

let articles = ArticlesSection({
  images: [
    "./assets/svg/hash_tag.svg",
    "./assets/svg/hash_tag.svg",
    "./assets/svg/hash_tag.svg",
    "./assets/svg/hash_tag.svg",
  ],
  titles: [
    "Mitsuri Kanroji",
    "Zen'itsu Agatsuma",
    "Freres et soeur Kamado",
    "Nezuko Kamado",
  ],
  categories: [
    "Pilier de l'amour",
    "Pourfoundeur type foudre",
    "Fraternite",
    "Mi-homme mi-demon",
  ],
  authors: ["Osamu Dazai", "Osamu Dazai", "Osamu Dazai", "Osamu Dazai"],
  dates: [
    "September 10, 2023",
    "September 10, 2023",
    "September 10, 2023",
    "September 10, 2023",
  ],
});

routes[base_url + "/blog"] = [header, blogSection, articles, footer_C_01];

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
