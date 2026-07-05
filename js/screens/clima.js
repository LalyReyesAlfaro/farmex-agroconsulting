export const html = `
<div class="stitle">🌤️ Clima y Riesgos · La Libertad</div>

<div style="background:linear-gradient(135deg,#E8F4FD,#EBF5FB);border:1px solid rgba(41,128,185,.2);border-radius:8px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
  <span style="font-size:18px;">📡</span>
  <div style="font-size:11px;color:#1a4c7e;line-height:1.6;flex:1;"><strong>Datos satelitales en tiempo real</strong> — Farmex AgroConsulting suscribe mensualmente a un proveedor especializado de datos satelitales agrícolas para monitoreo continuo de NDVI, índices de humedad y riesgos climáticos en las 5 regiones productoras clave del Perú.</div>
</div>

<!-- Pronóstico -->
<div class="wth-grid">
  <div class="wth"><div class="wth-day">Hoy</div><div class="wth-ico">⛅</div><div class="wth-t">22°C</div><div class="wth-d">Parcialmente nublado</div></div>
  <div class="wth"><div class="wth-day">Mañana</div><div class="wth-ico">🌧️</div><div class="wth-t">19°C</div><div class="wth-d">Lluvias moderadas</div></div>
  <div class="wth"><div class="wth-day">Jueves</div><div class="wth-ico">🌦️</div><div class="wth-t">21°C</div><div class="wth-d">Chubascos aislados</div></div>
  <div class="wth"><div class="wth-day">Viernes</div><div class="wth-ico">☀️</div><div class="wth-t">25°C</div><div class="wth-d">Soleado</div></div>
</div>

<!-- Gráfica precipitaciones -->
<div class="card" style="margin-bottom:18px;">
  <div class="ch"><div><div class="ct">Precipitaciones proyectadas · Próximas 4 semanas</div><div class="cs">mm por semana · La Libertad</div></div><span class="badge br">⚠ Riesgo alto sem. 2</span></div>
  <div class="ch-wrap"><canvas id="ch-clima"></canvas></div>
</div>

<!-- Índices clave para el cultivo -->
<div class="stitle">📊 Índices críticos del cultivo</div>
<div class="clima-kpi-grid">
  <div class="clima-kpi">
    <div class="ck-ico">🌡️</div>
    <div class="ck-val">22°C</div>
    <div class="ck-lbl">Temperatura actual</div>
    <div class="ck-ref ok">✓ Dentro del rango óptimo (14–27°C)</div>
  </div>
  <div class="clima-kpi">
    <div class="ck-ico">❄️</div>
    <div class="ck-val">320 h</div>
    <div class="ck-lbl">Horas frío acumuladas</div>
    <div class="ck-ref warn">⚠ Meta arándano: 400–1,100 h (faltan ~80 h)</div>
  </div>
  <div class="clima-kpi">
    <div class="ck-ico">💧</div>
    <div class="ck-val">68%</div>
    <div class="ck-lbl">Humedad relativa</div>
    <div class="ck-ref ok">✓ Rango aceptable para palta y arándano</div>
  </div>
  <div class="clima-kpi">
    <div class="ck-ico">💨</div>
    <div class="ck-val">18 km/h</div>
    <div class="ck-lbl">Velocidad del viento</div>
    <div class="ck-ref warn">⚠ Vientos moderados. Vigilar polinización arándano</div>
  </div>
</div>

<!-- Alertas por cultivo -->
<div class="stitle">🚨 Alertas específicas por cultivo</div>
<div class="g2" style="margin-bottom:18px;">

  <!-- ARÁNDANO -->
  <div class="card">
    <div class="ch"><div><div class="ct">🫐 Arándano · Alertas activas</div><div class="cs">Basado en requerimientos técnicos INDAP 2005</div></div><span class="badge br">3 alertas</span></div>
    <div class="cultivo-alert-list">

      <div class="cult-alert danger">
        <div class="ca-header">
          <span class="ca-ico">🌧️</span>
          <div>
            <div class="ca-title">Lluvias excesivas · RIESGO ALTO</div>
            <div class="ca-zone">La Libertad esta semana</div>
          </div>
          <span class="ca-badge red">ALTO</span>
        </div>
        <div class="ca-body">
          <div class="ca-impact"><strong>Daño en planta:</strong> Las lluvias prolongadas favorecen la proliferación de hongos y reducen la calidad del fruto. Veranos nublados y húmedos aumentan el riesgo de <em>botrytis</em> y pudrición de raíces.</div>
          <div class="ca-impact"><strong>Daño en fruto:</strong> Reduce la turgencia, el tamaño y el contenido de azúcar (Brix). Concentra el período de cosecha de forma irregular.</div>
          <div class="ca-action">💊 Acción recomendada: Aplicar fungicida preventivo (cobre o captan). Revisar drenaje en surcos. Evitar riego hasta que el suelo esté seco.</div>
        </div>
      </div>

      <div class="cult-alert warning">
        <div class="ca-header">
          <span class="ca-ico">❄️</span>
          <div>
            <div class="ca-title">Horas frío insuficientes · DÉFICIT</div>
            <div class="ca-zone">Acumulado actual: 320 h (meta: 400–1,100 h)</div>
          </div>
          <span class="ca-badge warn">DÉFICIT</span>
        </div>
        <div class="ca-body">
          <div class="ca-impact"><strong>Efecto en planta:</strong> Las horas frío son necesarias para liberar las yemas del letargo invernal e iniciar el nuevo ciclo de brotación y floración. Con déficit de frío, la brotación es irregular y la floración se retrasa.</div>
          <div class="ca-impact"><strong>Riesgo adicional:</strong> Variedad Biloxi requiere menos horas frío (~150–300 h), pero otras variedades (Alto) necesitan hasta 1,100 h para brotación normal (Dinamarca, 2005).</div>
          <div class="ca-action">💊 Acción recomendada: Verificar variedad instalada. Si el déficit persiste, considerar aplicación de dormex (cianamida hidrogenada) para compensar y uniformizar la brotación.</div>
        </div>
      </div>

      <div class="cult-alert warning">
        <div class="ca-header">
          <span class="ca-ico">💨</span>
          <div>
            <div class="ca-title">Vientos moderados · PRECAUCIÓN</div>
            <div class="ca-zone">18 km/h · Rachas hasta 28 km/h proyectadas</div>
          </div>
          <span class="ca-badge warn">MEDIO</span>
        </div>
        <div class="ca-body">
          <div class="ca-impact"><strong>Daño en planta:</strong> Vientos fuertes ocasionan caída de brotes, afectan la floración e impiden la polinización por insectos. Pueden causar daño físico y abrasión en los frutos (Rebolledo, 2013).</div>
          <div class="ca-impact"><strong>Etapa crítica:</strong> Si el arándano está en floración, el riesgo es máximo ya que afecta directamente el cuajado del fruto.</div>
          <div class="ca-action">💊 Acción recomendada: Revisar cortavientos o mallas. Programar polinización asistida con abejas si la floración está activa. Evitar aplicaciones foliares con viento.</div>
        </div>
      </div>

    </div>
  </div>

  <!-- PALTA -->
  <div class="card">
    <div class="ch"><div><div class="ct">🥑 Palta Hass · Alertas activas</div><div class="cs">Ciclo actual: etapa de engorde de fruto</div></div><span class="badge by">2 alertas</span></div>
    <div class="cultivo-alert-list">

      <div class="cult-alert danger">
        <div class="ca-header">
          <span class="ca-ico">🌧️</span>
          <div>
            <div class="ca-title">Lluvias en etapa de engorde · CRÍTICO</div>
            <div class="ca-zone">Probabilidad 68% · Próximos 7 días</div>
          </div>
          <span class="ca-badge red">ALTO</span>
        </div>
        <div class="ca-body">
          <div class="ca-impact"><strong>Daño en fruto:</strong> Las lluvias en etapa de engorde aumentan el riesgo de antracnosis y podredumbre del pedúnculo. Pueden causar rajado del fruto en variedades sensibles.</div>
          <div class="ca-impact"><strong>Daño en árbol:</strong> Exceso de humedad en el suelo favorece <em>Phytophthora cinnamomi</em> (pudrición de raíz), el patógeno más destructivo del palto. Alta nubosidad reduce la fotosíntesis y afecta el calibre final.</div>
          <div class="ca-action">💊 Acción recomendada: Suspender riego. Aplicar fosfonato de potasio preventivo. Revisar drenaje. Monitorear síntomas de pudrición en cuello de raíz. <strong>Seguro paramétrico activo.</strong></div>
        </div>
      </div>

      <div class="cult-alert ok">
        <div class="ca-header">
          <span class="ca-ico">🌡️</span>
          <div>
            <div class="ca-title">Temperatura · FAVORABLE</div>
            <div class="ca-zone">22°C actual · Rango óptimo 18–25°C</div>
          </div>
          <span class="ca-badge green">OK</span>
        </div>
        <div class="ca-body">
          <div class="ca-impact"><strong>Condición actual:</strong> La temperatura está dentro del rango óptimo para el engorde del fruto. Por encima de 30°C se produce quemadura de sol y reducción de calibre hasta un 30%.</div>
          <div class="ca-impact"><strong>Próximos días:</strong> Se proyecta subida a 25°C el viernes. Mantener monitoreo.</div>
          <div class="ca-action">✅ Sin acción inmediata. Verificar riego si temperatura supera 28°C esta semana.</div>
        </div>
      </div>

      <div class="cult-alert info">
        <div class="ca-header">
          <span class="ca-ico">🛡️</span>
          <div>
            <div class="ca-title">Seguro paramétrico · ACTIVO</div>
            <div class="ca-zone">Umbral superado: 28mm/24h · 13 Mayo</div>
          </div>
          <span class="ca-badge blue">ACTIVO</span>
        </div>
        <div class="ca-body">
          <div class="ca-impact"><strong>Cobertura activada:</strong> Se activó automáticamente el seguro paramétrico al superar el umbral de precipitación de 28mm en 24 horas registrado hoy en La Libertad.</div>
          <div class="ca-action">💰 Pago estimado procesándose: <strong>S/ 4,200</strong> · Desembolso en máx. 72 horas. Sin trámites ni inspecciones.</div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- Fenómeno El Niño -->
<div class="card">
  <div class="ch"><div><div class="ct">🌊 Monitoreo Fenómeno El Niño · Índice ONI</div><div class="cs">Fuente: ENFEN Perú · SENAMHI · Actualizado hoy</div></div><span class="badge bg">Neutro</span></div>
  <div style="display:grid;grid-template-columns:1fr 3fr;gap:20px;align-items:center;">
    <div style="text-align:center;background:var(--bg);padding:18px;border-radius:8px;">
      <div style="font-size:36px;font-weight:700;color:var(--g-mid);">+0.4°C</div>
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--txt-m);margin-top:4px;">Índice ONI actual</div>
      <div style="font-size:11px;font-weight:700;color:var(--ok);margin-top:6px;">● Condición Neutra</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      <div style="background:var(--bg);padding:12px;border-radius:7px;">
        <div style="font-size:11px;font-weight:700;color:var(--g-dark);margin-bottom:6px;">🥑 Impacto en Palta</div>
        <div style="font-size:11.5px;color:var(--txt-s);line-height:1.6;">Condición neutra: sin impacto directo. En El Niño fuerte (>+1.5°C): lluvias torrenciales, daño en floración y reducción de hectáreas cosechadas hasta 40%.</div>
      </div>
      <div style="background:var(--bg);padding:12px;border-radius:7px;">
        <div style="font-size:11px;font-weight:700;color:var(--g-dark);margin-bottom:6px;">🫐 Impacto en Arándano</div>
        <div style="font-size:11.5px;color:var(--txt-s);line-height:1.6;">En eventos El Niño: temperaturas anómalas afectan acumulación de horas frío. Déficit de frío causa brotación irregular y pérdida de producción del 25–60% (INDAP, 2005).</div>
      </div>
      <div style="background:var(--bg);padding:12px;border-radius:7px;">
        <div style="font-size:11px;font-weight:700;color:var(--g-dark);margin-bottom:6px;">📊 Proyección 3 meses</div>
        <div style="font-size:11.5px;color:var(--txt-s);line-height:1.6;">ENFEN proyecta condición neutra hasta Ago 2026. Probabilidad de El Niño fuerte: 12%. Monitoreo mensual activo en las 32 ha de Raúl García.</div>
      </div>
    </div>
  </div>
</div>
`;

export function init() {
  new Chart(document.getElementById('ch-clima').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Semana 1','Semana 2','Semana 3','Semana 4'],
      datasets: [{
        label: 'Precipitación (mm)',
        data: [28, 52, 38, 15],
        backgroundColor: ['rgba(41,128,185,.6)','rgba(231,76,60,.75)','rgba(243,156,18,.65)','rgba(39,174,96,.65)'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 12 } } },
        y: { grid: { color: '#EEF2EE' }, ticks: { font: { size: 11 }, callback: v => v + ' mm' } }
      }
    }
  });
}
