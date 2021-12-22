import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
console.log(paletteContainer);


const cardsMarkup = createColorPhotoMarkup(galleryItems);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);


function createColorPhotoMarkup(colors) {
  return colors.map(({ preview, original, description }) => {
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
        </div>
      `;
    })
    .join("");
};


function onPaletteContainerClick(evt) {
    evt.preventDefault();

    const isPhotoPhotoHref = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${isPhotoPhotoHref}" width="800" height="600">`)

      instance.show()


    window.addEventListener("keydown", onEscapeClick)  
    
        function onEscapeClick (event) {
        if (event.code === "Escape")
          instance.close();
          window.removeEventListener("keydown", onEscapeClick);

      };

    if (!isPhotoPhotoHref) {
      return;
    }
    
  }


