export const html = `
<div class="stitle">🌟 Planes de Suscripción</div>

<div style="background:linear-gradient(135deg,#E8F8EE,#FDF3DC);border:1px solid rgba(39,174,96,.2);border-radius:10px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
  <div style="display:flex;align-items:center;gap:10px;">
    <span style="font-size:20px;">🌱</span>
    <div><div style="font-size:13px;font-weight:700;color:var(--g-dark);">Plan actual: <span style="color:var(--ok);">Estándar activo</span></div><div style="font-size:11px;color:var(--txt-m);margin-top:1px;">Acceso completo a asistencia técnica, climatología y marketplace</div></div>
  </div>
  <div style="display:flex;align-items:center;gap:6px;background:rgba(228,173,52,.15);border:1px solid rgba(228,173,52,.3);border-radius:20px;padding:5px 12px;">
    <span style="font-size:13px;">⭐</span>
    <span style="font-size:12px;font-weight:700;color:var(--gold);">Score 760 · Elegible Premium</span>
  </div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">

  <!-- Estándar -->
  <div style="background:var(--card);border:2px solid var(--border);border-radius:12px;padding:20px;display:flex;flex-direction:column;">
    <div style="text-align:center;margin-bottom:14px;">
      <div style="font-size:28px;margin-bottom:6px;">🌱</div>
      <div style="font-size:17px;font-weight:800;color:var(--txt);">Estándar</div>
      <div style="font-size:22px;font-weight:800;color:var(--ok);margin:6px 0 2px;">$12 <span style="font-size:14px;font-weight:600;">/ mes</span></div>
      <div style="font-size:11px;color:var(--txt-m);">S/ 45 / mes · Acceso a la plataforma</div>
    </div>
    <div style="background:#E8F8EE;border-radius:7px;padding:6px 10px;text-align:center;font-size:11px;font-weight:700;color:var(--ok);margin-bottom:14px;">✅ Activación inmediata al registrarse</div>
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;font-size:12px;color:var(--txt-s);">
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--ok);font-weight:700;">✓</span><span>Asistencia técnica digital con agrónomos especializados</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--ok);font-weight:700;">✓</span><span>Climatología y alertas semanales por región</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--ok);font-weight:700;">✓</span><span>Marketplace & Mi Vitrina verificada</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--ok);font-weight:700;">✓</span><span>Score Productivo básico</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--ok);font-weight:700;">✓</span><span>Precios de mercado y data agrícola</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#ccc;">—</span><span style="color:#aaa;">Productos de crédito agrícola</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:#ccc;">—</span><span style="color:#aaa;">Certificación técnica BanBif</span></div>
    </div>
    <div style="margin-top:16px;padding:9px;background:var(--bg);border-radius:7px;text-align:center;font-size:11px;font-weight:700;color:var(--txt-m);text-transform:uppercase;letter-spacing:.5px;">Tu plan actual</div>
  </div>

  <!-- Premium -->
  <div style="background:var(--card);border:2px solid var(--gold);border-radius:12px;padding:20px;display:flex;flex-direction:column;position:relative;overflow:hidden;">
    <div style="position:absolute;top:0;right:0;background:var(--gold);color:#fff;font-size:10px;font-weight:800;padding:4px 12px;border-radius:0 0 0 8px;text-transform:uppercase;letter-spacing:.5px;">Recomendado</div>
    <div style="text-align:center;margin-bottom:14px;">
      <div style="font-size:28px;margin-bottom:6px;">⭐</div>
      <div style="font-size:17px;font-weight:800;color:var(--txt);">Premium</div>
      <div style="font-size:22px;font-weight:800;color:var(--gold);margin:6px 0 2px;">$45 <span style="font-size:14px;font-weight:600;">/ mes</span></div>
      <div style="font-size:11px;color:var(--txt-m);">S/ 169 / mes · Score ≥ Bueno requerido</div>
    </div>
    <div style="background:#FDF3DC;border-radius:7px;padding:6px 10px;text-align:center;font-size:11px;font-weight:700;color:var(--gold);margin-bottom:14px;">⭐ Score ≥ Bueno (600+) + 1 año activo</div>
    <div style="flex:1;display:flex;flex-direction:column;gap:8px;font-size:12px;color:var(--txt-s);">
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--ok);font-weight:700;">✓</span><span>Todo lo incluido en Estándar</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold);font-weight:700;">★</span><span><strong>Acceso completo a créditos agrícolas</strong> (6 productos)</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold);font-weight:700;">★</span><span><strong>Certificación técnica para BanBif</strong> generada por Farmex</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold);font-weight:700;">★</span><span>Score Productivo completo con historial y evolución</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold);font-weight:700;">★</span><span>Acompañamiento agronómico prioritario (visita mensual)</span></div>
      <div style="display:flex;gap:8px;align-items:flex-start;"><span style="color:var(--gold);font-weight:700;">★</span><span>Conexión comercial prioritaria con exportadores</span></div>
    </div>
    <div id="prem-status" style="margin-top:16px;"></div>
  </div>

</div>

<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:16px 18px;">
  <div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:12px;">📋 ¿Cómo accedo al plan Premium?</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;gap:12px;align-items:flex-start;">
      <div style="min-width:24px;height:24px;background:var(--ok);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;">1</div>
      <div style="font-size:12px;color:var(--txt-s);"><strong>Score Productivo ≥ Bueno (600 pts)</strong> — evaluado por el equipo agronómico de Farmex AgroConsulting en campo y con datos satelitales.</div>
    </div>
    <div style="display:flex;gap:12px;align-items:flex-start;">
      <div style="min-width:24px;height:24px;background:var(--ok);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;">2</div>
      <div style="font-size:12px;color:var(--txt-s);"><strong>1 año activo en la plataforma</strong> con al menos una campaña registrada y seguimiento técnico completado.</div>
    </div>
    <div style="display:flex;gap:12px;align-items:flex-start;">
      <div style="min-width:24px;height:24px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;">3</div>
      <div style="font-size:12px;color:var(--txt-s);"><strong>Farmex emite la certificación técnica</strong> que respalda tu perfil ante BanBif y habilita el acceso al portafolio completo de créditos.</div>
    </div>
  </div>
</div>
`;

export function init() {
  const score = 760;
  const cat   = score >= 800 ? 'Excelente' : score >= 700 ? 'Muy Bueno' : score >= 600 ? 'Bueno' : 'Regular';
  const apto  = score >= 600;
  const el    = document.getElementById('prem-status');
  if (!el) return;
  if (apto) {
    el.innerHTML = `
      <div style="background:#E8F8EE;border-radius:7px;padding:8px 10px;margin-bottom:8px;font-size:11px;color:var(--ok);font-weight:700;text-align:center;">✅ Score ${score} (${cat}) · Calificación cumplida</div>
      <button onclick="alert('Tu solicitud de acceso Premium ha sido registrada. El equipo de Farmex AgroConsulting revisará tu perfil en los próximos 5 días hábiles.')" style="width:100%;background:var(--gold);color:#fff;border:none;padding:10px;border-radius:7px;font-size:13px;font-weight:700;cursor:pointer;">Solicitar acceso Premium →</button>`;
  } else {
    el.innerHTML = `
      <div style="background:#FEF9E7;border-radius:7px;padding:8px 10px;font-size:11px;color:var(--gold);text-align:center;">⏳ Score ${score} (${cat}) · Necesitas ${600 - score} pts más para calificar</div>`;
  }
}
