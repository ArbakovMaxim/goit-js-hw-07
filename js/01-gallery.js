import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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


allGalleryEl.addEventListener('click', openingOriginalPicture);


function openingOriginalPicture(event){
  
  if(event.target.nodeName !== "IMG"){
      return 
    }

    const largeImage = event.target.dataset.source;
    event.preventDefault()

    const instance = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
    `)

    instance.show()


    const visible = instance.visible()


    function addAndRemoveEventListener(){
      if(visible){
        window.addEventListener("keydown", closeModalInEsc);
      }
    }

    addAndRemoveEventListener()

    function closeModalInEsc(event){
      if(event.code !== "Escape"){
        return
      }
        window.removeEventListener("keydown", closeModalInEsc)
        instance.close()
    }
}
