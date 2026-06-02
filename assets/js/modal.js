/* ══════════════════════════════════════════
   MODAL — imagen con marco neón (genérico)
══════════════════════════════════════════ */

function openImgModal(imgSrc) {
  document.getElementById('modalImg').src = imgSrc;
  const modal = document.getElementById('imgModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeImgModal() {
  const modal = document.getElementById('imgModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Cerrar con tecla Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeImgModal();
});
