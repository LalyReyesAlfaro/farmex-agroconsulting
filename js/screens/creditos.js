const RATES = {
  palta:    { fertilizacion:[4500,1.8], 'campaña':[12000,1.6], riego:[8000,1.5], postcosecha:[6500,1.9], fitosanitario:[3500,1.7], bioestimulacion:[2800,1.8] },
  arandano: { fertilizacion:[5500,1.8], 'campaña':[15000,1.6], riego:[10000,1.5], postcosecha:[8000,1.9], fitosanitario:[4200,1.7], bioestimulacion:[3500,1.8] }
};

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
<div class="sim">
  <div class="sim-grid">
    <div class="fg"><label class="fl">Cultivo</label><select class="fi" id="s-cult"><option value="palta">Palta Hass</option><option value="arandano">Arándano</option></select></div>
    <div class="fg"><label class="fl">Tipo de crédito</label><select class="fi" id="s-tipo"><option value="fertilizacion">Crédito Fertilización</option><option value="campaña" selected>Crédito Campaña</option><option value="riego">Crédito Riego</option><option value="postcosecha">Crédito Postcosecha</option><option value="fitosanitario">Crédito Control Fitosanitario</option><option value="bioestimulacion">Crédito Control de Bioestimulación</option></select></div>
    <div class="fg"><label class="fl">Hectáreas</label><input class="fi" type="number" id="s-ha" value="32" min="1" max="200"></div>
    <div class="fg"><label class="fl">Plazo (meses)</label><select class="fi" id="s-plazo"><option value="6">6 meses</option><option value="8">8 meses</option><option value="12" selected>12 meses</option><option value="18">18 meses</option><option value="24">24 meses</option><option value="36">36 meses</option></select></div>
  </div>
  <div class="sim-res">
    <div class="sim-lbl">Monto máximo disponible según tus hectáreas</div>
    <div class="sim-amt" id="s-monto">S/ 384,000</div>
    <div class="fg" style="margin:14px 0 4px;">
      <label class="fl" style="font-size:12px;color:#555;">¿Cuánto deseas solicitar? (S/)</label>
      <input class="fi" type="number" id="s-pedido" min="1000" step="500" style="font-size:15px;font-weight:700;">
    </div>
    <div style="font-size:11px;color:#aaa;margin-bottom:10px;">El monto no puede superar el máximo disponible</div>
    <div class="sim-dets">
      <div><div class="sd-val" id="s-tasa">1.6%</div><div class="sd-lbl">Tasa mensual</div></div>
      <div><div class="sd-val" id="s-cuota">S/ 37,440</div><div class="sd-lbl">Cuota mensual</div></div>
      <div><div class="sd-val" id="s-tiempo">12 meses</div><div class="sd-lbl">Plazo</div></div>
    </div>
    <button class="btn-p">Enviar Solicitud →</button>
  </div>
</div>
`;

function calcular(resetPedido = false) {
  const cult  = document.getElementById('s-cult').value;
  const tipo  = document.getElementById('s-tipo').value;
  const ha    = parseFloat(document.getElementById('s-ha').value) || 0;
  const plazo = parseInt(document.getElementById('s-plazo').value);
  const [base, tasa] = RATES[cult][tipo];
  const montoMax = ha * base;

  const pedidoEl = document.getElementById('s-pedido');
  pedidoEl.max = montoMax;
  if (resetPedido || !pedidoEl.value) pedidoEl.value = montoMax;
  const pedido = Math.min(parseFloat(pedidoEl.value) || montoMax, montoMax);
  if (parseFloat(pedidoEl.value) > montoMax) pedidoEl.value = montoMax;

  const r     = tasa / 100;
  const cuota = pedido > 0 ? Math.round(pedido * r / (1 - Math.pow(1 + r, -plazo))) : 0;
  document.getElementById('s-monto').textContent  = 'S/ ' + montoMax.toLocaleString('es-PE');
  document.getElementById('s-tasa').textContent   = tasa + '%';
  document.getElementById('s-cuota').textContent  = 'S/ ' + cuota.toLocaleString('es-PE');
  document.getElementById('s-tiempo').textContent = plazo + ' meses';
}

export function init() {
  ['s-cult','s-tipo','s-plazo'].forEach(id =>
    document.getElementById(id).addEventListener('change', () => calcular(true))
  );
  document.getElementById('s-ha').addEventListener('input', () => calcular(true));
  document.getElementById('s-pedido').addEventListener('input', () => calcular(false));
  calcular();
}
