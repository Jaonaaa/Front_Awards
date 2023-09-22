import { Button_01 } from "../components/Button/Button_01.js";
import { Card_01 } from "../components/Card/Card_01.js";
import { Card_02 } from "../components/Card/Card_02.js";
import { Row_01 } from "../components/Row/Row_01.js";
import {
  Section_Center,
  Section_Left,
} from "../components/Section/Section_01.js";

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
