/**
 * typing.js
 * Efecto de escritura/borrado para el título del hero.
 */

function initTyping() {
  const el = document.getElementById('typing');
  if (!el) return;

  const words = ['Transforman', 'Impulsan', 'Optimizan', 'Potencian'];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    // Añadir o quitar carácter
    if (isDeleting) {
      el.textContent = currentWord.substring(0, --charIndex);
    } else {
      el.textContent = currentWord.substring(0, ++charIndex);
    }

    // Calcular velocidad
    let delay = isDeleting ? 75 : 115;

    if (!isDeleting && charIndex === currentWord.length) {
      // Pausar al terminar de escribir
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Cambiar a la siguiente palabra
      isDeleting  = false;
      wordIndex   = (wordIndex + 1) % words.length;
      delay       = 350;
    }

    setTimeout(type, delay);
  }

  // Esperar un momento antes de iniciar
  setTimeout(type, 1200);
}
