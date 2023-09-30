import { CommentCard } from "./comment-card.js";

export const props = {
  comments: [
    {
      author: {
        name: "",
        photo: "",
      },
      content: "",
    },
  ],
};

/**
 * @param {props} param0
 * @returns {HTMLDivElement}
 */
export function CommentSection({ comments }) {
  const element = document.createElement("div");
  element.classList.add("comment-section");

  for (let index = 0; index < 3; index++) {
    const section = document.createElement("div");
    section.classList.add("comment-section-part");

    if (index != 1) {
      section.classList.add("top-section");
    }

    for (let i = index * 3; i < (index + 1) * 3; i++) {
      section.appendChild(CommentCard(comments[i]));
    }

    element.appendChild(section);
  }

  return element;
}

export const COMMENTSECTION = CommentSection({
  comments: [
    {
      author: {
        name: "Alice",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
      This robot has changed my life. It helps me with so many things in my daily life that I thought were out of reach. I can't imagine my life without it. Thank you, Tempest AI!

      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
      `,
    },
  ],
});

export const COMMENTSECTION_ = CommentSection({
  comments: [
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
        <br />
        Je peux plus facilement monter les escalier, aller aux toilettes, faire les besoins quotidiens sans avoir a m'inquieter des accidents qui pourraient m'arriver.
      `,
    },
    {
      author: {
        name: "Dazai Osamu",
        photo: "./assets/img/robot.png",
        pseudo: "DazaiKun",
      },
      content: `
        Bonjour, je m'appelle Dazai, appelez-moi Hello.
        <br />
        <br />
        Depuis que j'ai utilisé ce robot, tout devient facile dans ma vie.
      `,
    },
  ],
});
