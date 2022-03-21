import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const allGalleryEl = document.querySelector('.gallery');

const galleryEl = galleryItems.map(galleryItem => {

return  `<li class="gallery__item">
            <a class="gallery__item" href="${galleryItem.original}">
                <img class="gallery__image" 
                    src="${galleryItem.preview}" 
                    alt="${galleryItem.description}" />
            </a>
        </li>`
}).join('');

allGalleryEl.insertAdjacentHTML("afterbegin", galleryEl);

allGalleryEl.addEventListener('click', onOriginalPicture);

function onOriginalPicture(event){
  
    if(event.target.nodeName !== "IMG"){
        return 
      }
  
      event.preventDefault()


    }