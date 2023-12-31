import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHTML = galleryItems.map(item => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </li>`
    ).join('');
        
gallery.insertAdjacentHTML('afterbegin', galleryItemsHTML);

gallery.addEventListener('click', clickOnImg);

function clickOnImg(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">`,
        { onShow: () => document.addEventListener('keydown', closeModal),
        onClose: () =>document.removeEventListener('keydown', closeModal),
    });
    instance.show();

    function closeModal(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
};