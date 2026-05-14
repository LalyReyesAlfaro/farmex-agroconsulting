import * as login      from './screens/login.js';
import * as encuesta   from './screens/encuesta.js';
import * as dashboard  from './screens/dashboard.js';
import * as servicios  from './screens/servicios.js';
import * as parcelas   from './screens/parcelas.js';
import * as creditos   from './screens/creditos.js';
import * as mercado    from './screens/mercado.js';
import * as scoring    from './screens/scoring.js';
import * as clima      from './screens/clima.js';
import * as vitrina    from './screens/vitrina.js';

// ── SUPABASE (inline — evita problemas de path en GitHub Pages) ──────────────
const SB_URL  = 'https://zvleepucmfpkedyxyeol.supabase.co';
const SB_KEY  = 'sb_publishable_Tl_gqh-uYy-VBhwM7aIHRw_aKz-Cczj';

function sbHeaders(extra = {}) {
  return { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}`, 'Content-Type': 'application/json', ...extra };
}
function saveSession(d) {
  localStorage.setItem('fx_session', JSON.stringify({ access_token: d.access_token, user: d.user, expires_at: Date.now() + (d.expires_in || 3600) * 1000 }));
}
function getSession() {
  try { const s = JSON.parse(localStorage.getItem('fx_session') || 'null'); return s && s.expires_at > Date.now() ? s : null; }
  catch { return null; }
}

window.fbAuth = {
  async register(email, password, meta = {}) {
    const r = await fetch(`${SB_URL}/auth/v1/signup`, { method: 'POST', headers: sbHeaders(), body: JSON.stringify({ email, password, data: meta }) });
    const d = await r.json(); if (d.user) saveSession(d); return d;
  },
  async login(email, password) {
    const r = await fetch(`${SB_URL}/auth/v1/token?grant_type=password`, { method: 'POST', headers: sbHeaders(), body: JSON.stringify({ email, password }) });
    const d = await r.json(); if (d.access_token) saveSession(d); return d;
  },
  logout() { localStorage.removeItem('fx_session'); window.location.reload(); },
  getUser()    { const s = getSession(); return s ? s.user : null; },
  getToken()   { const s = getSession(); return s ? s.access_token : null; },
  isLoggedIn() { return !!this.getToken(); },
};

window.fbDb = {
  async query(table, { select = '*', filters = [], order, limit } = {}) {
    let url = `${SB_URL}/rest/v1/${table}?select=${select}`;
    filters.forEach(f => { url += `&${f}`; });
    if (order) url += `&order=${order}`;
    if (limit) url += `&limit=${limit}`;
    const r = await fetch(url, { headers: sbHeaders() });
    return r.status === 204 ? null : r.json();
  },
  async insert(table, data) {
    const r = await fetch(`${SB_URL}/rest/v1/${table}`, { method: 'POST', headers: sbHeaders({ 'Prefer': 'return=representation' }), body: JSON.stringify(data) });
    return r.json();
  },
};
// ── FIN SUPABASE ─────────────────────────────────────────────────────────────

const SCREENS = { login, encuesta, dashboard, servicios, parcelas, creditos, mercado, scoring, clima, vitrina };

const TITLES = {
  login:     ['Acceder al Portal',    'Ingresa o regístrate para continuar'],
  encuesta:  ['Mi Perfil',            'Raúl García Mendoza · La Libertad · 32 ha · Palta Hass'],
  dashboard: ['Mi Finca',             'Buenos días, Raúl — Campaña Palta Hass 2026 en curso'],
  servicios: ['Nuestros Servicios',   'Quiénes somos y qué ofrecemos en Farmex Capital'],
  parcelas:  ['Mis Hectáreas',        '2 áreas activas · La Libertad · 32 ha en total'],
  creditos:  ['Créditos',             'Productos disponibles y simulador de crédito agrícola'],
  mercado:   ['Mercado',              'Precios en tiempo real y compradores activos'],
  scoring:   ['Mi Score',             'Scoring Agrícola Farmex AI · 760 / 1000'],
  clima:     ['Clima & Riesgos',      'La Libertad · Actualizado hace 2 horas'],
  vitrina:   ['Mi Vitrina',           'Comparte tu perfil verificado con compradores e importadores'],
};

function mountScreens() {
  const content = document.getElementById('app-content');
  Object.keys(SCREENS).forEach(id => {
    const div = document.createElement('div');
    div.className = 'screen';
    div.id = 'screen-' + id;
    content.appendChild(div);
  });
}

const rendered = new Set();

function goScreen(id) {
  if (!SCREENS[id]) return;
  if (!rendered.has(id)) {
    document.getElementById('screen-' + id).innerHTML = SCREENS[id].html;
    rendered.add(id);
    SCREENS[id].init();
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('active'));
  const btn = document.querySelector(`.ni[data-screen="${id}"]`);
  if (btn) btn.classList.add('active');
  const [title, sub] = TITLES[id];
  document.getElementById('tb-title').textContent = title;
  document.getElementById('tb-sub').textContent   = sub;
}

window.goScreen = goScreen;

function setSidebarVisibility(visible) {
  const sb = document.querySelector('.sb');
  if (sb) sb.style.display = visible ? 'flex' : 'none';
  const topbar = document.querySelector('.topbar');
  if (topbar) topbar.style.display = visible ? 'flex' : 'none';
}

mountScreens();

if (window.fbAuth.isLoggedIn()) {
  setSidebarVisibility(true);
  goScreen('dashboard');
} else {
  setSidebarVisibility(false);
  goScreen('login');
}

document.querySelectorAll('.ni[data-screen]').forEach(btn => {
  btn.addEventListener('click', () => goScreen(btn.dataset.screen));
});
