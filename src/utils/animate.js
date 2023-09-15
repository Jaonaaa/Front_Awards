// /////
// const buttons = document.getElementsByTagName("button");

// for (const button of buttons) {
//   button.addEventListener("click", () => {
//     var id = button.getAttribute("id");

//     var layerClass = "." + id + "-layer";
//     var layers = document.querySelectorAll(layerClass);
//     for (const layer of layers) {
//       layer.classList.toggle("active");
//     }
//   });
// }
export const scrolledInMe = (element, percentView = 0, speedUp = 1) => {
  let elementTop = element.getBoundingClientRect().top;
  let elementHeight = element.getBoundingClientRect().height;
  percentView = -((percentView * elementHeight) / 100) * speedUp;

  let scrolled = ((elementTop + percentView) * 100) / elementHeight;

  if (scrolled <= 0) {
    if (Math.abs(scrolled) <= 100) {
    } else scrolled = 100;
  } else scrolled = 0;
  return Math.abs(scrolled);
};
