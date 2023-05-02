window.onload = function() {

const images = [  "../carousel/arts/p1crop.jpg",
"../carousel/arts/collage2.jpg",
"../carousel/arts/IMG_5129.jpeg",
"../carousel/arts/IMG_5130.jpeg",
"../carousel/arts/IMG_5131.jpeg",
"../carousel/arts/IMG_5133.jpeg",
"../carousel/arts/IMG_5136.jpeg",
];
let currentIndex = 0;

function updateCarousel() {
  const image = document.getElementById("carousel-image");
  image.src = images[currentIndex];

  // Highlight the selected icon
  const icons = document.getElementsByClassName("carousel-icon");
  for (let i = 0; i < icons.length; i++) {
    if (i === currentIndex) {
      icons[i].classList.add("selected");
    } else {
      icons[i].classList.remove("selected");
    }
  }
}

function createIcons() {
  const container = document.getElementById("carousel-icons");
  for (let i = 0; i < images.length; i++) {
    const icon = document.createElement("img");
    icon.src = images[i];
    icon.classList.add("carousel-icon");
    if (i === currentIndex) {
      icon.classList.add("selected");
    }
    icon.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel();
    });
    container.appendChild(icon);
  }
}

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

const prevButton = document.getElementById("prev-button");
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

createIcons();
updateCarousel();

window.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
  });

}