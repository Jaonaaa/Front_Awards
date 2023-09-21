import { Header } from "../components/Header/Header.js";
import { base_url } from "../utils/index.js";

const paramsContent = [];

export const header = Header({
  attributs: [
    ["id", "header_proto_mid"],
    ["observation", "navbar"],
  ],
  logoPath: "./assets/svg/Tempest_logo.svg",
  linksTag: [
    {
      linkTo: base_url + "/",
      label: "Home",
    },

    {
      linkTo: base_url + "/about",
      label: "Our works",
    },
  ],
  paramsContent: paramsContent,
  btnSideBarOn: {
    icon: "./assets/img/hamburger_icon.png",
    icon_cross: "./assets/img/cross_icon.png",
  },
});
