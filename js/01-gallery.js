import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryArray = galleryItems
	.map(({ preview, original, description }) => {
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

galleryEl.insertAdjacentHTML("afterbegin", galleryArray);

galleryEl.addEventListener("click", e => {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`
	<img src="${e.target.dataset.source}">
	`);

	instance.show();

	galleryEl.addEventListener("keydown", onKeyEsc);

	function onKeyEsc(e) {
		if (e.code !== "Escape") {
			return;
		}
		instance.close();
		galleryEl.removeEventListener("keydown", onKeyUp);
	}
});
