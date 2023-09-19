import { base_url } from "../utils/index.js";

export const sectionsFooter = [
  {
    title: "Navigation",
    data: [
      {
        label: "Home",
        linkTo: base_url + "/",
      },
      {
        label: "Our works",
        linkTo: base_url + "/about",
      },
      {
        label: "Testing Projects",
        linkTo: base_url + "/testing",
      },
    ],
  },
  {
    title: "Help",
    data: [
      {
        label: "Our email",
        linkTo: base_url + "/email",
      },
      {
        label: "Service Client",
        linkTo: base_url + "/serviceClient",
      },
      {
        label: "Asking for a project",
        linkTo: base_url + "/project",
      },
      {
        label: "Hiring",
        linkTo: base_url + "/project",
      },
    ],
  },
];
