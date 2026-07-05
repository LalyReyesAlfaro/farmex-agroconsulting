const RATES = {
  palta:    { fertilizacion:[4500,1.8], 'campaña':[12000,1.6], riegoTec:[8000,1.5], solar:[6000,1.4], postcosecha:[6500,1.9], fitosanitario:[3500,1.7], bioestimulacion:[2800,1.8] },
  arandano: { fertilizacion:[5500,1.8], 'campaña':[15000,1.6], riegoTec:[10000,1.5], solar:[7500,1.4], postcosecha:[8000,1.9], fitosanitario:[4200,1.7], bioestimulacion:[3500,1.8] }
};

const CULT_LABELS = { palta: 'Palta Hass', arandano: 'Arándano' };
const TIPO_LABELS = {
  fertilizacion:   'Crédito Fertilización',
  'campaña':       'Crédito Campaña',
  riegoTec:        'Crédito Riego Tecnificado',
  solar:           'Crédito Energía Solar',
  postcosecha:     'Crédito Postcosecha',
  fitosanitario:   'Crédito Control Fitosanitario',
  bioestimulacion: 'Crédito Control de Bioestimulación',
};
const PLAZOS = [6, 8, 12, 18, 24, 36];

export const html = `
<div class="stitle">💰 Productos de Financiamiento</div>
<div class="prod-grid">

  <div class="prod">
    <div class="prod-stg">Etapa 1 · Feb–Abr</div>
    <div class="prod-n">Crédito Fertilización</div>
    <div class="prod-d">Fertilizantes foliares, correctores de suelo y micronutrientes en floración. Decisivo para el calibre final.</div>
    <div class="prod-m">Hasta S/ 4,500 / ha</div>
    <div class="prod-p">8 meses · desde 1.8% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🌱 <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Farmex Perú – Fertilizantes e insumos agrícolas</a></div>
    <button onclick="var d=this.nextElementSibling;d.style.display=d.style.display==='block'?'none':'block';this.textContent=d.style.display==='block'?'▾ Ocultar catálogo':'▸ Ver catálogo'" style="width:100%;background:none;border:1px solid #c8e6c9;color:#27ae60;font-size:11px;font-weight:600;cursor:pointer;padding:5px 8px;border-radius:5px;margin-top:7px;text-align:left;">▸ Ver catálogo</button>
    <div style="display:none;margin-top:6px;padding:9px 10px;background:#f0faf3;border-radius:6px;">
      <div style="font-size:11px;font-weight:700;color:#1e6e3a;margin-bottom:8px;">📦 Farmex Perú · Fertilización — Selecciona e incluye en tu solicitud</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:6px;margin-bottom:8px;">
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Kamab 26</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Foliar · K</div><button onclick="window.fxCartAdd('Kamab 26','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Pharmamin</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Aminoácidos</div><button onclick="window.fxCartAdd('Pharmamin','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">MAXI frut</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Foliar · Ca-B</div><button onclick="window.fxCartAdd('MAXI frut','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">KYT-GREEN</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Foliar · N-Mg</div><button onclick="window.fxCartAdd('KYT-GREEN','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">FERTIKAM</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fertirriego</div><button onclick="window.fxCartAdd('FERTIKAM','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">AminoQuelant-CA</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Corrector Ca</div><button onclick="window.fxCartAdd('AminoQuelant-CA','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Powerfol Calcio</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Corrector</div><button onclick="window.fxCartAdd('Powerfol Calcio','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌿</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Powerfol Potasio</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Corrector K</div><button onclick="window.fxCartAdd('Powerfol Potasio','Fertilización',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
      </div>
      <a href="https://www.farmex.com.pe/catalogo/nutricion-avanzada/?clases=fertilizantes-foliares" target="_blank" rel="noopener" style="font-size:10px;color:#27ae60;font-weight:600;">🔗 Ver catálogo completo en farmex.com.pe →</a>
    </div>
  </div>

  <div class="prod">
    <div class="prod-stg">Etapa 2 · May–Jul</div>
    <div class="prod-n">Crédito Campaña</div>
    <div class="prod-d">Capital para mano de obra, empaques, supervisión técnica y costos operativos de la temporada completa. Otorgado en alianza con instituciones financieras de la zona.</div>
    <div class="prod-m">Hasta S/ 12,000 / ha</div>
    <div class="prod-p">12 meses · desde 1.6% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🏦 <a href="https://www.banbif.com.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">BanBif – Banco Interamericano de Finanzas</a></div>
  </div>

  <div class="prod">
    <div class="prod-stg">Infraestructura hídrica · Todo el ciclo</div>
    <div class="prod-n">Crédito Riego Tecnificado</div>
    <div class="prod-d">Sistemas de goteo, aspersión y microaspersión, tratamiento de agua, clarificación y limpieza de riego. Optimiza el recurso hídrico con soluciones QUIMTIA.</div>
    <div class="prod-m">Hasta S/ 8,000 / ha</div>
    <div class="prod-p">18 meses · desde 1.5% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">💧 <a href="https://www.quimtia.com.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">QUIMTIA PERÚ – Soluciones de agua para riego</a></div>
    <button onclick="var d=this.nextElementSibling;d.style.display=d.style.display==='block'?'none':'block';this.textContent=d.style.display==='block'?'▾ Ocultar catálogo':'▸ Ver catálogo'" style="width:100%;background:none;border:1px solid #c8e6c9;color:#27ae60;font-size:11px;font-weight:600;cursor:pointer;padding:5px 8px;border-radius:5px;margin-top:7px;text-align:left;">▸ Ver catálogo</button>
    <div style="display:none;margin-top:6px;padding:9px 10px;background:#f0faf3;border-radius:6px;">
      <div style="font-size:11px;font-weight:700;color:#1e6e3a;margin-bottom:8px;">📦 QUIMTIA – Riego Tecnificado</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:6px;margin-bottom:8px;">
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Floculante XentriQ</div><button onclick="window.fxCartAdd('Floculante XentriQ','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Coagulante Chemlok</div><button onclick="window.fxCartAdd('Coagulante Chemlok','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Anti-incrustante XentriQ</div><button onclick="window.fxCartAdd('Anti-incrustante XentriQ','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Delta 5% SC</div><button onclick="window.fxCartAdd('Delta 5% SC','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Alfar 10 PM</div><button onclick="window.fxCartAdd('Alfar 10 PM','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Alfamatrix 10 EC</div><button onclick="window.fxCartAdd('Alfamatrix 10 EC','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Carvadin 5% DP</div><button onclick="window.fxCartAdd('Carvadin 5% DP','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #aed6f1;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F4FD;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">💧</div><div style="font-size:9px;font-weight:700;color:#1a4c7e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Carbón activado</div><button onclick="window.fxCartAdd('Carbón activado','Riego',this)" style="width:100%;background:#2980b9;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;margin-top:4px;">+ Carrito</button></div>
      </div>
      <a href="https://www.quimtia.com.pe" target="_blank" rel="noopener" style="font-size:10px;color:#2980b9;font-weight:600;">🔗 Ver catálogo completo en quimtia.com.pe →</a>
    </div>
  </div>

  <div class="prod">
    <div class="prod-stg">Energía renovable · Inversión fija</div>
    <div class="prod-n">Crédito Energía Solar</div>
    <div class="prod-d">Financiamiento para sistemas fotovoltaicos de bombeo agrícola: paneles solares, inversores y motobombas de Greendipity. Reduce tu dependencia de la red eléctrica y baja costos operativos hasta 60%.</div>
    <div class="prod-m">Hasta S/ 6,000 / ha</div>
    <div class="prod-p">18 meses · desde 1.4% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">☀️ <a href="https://greendipity.co" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Greendipity – Energía solar para el agro peruano</a></div>
    <div style="margin-top:8px;padding:9px 10px;background:#FEFCE8;border-radius:6px;font-size:11px;color:#7d5a0f;line-height:1.6;">
      ☀️ Greendipity realiza el <strong>análisis técnico y dimensionamiento solar gratuito</strong> para tu finca antes de aprobar el crédito.<br>
      <a href="https://greendipity.co" target="_blank" rel="noopener" style="color:#a07010;font-weight:700;display:inline-block;margin-top:5px;">Solicitar análisis solar gratuito en greendipity.co →</a>
    </div>
  </div>

  <div class="prod">
    <div class="prod-stg">Etapa 4 · Ago–Oct</div>
    <div class="prod-n">Crédito Postcosecha</div>
    <div class="prod-d">Empaque, cámaras de frío, certificaciones fitosanitarias y transporte hasta el puerto de embarque. Otorgado en alianza con instituciones financieras de la zona.</div>
    <div class="prod-m">Hasta S/ 6,500 / ha</div>
    <div class="prod-p">6 meses · desde 1.9% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🏦 <a href="https://www.banbif.com.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">BanBif – Banco Interamericano de Finanzas</a></div>
  </div>

  <div class="prod">
    <div class="prod-stg">Sanidad · Todo el ciclo</div>
    <div class="prod-n">Crédito Control Fitosanitario</div>
    <div class="prod-d">Agroquímicos especializados para el control de Stenoma catenifer, mosca de la fruta, trips y antracnosis.</div>
    <div class="prod-m">Hasta S/ 3,500 / ha</div>
    <div class="prod-p">8 meses · desde 1.7% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🌱 <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Farmex Perú – Catálogo de protección</a></div>
    <button onclick="var d=this.nextElementSibling;d.style.display=d.style.display==='block'?'none':'block';this.textContent=d.style.display==='block'?'▾ Ocultar catálogo':'▸ Ver catálogo'" style="width:100%;background:none;border:1px solid #c8e6c9;color:#27ae60;font-size:11px;font-weight:600;cursor:pointer;padding:5px 8px;border-radius:5px;margin-top:7px;text-align:left;">▸ Ver catálogo</button>
    <div style="display:none;margin-top:6px;padding:9px 10px;background:#f0faf3;border-radius:6px;">
      <div style="font-size:11px;font-weight:700;color:#1e6e3a;margin-bottom:8px;">📦 Farmex Perú · Protección — Selecciona e incluye en tu solicitud</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:6px;margin-bottom:8px;">
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Golden 40 EC</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fungicida</div><button onclick="window.fxCartAdd('Golden 40 EC','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Botrimex</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fungicida</div><button onclick="window.fxCartAdd('Botrimex','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Novak 50 WP</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fungicida</div><button onclick="window.fxCartAdd('Novak 50 WP','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Aviate 75 WG</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fungicida</div><button onclick="window.fxCartAdd('Aviate 75 WG','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Azobin Top</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fungicida</div><button onclick="window.fxCartAdd('Azobin Top','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Meteor</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Fungicida</div><button onclick="window.fxCartAdd('Meteor','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Cougar</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Insecticida</div><button onclick="window.fxCartAdd('Cougar','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🛡️</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Cosavet DF</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Acaricida</div><button onclick="window.fxCartAdd('Cosavet DF','Fitosanitario',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
      </div>
      <a href="https://www.farmex.com.pe/catalogo/proteccion/" target="_blank" rel="noopener" style="font-size:10px;color:#27ae60;font-weight:600;">🔗 Ver catálogo completo en farmex.com.pe →</a>
    </div>
  </div>

  <div class="prod">
    <div class="prod-stg">Productividad · Cuaje a Envero</div>
    <div class="prod-n">Crédito Control de Bioestimulación</div>
    <div class="prod-d">Bioestimulantes y reguladores de última generación para 3 aplicaciones clave durante el crecimiento del fruto. Incremento comprobado de rendimiento hasta +84% t/ha.</div>
    <div class="prod-m">Hasta S/ 2,800 / ha</div>
    <div class="prod-p">6 meses · desde 1.8% mensual</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px dashed #ddd;font-size:11px;color:#888;">🌱 <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#27ae60;text-decoration:none;font-weight:600;">Farmex Perú – Catálogo de especialidades</a></div>
    <button onclick="var d=this.nextElementSibling;d.style.display=d.style.display==='block'?'none':'block';this.textContent=d.style.display==='block'?'▾ Ocultar catálogo':'▸ Ver catálogo'" style="width:100%;background:none;border:1px solid #c8e6c9;color:#27ae60;font-size:11px;font-weight:600;cursor:pointer;padding:5px 8px;border-radius:5px;margin-top:7px;text-align:left;">▸ Ver catálogo</button>
    <div style="display:none;margin-top:6px;padding:9px 10px;background:#f0faf3;border-radius:6px;">
      <div style="font-size:11px;font-weight:700;color:#1e6e3a;margin-bottom:8px;">📦 Farmex Perú · Especialidades — Selecciona e incluye en tu solicitud</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:6px;margin-bottom:8px;">
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">MAXBIO ALGAE-L</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Bioestimulante</div><button onclick="window.fxCartAdd('MAXBIO ALGAE-L','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Powergizer</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Bioestimulante</div><button onclick="window.fxCartAdd('Powergizer','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Terra-Sorb Foliar</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Bioestimulante</div><button onclick="window.fxCartAdd('Terra-Sorb Foliar','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Ryamex 4% SL</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Regulador</div><button onclick="window.fxCartAdd('Ryamex 4% SL','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Optimus</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Regulador</div><button onclick="window.fxCartAdd('Optimus','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Armurox</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Inductor</div><button onclick="window.fxCartAdd('Armurox','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Phytness</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Inductor</div><button onclick="window.fxCartAdd('Phytness','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
        <div style="background:#fff;border:1px solid #c8e6c9;border-radius:6px;padding:7px 5px;text-align:center;"><div style="height:36px;background:#E8F8EE;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:5px;">🌱</div><div style="font-size:9px;font-weight:700;color:#1a5c2e;min-height:22px;display:flex;align-items:center;justify-content:center;text-align:center;">Sulphomex</div><div style="font-size:8px;color:#888;margin-bottom:3px;">Coadyuvante</div><button onclick="window.fxCartAdd('Sulphomex','Bioestimulación',this)" style="width:100%;background:#27ae60;color:#fff;border:none;padding:3px 0;border-radius:3px;font-size:9px;font-weight:700;cursor:pointer;">+ Carrito</button></div>
      </div>
      <a href="https://www.farmex.com.pe/catalogo/especialidades/" target="_blank" rel="noopener" style="font-size:10px;color:#27ae60;font-weight:600;">🔗 Ver catálogo completo en farmex.com.pe →</a>
    </div>
  </div>

</div>
<div id="fx-cart-box" style="display:none;margin-bottom:16px;padding:14px 16px;background:var(--card);border:2px solid var(--ok);border-radius:10px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
    <div style="font-size:13px;font-weight:700;color:var(--txt);">🛒 Insumos seleccionados &nbsp;<span id="fx-cart-count" style="background:var(--ok);color:#fff;border-radius:20px;padding:2px 8px;font-size:11px;font-weight:800;">0</span></div>
    <button onclick="document.getElementById('fx-cart-box').style.display='none'" style="background:none;border:none;color:var(--txt-m);cursor:pointer;font-size:12px;">✕ Cerrar</button>
  </div>
  <div id="fx-cart-items" style="margin-bottom:8px;max-height:160px;overflow-y:auto;"></div>
  <div style="font-size:11px;color:var(--txt-m);">Los productos seleccionados se incluirán en tu solicitud de crédito al enviarla.</div>
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
    <div style="margin-top:8px;font-size:11px;color:#888;">Tu solicitud quedó registrada y será revisada por el equipo de Farmex AgroConsulting.</div>
  `;
  resumen.style.display = 'block';
}

export function init() {
  const cart = { items: [] };

  window.fxCartAdd = function(name, cat, btnEl) {
    const ex = cart.items.find(i => i.name === name);
    if (ex) ex.qty++;
    else cart.items.push({ name, cat, qty: 1 });
    if (btnEl) {
      btnEl.textContent = '✓ En carrito';
      btnEl.style.background = 'var(--ok)';
    }
    renderCart();
  };

  window.fxCartRemove = function(name) {
    cart.items = cart.items.filter(i => i.name !== name);
    renderCart();
  };

  function renderCart() {
    const box = document.getElementById('fx-cart-box');
    if (!box) return;
    const count = cart.items.reduce((s, i) => s + i.qty, 0);
    box.style.display = count > 0 ? 'block' : 'none';
    const countEl = document.getElementById('fx-cart-count');
    if (countEl) countEl.textContent = count;
    const listEl = document.getElementById('fx-cart-items');
    if (listEl) listEl.innerHTML = cart.items.map(i =>
      `<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px dashed var(--border);">
        <div style="font-size:11px;"><span style="color:var(--ok);">●</span> <strong>${i.name}</strong> <span style="font-size:10px;color:var(--txt-m);">(${i.cat})</span></div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-size:11px;font-weight:700;color:var(--txt);">×${i.qty}</span>
          <button onclick="window.fxCartRemove('${i.name.replace(/'/g, "\\'")}');return false;" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:11px;padding:2px 4px;">✕</button>
        </div>
      </div>`
    ).join('');
  }

  addSim('palta', 'campaña');
  document.getElementById('btn-add-sim').addEventListener('click', () => addSim('arandano', 'campaña'));
  document.getElementById('btn-enviar').addEventListener('click', mostrarResumen);
}
