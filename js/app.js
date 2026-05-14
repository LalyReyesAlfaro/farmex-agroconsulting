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

// ── SUPABASE SDK ─────────────────────────────────────────────────────────────
const SB_URL = 'https://zvleepucmfpkedyxyeol.supabase.co';
const SB_KEY = 'sb_publishable_Tl_gqh-uYy-VBhwM7aIHRw_aKz-Cczj';
const _sb    = window.supabase.createClient(SB_URL, SB_KEY);

window.fbAuth = {
  async register(email, password, meta = {}) {
    const { data, error } = await _sb.auth.signUp({ email, password, options: { data: meta } });
    if (error) return { error: error.message };
    return { user: data.user, access_token: data.session?.access_token };
  },
  async login(email, password) {
    const { data, error } = await _sb.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { user: data.user, access_token: data.session?.access_token };
  },
  logout()     { _sb.auth.signOut(); window.location.reload(); },
  getUser()    { return _sb.auth.getUser ? null : null; },
  isLoggedIn() { return !!localStorage.getItem('sb-zvleepucmfpkedyxyeol-auth-token'); },
};

window.fbDb = {
  async query(table, { select = '*', filters = [] } = {}) {
    let q = _sb.from(table).select(select);
    filters.forEach(f => {
      if (f.includes('=eq.')) q = q.eq(f.split('=eq.')[0], f.split('=eq.')[1]);
    });
    const { data, error } = await q;
    if (error) throw error;
    return data;
  },
  async insert(table, row) {
    const { data, error } = await _sb.from(table).insert(row).select();
    if (error) throw error;
    return data;
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
