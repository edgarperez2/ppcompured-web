/**
 * form.js
 * Envío real del formulario de contacto via Formspree.
 */

async function fSub(e) {
  e.preventDefault();

  const form       = e.target;
  const btn        = form.querySelector('.f-sub');
  const successMsg = document.getElementById('okMsg');

  if (!btn || !successMsg) return;

  // Estado de carga
  btn.disabled  = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

  try {
    const response = await fetch('https://formspree.io/f/xykvrknj', {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    new FormData(form)
    });

    if (response.ok) {
      // ── Éxito ──
      btn.innerHTML        = '<i class="fas fa-check"></i> ¡Enviado!';
      btn.style.background = 'var(--ok)';
      btn.style.color      = 'var(--bg)';
      successMsg.style.display = 'block';
      form.reset();

      // Restaurar botón después de 5 segundos
      setTimeout(function () {
        btn.disabled             = false;
        btn.innerHTML            = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
        btn.style.background     = '';
        btn.style.color          = '';
        successMsg.style.display = 'none';
      }, 5000);

    } else {
      // ── Error del servidor ──
      const data = await response.json();
      const msg  = (data.errors && data.errors.map(e => e.message).join(', '))
                   || 'Hubo un problema al enviar. Intenta de nuevo.';
      throw new Error(msg);
    }

  } catch (err) {
    // ── Error de red u otro ──
    btn.disabled  = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
    alert('Error: ' + err.message);
  }
}
