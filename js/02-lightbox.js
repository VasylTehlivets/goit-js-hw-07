import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galerryColection = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galerryColection.insertAdjacentHTML("beforeend", galleryMarkup);

galerryColection.addEventListener("click", onGalleryColectionClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

function onGalleryColectionClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
