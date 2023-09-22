import { initProps, props, getStyle, wait } from "../../utils/index.js";

/**
 * @param {props} props
 */
export function ContentAndPicture(props) {
  const RowContent = document.createElement("div");

  initProps(RowContent, props, true);
  ContentAndPicture.rootStyleName = "RowContent";
  RowContent.classList.add("content_pic_container");
  getStyle(ContentAndPicture);

  let leftContent = addContent({ title: props.title, content: props.content });
  let rightContent = addPicture({ picPath: props.picPath });

  leftContent.classList.add("hide");
  rightContent.classList.add("hide");

  if (props.reverseOrder) RowContent.classList.add("reverse_content");

  RowContent.appendChild(leftContent);
  RowContent.appendChild(rightContent);
  setUpChildren(RowContent);

  return RowContent;
}

function addContent({ title, content }) {
  let container = document.createElement("div");
  container.classList.add("content_text");

  let titleC = document.createElement("div");
  titleC.classList.add("title");
  titleC.innerHTML = title;

  let contentC = document.createElement("div");
  contentC.classList.add("content");
  contentC.innerHTML = content;

  container.appendChild(titleC);
  container.appendChild(contentC);

  return container;
}

function addPicture({ picPath }) {
  let container = document.createElement("div");
  container.classList.add("pictureContainer");

  let img = document.createElement("img");
  img.src = picPath;

  container.appendChild(img);
  return container;
}

function setUpChildren(row) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChild(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.8,
    }
  );
  observer.observe(row);
}

function animateChild(parent) {
  let timer = 0;
  Array.from(parent.children).forEach((child) => {
    wait(() => {
      child.classList.remove("hide");
    }, timer);
    timer += 300;
  });
}
