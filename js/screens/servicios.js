export const html = `
<!-- Servicio 1: Financiamiento -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#FDF3DC;">💰</div>
    <div>
      <div class="srv-block-name">Financiamiento Agrícola</div>
      <div class="srv-block-tag">Crédito por etapa productiva</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div style="padding:12px 16px;background:#FDF3DC;border-radius:8px;font-size:13px;color:#7d5a0f;line-height:1.6;">
      6 productos disponibles por etapa productiva — fertilización, campaña, riego, postcosecha, control fitosanitario y bioestimulación. Tasas desde 1.5% mensual con plazos alineados a tu ciclo de cosecha. Productos fitosanitarios y de bioestimulación con catálogo de <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="color:#a0720f;font-weight:600;">Farmex Perú</a>, créditos de campaña y postcosecha respaldados por <a href="https://www.banbif.com.pe" target="_blank" rel="noopener" style="color:#a0720f;font-weight:600;">BanBif</a>.
    </div>
    <button onclick="window.goScreen('creditos')" style="margin-top:12px;background:none;border:1.5px solid #c49a1a;color:#c49a1a;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Ver todos los créditos y simular →</button>
  </div>
</div>

<!-- Servicio 2: Data Agrícola -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#E8F4FD;">📡</div>
    <div>
      <div class="srv-block-name">Data Agrícola & Clima</div>
      <div class="srv-block-tag">Inteligencia por región · Perú</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-regions-grid">
      <div class="srv-region" style="border-left-color:#E74C3C;">
        <div class="srg-name">🏔️ La Libertad</div>
        <div class="srg-clima">Costa / Valle</div>
        <div class="srg-temp">18–24°C</div>
        <div class="srg-status red">⚠ Lluvias esta semana</div>
        <div class="srg-cultivos">Palta Hass · Arándano</div>
      </div>
      <div class="srv-region" style="border-left-color:#27AE60;">
        <div class="srg-name">🌊 Ica</div>
        <div class="srg-clima">Costa árida</div>
        <div class="srg-temp">20–28°C</div>
        <div class="srg-status ok">✅ Condiciones normales</div>
        <div class="srg-cultivos">Palta · Espárrago · Uva</div>
      </div>
      <div class="srv-region" style="border-left-color:#F39C12;">
        <div class="srg-name">☀️ Piura</div>
        <div class="srg-clima">Costa norte</div>
        <div class="srg-temp">24–32°C</div>
        <div class="srg-status warn">⚠ Calor sobre lo normal</div>
        <div class="srg-cultivos">Mango · Limón · Palta</div>
      </div>
      <div class="srv-region" style="border-left-color:#27AE60;">
        <div class="srg-name">🌾 Lambayeque</div>
        <div class="srg-clima">Costa norte</div>
        <div class="srg-temp">20–26°C</div>
        <div class="srg-status ok">✅ Condiciones normales</div>
        <div class="srg-cultivos">Arándano · Palta · Pimiento</div>
      </div>
      <div class="srv-region" style="border-left-color:#2980B9;">
        <div class="srg-name">🏖️ Ancash</div>
        <div class="srg-clima">Costa central</div>
        <div class="srg-temp">17–22°C</div>
        <div class="srg-status ok">✅ Condiciones normales</div>
        <div class="srg-cultivos">Palta · Maracuyá</div>
      </div>
    </div>
  </div>
</div>

<!-- Servicio 3: Scoring Alternativo -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#E8F8EE;">⭐</div>
    <div>
      <div class="srv-block-name">Scoring Agrícola Inteligente</div>
      <div class="srv-block-tag">IA que entiende al agricultor</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-features-grid">
      <div class="srv-feat"><div class="sf-ico-s">🌾</div><div><div class="sf-n-s">Historial productivo</div><div class="sf-d-s">Campañas, rendimientos, continuidad</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">📡</div><div><div class="sf-n-s">Data satelital NDVI</div><div class="sf-d-s">Salud del cultivo en tiempo real</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🏡</div><div><div class="sf-n-s">Tenencia de tierra</div><div class="sf-d-s">Título, posesión, hectáreas</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🌍</div><div><div class="sf-n-s">Vinculación comercial</div><div class="sf-d-s">Compradores, contratos, exportaciones</div></div></div>
    </div>
    <button onclick="window.goScreen('scoring')" style="margin-top:12px;background:none;border:1.5px solid var(--ok);color:var(--ok);padding:8px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Ver mi Score Productivo →</button>
  </div>
</div>

<!-- Servicio 4: Asistencia Técnica -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#FEF9E7;">👨‍🌾</div>
    <div>
      <div class="srv-block-name">Asistencia Técnica Digital</div>
      <div class="srv-block-tag">Agrónomos especializados Farmex Perú</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div class="srv-specialist-grid">
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#E8F8EE;color:var(--g-mid);">AG</div>
        <div><div class="ssp-name">Agrónomo Senior</div><div class="ssp-rol">Atención a clientes · Generación de contenidos</div><div class="ssp-exp">Farmex Capital</div></div>
      </div>
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#E8F4FD;color:var(--info);">CM</div>
        <div><div class="ssp-name">Community Manager</div><div class="ssp-rol">Soporte digital · Comunicación con productores</div><div class="ssp-exp">Farmex Capital</div></div>
      </div>
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#FDF3DC;color:var(--gold);">GG</div>
        <div><div class="ssp-name">Gerente General</div><div class="ssp-rol">Dirección estratégica · Relaciones institucionales</div><div class="ssp-exp">Farmex Capital</div></div>
      </div>
    </div>
  </div>
</div>

<!-- Servicio 5: Marketplace -->
<div class="srv-block">
  <div class="srv-block-header">
    <div class="srv-block-ico" style="background:#FDEEEE;">🤝</div>
    <div>
      <div class="srv-block-name">Marketplace &amp; Conexión Comercial</div>
      <div class="srv-block-tag">Conectamos productores con compradores del mundo</div>
    </div>
  </div>
  <div class="srv-block-body">
    <div style="padding:12px 16px;background:#FDEEEE;border-radius:8px;font-size:13px;color:#7d1f1f;line-height:1.6;">
      Productores verificados con perfil completo: foto del cultivo, ubicación GPS, certificaciones, historial productivo por campaña y Score Productivo. Compradores internacionales los encuentran y contactan directamente, sin intermediarios.
    </div>
    <button onclick="window.goScreen('vitrina')" style="margin-top:12px;background:none;border:1.5px solid #c0392b;color:#c0392b;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Ver mi vitrina de productor →</button>
  </div>
</div>

`;

export function init() {}
