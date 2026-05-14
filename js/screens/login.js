// auth y db se inyectan como window.fbAuth / window.fbDb desde app.js
export const html = `
<div class="login-wrap">
  <div class="login-card">

    <!-- Logo -->
    <div class="login-logo">
      <div class="login-logo-ico">FC</div>
      <div>
        <div class="login-brand">FARMEX CAPITAL</div>
        <div class="login-brand-sub">El Portal de Productores · Perú</div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="login-tabs">
      <button class="ltab active" id="tab-login"    onclick="switchTab('login')">Ingresar</button>
      <button class="ltab"        id="tab-register" onclick="switchTab('register')">Registrarme</button>
    </div>

    <!-- LOGIN -->
    <div id="pane-login">
      <div class="login-form">
        <div class="fg"><label class="fl">Correo electrónico</label><input class="fi" type="email" id="l-email" placeholder="correo@ejemplo.com"></div>
        <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="l-pass" placeholder="••••••••"></div>
        <div class="login-error" id="l-error" style="display:none;"></div>
        <button class="login-btn" id="l-btn" onclick="doLogin()">Ingresar al portal →</button>
        <div class="login-note">¿No tienes cuenta? Haz click en <strong>Registrarme</strong></div>
      </div>
    </div>

    <!-- REGISTRO -->
    <div id="pane-register" style="display:none;">
      <div class="login-form">
        <div class="fg"><label class="fl">Nombre completo</label><input class="fi" type="text" id="r-nombre" placeholder="Ej: Raúl García Mendoza"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div class="fg"><label class="fl">Región</label>
            <select class="fi" id="r-region">
              <option value="">Seleccionar...</option>
              <option>La Libertad</option><option>Ica</option>
              <option>Piura</option><option>Lambayeque</option><option>Ancash</option>
            </select>
          </div>
          <div class="fg"><label class="fl">Hectáreas</label><input class="fi" type="number" id="r-ha" placeholder="Ej: 25" min="1"></div>
        </div>
        <div class="fg"><label class="fl">Cultivo principal</label>
          <select class="fi" id="r-cultivo">
            <option value="">Seleccionar...</option>
            <option>Palta Hass</option><option>Arándano</option><option>Ambos</option>
          </select>
        </div>
        <div class="fg"><label class="fl">WhatsApp</label><input class="fi" type="text" id="r-wsp" placeholder="+51 999 999 999"></div>
        <div class="fg"><label class="fl">Correo electrónico</label><input class="fi" type="email" id="r-email" placeholder="correo@ejemplo.com"></div>
        <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="r-pass" placeholder="Mínimo 6 caracteres"></div>
        <div class="login-error" id="r-error" style="display:none;"></div>
        <button class="login-btn" id="r-btn" onclick="doRegister()">Crear mi cuenta →</button>
      </div>
    </div>

  </div>

  <!-- Imagen lateral -->
  <div class="login-hero">
    <div class="lh-overlay"></div>
    <div class="lh-content">
      <div class="lh-tag">AgriFintech · Perú 2026</div>
      <h1 class="lh-h1">Convertimos ciclos <em>agrícolas</em> en flujo de caja predecible</h1>
      <div class="lh-stats">
        <div class="lhs"><div class="lhs-v">35,000</div><div class="lhs-l">Hectáreas TAM</div></div>
        <div class="lhs"><div class="lhs-v">$357M</div><div class="lhs-l">Mercado anual</div></div>
        <div class="lhs"><div class="lhs-v">5</div><div class="lhs-l">Regiones</div></div>
      </div>
      <div class="lh-quote">"No necesito un banco. Necesito un socio que entienda mi cultivo."<cite>— Raúl, Productor · La Libertad</cite></div>
    </div>
  </div>
</div>
`;

export function init() {
  window.switchTab = (tab) => {
    document.getElementById('pane-login').style.display    = tab === 'login'    ? 'block' : 'none';
    document.getElementById('pane-register').style.display = tab === 'register' ? 'block' : 'none';
    document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
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
      // Load producer profile
      const rows = await window.fbDb.query('productores', { filters: [`user_id=eq.${data.user.id}`] }).catch(() => []);
      if (rows?.length) window._productor = rows[0];
      window.goScreen('dashboard');
    } else {
      showErr(err, data.error_description || 'Credenciales incorrectas.');
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

    if (!nombre || !region || !ha || !cultivo || !email || !pass) {
      showErr(err, 'Completa todos los campos.'); return;
    }
    if (pass.length < 6) { showErr(err, 'La contraseña debe tener al menos 6 caracteres.'); return; }

    btn.textContent = 'Creando cuenta...'; btn.disabled = true;

    const data = await window.fbAuth.register(email, pass, { nombre, region });
    if (data.user) {
      const productor = { user_id: data.user.id, nombre, region, total_ha: ha, cultivo, whatsapp: wsp, email };
      await window.fbDb.insert('productores', productor).catch(() => {});
      window._productor = productor;
      window.goScreen('dashboard');
    } else {
      showErr(err, data.error_description || data.msg || 'Error al crear la cuenta.');
      btn.textContent = 'Crear mi cuenta →'; btn.disabled = false;
    }
  };
}

function showErr(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}
