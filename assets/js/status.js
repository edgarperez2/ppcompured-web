/**
 * status.js
 * Muestra el estado de disponibilidad según el horario de atención.
 * Horario: Lunes a Sábado, 10:00 – 19:00 (hora de Chile).
 */

function initStatus() {
  const badge = document.getElementById('statusBadge');
  if (!badge) return;

  // Hora actual en zona horaria de Chile
  const ahora = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Santiago' })
  );

  const dia  = ahora.getDay();   // 0 = domingo, 6 = sábado
  const hora = ahora.getHours(); // 0 – 23

  // Abierto: Lun(1) a Sáb(6), entre las 10:00 y 18:59
  const enDiaLaboral = dia >= 1 && dia <= 6;
  const enHorario    = hora >= 10 && hora < 19;
  const disponible   = enDiaLaboral && enHorario;

  const dot = '<span class="status-dot"></span>';

  if (disponible) {
    badge.classList.remove('off');
    badge.innerHTML = dot + ' Disponible Ahora';
  } else {
    badge.classList.add('off');
    badge.innerHTML = dot + ' Fuera de Horario';
  }
}

document.addEventListener('DOMContentLoaded', initStatus);
