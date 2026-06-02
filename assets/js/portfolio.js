/**
 * portfolio.js
 * Filtros de categoría para la sección de portfolio.
 */

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.f-btn');
  const cards      = document.querySelectorAll('.pf-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Marcar botón activo
      filterBtns.forEach(b => b.classList.remove('on'));
      this.classList.add('on');

      const filter = this.dataset.f;

      // Mostrar / ocultar tarjetas con transición
      cards.forEach(function (card) {
        const isVisible = filter === 'all' || card.dataset.c === filter;
        card.style.opacity       = isVisible ? '1'    : '0.15';
        card.style.transform     = isVisible ? 'scale(1)' : 'scale(0.96)';
        card.style.pointerEvents = isVisible ? 'auto' : 'none';
      });
    });
  });
}
