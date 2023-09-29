import { ArticleCard } from "./article-card.js";

const props = {
  images: [],
  titles: [],
  categories: [],
  authors: [],
  dates: [],
};

/**
 *
 * @param {props} props
 * @returns {HTMLDivElement}
 */
export function ArticlesSection(props) {
  const element = document.createElement("div");
  element.classList.add("articles-container");
  props.images.forEach((image, index) => {
    element.appendChild(
      ArticleCard({
        image: image,
        title: props.titles[index],
        category: props.categories[index],
        author: props.authors[index],
        date: props.dates[index],
      })
    );
  });

  return element;
}
