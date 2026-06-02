/**
 * navbar.js
 * Maneja el comportamiento del navbar (scroll, menú móvil).
 */

function initNavbar() {
  const nav       = document.getElementById('nav');
  const toggle    = document.getElementById('tog');
  const mobileNav = document.getElementById('mnav');

  if (!nav || !toggle || !mobileNav) return;

  // Agregar clase 'sc' al hacer scroll
  window.addEventListener('scroll', function () {
    nav.classList.toggle('sc', window.scrollY > 50);
  });

  // Toggle del menú móvil
  toggle.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.querySelector('i').className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
  });
}

/**
 * Cierra el menú móvil.
 * Llamado desde los atributos onclick de los links del menú móvil.
 */
function cm() {
  const mobileNav = document.getElementById('mnav');
  const toggle    = document.getElementById('tog');

  if (!mobileNav || !toggle) return;

  mobileNav.classList.remove('open');
  toggle.querySelector('i').className = 'fas fa-bars';
}
