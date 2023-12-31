import {
  initProps,
  props,
  getStyle,
  wait,
  base_url,
} from "../../utils/index.js";

/**
 * @param {props} props
 */
export function Section_Center(props) {
  const section = document.createElement("div");

  if (props) handleSectionProps(section, props);
  initProps(section, props, true);
  Section_Center.rootStyleName = "Section";
  section.classList.add("section_part");
  getStyle(Section_Center);
  if (props) {
    if (props.headSpacement) {
      section.classList.add("space_head");
    }
    if (props.englobed) {
      return handleEnglobed(section, props);
    }
  }

  return section;
}
function handleEnglobed(section, props) {
  let bigSection = document.createElement("div");
  bigSection.classList.add("section_container");

  let blank = document.createElement("div");
  let [top, bottom] = [blank, blank];
  if (props.englobed.type === "wave") [top, bottom] = addWave(props.classColor);
  if (props.englobed.type === "tri") [top, bottom] = addTri(props.classColor);
  if (props.englobed.type === "tilt") [top, bottom] = addTilt(props.classColor);
  if (props.englobed.type === "book") [top, bottom] = addBook(props.classColor);
  bigSection.appendChild(top);
  bigSection.appendChild(section);
  bigSection.appendChild(bottom);
  section.classList.add("section_dark");
  if (props.classColor) section.classList.add(props.classColor);
  return bigSection;
}

export function Section_Left(props) {
  const section = document.createElement("div");

  if (props) handleSectionProps(section, props);
  initProps(section, props, true);
  Section_Left.rootStyleName = "Section";
  section.classList.add("section_left");
  getStyle(Section_Left);
  if (props)
    if (props.headSpacement) {
      section.classList.add("space_head");
    }

  return section;
}

/**
 *
 * @param {HTMLElement} section
 */
function addWave(classColor) {
  let top = document.createElement("div");
  top.classList.add("wave_top");
  top.innerHTML = `  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill ${classColor}"></path>
  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill ${classColor}"></path>
  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill ${classColor}"></path>
</svg>
`;
  let bottom = document.createElement("div");
  bottom.classList.add("wave_bottom");
  bottom.innerHTML = ` <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill ${classColor}"></path>
  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill ${classColor}"></path>
  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill ${classColor}"></path>
</svg>
`;
  return [top, bottom];
}
/**
 *
 * @param {HTMLElement} section
 */
function addTri(classColor) {
  let top = document.createElement("div");
  top.classList.add("tri_top");
  top.innerHTML = ` <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill ${classColor}"></path>
</svg>
`;
  let bottom = document.createElement("div");
  bottom.classList.add("tri_bottom");
  bottom.innerHTML = ` <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill ${classColor}"></path>
</svg>
`;
  return [top, bottom];
}

/**
 *
 * @param {HTMLElement} section
 */
function addTilt(classColor) {
  let top = document.createElement("div");
  top.classList.add("tilt_top");
  top.innerHTML = `  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill ${classColor}"></path>
</svg>
`;
  let bottom = document.createElement("div");
  bottom.classList.add("tilt_bottom");
  bottom.innerHTML = ` <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill ${classColor}"></path>
</svg>
`;
  return [top, bottom];
}
/**
 *
 * @param {HTMLElement} section
 */
function addBook(classColor) {
  let top = document.createElement("div");
  top.classList.add("book_top");
  top.innerHTML = `  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill ${classColor}"></path>
</svg>
`;
  let bottom = document.createElement("div");
  bottom.classList.add("book_bottom");
  bottom.innerHTML = `  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill ${classColor}"></path>
</svg>
`;
  return [top, bottom];
}

function handleSectionProps(section, props) {
  if (props.titleOn) {
    let head = section_head({
      title: props.titleOn.title,
      subtitle: props.titleOn.subtitle,
    });
    section.appendChild(head);
  }
  if (props.headeSpacement) {
    section.classList.add("space_head");
  }
}

function section_head({ title, subtitle }) {
  const head = document.createElement("div");
  head.classList.add("section_head");

  head.innerHTML = `
  <div class="title hide"> ${title} </div>
  <div class="subtitle hide"> ${subtitle} </div>
  `;
  setUpSection_head(head);
  return head;
}

/**
 *
 * @param {HTMLElement} container
 */
function setUpSection_head(container) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animation_head(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.9,
    }
  );
  observer.observe(container);
}

/**
 *
 * @param {HTMLElement} head
 */
function animation_head(head) {
  let timer = 100;
  Array.from(head.children).forEach((child) => {
    wait(() => {
      child.classList.remove("hide");
    }, timer);
    timer += 350;
  });
}
