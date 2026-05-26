export const html = `
<div class="lp-page">

  <!-- NAVBAR PÚBLICO -->
  <nav class="lp-navbar">
    <div class="lp-nb-brand">
      <div class="lp-nb-ico">FC</div>
      <div>
        <div class="lp-nb-name">FARMEX CAPITAL</div>
        <div class="lp-nb-sub">El Portal de Productores · Perú</div>
      </div>
    </div>
    <ul class="lp-nb-links">
      <li><a href="#lp-inicio">Inicio</a></li>
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
      <div class="lp-eyebrow"><span class="lp-pulse"></span>AgriFintech · Perú 2026</div>
      <h1 class="lp-h1">Convertimos ciclos <em>agrícolas</em><br>en flujo de caja predecible</h1>
      <p class="lp-sub">La infraestructura financiera especializada para pequeños y medianos agroexportadores de palta y arándano en la costa del Perú. Porque el productor piensa por ciclos, no por trimestres.</p>
      <div class="lp-hero-chips">
        <span class="lp-chip">🥑 Palta Hass</span>
        <span class="lp-chip">🫐 Arándano</span>
        <span class="lp-chip">📍 5 regiones costeras</span>
        <span class="lp-chip">⭐ Scoring Agrícola IA</span>
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

  <!-- STATS -->
  <div class="lp-stats-bar">
    <div class="lp-stat"><div class="lp-stat-v">35,000</div><div class="lp-stat-l">Hectáreas TAM</div></div>
    <div class="lp-stat"><div class="lp-stat-v">$357M</div><div class="lp-stat-l">Mercado anual</div></div>
    <div class="lp-stat"><div class="lp-stat-v">5</div><div class="lp-stat-l">Regiones costeras</div></div>
    <div class="lp-stat"><div class="lp-stat-v">6</div><div class="lp-stat-l">Productos por ciclo</div></div>
    <div class="lp-stat"><div class="lp-stat-v">20–30%</div><div class="lp-stat-l">Pérdidas evitables</div></div>
  </div>

  <!-- SERVICIOS -->
  <section id="lp-servicios" class="lp-section lp-section-light">
    <div class="lp-section-header tc">
      <div class="lp-stag">Nuestros servicios</div>
      <h2 class="lp-sh2">Una plataforma completa<br>para el <em>agroexportador</em></h2>
      <p class="lp-sp">No es solo un crédito. Es la infraestructura financiera, técnica y comercial que el productor peruano necesitaba y nunca tuvo.</p>
    </div>
    <div class="lp-srv-grid">
      <div class="lp-srv-card">
        <div class="lp-srv-ico">💰</div>
        <div class="lp-srv-name">Financiamiento Agrícola</div>
        <div class="lp-srv-desc">Crédito diseñado para cada etapa de tu campaña: fertilización, riego, postcosecha y exportación. Hasta S/ 25,000/ha con plazos alineados a tu cosecha.</div>
        <div class="lp-srv-qui"><strong>Quiénes somos:</strong> Equipo de analistas especializados en agronegocios. <strong>Misión:</strong> Proveer crédito flexible alineado con los ciclos productivos del agricultor.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">📡</div>
        <div class="lp-srv-name">Data Agrícola & Clima</div>
        <div class="lp-srv-desc">Información satelital y climática en tiempo real para las 5 regiones clave. Alertas específicas para palta y arándano cada semana.</div>
        <div class="lp-srv-qui"><strong>Quiénes somos:</strong> Plataforma de inteligencia agro-climática integrada con SENAMHI y MIDAGRI. <strong>Misión:</strong> Dar información al productor para decidir antes de que el problema ocurra.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">⭐</div>
        <div class="lp-srv-name">Scoring Alternativo IA</div>
        <div class="lp-srv-desc">Te evaluamos por tu tierra, tus campañas y tu historial productivo, no por Infocorp. Accede a financiamiento aunque el banco te diga no.</div>
        <div class="lp-srv-qui"><strong>Quiénes somos:</strong> Motor de IA desarrollado por ingenieros de datos y especialistas agropecuarios. <strong>Misión:</strong> Evaluar al productor por lo que realmente es.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">👨‍🌾</div>
        <div class="lp-srv-name">Asistencia Técnica</div>
        <div class="lp-srv-desc">Red de agrónomos certificados de Farmex Perú especializados en palta Hass y arándano. Visitas de campo y soporte continuo.</div>
        <div class="lp-srv-qui"><strong>Quiénes somos:</strong> Agrónomos con +10 años en campo en La Libertad, Ica, Piura y Lambayeque. <strong>Misión:</strong> Reducir las pérdidas evitables del 20–30% del productor.</div>
      </div>
      <div class="lp-srv-card">
        <div class="lp-srv-ico">🤝</div>
        <div class="lp-srv-name">Marketplace & Exportación</div>
        <div class="lp-srv-desc">Conectamos tu producción directamente con exportadores, supermercados e importadores internacionales. Tu vitrina verificada con foto y certificaciones.</div>
        <div class="lp-srv-qui"><strong>Quiénes somos:</strong> Plataforma de conexión comercial entre productores verificados y compradores del mundo. <strong>Misión:</strong> Eliminar la fragmentación del pequeño productor frente a grandes compradores.</div>
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
          <div class="lp-mp-score">⭐ Score Farmex: 760/1000 · Muy Bueno</div>
          <button class="lp-mp-btn" onclick="showAuth('register')">Ver vitrina →</button>
        </div>
      </div>
      <div class="lp-mp-card">
        <div class="lp-mp-img-wrap">
          <img src="https://images.unsplash.com/photo-1425007680966-1ac71ad1b87d?w=500&q=80" alt="Arándano" class="lp-mp-img">
          <div class="lp-mp-badge">🫐 Arándano</div>
        </div>
        <div class="lp-mp-body">
          <div class="lp-mp-name">Finca Del Valle · Ica</div>
          <div class="lp-mp-info">📍 Chincha, Ica · Costa árida · 20–28°C</div>
          <div class="lp-mp-info">📐 18 ha bajo malla · Biloxi · G.A.P. + Rainforest</div>
          <div class="lp-mp-info">📦 ~45 TM disponibles · Sep–Nov 2026</div>
          <div class="lp-mp-score">⭐ Score Farmex: 810/1000 · Excelente</div>
          <button class="lp-mp-btn" onclick="showAuth('register')">Ver vitrina →</button>
        </div>
      </div>
      <div class="lp-mp-card">
        <div class="lp-mp-img-wrap">
          <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&q=80" alt="Palta Piura" class="lp-mp-img">
          <div class="lp-mp-badge">🥑 Palta</div>
        </div>
        <div class="lp-mp-body">
          <div class="lp-mp-name">Finca Morales · Piura</div>
          <div class="lp-mp-info">📍 Tambogrande, Piura · Costa norte · 24–32°C</div>
          <div class="lp-mp-info">📐 25 ha · Riego por goteo · SENASA Orgánico</div>
          <div class="lp-mp-info">📦 ~75 TM disponibles · Jul–Sep 2026</div>
          <div class="lp-mp-score">⭐ Score Farmex: 740/1000 · Bueno</div>
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
        <div class="lp-footer-name">FARMEX CAPITAL</div>
        <div class="lp-footer-sub">El Portal de Productores · Perú 2026</div>
        <div class="lp-footer-desc">La infraestructura financiera para pequeños y medianos agroexportadores de la costa del Perú.</div>
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
    <div class="lp-footer-copy">© 2026 Farmex Capital S.A.C. · Perú · Todos los derechos reservados</div>
  </footer>

</div>

<!-- MODAL DE AUTH -->
<div class="lp-modal-overlay" id="lp-modal" onclick="if(event.target===this)hideAuth()">
  <div class="lp-modal-card">
    <button class="lp-modal-close" onclick="hideAuth()">✕</button>
    <div class="lp-modal-logo">
      <div class="lp-auth-ico">FC</div>
      <div>
        <div class="lp-auth-brand">FARMEX CAPITAL</div>
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
      window.goScreen('dashboard');
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
      window.goScreen('dashboard');
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
