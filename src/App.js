import { Screen_01, setUpScreen_01 } from "./components/Entrance/Screen_01.js";
import { Hero_01 } from "./components/Hero/Hero_01.js";
import { ContentAndPicture } from "./components/RowContent/ContentAndPicture.js";
import { Section_Center } from "./components/Section/Section_01.js";
import { Transition_01 } from "./components/Transition/Transition.js";
import { brandKitSection, stayFocus } from "./data/Content.js";
import { footer_C_01 } from "./data/Footer.js";
import { header } from "./data/Header.js";
import { base_url } from "./utils/index.js";
import { handleRoutes } from "./utils/route.js";
// Here you will structure your elements

// Hero
let hero_01 = Hero_01({
  title: "Integrate your stack, automate your work",
  description:
    "Evolve at the speed and scale of your business with the leader in low-code automation",
  picPath: "./assets/svg/squares_falling.svg",
  buttonText: "Start free trial",
});

///

//Entrance
let entranceScreen = Screen_01({
  text: ["Storm", "Playground", "Dream"],
});

let upgrade = Section_Center({
  titleOn: {
    title: "Upgrade your skill",
    subtitle:
      "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
  },
  children: [
    ContentAndPicture({
      title: "Are you busy ?",
      content:
        "You should simply showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
      picPath: "./assets/svg/umbrella_walking.svg",
    }),
    ContentAndPicture({
      title: "Fiability is our priority",
      content:
        "You should simply showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
      picPath: "./assets/svg/fiability.svg",
      reverseOrder: true,
    }),
  ],
});

let entranceSection = [
  entranceScreen,
  Section_Center(),
  Section_Center(),
  Section_Center({
    attributs: [["id", "ancrage_Screen_01"]],
    children: [hero_01],
  }),
  upgrade,
  stayFocus,
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
routes[404] = [];

function setUpAll() {
  setUpScreen_01();
}

window.addEventListener("load", () => {
  handleRoutes(routes, setUpAll, transition);
  window.scrollTo(0, 0);
});
