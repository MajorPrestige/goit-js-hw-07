import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryArray = galleryItems
	.map(({ preview, original, description }) => {
		return `
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
  `;
	})
	.join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryArray);
const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionsDelay: 250,
});

galleryEl.addEventListener("click", e => {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	}
	return lightbox;
});
