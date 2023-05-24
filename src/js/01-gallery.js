'use strict';
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
const picture = galleryItems.map((image) => 
`<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>`)
    .join("");
gallery.insertAdjacentHTML("beforeend", picture)
gallery.style.cssText = `list-style: none`;

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });