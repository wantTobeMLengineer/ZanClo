// main.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#slides .slide');
  let current = 0;
  const total = slides.length;

  // Function to show slide idx
  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === idx ? '1' : '0';
    });
  }

  // Initialize first slide
  showSlide(current);

  // Auto-slide setiap 5 detik
  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 5000);
});

