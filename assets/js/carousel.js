/**
 * carousel.js
 * Carrusel de servicios del hero con autoplay y navegación.
 */

function initCarousel() {
  const track   = document.getElementById('cTrack');
  const dots    = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('cPrev');
  const nextBtn = document.getElementById('cNext');

  if (!track || !prevBtn || !nextBtn) return;

  const TOTAL       = 5;
  const AUTOPLAY_MS = 4500;
  let current  = 0;
  let autoplay = null;

  /**
   * Navega al slide indicado.
   * @param {number} index - Índice del slide destino.
   */
  function goTo(index) {
    current = (index + TOTAL) % TOTAL;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('on', i === current));
  }

  /** Reinicia el temporizador de autoplay. */
  function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
  }

  // Eventos de navegación
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });
  prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.i, 10));
      resetAutoplay();
    });
  });

  // Iniciar autoplay
  resetAutoplay();
}
