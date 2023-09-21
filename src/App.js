import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Footer_01 } from "./components/Footer/Footer.js";
import { Hero_01 } from "./components/Hero/Hero_01.js";
import { Row_01 } from "./components/Row/Row_01.js";
import {
  Section_Center,
  Section_Left,
} from "./components/Section/Section_01.js";
import { Transition_01 } from "./components/Transition/Transition.js";
import { GalleryBlock } from "./components/gallery/gallery-block.js";
import { brandKitSection, stayFocus } from "./data/Content.js";
import { footer_C_01, sectionsFooter } from "./data/Footer.js";
import { header } from "./data/Header.js";
import { base_url } from "./utils/index.js";
import { handleRoutes } from "./utils/route.js";
// Here you will structure your elements

// Hero
let hero_01 = Hero_01({
  title: "Integrate your stack, automate your work",
  description:
    "Evolve at the speed and scale of your business with the leader in low-code automation",
  picPath: "./assets/img/Hero_pic.png",
  buttonText: "Start free trial",
});

///

//Entrance
let entranceScreen = Screen_01({
  text: ["Storm", "Playground", "Dream"],
});

let enntranceSection = [
  entranceScreen,
  Section_Center(),
  Section_Center(),
  Section_Center({
    attributs: [["id", "ancrage_Screen_01"]],
    children: [hero_01],
  }),
  Section_Center({
    titleOn: {
      title: "Upgrade your skill",
      subtitle:
        "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
    },
  }),
  stayFocus,
  brandKitSection,
];

const gallery = GalleryBlock({
  n: 4,
  images: [
    "./assets/img/img1.png",
    "./assets/img/img2.png",
    "./assets/img/img3.png",
    "./assets/img/img4.png",
  ],
  title: "Hello world",
  text: "This is the most common sentence for beginners. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque minima dolore provident atque optio ullam explicabo accusamus.",
  width: window.innerWidth / 6,
  height: 450,
  borderRadius: 0,
});

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
////...enntranceSection
routes[base_url + "/"] = [Section_Center({}), stayFocus, header, footer_C_01];
routes[base_url + "/about"] = [header, brandKitSection, gallery, footer_C_01];
routes[404] = [];

function setUpAll() {
  setUpScreen_01();
}

window.addEventListener("load", () => {
  handleRoutes(routes, setUpAll, transition);
  window.scrollTo(0, 0);
});
