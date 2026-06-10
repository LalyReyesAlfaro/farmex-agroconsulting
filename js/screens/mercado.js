const USD_RATE = 3.75;

const IDX_PEN = {
  palta:    4.20,
  arandano: 12.50,
};

const CHART_PEN = {
  palta:    [3.60,3.75,3.90,4.00,4.07,4.20],
  arandano: [4.20,4.10,4.30,4.50,4.20,4.17],
};

export const html = `
<div class="stitle" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
  <span>📈 Índices de Mercado</span>
  <div class="curr-toggle" style="display:inline-flex;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
    <button class="curr-btn active" id="curr-pen" data-curr="PEN" style="padding:6px 16px;border:none;background:#27ae60;color:#fff;font-size:12px;font-weight:600;cursor:pointer;">🇵🇪 Soles (S/)</button>
    <button class="curr-btn" id="curr-usd" data-curr="USD" style="padding:6px 16px;border:none;background:#fff;color:#555;font-size:12px;font-weight:600;cursor:pointer;">🇺🇸 Dólares (US$)</button>
  </div>
</div>
<div class="idx-grid">
  <div class="idx"><div class="idx-n">🥑 Palta Hass FOB</div><div class="idx-v"><span id="idx-palta">4.20</span> <span class="idx-u" id="idx-palta-u">S//kg</span></div><div class="idx-c up">↑ +3.2% vs mes ant.</div></div>
  <div class="idx"><div class="idx-n">🫐 Arándano FOB</div><div class="idx-v"><span id="idx-arandano">12.50</span> <span class="idx-u" id="idx-arandano-u">S//kg</span></div><div class="idx-c dn">↓ -1.8% vs mes ant.</div></div>
  <div class="idx"><div class="idx-n">💵 Tipo de cambio</div><div class="idx-v">3.75 <span class="idx-u">S//$</span></div><div class="idx-c up">↑ +0.5% semanal</div></div>
  <div class="idx"><div class="idx-n">📦 Exportación agro</div><div class="idx-v">+12% <span class="idx-u">YoY</span></div><div class="idx-c up">↑ Tendencia positiva</div></div>
</div>
<div class="card" style="margin-bottom:18px;">
  <div class="ch"><div><div class="ct">Tendencia de precios · Últimos 6 meses</div><div class="cs" id="ch-mercado-sub">Palta Hass y Arándano · S/ por kg</div></div></div>
  <div class="ch-wrap" style="height:220px;"><canvas id="ch-mercado"></canvas></div>
</div>
<div class="stitle">🤝 Compradores activos</div>
<div class="buyer-grid">
  <div class="buyer"><div class="buyer-type">Exportador · Verificado ✓</div><div class="buyer-n">AgroExport SAC</div><div class="buyer-p">S/ 4.20 <span>/kg · FOB Paita</span></div><div class="buyer-tag">Contrato disponible</div><div class="buyer-d">Busca: Palta Hass Cal. 12–16<br>Volumen: 15–25 TM<br>Entrega: Jun–Ago 2026<br>Pago: 30 días contra BL</div><button class="btn-c">Conectar →</button></div>
  <div class="buyer" style="border-left-color:var(--info);"><div class="buyer-type" style="color:var(--info);">Industria · Procesadora</div><div class="buyer-n">Inca Foods Perú</div><div class="buyer-p">S/ 2.80 <span>/kg · Puerta planta</span></div><div class="buyer-tag">Reduce pérdidas 20–30%</div><div class="buyer-d">Busca: Palta calibre libre<br>Volumen: 40–80 TM<br>Evita mermas por rechazo<br>Pago: Contado 15 días</div><button class="btn-c">Conectar →</button></div>
  <div class="buyer" style="border-left-color:var(--gold);"><div class="buyer-type" style="color:var(--gold);">Exportador · Premium</div><div class="buyer-n">BlueBerry Export Perú</div><div class="buyer-p">S/ 12.50 <span>/kg · FOB Lima</span></div><div class="buyer-tag" style="background:#FDF3DC;color:var(--gold);">Precio premium</div><div class="buyer-d">Busca: Arándano Cal. 14–18mm<br>Volumen: 8–15 TM<br>Mercado: EE.UU. y UK<br>Requiere: Cert. Global G.A.P.</div><button class="btn-c">Conectar →</button></div>
</div>
`;

export function init() {
  const chart = new Chart(document.getElementById('ch-mercado').getContext('2d'), {
    type: 'line',
    data: { labels: ['Dic','Ene','Feb','Mar','Abr','May'],
      datasets: [
        { label:'Palta Hass (S//kg)', data:[...CHART_PEN.palta], borderColor:'#C8961E', backgroundColor:'rgba(200,150,30,.06)', borderWidth:2.5, pointRadius:4, tension:.4, fill:true },
        { label:'Arándano ÷3',        data:[...CHART_PEN.arandano], borderColor:'#2D7A4F', backgroundColor:'rgba(45,122,79,.06)',    borderWidth:2.5, pointRadius:4, tension:.4, fill:true }
      ] },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'top', labels:{ font:{ size:11 } } } },
      scales:{ x:{ grid:{ display:false }, ticks:{ font:{ size:11 } } },
               y:{ grid:{ color:'#EEF2EE' }, ticks:{ font:{ size:11 }, callback: v => 'S/ '+v.toFixed(2) } } } }
  });

  function setCurrency(curr) {
    const usd = curr === 'USD';
    document.getElementById('curr-pen').classList.toggle('active', !usd);
    document.getElementById('curr-usd').classList.toggle('active', usd);
    document.getElementById('curr-pen').style.background = usd ? '#fff' : '#27ae60';
    document.getElementById('curr-pen').style.color      = usd ? '#555' : '#fff';
    document.getElementById('curr-usd').style.background = usd ? '#27ae60' : '#fff';
    document.getElementById('curr-usd').style.color      = usd ? '#fff' : '#555';

    const palta    = usd ? IDX_PEN.palta / USD_RATE    : IDX_PEN.palta;
    const arandano = usd ? IDX_PEN.arandano / USD_RATE : IDX_PEN.arandano;
    document.getElementById('idx-palta').textContent    = palta.toFixed(2);
    document.getElementById('idx-arandano').textContent = arandano.toFixed(2);
    document.getElementById('idx-palta-u').textContent    = usd ? 'US$/kg' : 'S//kg';
    document.getElementById('idx-arandano-u').textContent = usd ? 'US$/kg' : 'S//kg';

    document.getElementById('ch-mercado-sub').textContent = usd
      ? 'Palta Hass y Arándano · US$ por kg'
      : 'Palta Hass y Arándano · S/ por kg';

    const factor = usd ? (1 / USD_RATE) : 1;
    chart.data.datasets[0].data = CHART_PEN.palta.map(v => v * factor);
    chart.data.datasets[1].data = CHART_PEN.arandano.map(v => v * factor);
    chart.options.scales.y.ticks.callback = v => (usd ? 'US$ ' : 'S/ ') + v.toFixed(2);
    chart.update();
  }

  document.getElementById('curr-pen').addEventListener('click', () => setCurrency('PEN'));
  document.getElementById('curr-usd').addEventListener('click', () => setCurrency('USD'));
}
