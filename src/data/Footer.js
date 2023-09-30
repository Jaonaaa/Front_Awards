import { Footer_01 } from "../components/Footer/Footer.js";
import { base_url } from "../utils/index.js";
import { LogoIconFooter } from "./svg.js";

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
    title: "Community",
    data: [
      {
        label: "Blog",
        linkTo: base_url + "/blog",
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

// Footer
export const footer_C_01 = Footer_01({
  logoPath: LogoIconFooter,
  textSubtitle:
    "Embark on a Journey of a Lifetime: Explore Diverse Destinations, Create Lasting Memories, and Let Your Wanderlust Take Flight with Us!",
  sections: sectionsFooter,
  copyrigthText: "Corp 2023 Tempest, All rights reserved",
});
