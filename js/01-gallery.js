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
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryColectionClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `);

  instance.show();

  galerryColection.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
