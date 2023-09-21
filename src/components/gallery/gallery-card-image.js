const props = {
  width: 0,
  height: 0,
  image: "",
};

/**
 *
 * @param {props} props
 * @return {HTMLDivElement}
 */
export function GalleryCardImage(props) {
  let element = document.createElement("div");
  element.classList.add("gallery-card-image");

  element.style.width = props.width + "px";
  element.style.height = props.height + "px";
  element.style.backgroundImage = `url(${props.image})`;

  return element;
}
