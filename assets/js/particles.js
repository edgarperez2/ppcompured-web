/**
 * particles.js
 * Genera partículas flotantes animadas en el fondo de la página.
 */

function initParticles() {
  const container = document.getElementById('ptcl');
  if (!container) return;

  const colors = ['#00c6ff', '#7c3aed', '#00f5a0', '#ff6b35'];
  const count  = 18;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');

    const size     = Math.random() * 4 + 2;
    const color    = colors[i % colors.length];
    const posX     = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay    = Math.random() * 12;

    particle.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `background:${color}`,
      `left:${posX}%`,
      `animation-duration:${duration}s`,
      `animation-delay:${delay}s`,
      'border-radius:50%',
    ].join(';');

    container.appendChild(particle);
  }
}
