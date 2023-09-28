import { initProps, props, getStyle, wait } from "../../utils/index.js";
import { Button_01 } from "../Button/Button_01.js";
import { Input_ } from "./Input.js";

/**
 * @param {props} props
 */
export function Formulaire_01(props) {
  const Formulaire = document.createElement("div");

  initProps(Formulaire, props, true);
  Formulaire_01.rootStyleName = "Formulaire";
  Formulaire.classList.add("content_form");
  getStyle(Formulaire_01);

  Formulaire.appendChild(
    Input_({ name: "name", label: "Name", placeholder: "Enter your name" })
  );
  Formulaire.appendChild(
    Input_({
      name: "email",
      label: "Your email",
      placeholder: "Enter your email ",
      type: "email",
    })
  );
  // Formulaire.appendChild(
  //   Input_({ name: "code_ident", label: "CDI", placeholder: "----" })
  // );
  Formulaire.appendChild(Button_01({ title: "Validate" }));

  return Formulaire;
}
