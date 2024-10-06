const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function updateCarousel() {
  const offset = (currentIndex * -100) / 5;
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateCarousel();
}

setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

const modal = document.getElementById("addSkillModal");

const openModalButton = document.querySelector(".add-skill-btn");

const closeModalButton = document.getElementsByClassName("close")[0];

openModalButton.onclick = function () {
  modal.style.display = "block";
};

closeModalButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
