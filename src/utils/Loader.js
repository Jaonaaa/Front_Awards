export function createLoader(Content) {
  let loaderScreen = document.createElement("div");
  loaderScreen.setAttribute("id", "loaderScreen");
  loaderScreen.clean = removeLoader;
  if (Content) loaderScreen.innerHTML = Content;
  squareRotate(loaderScreen);
  document.body.appendChild(loaderScreen);

  return loaderScreen;
}

export function squareRotate(container) {
  let squareRotateScreen = document.createElement("div");
  squareRotateScreen.classList.add("squareRotate");
  ///
  setTimeout(() => {
    squareRotateScreen.classList.add("visible");
  }, 200);

  container.appendChild(squareRotateScreen);
}

function removeLoader() {
  let loaderScreen = document.getElementById("loaderScreen");
  loaderScreen.classList.add("cleanScreen");
  setTimeout(() => {
    loaderScreen.parentElement.removeChild(loaderScreen);
  }, 350);
}
