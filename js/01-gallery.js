import { galleryItems } from "./gallery-items.js";

/* Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
Реализация делегирования на div.gallery и получение url большого изображения.
Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на 
минифицированные (.min) файлы библиотеки.
Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением
 из примеров библиотеки basicLightbox. */

// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector(".gallery");

// function makeGalleryRowsMarkup({ preview, original, description }) {
//   return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>
//   `;
// };

// const makeGaleryRows = galleryItems.map(makeGalleryRowsMarkup).join("");

function makeGalleryRowsMarkup(items) {
    return items
    .map(item => 

        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                 <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`
    )
    .join('')
    
  };
  
const makeGaleryRows = makeGalleryRowsMarkup(galleryItems);

console.log(makeGaleryRows);

galleryDivRef.insertAdjacentHTML("beforeend", makeGaleryRows);

galleryDivRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const clickedImage = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${clickedImage}" width="800" height="600">`);

  instance.show();

  galleryDivRef.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        instance.close();
    }
  });
});
