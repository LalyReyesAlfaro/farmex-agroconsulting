export const html = `
<div style="background:linear-gradient(135deg,#E8F8EE,#FDF3DC);border:1px solid rgba(39,174,96,.2);border-radius:10px;padding:14px 18px;margin-bottom:18px;display:flex;align-items:center;gap:12px;">
  <span style="font-size:20px;">💡</span>
  <div><div style="font-size:13px;font-weight:600;color:var(--g-dark);">Comparte tu perfil verificado con compradores e importadores</div><div style="font-size:12px;color:var(--txt-s);margin-top:2px;">Tu vitrina muestra tu historial productivo, Score Productivo, certificaciones y productos disponibles. Es tu carta de presentación comercial.</div></div>
</div>
<div class="vit-layout">
  <div class="vit-controls">
    <div class="stitle" style="margin-top:0;">🌿 MI VITRINA</div>
    <div class="vit-ctrl-card">
      <div class="vit-ctrl-title">🔗 Compartir perfil</div>
      <div style="font-size:12px;color:var(--txt-m);margin-bottom:10px;">Cualquier persona con este link puede ver tu perfil público verificado por Farmex.</div>
      <div class="share-box">
        <span class="share-url" id="share-url-txt">farmex.pe/productor/raul-garcia-la-libertad</span>
        <button class="btn-copy" id="btn-copy">Copiar</button>
      </div>
      <div class="qr-box"><span style="font-size:64px;line-height:1;">📱</span></div>
      <div style="font-size:10px;color:var(--txt-m);text-align:center;margin-top:6px;">Escanea o comparte el QR con compradores</div>
    </div>
    <div class="vit-ctrl-card">
      <div class="vit-ctrl-title">⚙️ Qué mostrar en tu vitrina</div>
      <div class="toggle-row"><span class="toggle-lbl">Score Productivo verificado</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
      <div class="toggle-row"><span class="toggle-lbl">Certificaciones</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
      <div class="toggle-row"><span class="toggle-lbl">Hectáreas y cultivos</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
      <div class="toggle-row"><span class="toggle-lbl">Historial de producción</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
      <div class="toggle-row"><span class="toggle-lbl">Oferta disponible</span><label class="toggle"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
      <div class="toggle-row"><span class="toggle-lbl">Datos de contacto</span><label class="toggle"><input type="checkbox"><span class="toggle-slider"></span></label></div>
    </div>
    <div class="vit-ctrl-card">
      <div class="vit-ctrl-title">📍 Ubicación geográfica</div>
      <div style="font-size:12px;color:var(--txt-m);margin-bottom:10px;">Vista satelital de tu finca · Virú, La Libertad.</div>
      <div id="vit-map" style="height:180px;border-radius:8px;overflow:hidden;"></div>
    </div>
    <div class="vit-ctrl-card">
      <div class="vit-ctrl-title">📊 Estadísticas de visitas</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;"><div style="font-size:22px;font-weight:700;color:var(--txt);">47</div><div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Visitas este mes</div></div>
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;"><div style="font-size:22px;font-weight:700;color:var(--txt);">8</div><div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Compradores únicos</div></div>
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;"><div style="font-size:22px;font-weight:700;color:var(--ok);">3</div><div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Solicitudes recibidas</div></div>
        <div style="background:var(--bg);padding:12px;border-radius:7px;text-align:center;"><div style="font-size:22px;font-weight:700;color:var(--gold);">2</div><div style="font-size:10px;color:var(--txt-m);margin-top:2px;">Contactos guardados</div></div>
      </div>
    </div>
  </div>

  <!-- Vista pública -->
  <div>
    <div style="font-size:11px;font-weight:600;color:var(--txt-m);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:var(--ok);display:inline-block;"></span>Vista previa · Así ven tu perfil los compradores</div>
    <div class="pub-profile">
      <div class="pub-header" style="padding-bottom:90px;">
        <div class="pub-header-bg"></div>
        <!-- Foto real de finca de palta -->
        <div style="position:absolute;inset:0;overflow:hidden;border-radius:0;">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80" alt="Finca palta" style="width:100%;height:100%;object-fit:cover;opacity:.25;">
        </div>
        <div style="position:relative;z-index:1;display:flex;align-items:flex-start;gap:16px;">
          <!-- Foto del agricultor -->
          <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=120&q=80"
               alt="Raúl García"
               style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid var(--gold);flex-shrink:0;margin-top:4px;">
          <div>
            <div class="pub-badge-farmex">✓ Farmex Verified Producer</div>
            <div class="pub-farm-name">Raúl García Mendoza</div>
            <div class="pub-farm-sub">Productor de Palta Hass certificado · Costa del Perú</div>
            <div class="pub-farm-meta">
              <div class="pub-meta-item">📍 Virú, La Libertad</div>
              <div class="pub-meta-item">🌿 32 hectáreas propias</div>
              <div class="pub-meta-item">📦 Exportador directo · 5 campañas</div>
            </div>
          </div>
        </div>
        <div class="pub-score-float">
          <div style="font-size:28px;">⭐</div>
          <div><div class="pub-score-lbl">Score Productivo</div><div class="pub-score-num">760</div><div class="pub-score-cat">Muy Bueno · Top 15%</div></div>
        </div>
      </div>

      <div class="pub-body">
        <div class="pub-certs">
          <span class="cert-tag">✓ Global G.A.P.</span>
          <span class="cert-tag">✓ Trazabilidad completa</span>
          <span class="cert-tag">✓ Riego tecnificado</span>
          <span class="cert-tag" style="background:#E8F4FD;color:var(--info);border-color:rgba(41,128,185,.2);">📡 Monitoreo satelital activo</span>
        </div>

        <div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:10px;">🌱 Mis hectáreas activas</div>
        <div class="pub-crops-grid">
          <div class="pub-crop">
            <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80" alt="Palta Hass" style="width:100%;height:110px;object-fit:cover;border-radius:6px;margin-bottom:10px;">
            <div class="pub-crop-name">🥑 Palta Hass</div>
            <div class="pub-crop-ha">28 ha · Campaña 2026 en curso</div>
            <div class="pub-crop-stats">
              <div><div class="pcs-v">~112 TM</div><div class="pcs-l">Cosecha proyectada</div></div>
              <div><div class="pcs-v">Ago–Oct</div><div class="pcs-l">Ventana embarque</div></div>
              <div><div class="pcs-v">Cal. 12–18</div><div class="pcs-l">Calibre</div></div>
              <div><div class="pcs-v">FOB Paita</div><div class="pcs-l">Puerto salida</div></div>
            </div>
          </div>
          <div class="pub-crop" style="border-left-color:var(--info);">
            <img src="https://images.unsplash.com/photo-1425007680966-1ac71ad1b87d?w=400&q=80" alt="Arándano" style="width:100%;height:110px;object-fit:cover;border-radius:6px;margin-bottom:10px;">
            <div class="pub-crop-name">🫐 Arándano</div>
            <div class="pub-crop-ha">4 ha · Nueva plantación 2026</div>
            <div class="pub-crop-stats">
              <div><div class="pcs-v">~12 TM</div><div class="pcs-l">Primera cosecha</div></div>
              <div><div class="pcs-v">Sep–Nov</div><div class="pcs-l">Ventana embarque</div></div>
              <div><div class="pcs-v">14–18mm</div><div class="pcs-l">Calibre</div></div>
              <div><div class="pcs-v">FOB Lima</div><div class="pcs-l">Puerto salida</div></div>
            </div>
          </div>
        </div>

        <div class="pub-offer">
          <div class="pub-offer-title">📋 Oferta disponible · Campaña 2026</div>
          <div class="offer-item"><div><div class="offer-prod">Palta Hass Cal. 14 · Export Grade</div><div class="offer-vol">Disponible: 60–80 TM · Ago 2026</div></div><div class="offer-price">Consultar</div></div>
          <div class="offer-item"><div><div class="offer-prod">Palta Hass Cal. 16–18 · Supermercados</div><div class="offer-vol">Disponible: 25–35 TM · Sep 2026</div></div><div class="offer-price">Consultar</div></div>
          <div class="offer-item"><div><div class="offer-prod">Arándano Premium · Primera cosecha</div><div class="offer-vol">Disponible: 8–12 TM · Oct 2026</div></div><div class="offer-price">Consultar</div></div>
        </div>

        <div style="font-size:13px;font-weight:700;color:var(--txt);margin-bottom:10px;">📈 Historial de producción</div>
        <div class="pub-history" style="margin-bottom:20px;">
          <div class="hist-item"><span class="hist-yr">2022</span><div class="hist-bar-wrap"><div class="hist-bar" style="width:60%"></div></div><span class="hist-tm">68 TM</span></div>
          <div class="hist-item"><span class="hist-yr">2023</span><div class="hist-bar-wrap"><div class="hist-bar" style="width:75%"></div></div><span class="hist-tm">85 TM</span></div>
          <div class="hist-item"><span class="hist-yr">2024</span><div class="hist-bar-wrap"><div class="hist-bar" style="width:88%"></div></div><span class="hist-tm">99 TM</span></div>
          <div class="hist-item"><span class="hist-yr">2025</span><div class="hist-bar-wrap"><div class="hist-bar" style="width:95%"></div></div><span class="hist-tm">107 TM</span></div>
          <div class="hist-item"><span class="hist-yr">2026</span><div class="hist-bar-wrap"><div class="hist-bar" style="width:100%;background:var(--gold);"></div></div><span class="hist-tm" style="color:var(--gold);">~128 TM</span></div>
        </div>
        <button class="pub-cta">📩 Solicitar cotización a Raúl García</button>
        <div class="pub-cta-sub">Verificado por Farmex Capital · Score 760/1000 · Responde en &lt;24h</div>
      </div>
    </div>
  </div>
</div>
`;

export function init() {
  document.getElementById('btn-copy').addEventListener('click', () => {
    const btn = document.getElementById('btn-copy');
    navigator.clipboard.writeText('https://farmex.pe/productor/raul-garcia-la-libertad').catch(() => {});
    btn.textContent = '¡Copiado!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2200);
  });

  const map = L.map('vit-map', { zoomControl: false, attributionControl: false }).setView([-8.4167, -78.75], 13);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
  }).addTo(map);
  L.marker([-8.4167, -78.75]).addTo(map).bindPopup('Finca Raúl García · 32 ha · Virú, La Libertad');
}
