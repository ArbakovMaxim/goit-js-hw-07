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
                      data-source="large-image.jpg"
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
    event.preventDefault()
    instance.show();
  
}

const refs = {
  imgEL : document.querySelector(".gallery__image"),
  linkEl : document.querySelector(".gallery__link"),
  galleryItemEl : document.querySelector(".gallery__item")

}

const instance = basicLightbox.create(`
    <img src="${refs.linkEl}" width="800" height="600">
`)
