export const html = `
<!-- Cabecera del perfil -->
<div class="perfil-hero">
  <div class="perfil-avatar">RG</div>
  <div class="perfil-info">
    <div class="perfil-name">Raúl García Mendoza</div>
    <div class="perfil-meta">📍 Virú, La Libertad &nbsp;·&nbsp; 🌿 32 hectáreas &nbsp;·&nbsp; 🥑 Palta Hass &nbsp;·&nbsp; 🫐 Arándano</div>
    <div class="perfil-tags">
      <span class="ptag green">✓ Productor verificado</span>
      <span class="ptag gold">⭐ Score 760 · Muy Bueno</span>
      <span class="ptag blue">📦 Exportador activo</span>
      <span class="ptag">5 campañas</span>
    </div>
  </div>
  <button class="perfil-edit-btn">✏️ Editar perfil</button>
</div>

<!-- Datos del perfil -->
<div class="perfil-layout">

  <!-- Columna izquierda: datos personales y productivos -->
  <div class="perfil-left">

    <div class="card" style="margin-bottom:14px;">
      <div class="ch"><div class="ct">👤 Datos del productor</div><span class="badge bg">Completo</span></div>
      <div class="perfil-datos">
        <div class="pd-row"><span>Nombre completo</span><strong>Raúl García Mendoza</strong></div>
        <div class="pd-row"><span>DNI</span><strong>47xxxxxx</strong></div>
        <div class="pd-row"><span>WhatsApp</span><strong>+51 944 xxx xxx</strong></div>
        <div class="pd-row"><span>Región</span><strong>La Libertad</strong></div>
        <div class="pd-row"><span>Distrito</span><strong>Virú</strong></div>
        <div class="pd-row"><span>Tipo de productor</span><strong>Empírico técnico · Familiar</strong></div>
        <div class="pd-row"><span>Experiencia</span><strong>12 años en campo</strong></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:14px;">
      <div class="ch"><div class="ct">🌱 Datos productivos</div><span class="badge by">Actualizado</span></div>
      <div class="perfil-datos">
        <div class="pd-row"><span>Total hectáreas</span><strong>32 ha propias</strong></div>
        <div class="pd-row"><span>Palta Hass</span><strong>28 ha · 2 campos</strong></div>
        <div class="pd-row"><span>Producción Palta 2025</span><strong>~107 TM · 3.8 TM/ha promedio</strong></div>
        <div class="pd-row"><span>Arándano Biloxi</span><strong>4 ha · nueva plantación</strong></div>
        <div class="pd-row"><span>Producción Arándano 2026</span><strong>Primera cosecha · ~12 TM estimadas</strong></div>
        <div class="pd-row"><span>Sistema de riego</span><strong>Goteo tecnificado + fertirriego</strong></div>
        <div class="pd-row"><span>Tenencia</span><strong>Título de propiedad registrado</strong></div>
        <div class="pd-row"><span>Altitud media</span><strong>180–220 msnm</strong></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:14px;">
      <div class="ch"><div class="ct">📜 Certificaciones</div></div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div class="cert-row ok"><span class="cert-ico">✅</span><div><div class="cert-n">Global G.A.P.</div><div class="cert-d">Certificado · Vigente hasta Dic 2026</div></div></div>
        <div class="cert-row ok"><span class="cert-ico">✅</span><div><div class="cert-n">Trazabilidad completa</div><div class="cert-d">Código QR por lote activado</div></div></div>
        <div class="cert-row warn"><span class="cert-ico">⏳</span><div><div class="cert-n">Certificado de posesión</div><div class="cert-d">Pendiente de subir (+25 pts score)</div></div></div>
      </div>
    </div>

    <div class="card">
      <div class="ch"><div class="ct">📈 Historial de producción</div></div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div class="hist-row"><span class="hr-yr">2022</span><div class="hr-bar-w"><div class="hr-bar" style="width:60%"></div></div><span class="hr-tm">68 TM</span></div>
        <div class="hist-row"><span class="hr-yr">2023</span><div class="hr-bar-w"><div class="hr-bar" style="width:74%"></div></div><span class="hr-tm">85 TM</span></div>
        <div class="hist-row"><span class="hr-yr">2024</span><div class="hr-bar-w"><div class="hr-bar" style="width:87%"></div></div><span class="hr-tm">99 TM</span></div>
        <div class="hist-row"><span class="hr-yr">2025</span><div class="hr-bar-w"><div class="hr-bar" style="width:94%"></div></div><span class="hr-tm">107 TM</span></div>
        <div class="hist-row"><span class="hr-yr">2026</span><div class="hr-bar-w"><div class="hr-bar" style="width:100%;background:var(--gold);"></div></div><span class="hr-tm" style="color:var(--gold);">~128 TM</span></div>
      </div>
    </div>

    <!-- Seguimiento mensual del ciclo productivo -->
    <div class="card" style="margin-top:14px;">
      <div class="ch"><div><div class="ct">📅 Seguimiento Mensual · Ciclo 2026</div><div class="cs">Completado por el productor · Verificado por Farmex AgroConsulting</div></div><span class="badge by">Jul 2026</span></div>
      <div style="font-size:11px;color:var(--txt-m);margin-bottom:10px;padding-bottom:8px;border-bottom:1px dashed var(--border);">Registra las actividades mensuales de tu ciclo productivo. Farmex AgroConsulting verifica cada entrada y actualiza tu Score Productivo.</div>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead>
            <tr style="background:var(--bg);text-align:left;">
              <th style="padding:6px 8px;color:var(--txt-m);font-weight:600;white-space:nowrap;">Mes</th>
              <th style="padding:6px 8px;color:var(--txt-m);font-weight:600;">Actividad registrada</th>
              <th style="padding:6px 8px;color:var(--txt-m);font-weight:600;">Cultivo</th>
              <th style="padding:6px 8px;color:var(--txt-m);font-weight:600;white-space:nowrap;">Verificado</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px 8px;font-weight:600;color:var(--txt);white-space:nowrap;">Feb 2026</td>
              <td style="padding:6px 8px;color:var(--txt-s);">Fertilización base · 1ª aplicación foliar</td>
              <td style="padding:6px 8px;color:var(--txt-s);">🥑 Palta</td>
              <td style="padding:6px 8px;"><span style="background:#E8F8EE;color:var(--ok);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">✓ Farmex</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px 8px;font-weight:600;color:var(--txt);white-space:nowrap;">Mar 2026</td>
              <td style="padding:6px 8px;color:var(--txt-s);">Aplicación bioestimulante · manejo hídrico</td>
              <td style="padding:6px 8px;color:var(--txt-s);">🥑 Palta</td>
              <td style="padding:6px 8px;"><span style="background:#E8F8EE;color:var(--ok);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">✓ Farmex</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px 8px;font-weight:600;color:var(--txt);white-space:nowrap;">Abr 2026</td>
              <td style="padding:6px 8px;color:var(--txt-s);">Control fitosanitario · cuajado de fruto</td>
              <td style="padding:6px 8px;color:var(--txt-s);">🥑 Palta</td>
              <td style="padding:6px 8px;"><span style="background:#E8F8EE;color:var(--ok);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">✓ Farmex</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px 8px;font-weight:600;color:var(--txt);white-space:nowrap;">May 2026</td>
              <td style="padding:6px 8px;color:var(--txt-s);">Plantación arándano · preparación suelo</td>
              <td style="padding:6px 8px;color:var(--txt-s);">🫐 Arándano</td>
              <td style="padding:6px 8px;"><span style="background:#E8F8EE;color:var(--ok);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">✓ Farmex</span></td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:6px 8px;font-weight:600;color:var(--txt);white-space:nowrap;">Jun 2026</td>
              <td style="padding:6px 8px;color:var(--txt-s);">Engorde de fruto · 2ª fertilización</td>
              <td style="padding:6px 8px;color:var(--txt-s);">🥑 Palta</td>
              <td style="padding:6px 8px;"><span style="background:#E8F8EE;color:var(--ok);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">✓ Farmex</span></td>
            </tr>
            <tr style="background:rgba(228,173,52,.07);">
              <td style="padding:6px 8px;font-weight:700;color:var(--gold);white-space:nowrap;">Jul 2026</td>
              <td style="padding:6px 8px;color:var(--txt-s);">Monitoreo cosecha · control de calidad</td>
              <td style="padding:6px 8px;color:var(--txt-s);">🥑 Palta</td>
              <td style="padding:6px 8px;"><span style="background:#FDF3DC;color:var(--gold);font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;">⏳ Pendiente</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onclick="alert('Registro mensual guardado. Farmex AgroConsulting lo verificará en los próximos 3 días hábiles.')" style="margin-top:10px;width:100%;background:none;border:1.5px solid var(--ok);color:var(--ok);padding:8px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;">+ Registrar actividad de este mes →</button>
    </div>

    <!-- Alerta Palta Hass 2026 -->
    <div class="card" style="margin-top:14px;border-left:3px solid #e74c3c;">
      <div class="ch"><div><div class="ct" style="color:#c0392b;">⚠️ Alerta Campaña Palta Hass 2026</div><div class="cs">Condiciones críticas detectadas · La Libertad</div></div><span class="badge br">URGENTE</span></div>
      <div style="font-size:12px;color:var(--txt-s);line-height:1.6;margin-bottom:8px;"><strong>Lluvias en etapa de engorde (Jun–Jul)</strong> — Probabilidad del 68% de precipitaciones moderadas en los próximos 10 días. Riesgo de antracnosis y pudrición del pedúnculo.</div>
      <div style="background:#FDEEEE;border-radius:7px;padding:8px 12px;font-size:11px;color:#7d1f1f;line-height:1.6;">
        💊 <strong>Acción recomendada:</strong> Suspender riego inmediatamente. Aplicar fosfonato de potasio preventivo. Revisar drenaje en surcos. Monitorear síntomas en cuello de raíz. Contacta a tu agrónomo Farmex AgroConsulting.
      </div>
      <button onclick="alert('Alerta registrada. Tu agrónomo Farmex AgroConsulting te contactará en menos de 24 horas con el protocolo de respuesta para tu finca.')" style="margin-top:8px;width:100%;background:#c0392b;color:#fff;border:none;padding:8px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;">Contactar agrónomo ahora →</button>
    </div>

  </div>

  <!-- Columna derecha: score + encuesta -->
  <div class="perfil-right">

    <div class="card" style="margin-bottom:14px;">
      <div class="ch"><div><div class="ct">⭐ Score Productivo Farmex</div><div class="cs">Actualizado · 13 Mayo 2026</div></div></div>
      <div style="display:flex;align-items:center;gap:18px;margin-bottom:14px;">
        <div style="text-align:center;background:var(--g-dark);padding:16px 20px;border-radius:10px;min-width:100px;">
          <div style="font-size:36px;font-weight:800;color:var(--gold-l);">760</div>
          <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-top:2px;">/ 1000</div>
          <div style="font-size:11px;font-weight:700;color:var(--ok);margin-top:5px;">Muy Bueno</div>
        </div>
        <div style="flex:1;">
          <div class="score-mini-bar"><span>Historial productivo</span><div class="smb-track"><div class="smb-fill" style="width:90%;background:var(--ok);"></div></div><span>90</span></div>
          <div class="score-mini-bar"><span>Tenencia de tierra</span><div class="smb-track"><div class="smb-fill" style="width:85%;background:var(--ok);"></div></div><span>85</span></div>
          <div class="score-mini-bar"><span>Historial de pagos</span><div class="smb-track"><div class="smb-fill" style="width:80%;background:var(--gold);"></div></div><span>80</span></div>
          <div class="score-mini-bar"><span>Data satelital</span><div class="smb-track"><div class="smb-fill" style="width:75%;background:var(--gold);"></div></div><span>75</span></div>
          <div class="score-mini-bar"><span>Documentación</span><div class="smb-track"><div class="smb-fill" style="width:60%;background:var(--warn);"></div></div><span>60</span></div>
        </div>
      </div>
      <div style="background:#E8F8EE;border-radius:7px;padding:10px 14px;font-size:12px;color:var(--g-dark);">
        💡 Agrega el <strong>Certificado de posesión</strong> para subir a nivel <strong>Excelente (800+)</strong> y acceder a tasas desde 1.3%.
      </div>
    </div>

    <!-- Encuesta de validación -->
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="background:var(--g-dark);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:18px;">📋</span>
          <div>
            <div style="font-size:13px;font-weight:700;color:#fff;">Encuesta de Validación · Farmex AgroConsulting</div>
            <div style="font-size:11px;color:rgba(255,255,255,.5);">Valida nuestra propuesta · 5 minutos</div>
          </div>
        </div>
        <span style="font-size:10px;font-weight:700;background:rgba(200,150,30,.2);border:1px solid rgba(200,150,30,.4);color:var(--gold-l);padding:3px 10px;border-radius:20px;letter-spacing:1px;">PENDIENTE</span>
      </div>
      <div style="padding:14px 20px 10px;font-size:12.5px;color:var(--txt-s);line-height:1.7;border-bottom:1px solid var(--border);">
        Tu opinión nos ayuda a construir la solución correcta. Responde las preguntas sobre financiamiento, mercado y asesoría técnica.
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfxNrYuoAuzdgOubdrUX6CsM7-a7lxbxyDhVwhmL5oX2yuZQg/viewform?embedded=true"
        width="100%"
        height="640"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style="display:block;"
      >Cargando encuesta…</iframe>
    </div>

  </div>
</div>
`;

export function init() {}
