/**
 * status.js
 * Muestra el estado de disponibilidad según el horario de atención.
 * Horario: Lunes a Viernes 10:00 – 19:00 · Sábado 10:00 – 17:00 (hora de Chile).
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

  // Hora de cierre según el día: Sábado(6) cierra a las 17:00, Lun–Vie a las 19:00
  const horaCierre = (dia === 6) ? 17 : 19;

  // Abierto: Lun(1) a Sáb(6), desde las 10:00 hasta la hora de cierre
  const enDiaLaboral = dia >= 1 && dia <= 6;
  const enHorario    = hora >= 10 && hora < horaCierre;
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
