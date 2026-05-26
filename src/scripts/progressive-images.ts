/** Enable blur-up mode and mark images that finished loading before this script ran. */
export function initProgressiveImages() {
  document.documentElement.classList.add("progressive-images");

  document.querySelectorAll("[data-progressive-image]").forEach((wrapper) => {
    const full = wrapper.querySelector(".progressive-image__full");
    if (!(full instanceof HTMLImageElement)) return;
    if (full.complete && full.naturalWidth > 0) {
      wrapper.classList.add("is-loaded");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProgressiveImages);
} else {
  initProgressiveImages();
}

document.addEventListener("astro:page-load", initProgressiveImages);
