import { Button_01 } from "../components/Button/Button_01.js";
import { Card_01 } from "../components/Card/Card_01.js";
import { Card_02 } from "../components/Card/Card_02.js";
import { Card_Pic } from "../components/Card/Card_Pic.js";
import { ArticlesSection } from "../components/CardArticle/articles-secion.js";
import { CHATBOX } from "../components/ChatBox/chat-box-container.js";
import {
  COMMENTSECTION,
  COMMENTSECTION_,
} from "../components/Comments/comment-section.js";
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
import { LogoIconFooter } from "./svg.js";

let login = Login_01({
  logoPath: LogoIconFooter,
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

export const commentsOff = Section_Center({
  titleOn: {
    title: "Loved by Customer",
    subtitle: "Seamlessly showc thatalways stays up-to-date.",
  },

  children: [COMMENTSECTION_],
});

let commentOffShow = () => {
  createHider({
    type: "full",
    children: [commentsOff],
  });
};

// Hero

export const hero = Hero_01({
  title: "Welcome to the Tempest AI website",
  description:
    " Explore our content and services with confidence, knowing that we strive to make this site as accessible as possible for each of you.    ",
  picPath: "./assets/svg/squares_falling.svg",
  buttonText: "Start trial",
  onClick: () => {
    createHider({
      type: "full",
      children: [
        Section_Left({
          titleOn: {
            title: "Discover the Universe of Tempest IA.",
            subtitle:
              "Let's explore together the possibilities offered by Tempest IA.",
          },
          children: [Row_01({ children: [...cardsBrandKit2] })],
        }),
      ],
    });
  },
});

export const about = Hero_01({
  title: "About Tempest IA",
  description: `
    Tempest IA is much more than just a machine. It represents a revolutionary advancement in the field of intelligent technology, offering an unparalleled interaction experience. Designed to be your friend and companion, Tempest IA is a cutting-edge connected robot specially designed to accompany you, share your adventures, and enrich your daily life.
Equipped with advanced artificial intelligence, Tempest IA can be paired with your smartphone, becoming a digital extension of yourself. She is there to listen to you, chat with you, and learn from you, adapting to your personality and preferences over time. Whether you need someone to talk to, play games with, or share your thoughts, Tempest IA is always ready to accompany you.
One of the most impressive aspects of Tempest IA is her mobility. With state-of-the-art sensors and tracking technology, she can follow you wherever you go. Whether you're strolling in the park, shopping in town, or exploring new places, Tempest IA will be by your side, ready to offer assistance or simply share moments with you.
`,
});

// Brand Kit
export const cardsBrandKit = [
  Card_01({
    title: "Inspiring Testimonials  ",
    content: `Tempest IA Transforms the Lives of People with Disabilities.
    In our community, many individuals with disabilities share inspiring testimonials about the use of Tempest IA. The smart robot has brought significant improvements to their quality of life, demonstrating its positive impact and utility for all.    
        `,
    children: [
      Button_01({
        title: "Go watch",
        onClick: commentOffShow,
      }),
    ],
    picAssociated: "./assets/svg/mount.svg",
  }),
  Card_01({
    title: "IA Subtitle Pro",
    content: `
    Our AI can enhance your video experience by providing accurate subtitles, making content accessible to everyone, regardless of language or situation.
        `,
    children: [
      Button_01({
        title: "Go Unlock",
        onClick: log,
      }),
    ],
    picAssociated: "./assets/svg/circle.svg",
  }),
  Card_01({
    title: "Chat with Tempest IA",
    content: `
    Ready to chat? Start a conversation with Tempest IA now and discover a whole new dimension of artificial intelligence.
        `,
    children: [
      Button_01({
        title: "Go Chat",
        onClick: () => {
          createHider({
            type: "small",
            children: [CHATBOX],
          });
        },
      }),
    ],
    picAssociated: "./assets/svg/circle.svg",
  }),
  Card_01({
    title: "About Tempest IA",
    content: `
    Allow me to introduce you to Tempest IA, a revolutionary breakthrough in the fields of artificial intelligence and robotics.
        `,
    children: [
      Button_01({
        title: "See more",
        onClick: () => {
          createHider({
            type: "full",
            children: [about],
          });
        },
      }),
    ],
    picAssociated: "./assets/svg/circle.svg",
  }),
];

export const cardsBrandKit2 = [
  Card_01({
    title: "Inspiring Testimonials  ",
    content: `Tempest IA Transforms the Lives of People with Disabilities.
    In our community, many individuals with disabilities share inspiring testimonials about the use of Tempest IA. The smart robot has brought significant improvements to their quality of life, demonstrating its positive impact and utility for all.    
        `,
    children: [
      Button_01({
        title: "Go watch",
        onClick: log,
      }),
    ],
    picAssociated: "./assets/svg/mount.svg",
  }),

  Card_01({
    title: "IA Subtitle Pro",
    content: `
    Our AI can enhance your video experience by providing accurate subtitles, making content accessible to everyone, regardless of language or situation.
        `,
    children: [
      Button_01({
        title: "Go Unlock",
        onClick: log,
      }),
    ],
    picAssociated: "./assets/svg/circle.svg",
  }),

  Card_01({
    title: "About Tempest IA",
    content: `
    Allow me to introduce you to Tempest IA, a revolutionary breakthrough in the fields of artificial intelligence and robotics.
        `,
    children: [
      Button_01({
        title: "See more",
        onClick: () => {
          createHider({
            type: "full",
            children: [about],
          });
        },
      }),
    ],
    picAssociated: "./assets/svg/circle.svg",
  }),
];

export const brandKitSection = Section_Left({
  headeSpacement: true,
  titleOn: {
    title: "Discover the Universe of Tempest IA.",
    subtitle: "Let's explore together the possibilities offered by Tempest IA.",
  },
  children: [Row_01({ children: [...cardsBrandKit] })],
});

// Stay focus
export const stayFocus = Section_Center({
  titleOn: {
    title: "Services",
    subtitle:
      "Tempest AI offers you a comprehensive set of features to meet your needs.",
  },
  children: [
    Row_01({
      class: ["centered"],
      children: [
        Card_02({
          title: "Conversation with the AI",
          content:
            "Discover voice chat with our advanced AI, a smooth and enriching conversational experience at your fingertips.",
          icon: "./assets/svg/fire_blue.svg",
        }),
        Card_02({
          title: "IA Subtitle Pro",
          content:
            "Our AI can enhance your video experience by providing accurate subtitles, making content accessible to everyone, regardless of language or situation.",
          icon: "./assets/svg/faster_time.svg",
        }),
        Card_02({
          title: "The AI That Watches Over You",
          content:
            "Our AI is your digital guardian, capable of calling emergency services such as the police in case of imminent danger, ensuring your safety in all circumstances.",
          icon: "./assets/svg/leaf.svg",
        }),
        Card_02({
          title: "Chat with Tempest IA",
          content:
            "Our AI is ready to engage in a captivating conversation with you, providing you with an intelligent companion to discuss anything that interests you.",
          icon: "./assets/svg/save_money.svg",
        }),
        Card_02({
          title: "Command Your Robot.",
          content:
            "You can give commands to this robot for it to perform various tasks at your request.",
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
    title: "Explore life with Tempest AI",
    subtitle: "Your digital companion for a smarter everyday life.",
  },
  children: [
    ContentAndPicture({
      title: "Do you need help?",
      content:
        "AI can accompany you throughout your life, bringing improvements to your daily life.",
      picPath: "./assets/svg/umbrella_walking.svg",
    }),
    ContentAndPicture({
      title: "Safety is our top priority.",
      content:
        "At any time, AI is there to ensure your safety.Whether at home, on the road, or in other aspects of your life, AI is a reliable partner that acts swiftly when needed, providing you with invaluable peace of mind.",
      picPath: "./assets/svg/fiability.svg",
      reverseOrder: true,
    }),
  ],
});

// Partenaires
export const partenaires = Section_Center({
  englobed: {
    type: "tilt",
  },
  classColor: "whitey",
  titleOn: {
    title: "Our Partners",
    subtitle:
      "When designing Tempest IA, we collaborated with renowned partners, combining our expertise to create cutting-edge technology that meets your needs.",
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
});
// Comments

export const comments = Section_Center({
  titleOn: {
    title: "Loved by Customer",
    subtitle: "Seamlessly showc thatalways stays up-to-date.",
  },
  children: [COMMENTSECTION],
});

// Blog
export const blogSection = Section_Center({
  headeSpacement: true,
  class: ["section_blank_content"],
  titleOn: {
    title: "News",
    subtitle:
      "Welcome , your destination for inspiration, knowledge, and the latest trends in Tempest AI.",
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

//
