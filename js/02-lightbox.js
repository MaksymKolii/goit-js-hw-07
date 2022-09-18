import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryElRef = document.querySelector(".gallery");

function makeGalleryMarkup(object) {
  return object
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                   <img
                      class="gallery__image"
                      src="${preview}"
                      alt="${description}"
                  />
              </a>
          </li>`
    )
    .join("");
}
galleryElRef.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
