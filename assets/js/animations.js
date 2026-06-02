/**
 * animations.js
 * Scroll reveal, barras de habilidades y contadores animados.
 */

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  document.querySelectorAll('.rev, .rev-l, .rev-r').forEach(el => observer.observe(el));
}

/* ---- Barras de habilidades ---- */
function initSkillBars() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.sk-fill').forEach(function (fill) {
          fill.style.width = fill.dataset.w + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.sb-card').forEach(function (card) {
    if (card.querySelector('.sk-fill')) {
      observer.observe(card);
    }
  });
}

/* ---- Contadores animados ---- */
function initCounters() {
  const DURATION_MS = 2000;
  const FRAME_MS    = 16;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.dataset.t, 10);
      const step   = target / (DURATION_MS / FRAME_MS);
      let value    = 0;

      const interval = setInterval(function () {
        value += step;
        if (value >= target) {
          el.textContent = target + '+';
          clearInterval(interval);
        } else {
          el.textContent = Math.floor(value) + '+';
        }
      }, FRAME_MS);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-n[data-t]').forEach(el => observer.observe(el));
}

/* ---- Punto de entrada ---- */
function initAnimations() {
  initScrollReveal();
  initSkillBars();
  initCounters();
}
