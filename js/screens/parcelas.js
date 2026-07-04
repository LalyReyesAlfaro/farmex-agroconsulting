export const html = `
<!-- KPIs resumen -->
<div class="kpi-grid" style="margin-bottom:16px;">
  <div class="kpi green">
    <div class="kpi-top"><span class="kpi-lbl">Total hectáreas</span><div class="kpi-ico green">🌿</div></div>
    <div class="kpi-val">32 ha</div>
    <div class="kpi-ch neu">2 campos · La Libertad</div>
  </div>
  <div class="kpi gold">
    <div class="kpi-top"><span class="kpi-lbl">Palta Hass</span><div class="kpi-ico gold">🥑</div></div>
    <div class="kpi-val">28 ha</div>
    <div class="kpi-ch up">↑ Campaña 2026 en curso</div>
  </div>
  <div class="kpi blue">
    <div class="kpi-top"><span class="kpi-lbl">Arándano</span><div class="kpi-ico blue">🫐</div></div>
    <div class="kpi-val">4 ha</div>
    <div class="kpi-ch neu">Nueva plantación · 2026</div>
  </div>
  <div class="kpi orange">
    <div class="kpi-top"><span class="kpi-lbl">Proyección cosecha</span><div class="kpi-ico orange">📦</div></div>
    <div class="kpi-val">~128 TM</div>
    <div class="kpi-ch up">↑ Ago–Oct 2026</div>
  </div>
</div>

<!-- Mapa + lista -->
<div class="hect-layout">

  <!-- MAPA -->
  <div class="hect-map-col">
    <div class="hect-toolbar">
      <div class="hect-toolbar-title">📍 Mapa satelital · Virú, La Libertad</div>
      <div class="hect-layer-btns">
        <button class="hlb active" id="btn-satellite" onclick="setLayer('satellite',this)">🛰️ Satélite</button>
        <button class="hlb" id="btn-terrain"  onclick="setLayer('terrain',this)">🗺️ Terreno</button>
        <button class="hlb" id="btn-street"   onclick="setLayer('street',this)">🏙️ Calles</button>
      </div>
    </div>
    <div id="hectareas-map" class="hect-map"></div>
    <div class="hect-legend">
      <div class="hl-item"><div class="hl-dot" style="background:#27AE60;"></div>Palta Hass</div>
      <div class="hl-item"><div class="hl-dot" style="background:#2980B9;"></div>Arándano</div>
      <div class="hl-item"><div class="hl-dot" style="background:#C8961E;"></div>Seleccionado</div>
    </div>
  </div>

  <!-- LISTA DE CAMPOS -->
  <div class="hect-list-col">
    <div class="hect-list-header">
      <div style="font-size:14px;font-weight:700;color:var(--txt);">Mis campos</div>
      <button class="hect-add-btn" onclick="showAddField()">+ Agregar campo</button>
    </div>

    <div class="hect-field-card active-field" id="field-1" onclick="focusField(1)">
      <div class="hfc-header">
        <div class="hfc-crop-dot" style="background:#27AE60;"></div>
        <div class="hfc-info">
          <div class="hfc-name">Campo Palta Norte</div>
          <div class="hfc-sub">Virú · La Libertad</div>
        </div>
        <span class="hfc-badge" style="background:#E8F8EE;color:#27AE60;">Activo</span>
      </div>
      <div class="hfc-stats">
        <div class="hfc-stat"><div class="hfcs-v">18 ha</div><div class="hfcs-l">Área</div></div>
        <div class="hfc-stat"><div class="hfcs-v">🥑 Palta</div><div class="hfcs-l">Cultivo</div></div>
        <div class="hfc-stat"><div class="hfcs-v">Etapa 4</div><div class="hfcs-l">Ciclo</div></div>
        <div class="hfc-stat"><div class="hfcs-v">~72 TM</div><div class="hfcs-l">Proyección</div></div>
      </div>
      <div class="hfc-detail">
        <div class="hfcd-row"><span>Altitud</span><strong>180 msnm</strong></div>
        <div class="hfcd-row"><span>Suelo</span><strong>Franco arenoso · pH 6.2</strong></div>
        <div class="hfcd-row"><span>Riego</span><strong>Goteo tecnificado</strong></div>
        <div class="hfcd-row"><span>Cosecha est.</span><strong>Ago–Sep 2026</strong></div>
        <div class="hfcd-row"><span>Cert.</span><strong>Global G.A.P.</strong></div>
      </div>
    </div>

    <div class="hect-field-card" id="field-2" onclick="focusField(2)">
      <div class="hfc-header">
        <div class="hfc-crop-dot" style="background:#27AE60;"></div>
        <div class="hfc-info">
          <div class="hfc-name">Campo Palta Sur</div>
          <div class="hfc-sub">Ascope · La Libertad</div>
        </div>
        <span class="hfc-badge" style="background:#FEF9E7;color:#F39C12;">⚠ Alerta clima</span>
      </div>
      <div class="hfc-stats">
        <div class="hfc-stat"><div class="hfcs-v">10 ha</div><div class="hfcs-l">Área</div></div>
        <div class="hfc-stat"><div class="hfcs-v">🥑 Palta</div><div class="hfcs-l">Cultivo</div></div>
        <div class="hfc-stat"><div class="hfcs-v">Etapa 4</div><div class="hfcs-l">Ciclo</div></div>
        <div class="hfc-stat"><div class="hfcs-v">~40 TM</div><div class="hfcs-l">Proyección</div></div>
      </div>
      <div class="hfc-detail" style="display:none;">
        <div class="hfcd-row"><span>Altitud</span><strong>220 msnm</strong></div>
        <div class="hfcd-row"><span>Suelo</span><strong>Franco arcilloso · pH 6.5</strong></div>
        <div class="hfcd-row"><span>Riego</span><strong>Aspersión + goteo</strong></div>
        <div class="hfcd-row"><span>Cosecha est.</span><strong>Sep–Oct 2026</strong></div>
        <div class="hfcd-row"><span>Cert.</span><strong>Global G.A.P.</strong></div>
      </div>
    </div>

    <div class="hect-field-card" id="field-3" onclick="focusField(3)">
      <div class="hfc-header">
        <div class="hfc-crop-dot" style="background:#2980B9;"></div>
        <div class="hfc-info">
          <div class="hfc-name">Campo Arándano</div>
          <div class="hfc-sub">Virú · La Libertad</div>
        </div>
        <span class="hfc-badge" style="background:#E8F4FD;color:#2980B9;">Nueva plantación</span>
      </div>
      <div class="hfc-stats">
        <div class="hfc-stat"><div class="hfcs-v">4 ha</div><div class="hfcs-l">Área</div></div>
        <div class="hfc-stat"><div class="hfcs-v">🫐 Arándano</div><div class="hfcs-l">Cultivo</div></div>
        <div class="hfc-stat"><div class="hfcs-v">Brotación</div><div class="hfcs-l">Ciclo</div></div>
        <div class="hfc-stat"><div class="hfcs-v">~16 TM</div><div class="hfcs-l">Proyección</div></div>
      </div>
      <div class="hfc-detail" style="display:none;">
        <div class="hfcd-row"><span>Altitud</span><strong>160 msnm</strong></div>
        <div class="hfcd-row"><span>Suelo</span><strong>Ácido · pH 4.8 · preparado</strong></div>
        <div class="hfcd-row"><span>Riego</span><strong>Fertirriego automatizado</strong></div>
        <div class="hfcd-row"><span>Variedad</span><strong>Biloxi · 1er año productivo</strong></div>
        <div class="hfcd-row"><span>Cosecha est.</span><strong>Oct–Nov 2026</strong></div>
      </div>
    </div>

    <!-- Formulario agregar campo (oculto) -->
    <div class="hect-add-form" id="hect-add-form" style="display:none;">
      <div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:12px;">➕ Nuevo campo</div>
      <div class="fg" style="margin-bottom:10px;"><label class="fl">Nombre del campo</label><input class="fi" type="text" placeholder="Ej: Campo Norte"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
        <div class="fg"><label class="fl">Cultivo</label><select class="fi"><option>Palta Hass</option><option>Arándano</option><option>Palta Fuerte</option><option>Otro</option></select></div>
        <div class="fg"><label class="fl">Hectáreas</label><input class="fi" type="number" placeholder="ha" min="1"></div>
      </div>
      <div class="fg" style="margin-bottom:10px;"><label class="fl">Distrito / Región</label><input class="fi" type="text" placeholder="Ej: Virú, La Libertad"></div>
      <div class="fg" style="margin-bottom:12px;"><label class="fl">Variedad</label><input class="fi" type="text" placeholder="Ej: Hass, Biloxi..."></div>
      <div style="display:flex;gap:8px;">
        <button class="btn-p" style="flex:1;margin-top:0;padding:10px;" onclick="saveField()">Guardar campo</button>
        <button style="padding:10px 14px;border:1px solid var(--border);border-radius:6px;background:none;cursor:pointer;font-size:12px;" onclick="hideAddField()">Cancelar</button>
      </div>
    </div>

  </div>
</div>
`;

let mapInstance = null;
let layers = {};
let activeTileLayer = null;

const tileSources = {
  satellite: L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: '© Esri · © OpenStreetMap', maxZoom: 19 }
  ),
  terrain: L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    { attribution: '© OpenTopoMap · © OpenStreetMap', maxZoom: 17 }
  ),
  street: L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: '© OpenStreetMap contributors', maxZoom: 19 }
  )
};

const FIELDS_DATA = [
  {
    id: 1,
    name: 'Campo Palta Norte',
    crop: 'Palta Hass',
    ha: 18,
    color: '#27AE60',
    center: [-8.4100, -78.7520],
    coords: [
      [-8.4065, -78.7570],
      [-8.4065, -78.7470],
      [-8.4135, -78.7470],
      [-8.4135, -78.7570]
    ]
  },
  {
    id: 2,
    name: 'Campo Palta Sur',
    crop: 'Palta Hass',
    ha: 10,
    color: '#27AE60',
    center: [-8.4220, -78.7480],
    coords: [
      [-8.4195, -78.7510],
      [-8.4195, -78.7440],
      [-8.4250, -78.7440],
      [-8.4250, -78.7510]
    ]
  },
  {
    id: 3,
    name: 'Campo Arándano',
    crop: 'Arándano Biloxi',
    ha: 4,
    color: '#2980B9',
    center: [-8.4160, -78.7600],
    coords: [
      [-8.4145, -78.7625],
      [-8.4145, -78.7575],
      [-8.4180, -78.7575],
      [-8.4180, -78.7625]
    ]
  }
];

export function init() {
  if (mapInstance) { mapInstance.invalidateSize(); return; }

  setTimeout(() => {
    mapInstance = L.map('hectareas-map', { zoomControl: true }).setView([-8.4150, -78.7520], 14);

    activeTileLayer = tileSources.satellite;
    activeTileLayer.addTo(mapInstance);

    // Add label overlay for satellite
    L.tileLayer(
      'https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png',
      { opacity: 0.5, maxZoom: 19 }
    ).addTo(mapInstance);

    FIELDS_DATA.forEach(field => {
      const poly = L.polygon(field.coords, {
        color: field.color,
        weight: 2.5,
        fillColor: field.color,
        fillOpacity: 0.35
      }).addTo(mapInstance);

      const popupContent = `
        <div style="font-family:Inter,sans-serif;min-width:180px;">
          <div style="font-weight:700;font-size:14px;margin-bottom:6px;">${field.name}</div>
          <div style="font-size:12px;color:#555;margin-bottom:4px;">🌱 ${field.crop}</div>
          <div style="font-size:12px;color:#555;margin-bottom:4px;">📐 ${field.ha} hectáreas</div>
          <div style="font-size:12px;color:#555;">📍 Virú, La Libertad</div>
        </div>`;

      poly.bindPopup(popupContent, { maxWidth: 220 });
      poly.on('click', () => {
        focusField(field.id);
        poly.openPopup();
      });
      poly.on('mouseover', () => poly.setStyle({ fillOpacity: 0.6, weight: 3 }));
      poly.on('mouseout',  () => poly.setStyle({ fillOpacity: 0.35, weight: 2.5 }));

      layers[field.id] = poly;

      // Label marker
      const icon = L.divIcon({
        html: `<div style="background:${field.color};color:#fff;padding:3px 8px;border-radius:12px;font-size:11px;font-weight:700;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.3);">${field.ha} ha · ${field.crop.split(' ')[0]}</div>`,
        className: '',
        iconAnchor: [40, 10]
      });
      L.marker(field.center, { icon }).addTo(mapInstance);
    });

    // Fit all fields in view
    const allCoords = FIELDS_DATA.flatMap(f => f.coords);
    mapInstance.fitBounds(allCoords, { padding: [40, 40] });

    // Expose globals
    window.setLayer = setLayer;
    window.focusField = focusField;
    window.showAddField = showAddField;
    window.hideAddField = hideAddField;
    window.saveField = saveField;

  }, 150);
}

function setLayer(type, btn) {
  if (!mapInstance) return;
  mapInstance.removeLayer(activeTileLayer);
  activeTileLayer = tileSources[type];
  activeTileLayer.addTo(mapInstance);
  document.querySelectorAll('.hlb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function focusField(id) {
  const field = FIELDS_DATA.find(f => f.id === id);
  if (!field || !mapInstance) return;

  // Zoom to field
  mapInstance.fitBounds(field.coords, { padding: [60, 60] });

  // Highlight selected
  Object.entries(layers).forEach(([fid, poly]) => {
    poly.setStyle({ fillOpacity: fid == id ? 0.65 : 0.25, weight: fid == id ? 3.5 : 2 });
  });

  // Toggle detail panel
  document.querySelectorAll('.hect-field-card').forEach(c => c.classList.remove('active-field'));
  const card = document.getElementById('field-' + id);
  if (card) {
    card.classList.add('active-field');
    const detail = card.querySelector('.hfc-detail');
    if (detail) detail.style.display = 'block';
  }

  // Hide other details
  document.querySelectorAll('.hect-field-card:not(#field-' + id + ') .hfc-detail')
    .forEach(d => d.style.display = 'none');
}

function showAddField() {
  document.getElementById('hect-add-form').style.display = 'block';
}

function hideAddField() {
  document.getElementById('hect-add-form').style.display = 'none';
}

function saveField() {
  hideAddField();
  // UI feedback only (static prototype)
  const btn = document.querySelector('.hect-add-btn');
  if (btn) { btn.textContent = '✓ Campo guardado'; setTimeout(() => { btn.textContent = '+ Agregar campo'; }, 2500); }
}
