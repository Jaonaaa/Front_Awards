import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Input_(props) {
  const input = document.createElement("div");

  initProps(input, props, true);
  Input_.rootStyleName = "Input";
  input.classList.add("input_");
  getStyle(Input_);

  input.appendChild(createFormStruct({ ...props }));

  return input;
}

function createFormStruct({
  label = "",
  type = "text",
  name,
  placeholder = "",
  value = "",
}) {
  let labelC = document.createElement("label");
  labelC.classList.add("label_");
  labelC.innerHTML = label;

  let input = document.createElement("input");
  if (type == "textarea") input = document.createElement("textarea");
  input.classList.add("input_in");
  if (type != "textarea") input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.value = value;

  let container = document.createElement("div");
  container.classList.add("container_");

  container.appendChild(labelC);
  container.appendChild(input);
  hanleInput(input, labelC, type);
  return container;
}

function hanleInput(input, label, type) {
  input.addEventListener("focus", () => {
    label.classList.add("label_on");
  });
  input.addEventListener("blur", () => {
    label.classList.remove("label_on");
  });
}
