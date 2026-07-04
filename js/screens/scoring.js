export const html = `
<div class="stitle">⭐ Score Productivo Farmex</div>
<div class="sc-layout">
  <div class="sc-main">
    <p style="font-size:11px;color:rgba(255,255,255,.4);letter-spacing:1px;text-transform:uppercase;">Tu puntuación</p>
    <div class="sc-circle">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle cx="75" cy="75" r="62" fill="none" stroke="rgba(200,150,30,.15)" stroke-width="11"/>
        <circle cx="75" cy="75" r="62" fill="none" stroke="#E8B84B" stroke-width="11" stroke-dasharray="390" stroke-dashoffset="93" stroke-linecap="round"/>
      </svg>
      <div class="sc-txt"><span class="sc-num">760</span><span class="sc-max">/ 1000</span></div>
    </div>
    <div class="sc-cat">Muy Bueno</div>
    <div class="sc-desc">Accedes a tasas preferenciales desde 1.5% mensual y montos ampliados por tu capacidad productiva verificada.</div>
    <div class="sc-next">
      <div class="sc-next-t">Próximo nivel</div>
      <div class="sc-next-v">Excelente (800+)</div>
      <div class="sc-next-h">Cumple las recomendaciones técnicas pendientes para +25 pts</div>
    </div>
    <div style="margin-top:14px;padding:11px 14px;background:linear-gradient(135deg,rgba(228,173,52,.18),rgba(228,173,52,.08));border:1px solid rgba(228,173,52,.35);border-radius:8px;text-align:center;">
      <div style="font-size:10px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px;">⭐ Acceso Premium</div>
      <div style="font-size:11px;color:rgba(255,255,255,.6);margin-bottom:9px;">Score Muy Bueno (760) · Calificación cumplida</div>
      <button onclick="window.goScreen('suscripciones')" style="width:100%;background:var(--gold);color:#fff;border:none;padding:8px;border-radius:7px;font-size:12px;font-weight:700;cursor:pointer;">Ver mi plan →</button>
    </div>
  </div>
  <div class="sc-factors">
    <div style="font-size:14px;font-weight:700;color:var(--txt);margin-bottom:16px;">Criterios de evaluación</div>
    <div class="sf-row"><div class="sf-ico">🌿</div><div class="sf-info"><div class="sf-n">Estado del cultivo</div><div class="sf-d">NDVI 0.68 · vegetación saludable · sin focos de estrés</div></div><div class="sf-bar"><div class="sf-fill" style="width:92%;background:var(--ok)"></div></div><div class="sf-v">92</div></div>
    <div class="sf-row"><div class="sf-ico">🧑‍🌾</div><div class="sf-info"><div class="sf-n">Manejo agronómico</div><div class="sf-d">Programa de fertilización y riego tecnificado activo</div></div><div class="sf-bar"><div class="sf-fill" style="width:88%;background:var(--ok)"></div></div><div class="sf-v">88</div></div>
    <div class="sf-row"><div class="sf-ico">✅</div><div class="sf-info"><div class="sf-n">Cumplimiento de recomendaciones técnicas</div><div class="sf-d">4 de 5 recomendaciones aplicadas en la campaña</div></div><div class="sf-bar"><div class="sf-fill" style="width:80%;background:var(--gold)"></div></div><div class="sf-v">80</div></div>
    <div class="sf-row"><div class="sf-ico">🌾</div><div class="sf-info"><div class="sf-n">Historial de producción</div><div class="sf-d">5 campañas registradas · crecimiento continuo</div></div><div class="sf-bar"><div class="sf-fill" style="width:90%;background:var(--ok)"></div></div><div class="sf-v">90</div></div>
    <div class="sf-row"><div class="sf-ico">📊</div><div class="sf-info"><div class="sf-n">Rendimiento por hectárea</div><div class="sf-d">~3.5 TM/ha · por encima del promedio regional</div></div><div class="sf-bar"><div class="sf-fill" style="width:85%;background:var(--ok)"></div></div><div class="sf-v">85</div></div>
    <div class="sf-row"><div class="sf-ico">🍈</div><div class="sf-info"><div class="sf-n">Calidad de la fruta</div><div class="sf-d">Calibre export · bajo rechazo en postcosecha</div></div><div class="sf-bar"><div class="sf-fill" style="width:78%;background:var(--gold)"></div></div><div class="sf-v">78</div></div>
    <div class="sf-row"><div class="sf-ico">🛡️</div><div class="sf-info"><div class="sf-n">Gestión de riesgos</div><div class="sf-d">Riego tecnificado · alertas climáticas activas</div></div><div class="sf-bar"><div class="sf-fill" style="width:72%;background:var(--gold)"></div></div><div class="sf-v">72</div></div>
    <div class="sf-row"><div class="sf-ico">💳</div><div class="sf-info"><div class="sf-n">Historial comercial y de pagos</div><div class="sf-d">3 compradores activos · créditos al día</div></div><div class="sf-bar"><div class="sf-fill" style="width:75%;background:var(--gold)"></div></div><div class="sf-v">75</div></div>
  </div>
</div>
`;

export function init() {}
