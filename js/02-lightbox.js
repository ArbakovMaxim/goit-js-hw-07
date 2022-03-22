import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const allGalleryEl = document.querySelector('.gallery');

const galleryEl = galleryItems.map(galleryItem => {

return      `<a class="gallery__item" href="${galleryItem.original}">
                <img class="gallery__image" 
                    src="${galleryItem.preview}" 
                    alt="" title="${galleryItem.description}" />
            </a>`
}).join('');

allGalleryEl.insertAdjacentHTML("afterbegin", galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay : 250});


allGalleryEl.addEventListener('click', onOriginalPicture);


function onOriginalPicture(event){

    if(event.target.nodeName !== "IMG"){
        return 
    }
    event.preventDefault()
    lightbox.open();
    window.addEventListener("keydown", offModal);

}

function offModal(event){
    if(event.code !== "Escape"){
    return
    }
    lightbox.close()
  }