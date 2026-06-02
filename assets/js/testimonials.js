/**
 * testimonials.js
 * Slider de testimonios con navegación y autoplay.
 */

function initTestimonials() {
  const track   = document.getElementById('tTrack');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');

  if (!track || !prevBtn || !nextBtn) return;

  const cards       = track.querySelectorAll('.test-card');
  const AUTOPLAY_MS = 5000;
  const GAP_PX      = 22;
  let current = 0;

  /**
   * Retorna cuántas tarjetas mostrar según el ancho de pantalla.
   * @returns {number}
   */
  function getPerPage() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  }

  /** Actualiza la posición del track. */
  function update() {
    const perPage  = getPerPage();
    const maxIndex = Math.max(0, cards.length - perPage);
    current = Math.min(current, maxIndex);

    const cardWidth = cards[0].offsetWidth + GAP_PX;
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  }

  // Navegación manual
  prevBtn.addEventListener('click', () => {
    if (current > 0) { current--; update(); }
  });

  nextBtn.addEventListener('click', () => {
    if (current < cards.length - getPerPage()) { current++; update(); }
  });

  // Actualizar al redimensionar
  window.addEventListener('resize', update);

  // Autoplay
  setInterval(() => {
    const perPage = getPerPage();
    if (current < cards.length - perPage) {
      current++;
    } else {
      current = 0;
    }
    update();
  }, AUTOPLAY_MS);
}
