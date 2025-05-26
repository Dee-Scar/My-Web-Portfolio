// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a'); // get all the nav links

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when any nav link is clicked
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


// Stop scrolling reviews when hovered
const slider = document.querySelector('.review-slider');

slider.addEventListener('mouseenter', () => {
  slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
  slider.style.animationPlayState = 'running';
});

