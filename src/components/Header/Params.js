import { initProps, props } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function ParamsBox(props) {
  const paramsBox = document.createElement("div");

  initProps(paramsBox, props, true);

  return paramsBox;
}
