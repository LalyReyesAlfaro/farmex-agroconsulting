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
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos un equipo de analistas financieros especializados en agronegocios con experiencia en COFIDE, Agrobanco y banca privada. Entendemos los ciclos productivos porque trabajamos directamente con los productores en campo.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Proveer crédito accesible, flexible y alineado con los ciclos productivos del agricultor — no con los calendarios de la banca tradicional.</p>
    </div>
    <div style="margin-top:12px;padding:12px 16px;background:#FDF3DC;border-radius:8px;font-size:13px;color:#7d5a0f;line-height:1.6;">
      8 productos disponibles por etapa productiva — fertilización, riego, campaña, postcosecha, tecnificación, control fitosanitario, bioestimulación y adelanto de exportación. Tasas desde 1.4% mensual con plazos alineados a tu ciclo de cosecha. Financiamiento respaldado en normativa de <a href="https://www.gob.pe/midagri" target="_blank" rel="noopener" style="color:#a0720f;font-weight:600;">MIDAGRI</a> y <a href="https://www.senasa.gob.pe" target="_blank" rel="noopener" style="color:#a0720f;font-weight:600;">SENASA</a>.
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
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos la plataforma de inteligencia agro-climática de Farmex, integrada con datos satelitales (Sentinel-2, MODIS), estaciones meteorológicas y fuentes oficiales del SENAMHI y MIDAGRI.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Dar al productor información climática y de mercado por región para tomar mejores decisiones en el momento correcto, antes de que el problema ocurra.</p>
    </div>
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
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos el motor de inteligencia artificial de Farmex. Desarrollado por ingenieros de datos y especialistas agropecuarios, nuestro modelo evalúa al productor de forma integral usando fuentes alternativas que la banca tradicional ignora.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Evaluar al productor por lo que realmente es — su tierra, historial productivo y data de campo — no por su historial bancario. Porque este agricultor ya invirtió en ser mejor que el promedio, y el sistema lo sigue tratando como promedio.</p>
    </div>
    <div class="srv-features-grid">
      <div class="srv-feat"><div class="sf-ico-s">🌾</div><div><div class="sf-n-s">Historial productivo</div><div class="sf-d-s">Campañas, rendimientos, continuidad</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">📡</div><div><div class="sf-n-s">Data satelital NDVI</div><div class="sf-d-s">Salud del cultivo en tiempo real</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🏡</div><div><div class="sf-n-s">Tenencia de tierra</div><div class="sf-d-s">Título, posesión, hectáreas</div></div></div>
      <div class="srv-feat"><div class="sf-ico-s">🌍</div><div><div class="sf-n-s">Vinculación comercial</div><div class="sf-d-s">Compradores, contratos, exportaciones</div></div></div>
    </div>
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
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos la red de agrónomos certificados de Farmex Perú. Ingenieros agrónomos con especialización en palto y arándano, con más de 10 años de experiencia en campo en La Libertad, Ica, Piura y Lambayeque.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Acompañar al productor en cada etapa de su campaña con visitas de campo, monitoreo digital y soporte técnico continuo, reduciendo las pérdidas evitables del 20-30% que afectan la rentabilidad.</p>
    </div>
    <div class="srv-specialist-grid">
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#E8F8EE;color:var(--g-mid);">JQ</div>
        <div><div class="ssp-name">Ing. Juan Quispe</div><div class="ssp-rol">Especialista Palta Hass · La Libertad</div><div class="ssp-exp">12 años en campo</div></div>
      </div>
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#E8F4FD;color:var(--info);">MR</div>
        <div><div class="ssp-name">Ing. María Ramos</div><div class="ssp-rol">Especialista Arándano · Ica</div><div class="ssp-exp">8 años en campo</div></div>
      </div>
      <div class="srv-specialist">
        <div class="ssp-av" style="background:#FDF3DC;color:var(--gold);">CP</div>
        <div><div class="ssp-name">Ing. Carlos Pérez</div><div class="ssp-rol">Especialista Palta · Piura</div><div class="ssp-exp">15 años en campo</div></div>
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
    <div class="srv-block-who">
      <div class="srv-lbl">👥 Quiénes somos</div>
      <p>Somos la plataforma de conexión comercial de Farmex que une directamente a productores verificados con exportadores, supermercados, procesadoras e importadores de EE.UU., Europa y Asia. Sin intermediarios innecesarios.</p>
    </div>
    <div class="srv-block-mission">
      <div class="srv-lbl">🎯 Nuestra misión</div>
      <p>Eliminar la fragmentación del pequeño productor frente a grandes compradores, dándole visibilidad, trazabilidad y acceso directo al mercado internacional.</p>
    </div>
    <div style="margin-top:12px;padding:12px 16px;background:#FDEEEE;border-radius:8px;font-size:13px;color:#7d1f1f;line-height:1.6;">
      Productores verificados con perfil completo: foto del cultivo, ubicación GPS, certificaciones Global G.A.P. y SENASA, historial productivo por campaña e Score Farmex AI. Compradores internacionales los encuentran y contactan directamente, sin intermediarios.
    </div>
    <button onclick="window.goScreen('vitrina')" style="margin-top:12px;background:none;border:1.5px solid #c0392b;color:#c0392b;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Ver mi vitrina de productor →</button>
  </div>
</div>

`;

export function init() {}
