import { galleryItems } from './gallery-items.js';
// Change code below this line

const allGalleryEl = document.querySelector('.gallery');

const galleryEl = galleryItems.map(galleryItem => {
  
  return  `<div class="gallery__item">
              <a class="gallery__link" href="${galleryItem.original}">
                  <img
                      class="gallery__image"
                      src="${galleryItem.preview}"
                      data-source="${galleryItem.original}"
                      alt="${galleryItem.description}"
                  />
              </a>
          </div>`
}).join('');

allGalleryEl.insertAdjacentHTML("afterbegin", galleryEl);


allGalleryEl.addEventListener('click', onOriginalPicture);

let instance = {};

function onOriginalPicture(event){
  
  if(event.target.nodeName !== "IMG"){
      return 
    }

    const largeImage = event.target.dataset.source;
    event.preventDefault()

    instance = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
    <a>Close</a>`, {
      onShow: () => {
        window.addEventListener("keydown", offModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", offModal)
      }
    })
    
    offModal(event);
    
    instance.show();
  }

  function offModal(event){
    if(event.code !== "Escape"){
    return
    }
  instance.close()
  }