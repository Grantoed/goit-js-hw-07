import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<div class='gallery__item'><a class='gallery__link' href='${item.original}'><img class='gallery__image' src='${item.preview}' data-source='${item.original}' alt='${item.description}' width='408' height='272'/></a></div>`
  )
  .join("");

galleryRef.innerHTML = markup;
galleryRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  const srcOriginal = evt.target.dataset.source;
  const isImg = evt.target.nodeName === "IMG";

  if (!isImg) {
    return;
  }

  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${srcOriginal}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", onEscPress);

  function onEscPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
