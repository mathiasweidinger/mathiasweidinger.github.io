document.addEventListener("DOMContentLoaded", function() {
  // Lazy-load images
  const images = document.querySelectorAll(".bridget-gallery img");
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
    img.onload = () => img.classList.add("loaded");
  });

  // Lightbox setup
  const lightbox = document.createElement("div");
  lightbox.classList.add("bridget-lightbox");
  document.body.appendChild(lightbox);

  const lightboxImg = document.createElement("img");
  lightbox.appendChild(lightboxImg);

  // Open lightbox on click
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  // Close lightbox on click
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });
});
