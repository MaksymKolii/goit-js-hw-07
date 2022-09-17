import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryDivRef = document.querySelector(".gallery");

function makeGalleryMarkup(object) {
  return object
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                   <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                  />
              </a>
          </div>`
    )
    .join("");
}

galleryDivRef.innerHTML = makeGalleryMarkup(galleryItems);

galleryDivRef.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const elTarget = e.target.dataset.source;
  const instance = basicLightbox.create(
    `
  <img src="${elTarget}" width="800" height="600">
`,
    {
      onShow: () => document.addEventListener("keydown", onEscBtnPress),
      onClose: () => document.removeEventListener("keydown", onEscBtnPress),
    }
  );

  instance.show();

  function onEscBtnPress(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}
