import { Button_01 } from "../components/Button/Button_01.js";
import { Card_01 } from "../components/Card/Card_01.js";

export const cards_1 = [
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
