import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const makeGalleryItemMarkup = ({ original, description, preview }) => {
  return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const makeGalleryItems = galleryItems
  .map(item => makeGalleryItemMarkup(item))
  .join('');

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryItems);

galleryEl.addEventListener('click', onGalleryClick);

let lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function onGalleryClick(evt) {
  evt.preventDefault();
}
