/**
 * main.js
 * Punto de entrada principal — inicializa todos los módulos.
 *
 * Orden de carga (definido en index.html):
 *   particles.js → navbar.js → carousel.js → testimonials.js
 *   → portfolio.js → animations.js → typing.js → form.js → main.js
 */

document.addEventListener('DOMContentLoaded', function () {
  initParticles();    // Partículas de fondo
  initNavbar();       // Navbar scroll + menú móvil
  initCarousel();     // Carrusel del hero
  initTestimonials(); // Slider de testimonios
  initPortfolio();    // Filtros del portfolio
  initAnimations();   // Scroll reveal + skill bars + contadores
  initTyping();       // Efecto de escritura en el título
});
