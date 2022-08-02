import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (item) =>
      `<a class='gallery__item' href="${item.original}"><img class='gallery__image' src='${item.preview}' alt='${item.description}' width='408' height='272'/></a>`
  )
  .join("");

galleryRef.innerHTML = markup;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});
gallery.on("show.simplelightbox");
