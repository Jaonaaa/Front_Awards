import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Row_01(props) {
  const row = document.createElement("div");

  initProps(row, props, true);
  Row_01.rootStyleName = "Row";
  row.classList.add("row_container");
  getStyle(Row_01);

  return row;
}
