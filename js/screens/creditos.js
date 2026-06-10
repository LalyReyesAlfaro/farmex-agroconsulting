const RATES = {
  palta:    { fertilizacion:[4500,1.8], 'campaña':[12000,1.6], riego:[8000,1.5], postcosecha:[6500,1.9], fitosanitario:[3500,1.7], bioestimulacion:[2800,1.8] },
  arandano: { fertilizacion:[5500,1.8], 'campaña':[15000,1.6], riego:[10000,1.5], postcosecha:[8000,1.9], fitosanitario:[4200,1.7], bioestimulacion:[3500,1.8] }
};

const CULT_LABELS = { palta: 'Palta Hass', arandano: 'Arándano' };
const TIPO_LABELS = {
  fertilizacion:   'Crédito Fertilización',
  'campaña':       'Crédito Campaña',
  riego:           'Crédito Riego',
  postcosecha:     'Crédito Postcosecha',
  fitosanitario:   'Crédito Control Fitosanitario',
  bioestimulacion: 'Crédito Control de Bioestimulación',
};
const PLAZOS = [6, 8, 12, 18, 24, 36];

export const html = `
<div class="stitle">💰 Productos de Financiamiento</div>
<div class="prod-grid">
  <div class="prod"><div class="prod-stg">Etapa 1 · Feb–Abr</div><div class="prod-n">Crédito Fertilización</div><div class="prod-d">Fertilizantes foliares, correctores de suelo y micronutrientes en floración. Decisivo para el calibre final.</div><div class="prod-m">Hasta S/ 4,500 / ha</div><div class="prod-p">8 meses · desde 1.8% mensual</div><div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🌱 Proveedor: <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Farmex Perú – Insumos y fertilizantes agrícolas</a></div></div>
  <div class="prod"><div class="prod-stg">Etapa 2 · May–Jul</div><div class="prod-n">Crédito Campaña</div><div class="prod-d">Capital para mano de obra, empaques, supervisión técnica y costos operativos de la temporada completa. Otorgado en alianza con instituciones financieras de la zona.</div><div class="prod-m">Hasta S/ 12,000 / ha</div><div class="prod-p">12 meses · desde 1.6% mensual</div><div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🏦 Financiado con: <a href="https://www.banbif.com.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">BanBif – Banco Interamericano de Finanzas</a></div></div>
  <div class="prod"><div class="prod-stg">Etapa 3 · Todo el ciclo</div><div class="prod-n">Crédito Riego</div><div class="prod-d">Sistemas de riego tecnificado, goteo por presión e infraestructura hídrica para optimizar el agua.</div><div class="prod-m">Hasta S/ 8,000 / ha</div><div class="prod-p">18 meses · desde 1.5% mensual</div><div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">💧 Proveedor: <a href="https://www.quimtia.com.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">QUIMTIA PERÚ – Soluciones de riego y agroquímicos</a></div></div>
  <div class="prod"><div class="prod-stg">Etapa 4 · Ago–Oct</div><div class="prod-n">Crédito Postcosecha</div><div class="prod-d">Empaque, cámaras de frío, certificaciones fitosanitarias y transporte hasta el puerto de embarque. Otorgado en alianza con instituciones financieras de la zona.</div><div class="prod-m">Hasta S/ 6,500 / ha</div><div class="prod-p">6 meses · desde 1.9% mensual</div><div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🏦 Financiado con: <a href="https://www.banbif.com.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">BanBif – Banco Interamericano de Finanzas</a></div></div>
  <div class="prod"><div class="prod-stg">Sanidad · Todo el ciclo</div><div class="prod-n">Crédito Control Fitosanitario</div><div class="prod-d">Agroquímicos certificados SENASA: Spinosad, Bacillus thuringiensis, Metalaxil, Oxicloruro de Cobre, Cyprodinil + Fludioxonil y Azufre para control de Stenoma catenifer, mosca de la fruta, trips y antracnosis.</div><div class="prod-m">Hasta S/ 3,500 / ha</div><div class="prod-p">8 meses · desde 1.7% mensual</div><div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🌱 Productos: <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Farmex Perú – Catálogo de productos fitosanitarios</a></div></div>
  <div class="prod"><div class="prod-stg">Productividad · Cuaje a Envero</div><div class="prod-n">Crédito Control de Bioestimulación</div><div class="prod-d">Bioestimulantes de última generación: Biozyme TF, Agrispon, Biostim, Fertimar y H-Top. 3 aplicaciones durante el crecimiento del fruto. Incremento comprobado de rendimiento de hasta +84% t/ha.</div><div class="prod-m">Hasta S/ 2,800 / ha</div><div class="prod-p">6 meses · desde 1.8% mensual</div><div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🌱 Productos: <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Farmex Perú – Catálogo de bioestimulantes</a></div></div>
</div>
<div class="stitle">🧮 Simulador de Crédito</div>
<div style="font-size:12px;color:var(--txt-m);margin:-10px 0 14px;">Puedes simular el crédito de más de un cultivo a la vez y ver el total combinado.</div>
<div id="sim-list"></div>
<button id="btn-add-sim" type="button" style="background:none;border:1.5px solid #27ae60;color:#27ae60;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;width:100%;margin-bottom:18px;">+ Agregar simulación de otro cultivo</button>

<div class="sim-res" id="sim-total">
  <div class="sim-lbl">💰 Total combinado de las simulaciones</div>
  <div class="sim-dets" style="margin-top:12px;">
    <div><div class="sd-val" id="tot-monto">S/ 0</div><div class="sd-lbl">Monto máx. disponible</div></div>
    <div><div class="sd-val" id="tot-pedido">S/ 0</div><div class="sd-lbl">Total a solicitar</div></div>
    <div><div class="sd-val" id="tot-cuota">S/ 0</div><div class="sd-lbl">Cuota mensual total</div></div>
  </div>
</div>

<button class="btn-p" id="btn-enviar" style="width:100%;margin-top:16px;">Enviar Solicitud →</button>
<div id="solicitud-resumen" style="display:none;margin-top:14px;padding:14px 16px;background:#f0faf3;border-left:3px solid #27ae60;border-radius:0 8px 8px 0;font-size:12px;color:#555;"></div>
`;

function selectOptions(map, selected) {
  return Object.entries(map).map(([k, v]) => `<option value="${k}"${k === selected ? ' selected' : ''}>${v}</option>`).join('');
}

function plazoOptions(selected = 12) {
  return PLAZOS.map(m => `<option value="${m}"${m === selected ? ' selected' : ''}>${m} meses</option>`).join('');
}

function simCardHtml(idx, cult, tipo) {
  return `
  <div class="sim" data-sim="${idx}">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <div class="sim-title" style="font-weight:700;font-size:13px;color:var(--txt);">🧮 Simulación</div>
      <button class="sim-remove" data-idx="${idx}" type="button" style="display:none;background:none;border:1px solid #e74c3c;color:#e74c3c;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;">✕ Quitar</button>
    </div>
    <div class="sim-grid">
      <div class="fg"><label class="fl">Cultivo</label><select class="fi" id="s-cult-${idx}">${selectOptions(CULT_LABELS, cult)}</select></div>
      <div class="fg"><label class="fl">Tipo de crédito</label><select class="fi" id="s-tipo-${idx}">${selectOptions(TIPO_LABELS, tipo)}</select></div>
      <div class="fg"><label class="fl">Hectáreas</label><input class="fi" type="number" id="s-ha-${idx}" value="32" min="1" max="200"></div>
      <div class="fg"><label class="fl">Plazo (meses)</label><select class="fi" id="s-plazo-${idx}">${plazoOptions()}</select></div>
    </div>
    <div class="sim-res">
      <div class="sim-lbl">Monto máximo disponible según tus hectáreas</div>
      <div class="sim-amt" id="s-monto-${idx}">S/ 0</div>
      <div class="fg" style="margin:14px 0 4px;">
        <label class="sim-lbl" style="display:block;margin-bottom:5px;">¿Cuánto deseas solicitar? (S/)</label>
        <input class="fi" type="number" id="s-pedido-${idx}" min="1000" step="500" style="font-size:15px;font-weight:700;">
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,.45);margin-bottom:10px;">El monto no puede superar el máximo disponible</div>
      <div class="sim-dets">
        <div><div class="sd-val" id="s-tasa-${idx}">0%</div><div class="sd-lbl">Tasa mensual</div></div>
        <div><div class="sd-val" id="s-cuota-${idx}">S/ 0</div><div class="sd-lbl">Cuota mensual</div></div>
        <div><div class="sd-val" id="s-tiempo-${idx}">12 meses</div><div class="sd-lbl">Plazo</div></div>
      </div>
    </div>
  </div>`;
}

const active = [];
const simData = {};
let nextIdx = 0;

function calcular(idx, resetPedido = false) {
  const cult  = document.getElementById('s-cult-' + idx).value;
  const tipo  = document.getElementById('s-tipo-' + idx).value;
  const ha    = parseFloat(document.getElementById('s-ha-' + idx).value) || 0;
  const plazo = parseInt(document.getElementById('s-plazo-' + idx).value);
  const [base, tasa] = RATES[cult][tipo];
  const montoMax = ha * base;

  const pedidoEl = document.getElementById('s-pedido-' + idx);
  pedidoEl.max = montoMax;
  if (resetPedido || !pedidoEl.value) pedidoEl.value = montoMax;
  if (parseFloat(pedidoEl.value) > montoMax) pedidoEl.value = montoMax;
  const pedido = Math.min(parseFloat(pedidoEl.value) || montoMax, montoMax);

  const r     = tasa / 100;
  const cuota = pedido > 0 ? Math.round(pedido * r / (1 - Math.pow(1 + r, -plazo))) : 0;

  document.getElementById('s-monto-' + idx).textContent  = 'S/ ' + montoMax.toLocaleString('es-PE');
  document.getElementById('s-tasa-' + idx).textContent   = tasa + '%';
  document.getElementById('s-cuota-' + idx).textContent  = 'S/ ' + cuota.toLocaleString('es-PE');
  document.getElementById('s-tiempo-' + idx).textContent = plazo + ' meses';

  simData[idx] = { cult, tipo, montoMax, pedido, tasa, cuota, plazo };
  calcularTotal();
}

function calcularTotal() {
  let totMax = 0, totPedido = 0, totCuota = 0;
  active.forEach(idx => {
    const d = simData[idx];
    if (!d) return;
    totMax    += d.montoMax;
    totPedido += d.pedido;
    totCuota  += d.cuota;
  });
  document.getElementById('tot-monto').textContent  = 'S/ ' + totMax.toLocaleString('es-PE');
  document.getElementById('tot-pedido').textContent = 'S/ ' + totPedido.toLocaleString('es-PE');
  document.getElementById('tot-cuota').textContent  = 'S/ ' + totCuota.toLocaleString('es-PE');
}

function renumber() {
  document.querySelectorAll('#sim-list .sim').forEach((el, i) => {
    el.querySelector('.sim-title').textContent = `🧮 Simulación ${i + 1}`;
    el.querySelector('.sim-remove').style.display = active.length > 1 ? 'inline-block' : 'none';
  });
}

function bindSim(idx) {
  ['s-cult', 's-tipo', 's-plazo'].forEach(p =>
    document.getElementById(p + '-' + idx).addEventListener('change', () => calcular(idx, true))
  );
  document.getElementById('s-ha-' + idx).addEventListener('input', () => calcular(idx, true));
  document.getElementById('s-pedido-' + idx).addEventListener('input', () => calcular(idx, false));
  document.querySelector(`.sim-remove[data-idx="${idx}"]`).addEventListener('click', () => removeSim(idx));
}

function addSim(cult = 'palta', tipo = 'campaña') {
  const idx = nextIdx++;
  active.push(idx);
  document.getElementById('sim-list').insertAdjacentHTML('beforeend', simCardHtml(idx, cult, tipo));
  bindSim(idx);
  calcular(idx, true);
  renumber();
}

function removeSim(idx) {
  if (active.length <= 1) return;
  const i = active.indexOf(idx);
  if (i > -1) active.splice(i, 1);
  delete simData[idx];
  document.querySelector(`.sim[data-sim="${idx}"]`).remove();
  calcularTotal();
  renumber();
  document.getElementById('solicitud-resumen').style.display = 'none';
}

function mostrarResumen() {
  const rows = active.map((idx, i) => {
    const d = simData[idx];
    return `<div style="padding:6px 0;${i > 0 ? 'border-top:1px dashed #ddd;' : ''}">
      <strong>Simulación ${i + 1}:</strong> ${CULT_LABELS[d.cult]} · ${TIPO_LABELS[d.tipo]}<br>
      Solicitado: <strong>S/ ${d.pedido.toLocaleString('es-PE')}</strong> · Tasa: ${d.tasa}% · Cuota: S/ ${d.cuota.toLocaleString('es-PE')} · Plazo: ${d.plazo} meses
    </div>`;
  }).join('');

  let totPedido = 0, totCuota = 0;
  active.forEach(idx => { totPedido += simData[idx].pedido; totCuota += simData[idx].cuota; });

  const resumen = document.getElementById('solicitud-resumen');
  resumen.innerHTML = `
    <div style="font-weight:700;color:#1e8449;margin-bottom:8px;">✅ Solicitud preparada</div>
    ${rows}
    <div style="margin-top:8px;padding-top:8px;border-top:2px solid #27ae60;font-size:13px;font-weight:700;color:#1e8449;">
      Total a solicitar: S/ ${totPedido.toLocaleString('es-PE')} · Cuota mensual total: S/ ${totCuota.toLocaleString('es-PE')}
    </div>
    <div style="margin-top:8px;font-size:11px;color:#888;">Tu solicitud quedó registrada y será revisada por el equipo de Farmex Capital.</div>
  `;
  resumen.style.display = 'block';
}

export function init() {
  addSim('palta', 'campaña');
  document.getElementById('btn-add-sim').addEventListener('click', () => addSim('arandano', 'campaña'));
  document.getElementById('btn-enviar').addEventListener('click', mostrarResumen);
}
