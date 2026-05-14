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
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2bGVlcHVjbWZwa2VkeXh5ZW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NTk1OTgsImV4cCI6MjA5NDMzNTU5OH0.1rfSk1_qGlj6Bn9Ty86eFvDzt8O90nYM40r1lhEwiAg';
// Limpiar sesión vieja de Supabase que causa 422 al iniciar
Object.keys(localStorage).filter(k => k.startsWith('sb-')).forEach(k => localStorage.removeItem(k));

const _sb = window.supabase.createClient(SB_URL, SB_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});

// Usuarios demo (mientras se configura el proveedor de email real)
const DEMO_USERS = {
  'raul@farmex.pe':  { password: 'Farmex2026!', nombre: 'Raúl García Mendoza',   region: 'La Libertad', ha: 32, cultivo: 'Palta Hass' },
  'julia@farmex.pe': { password: 'Farmex2026!', nombre: 'Julia Ramos Valdez',    region: 'Ica',         ha: 18, cultivo: 'Arándano'   },
};

window.fbAuth = {
  async login(email, password) {
    // Demo users — sin llamar a Supabase
    const u = DEMO_USERS[email];
    if (u && u.password === password) {
      localStorage.setItem('fx_demo', JSON.stringify({ email, ...u }));
      return { user: { email, id: 'demo' }, access_token: 'demo_token' };
    }
    // Usuarios reales vía Supabase
    try {
      const { data, error } = await _sb.auth.signInWithPassword({ email, password });
      if (!error && data.session) {
        localStorage.setItem('fx_demo', JSON.stringify({ email, nombre: email }));
        return { user: data.user, access_token: data.session.access_token };
      }
      return { error: error?.message || 'Credenciales incorrectas.' };
    } catch(e) {
      return { error: 'No se pudo conectar. Verifica tu conexión.' };
    }
  },
  async register(email, password, meta = {}) {
    try {
      const { data, error } = await _sb.auth.signUp({ email, password, options: { data: meta } });
      if (!error) return { user: data.user, access_token: data.session?.access_token };
    } catch(e) {}
    // Demo fallback
    DEMO_USERS[email] = { password, nombre: meta.nombre || email, region: meta.region || '', ha: 0, cultivo: '' };
    localStorage.setItem('fx_demo', JSON.stringify({ email, ...DEMO_USERS[email] }));
    return { user: { email, id: 'demo' }, access_token: 'demo_token' };
  },
  logout()     { localStorage.removeItem('fx_demo'); window.location.reload(); },
  isLoggedIn() { return !!localStorage.getItem('fx_demo') || !!localStorage.getItem('sb-zvleepucmfpkedyxyeol-auth-token'); },
  getUser()    { try { return JSON.parse(localStorage.getItem('fx_demo')); } catch { return null; } },
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
  if (id !== 'login') setSidebarVisibility(true);
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
