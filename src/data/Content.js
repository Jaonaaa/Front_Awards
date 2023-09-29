import { Button_01 } from "../components/Button/Button_01.js";
import { Card_01 } from "../components/Card/Card_01.js";
import { Card_02 } from "../components/Card/Card_02.js";
import { Formulaire_01 } from "../components/Fomulaire/Formulaire.js";
import { Hero_01 } from "../components/Hero/Hero_01.js";
import { Login_01 } from "../components/Login/Login_01.js";
import { Row_01 } from "../components/Row/Row_01.js";
import { ContentAndPicture } from "../components/RowContent/ContentAndPicture.js";
import {
  Section_Center,
  Section_Left,
} from "../components/Section/Section_01.js";
import { createHider } from "../utils/Hider.js";

let login = Login_01({
  logoPath: "./assets/svg/Tempest_logo.svg",
  picPath: "./assets/img/login_right.jpg",
  title: "Welcome Home",
  subtitle: "Please enter your details",
});
let log = () => {
  createHider({
    type: "default",
    children: [login],
  });
};
// Hero

export const hero = Hero_01({
  title: "Integrate your stack, automate your work",
  description:
    "Evolve at the speed and scale of your business with the leader in low-code automation",
  picPath: "./assets/svg/squares_falling.svg",
  buttonText: "Start free trial",
  onClick: () => {
    createHider({
      type: "full",
      children: [
        Section_Left({
          titleOn: {
            title: "Let's create your brand kit",
            subtitle: "We will need your logo and brand colors.",
          },
          children: [Row_01({ children: [...cardsBrandKit] })],
        }),
      ],
    });
  },
});

// Brand Kit
export const cardsBrandKit = [
  Card_01({
    title: "I already have a logo",
    content: `Choose this option if you already have a logo to use for your branded brand kit er,
         lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat earum velit accusamus 
         consectetur? Non quos animi obcaecati eos, 
        `,
    children: [
      Button_01({
        title: "Upload Logo",
        onClick: log,
      }),
    ],
    picAssociated: "./assets/svg/mount.svg",
  }),

  Card_01({
    title: "Make a logo",
    content: `
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat earum velit accusamus 
         consectetur? Non quos animi obcaecati eos, 
        `,
    children: [Button_01({ title: "Make Logo" })],
  }),
  Card_01({
    title: "Copy a logo",
    content: `
         Lorem ipsum dolor sit adipisicing elit. Ratione placeat earum velit accusamus 
         consectetur? Non quos animi obcaecati eos, 
        `,
    children: [Button_01({ title: "Go Copy" })],
    picAssociated: "./assets/svg/circle.svg",
  }),
];

export const brandKitSection = Section_Left({
  headeSpacement: true,
  titleOn: {
    title: "Let's create your brand kit",
    subtitle: "We will need your logo and brand colors.",
  },
  children: [Row_01({ children: [...cardsBrandKit] })],
});

// Stay focus
export const stayFocus = Section_Center({
  titleOn: {
    title: "Stay focused",
    subtitle:
      "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio.",
  },
  children: [
    Row_01({
      class: ["centered"],
      children: [
        Card_02({
          title: "Empower your work",
          content:
            "We trust each other to get the job done knowing that we are all working towards the same goal.",
          icon: "./assets/svg/fire_blue.svg",
        }),
        Card_02({
          title: "Faster production",
          content:
            "We trust each other to get the job done knowing that we are all working re all working done knowing that we are all working done knowing that we are all working towards the same goal.",
          icon: "./assets/svg/faster_time.svg",
        }),
        Card_02({
          title: "Safe deployement",
          content:
            "We trust each other to get the job done knowing that we are all working towards the same goal.",
          icon: "./assets/svg/leaf.svg",
        }),
        Card_02({
          title: "Save money",
          content: "We trust each other to get the job done knowing.",
          icon: "./assets/svg/save_money.svg",
        }),
      ],
    }),
  ],
});

// Upgrade
export const upgrade = Section_Center({
  englobed: {
    type: "wave",
  },
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

// Blog
export const blogSection = Section_Center({
  headeSpacement: true,
  titleOn: {
    title: "Our Blogs",
    subtitle:
      "Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
  },
  children: [],
});

export const formulaire = Section_Left({
  titleOn: {
    title: "Contact us",
    subtitle: "If you want to contact us , write us here.",
  },
  children: [
    ContentAndPicture({
      hidePicMD: true,
      newContent: Formulaire_01({}),
      title: "Are you busy ?",
      content:
        "You should simply showcase the breadth of your creative skills with an enhanced creative portfolio that always stays up-to-date.",
      picPath: "./assets/svg/contact.svg",
    }),
  ],
});
