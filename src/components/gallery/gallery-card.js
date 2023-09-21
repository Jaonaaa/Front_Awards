import { GalleryCardImage } from "./gallery-card-image.js";

const props = {
  images: [],
  width: 0,
  height: 0,
  borderRadius: 0,
};

/**
 *
 * @param {props} props
 * @return {HTMLDivElement}
 */
export function GalleryCard(props) {
  const element = document.createElement("div");
  element.classList.add("gallery-card");
  window.addEventListener("resize", () => {
    element.style.width = window.innerWidth / 10 + "px";
  });
  element.style.width = props.width + "px";
  element.style.height = props.height + "px";
  element.style.borderRadius = props.borderRadius + "px";

  element.innerHTML = `
    <link rel="stylesheet" href="./css/gallery-card.css" />
  `;

  const slider = document.createElement("div");
  slider.classList.add("gallery-slider");
  slider.style.width = props.images.length * props.width + "px";
  props.images.forEach((image) => {
    slider.appendChild(
      GalleryCardImage({
        width: props.width,
        height: props.height,
        image: image,
      })
    );
  });

  element.appendChild(slider);

  let count = 1;
  window.setInterval(() => {
    slider.animate(
      [
        {
          left: -(props.width * (count % props.images.length)) + "px",
        },
      ],
      {
        fill: "forwards",
        duration: 2000,
        easing: "cubic-bezier(.19,.75,.14,.99)",
      }
    );
    count++;
  }, 5000);

  return element;
}
