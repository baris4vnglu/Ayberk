// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 10);
});

// Hamburger menu
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('nav')?.classList.toggle('open');
});
