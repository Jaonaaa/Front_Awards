import { Header } from "../components/Header/Header.js";
import { base_url } from "../utils/index.js";
import { CloseIcon, HamburgerIcon, LogoIcon } from "./svg.js";

const paramsContent = [];

export const header = Header({
  attributs: [
    ["id", "header_proto_mid"],
    ["observation", "navbar"],
  ],
  logoPath: LogoIcon,
  linksTag: [
    {
      linkTo: base_url + "/",
      label: "Home",
    },

    {
      linkTo: base_url + "/about",
      label: "Our works",
    },
    {
      linkTo: base_url + "/blog",
      label: "Blog",
    },
  ],
  paramsContent: paramsContent,
  btnSideBarOn: {
    icon: HamburgerIcon,
    icon_cross: CloseIcon,
  },
});
