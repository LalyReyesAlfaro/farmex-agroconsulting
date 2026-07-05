export const html = `
<div class="lp-page">

  <!-- NAVBAR PÚBLICO -->
  <nav class="lp-navbar">
    <div class="lp-nb-brand">
      <div class="lp-nb-ico">FC</div>
      <div>
        <div class="lp-nb-name">FARMEX AGROCONSULTING</div>
        <div class="lp-nb-sub">El Portal de Productores · Perú</div>
      </div>
    </div>
    <ul class="lp-nb-links">
      <li><a href="#lp-inicio">Inicio</a></li>
      <li><a href="#lp-quienes">Quiénes somos</a></li>
      <li><a href="#lp-servicios">Nuestros Servicios</a></li>
      <li><a href="#lp-mercado">Mercado</a></li>
      <li><a href="#lp-contacto">Contáctanos</a></li>
      <li class="lp-nb-auth-mobile">
        <button class="lp-btn-ghost" onclick="showAuth('login')">Ingresar</button>
        <button class="lp-btn-solid" onclick="showAuth('register')">Registrarme</button>
      </li>
    </ul>
    <div class="lp-nb-btns">
      <button class="lp-btn-ghost" onclick="showAuth('login')">Ingresar</button>
      <button class="lp-btn-solid" onclick="showAuth('register')">Registrarme</button>
    </div>
    <button class="lp-nb-menu" onclick="toggleMobileMenu()">☰</button>
  </nav>

  <!-- HERO -->
  <section id="lp-inicio" class="lp-hero">
    <div class="lp-hero-bg"></div>
    <div class="lp-hero-grid"></div>
    <div class="lp-hero-inner">
      <div class="lp-eyebrow"><span class="lp-pulse"></span>Ecosistema Digital Agrícola · Perú 2026</div>
      <h1 class="lp-h1">Convertimos ciclos <em>agrícolas</em><br>en flujo de caja predecible</h1>
      <p class="lp-sub">El ecosistema que transforma la información del campo en confianza y oportunidades de crecimiento para el agricultor peruano.</p>
      <div style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:10px 16px;font-size:12px;color:rgba(255,255,255,.9);line-height:2.1;margin-bottom:18px;">
        Asistencia técnica especializada &nbsp;•&nbsp; Aval técnico ante entidades financieras &nbsp;•&nbsp; Score productivo &nbsp;•&nbsp; Marketplace &nbsp;•&nbsp; Acceso al crédito &nbsp;•&nbsp; Inteligencia de datos
      </div>
      <div class="lp-hero-btns">
        <button class="lp-cta-primary" onclick="showAuth('register')">Quiero financiamiento →</button>
        <button class="lp-cta-secondary" onclick="document.getElementById('lp-servicios').scrollIntoView({behavior:'smooth'})">Ver cómo funciona</button>
      </div>
    </div>
    <div class="lp-hero-quote">
      <p>"No necesito un banco. Necesito un socio que entienda mi cultivo."</p>
      <cite>— Raúl, Productor de Palta · La Libertad</cite>
    </div>
  </section>

  <!-- QUIÉNES SOMOS -->
  <section id="lp-quienes" class="lp-section lp-section-light">
    <div class="lp-section-header tc">
      <div class="lp-stag">Sobre Farmex AgroConsulting</div>
      <h2 class="lp-sh2">Quiénes somos</h2>
      <p class="lp-sp">Farmex Agroconsulting es un ecosistema digital (Web + App móvil) que acompaña al pequeño y mediano productor durante todo el ciclo productivo de su cultivo, integrando asesoría técnica, gestión de información, score productivo, conexión comercial y actúa como aval técnico ante entidades financieras, transformando la información del campo en confianza y nuevas oportunidades de crecimiento.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:8px;">
      <div style="background:#fff;border-radius:12px;padding:20px 22px;border:1px solid #e5e9ef;box-shadow:0 2px 8px rgba(0,0,0,.05);">
        <div style="font-size:26px;margin-bottom:8px;">🎯</div>
        <div style="font-size:14px;font-weight:700;color:#1a2e1a;margin-bottom:6px;">Nuestra misión</div>
        <p style="font-size:13px;color:#555;line-height:1.7;margin:0;">Ser el ecosistema digital que transforma la información del campo en confianza y oportunidades de crecimiento para el agricultor peruano. Integramos conocimiento técnico, información digital, score productivo, conexión comercial y certificación de datos para ayudar al productor a producir mejor, vender mejor y crecer de forma sostenible.</p>
      </div>
      <div style="background:#fff;border-radius:12px;padding:20px 22px;border:1px solid #e5e9ef;box-shadow:0 2px 8px rgba(0,0,0,.05);">
        <div style="font-size:26px;margin-bottom:8px;">👥</div>
        <div style="font-size:14px;font-weight:700;color:#1a2e1a;margin-bottom:6px;">Nuestro equipo</div>
        <p style="font-size:13px;color:#555;line-height:1.7;margin:0;">Ingenieros agrónomos especializados en palta Hass y arándano con profundo conocimiento del mercado local y más de 10 años en campo. Community Manager para soporte digital y comunicación continua. Gerente General con visión estratégica y relaciones institucionales en el sector agroexportador peruano.</p>
      </div>
      <div style="background:#fff;border-radius:12px;padding:20px 22px;border:1px solid #e5e9ef;box-shadow:0 2px 8px rgba(0,0,0,.05);">
        <div style="font-size:26px;margin-bottom:8px;">🌿</div>
        <div style="font-size:14px;font-weight:700;color:#1a2e1a;margin-bottom:6px;">El problema que resolvemos</div>
        <p style="font-size:13px;color:#555;line-height:1.7;margin:0;">Solo el 3.8% de los productores agropecuarios del Perú recibe asistencia técnica. El pequeño y mediano productor gestiona su cultivo con información dispersa y carece de acompañamiento integral para mejorar su productividad, acceder a nuevos mercados y construir un historial confiable. Farmex AgroConsulting resuelve esto siendo su ecosistema de acompañamiento completo.</p>
      </div>
    </div>
    <!-- Ecosistema Grupo IF -->
    <div style="margin-top:20px;padding:16px 20px;background:#fff;border-radius:12px;border:1px solid #e5e9ef;">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#888;margin-bottom:12px;text-align:center;">Ecosistema Grupo IF — Empresas aliadas</div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;">
        <a href="https://www.farmexperu.pe" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;gap:8px;background:#E8F8EE;border:1px solid #c8e6c9;border-radius:8px;padding:8px 14px;"><span style="font-size:18px;">🌱</span><div><div style="font-size:12px;font-weight:700;color:#1a5c2e;">Farmex Perú</div><div style="font-size:10px;color:#666;">Insumos agrícolas</div></div></a>
        <a href="https://www.quimtia.com.pe" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;gap:8px;background:#E8F4FD;border:1px solid #aed6f1;border-radius:8px;padding:8px 14px;"><span style="font-size:18px;">💧</span><div><div style="font-size:12px;font-weight:700;color:#1a4c7e;">Quimtia Perú</div><div style="font-size:10px;color:#666;">Riego tecnificado</div></div></a>
        <a href="https://greendipity.co" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;gap:8px;background:#FEFCE8;border:1px solid #f9e79f;border-radius:8px;padding:8px 14px;"><span style="font-size:18px;">☀️</span><div><div style="font-size:12px;font-weight:700;color:#7d5a0f;">Greendipity</div><div style="font-size:10px;color:#666;">Energía solar agrícola</div></div></a>
        <a href="https://www.banbif.com.pe" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;gap:8px;background:#F0F0FF;border:1px solid #c0c0f0;border-radius:8px;padding:8px 14px;"><span style="font-size:18px;">🏦</span><div><div style="font-size:12px;font-weight:700;color:#2c2c8e;">BanBif</div><div style="font-size:10px;color:#666;">Finanzas y crédito</div></div></a>
      </div>
    </div>
    <div style="text-align:center;margin-top:20px;padding:14px 20px;background:#E8F8EE;border-radius:10px;font-size:13px;color:#1a5c2e;">
      Alineados con: <a href="https://www.gob.pe/midagri" target="_blank" rel="noopener" style="color:#1e8449;font-weight:600;text-decoration:none;">MIDAGRI</a> &nbsp;·&nbsp; <a href="https://www.prohass.com.pe" target="_blank" rel="noopener" style="color:#1e8449;font-weight:600;text-decoration:none;">PROHASS</a> &nbsp;·&nbsp; <a href="https://www.peruberries.pe" target="_blank" rel="noopener" style="color:#1e8449;font-weight:600;text-decoration:none;">Perú Berries</a> &nbsp;·&nbsp; <a href="https://www.promperu.gob.pe" target="_blank" rel="noopener" style="color:#1e8449;font-weight:600;text-decoration:none;">PromPerú</a>
    </div>
  </section>

  <!-- STATS -->
  <div class="lp-stats-bar">
    <div class="lp-stat"><div class="lp-stat-v">35,000</div><div class="lp-stat-l">Hectáreas TAM</div></div>
    <div class="lp-stat"><div class="lp-stat-v">$357M</div><div class="lp-stat-l">Mercado anual</div></div>
    <div class="lp-stat"><div class="lp-stat-v">5</div><div class="lp-stat-l">Regiones costeras</div></div>
    <div class="lp-stat"><div class="lp-stat-v">8</div><div class="lp-stat-l">Productos por ciclo</div></div>
    <div class="lp-stat"><div class="lp-stat-v">20–30%</div><div class="lp-stat-l">Pérdidas evitables</div></div>
  </div>

  <!-- SERVICIOS -->
  <section id="lp-servicios" class="lp-section lp-section-light">
    <div class="lp-section-header tc">
      <div class="lp-stag">Nuestros servicios</div>
      <h2 class="lp-sh2">Una plataforma completa<br>para el <em>agricultor peruano</em></h2>
      <p class="lp-sp">No es solo asesoría técnica. Es el ecosistema digital que acompaña al productor en cada etapa de su ciclo: datos del campo, score productivo, comercialización y acceso al financiamiento.</p>
    </div>
    <div class="lp-srv-grid">
      <div class="lp-srv-card">
        <div class="lp-srv-ico">💰</div>
        <div class="lp-srv-name">Financiamiento Agrícola</div>
        <div class="lp-srv-desc">8 productos de crédito diseñados para cada etapa de tu campaña: fertilización, riego, postcosecha, fitosanitario y exportación. Hasta S/ 25,000/ha con plazos alineados a tu cosecha.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">📡</div>
        <div class="lp-srv-name">Data Agrícola & Clima</div>
        <div class="lp-srv-desc">Información satelital y climática en tiempo real integrada con SENAMHI y MIDAGRI para las 5 regiones clave. Alertas específicas para palta y arándano cada semana.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">⭐</div>
        <div class="lp-srv-name">Score Productivo</div>
        <div class="lp-srv-desc">Evaluamos tu capacidad productiva real: historial de campaña, rendimiento por hectárea, calidad de fruta y manejo agronómico. Un score que habla el idioma del agricultor.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">👨‍🌾</div>
        <div class="lp-srv-name">Asistencia Técnica</div>
        <div class="lp-srv-desc">Red de agrónomos certificados especializados en palta Hass y arándano con +10 años en campo en La Libertad, Ica, Piura y Lambayeque. Visitas y soporte continuo.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">🤝</div>
        <div class="lp-srv-name">Marketplace & Exportación</div>
        <div class="lp-srv-desc">Conectamos tu producción directamente con exportadores, supermercados e importadores internacionales. Tu vitrina verificada con foto, certificaciones e historial.</div>
      </div>
      <div class="lp-srv-card" style="background:var(--g-dark);border-color:var(--g-dark);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:12px;">
        <div style="font-size:36px;">🌱</div>
        <div style="font-size:16px;font-weight:800;color:#fff;">¿Listo para crecer?</div>
        <div style="font-size:13px;color:rgba(255,255,255,.65);line-height:1.6;">Seleccionamos productores de palta y arándano con 10+ hectáreas en la costa del Perú. Registro gratuito.</div>
        <button onclick="showAuth('register')" style="margin-top:4px;background:var(--gold);color:#fff;border:none;padding:10px 22px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;width:100%;">Registrarme gratis →</button>
      </div>
    </div>
  </section>

  <!-- MERCADO -->
  <section id="lp-mercado" class="lp-section lp-section-dark">
    <div class="lp-section-header">
      <div class="lp-stag lp-stag-lt">Marketplace Agrícola</div>
      <h2 class="lp-sh2 lp-sh2-lt">Conectamos tu cosecha con el <em>mundo</em></h2>
      <p class="lp-sp lp-sp-lt">Productores verificados con perfil completo: foto del cultivo, ubicación, clima, certificaciones e historial. Compradores de todo el mundo los encuentran y contactan directamente.</p>
    </div>
    <div class="lp-mp-grid">
      <div class="lp-mp-card">
        <div class="lp-mp-img-wrap">
          <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80" alt="Palta Hass" class="lp-mp-img">
          <div class="lp-mp-badge">🥑 Palta Hass</div>
        </div>
        <div class="lp-mp-body">
          <div class="lp-mp-name">Finca García · La Libertad</div>
          <div class="lp-mp-info">📍 Virú, La Libertad · Valle costero · 18–24°C</div>
          <div class="lp-mp-info">📐 32 ha · Riego tecnificado · Global G.A.P.</div>
          <div class="lp-mp-info">📦 ~112 TM disponibles · Ago–Oct 2026</div>
          <div class="lp-mp-score">⭐ Score Productivo: 760/1000 · Muy Bueno</div>
          <button class="lp-mp-btn" onclick="showAuth('register')">Ver vitrina →</button>
        </div>
      </div>
      <div class="lp-mp-card">
        <div class="lp-mp-img-wrap">
          <img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&q=80" alt="Arándano" class="lp-mp-img">
          <div class="lp-mp-badge">🫐 Arándano</div>
        </div>
        <div class="lp-mp-body">
          <div class="lp-mp-name">Finca Del Valle · Ica</div>
          <div class="lp-mp-info">📍 Chincha, Ica · Costa árida · 20–28°C</div>
          <div class="lp-mp-info">📐 18 ha bajo malla · Biloxi · G.A.P. + Rainforest</div>
          <div class="lp-mp-info">📦 ~45 TM disponibles · Sep–Nov 2026</div>
          <div class="lp-mp-score">⭐ Score Productivo: 810/1000 · Excelente</div>
          <button class="lp-mp-btn" onclick="showAuth('register')">Ver vitrina →</button>
        </div>
      </div>
      <div class="lp-mp-card">
        <div class="lp-mp-img-wrap">
          <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&q=80" alt="Palta Piura" class="lp-mp-img">
          <div class="lp-mp-badge">🥑 Palta</div>
        </div>
        <div class="lp-mp-body">
          <div class="lp-mp-name">Finca Morales · Piura</div>
          <div class="lp-mp-info">📍 Tambogrande, Piura · Costa norte · 24–32°C</div>
          <div class="lp-mp-info">📐 25 ha · Riego por goteo · Global G.A.P.</div>
          <div class="lp-mp-info">📦 ~75 TM disponibles · Jul–Sep 2026</div>
          <div class="lp-mp-score">⭐ Score Productivo: 740/1000 · Bueno</div>
          <button class="lp-mp-btn" onclick="showAuth('register')">Ver vitrina →</button>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACTO -->
  <section id="lp-contacto" class="lp-section lp-section-light">
    <div class="lp-contacto-layout">
      <div>
        <div class="lp-stag">Contáctanos</div>
        <h2 class="lp-sh2">¿Listo para hacer crecer<br><em>tu finca?</em></h2>
        <p class="lp-sp">Únete al piloto 2026. Seleccionamos productores de palta y arándano en la costa del Perú con 10+ hectáreas.</p>
        <div class="lp-contacto-info">
          <div class="lp-ci">📧 contacto@farmexcapital.pe</div>
          <div class="lp-ci">📱 WhatsApp: +51 944 000 000</div>
          <div class="lp-ci">📍 La Libertad · Ica · Piura · Lambayeque · Ancash</div>
        </div>
      </div>
      <div class="lp-contacto-form">
        <div class="fg"><label class="fl">Nombre completo</label><input class="fi" type="text" id="c-nombre" placeholder="Tu nombre"></div>
        <div class="fg"><label class="fl">WhatsApp</label><input class="fi" type="text" id="c-wsp" placeholder="+51 999 999 999"></div>
        <div class="fg"><label class="fl">Región y cultivo</label><input class="fi" type="text" id="c-msg" placeholder="Ej: La Libertad · 20 ha de palta"></div>
        <button class="lp-auth-btn" onclick="enviarContacto()">Quiero participar en el piloto →</button>
        <div id="c-ok" style="display:none;background:#E8F8EE;border-left:3px solid var(--ok);padding:10px 14px;border-radius:0 6px 6px 0;font-size:13px;font-weight:600;color:var(--g-dark);">✅ Recibimos tu solicitud. Te contactamos pronto.</div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="lp-footer">
    <div class="lp-footer-inner">
      <div>
        <div class="lp-footer-name">FARMEX AGROCONSULTING</div>
        <div class="lp-footer-sub">El Portal de Productores · Perú 2026</div>
        <div class="lp-footer-desc">El ecosistema digital que acompaña al pequeño y mediano productor durante todo su ciclo productivo en la costa del Perú.</div>
      </div>
      <div class="lp-footer-links">
        <div class="lp-fl-title">Servicios</div>
        <a href="#lp-servicios">Financiamiento</a>
        <a href="#lp-servicios">Data Agrícola</a>
        <a href="#lp-servicios">Scoring IA</a>
        <a href="#lp-servicios">Asistencia Técnica</a>
        <a href="#lp-mercado">Marketplace</a>
      </div>
      <div class="lp-footer-links">
        <div class="lp-fl-title">Regiones</div>
        <a href="#lp-contacto">La Libertad</a>
        <a href="#lp-contacto">Ica</a>
        <a href="#lp-contacto">Piura</a>
        <a href="#lp-contacto">Lambayeque</a>
        <a href="#lp-contacto">Ancash</a>
      </div>
    </div>
    <div class="lp-footer-copy">© 2026 Farmex AgroConsulting S.A.C. · Perú · Todos los derechos reservados</div>
  </footer>

</div>

<!-- MODAL DE AUTH -->
<div class="lp-modal-overlay" id="lp-modal" onclick="if(event.target===this)hideAuth()">
  <div class="lp-modal-card">
    <button class="lp-modal-close" onclick="hideAuth()">✕</button>
    <div class="lp-modal-logo">
      <div class="lp-auth-ico">FC</div>
      <div>
        <div class="lp-auth-brand">FARMEX AGROCONSULTING</div>
        <div class="lp-auth-sub-txt">Portal del Productor</div>
      </div>
    </div>
    <div class="lp-tabs">
      <button class="ltab active" id="tab-login"    onclick="switchTab('login')">Ingresar</button>
      <button class="ltab"        id="tab-register" onclick="switchTab('register')">Registrarme</button>
    </div>
    <div id="pane-login">
      <div class="lp-form">
        <div class="fg"><label class="fl">Correo electrónico</label><input class="fi" type="email" id="l-email" placeholder="correo@ejemplo.com"></div>
        <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="l-pass" placeholder="••••••••"></div>
        <div class="login-error" id="l-error" style="display:none;"></div>
        <button class="lp-auth-btn" id="l-btn" onclick="doLogin()">Ingresar al portal →</button>
        <div class="lp-auth-note">¿No tienes cuenta? Haz click en <strong>Registrarme</strong></div>
      </div>
    </div>
    <div id="pane-register" style="display:none;">
      <div class="lp-form">
        <div class="fg"><label class="fl">Nombre completo</label><input class="fi" type="text" id="r-nombre" placeholder="Ej: Raúl García Mendoza"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div class="fg"><label class="fl">Región</label>
            <select class="fi" id="r-region"><option value="">Seleccionar...</option><option>La Libertad</option><option>Ica</option><option>Piura</option><option>Lambayeque</option><option>Ancash</option></select>
          </div>
          <div class="fg"><label class="fl">Hectáreas</label><input class="fi" type="number" id="r-ha" placeholder="ha" min="1"></div>
        </div>
        <div class="fg"><label class="fl">Cultivo principal</label>
          <select class="fi" id="r-cultivo"><option value="">Seleccionar...</option><option>Palta Hass</option><option>Arándano</option><option>Ambos</option></select>
        </div>
        <div class="fg"><label class="fl">WhatsApp</label><input class="fi" type="text" id="r-wsp" placeholder="+51 999 999 999"></div>
        <div class="fg"><label class="fl">Correo electrónico</label><input class="fi" type="email" id="r-email" placeholder="correo@ejemplo.com"></div>
        <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="r-pass" placeholder="Mínimo 6 caracteres"></div>
        <div class="login-error" id="r-error" style="display:none;"></div>
        <label class="lp-privacy-check">
          <input type="checkbox" id="r-privacy">
          <span>He leído y acepto la <a href="docs/politica-privacidad.pdf" target="_blank" rel="noopener">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales.</span>
        </label>
        <button class="lp-auth-btn" id="r-btn" onclick="doRegister()" disabled>Crear mi cuenta →</button>
      </div>
    </div>
  </div>
</div>
`;

export function init() {
  window.showAuth = (tab = 'login') => {
    document.getElementById('lp-modal').classList.add('active');
    window.switchTab(tab);
    document.body.style.overflow = 'hidden';
  };

  window.hideAuth = () => {
    document.getElementById('lp-modal').classList.remove('active');
    document.body.style.overflow = '';
  };

  window.switchTab = (tab) => {
    document.getElementById('pane-login').style.display    = tab === 'login'    ? 'block' : 'none';
    document.getElementById('pane-register').style.display = tab === 'register' ? 'block' : 'none';
    document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  };

  window.toggleMobileMenu = () => {
    document.querySelector('.lp-nb-links')?.classList.toggle('open');
  };

  const checkRegisterReady = () => {
    const nombre  = document.getElementById('r-nombre')?.value.trim();
    const region  = document.getElementById('r-region')?.value;
    const ha      = document.getElementById('r-ha')?.value;
    const cultivo = document.getElementById('r-cultivo')?.value;
    const email   = document.getElementById('r-email')?.value.trim();
    const pass    = document.getElementById('r-pass')?.value;
    const privacy = document.getElementById('r-privacy')?.checked;
    const btn     = document.getElementById('r-btn');
    if (btn) btn.disabled = !(nombre && region && ha && cultivo && email && pass && privacy);
  };

  ['r-nombre','r-region','r-ha','r-cultivo','r-email','r-pass','r-privacy'].forEach(id => {
    document.getElementById(id)?.addEventListener('input',  checkRegisterReady);
    document.getElementById(id)?.addEventListener('change', checkRegisterReady);
  });

  window.enviarContacto = () => {
    const n = document.getElementById('c-nombre').value.trim();
    const w = document.getElementById('c-wsp').value.trim();
    if (!n || !w) { alert('Completa tu nombre y WhatsApp.'); return; }
    document.getElementById('c-ok').style.display = 'block';
    document.getElementById('c-nombre').value = '';
    document.getElementById('c-wsp').value = '';
    document.getElementById('c-msg').value = '';
  };

  window.doLogin = async () => {
    const email = document.getElementById('l-email').value.trim();
    const pass  = document.getElementById('l-pass').value;
    const btn   = document.getElementById('l-btn');
    const err   = document.getElementById('l-error');
    if (!email || !pass) { showErr(err, 'Completa todos los campos.'); return; }
    btn.textContent = 'Ingresando...'; btn.disabled = true;
    const data = await window.fbAuth.login(email, pass);
    if (data.access_token) {
      window.hideAuth();
      window.goScreen('encuesta');
    } else {
      showErr(err, data.error || 'Email o contraseña incorrectos.');
      btn.textContent = 'Ingresar al portal →'; btn.disabled = false;
    }
  };

  window.doRegister = async () => {
    const nombre  = document.getElementById('r-nombre').value.trim();
    const region  = document.getElementById('r-region').value;
    const ha      = parseFloat(document.getElementById('r-ha').value);
    const cultivo = document.getElementById('r-cultivo').value;
    const wsp     = document.getElementById('r-wsp').value.trim();
    const email   = document.getElementById('r-email').value.trim();
    const pass    = document.getElementById('r-pass').value;
    const btn     = document.getElementById('r-btn');
    const err     = document.getElementById('r-error');
    const privacy = document.getElementById('r-privacy').checked;
    if (!nombre || !region || !ha || !cultivo || !email || !pass) { showErr(err, 'Completa todos los campos.'); return; }
    if (pass.length < 6) { showErr(err, 'Contraseña mínimo 6 caracteres.'); return; }
    if (!privacy) { showErr(err, 'Debes aceptar la Política de Privacidad para continuar.'); return; }
    btn.textContent = 'Creando cuenta...'; btn.disabled = true;
    const data = await window.fbAuth.register(email, pass, { nombre, region });
    if (data.access_token || data.user) {
      window.hideAuth();
      window.goScreen('encuesta');
    } else {
      showErr(err, data.error || 'Error al crear la cuenta.');
      btn.textContent = 'Crear mi cuenta →'; btn.disabled = false;
    }
  };
}

function showErr(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}
