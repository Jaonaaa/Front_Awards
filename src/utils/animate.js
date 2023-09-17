/////

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
