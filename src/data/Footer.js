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
        linkTo: base_url + "/features",
        label: "Features",
      },
    ],
  },
  {
    title: "Community",
    data: [
      {
        label: "Actualities",
        linkTo: base_url + "/actu",
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
