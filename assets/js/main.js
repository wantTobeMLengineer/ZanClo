// bacgkround Image Carrousels
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

// Back to Top
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Toggle mobile menu
const btn  = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Scroll animation
const faders = document.querySelectorAll('.fade');

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
