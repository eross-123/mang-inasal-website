let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideshowContainer = document.querySelector(".slideshow-container");
let interval;

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides(slideIndex);
}

function startSlideshow() {
  interval = setInterval(nextSlide, 4000);
}

function stopSlideshow() {
  clearInterval(interval);
}

slideshowContainer.addEventListener("mouseenter", stopSlideshow);
slideshowContainer.addEventListener("mouseleave", startSlideshow);

showSlides(slideIndex);
startSlideshow();
