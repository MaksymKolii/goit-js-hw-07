import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryElRef = document.querySelector(".gallery");

function makeGalleryRowsMarkup(items)  {

  return  items
    .map(item =>

        `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    )
    .join('')

}

const makeGaleryRows = makeGalleryRowsMarkup(galleryItems);
console.log(makeGaleryRows);

 galleryElRef.insertAdjacentHTML("beforeend", makeGaleryRows);



//const lightbox = 

new SimpleLightbox('.gallery a',{
    
    captionDelay: 7250, 
    //navText: ['←','→'],
    //closeText:	'esolC',
    //animationSpeed:	250,
    captionType: 'attr',
    captionPosition:'bottom',

});
