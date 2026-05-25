/* ===================================
   SCRIPT.JS — Shared login logic
=================================== */

// ─── Demo credentials ────────────────────────────
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'password123';

// ─── Detect which page we're on ──────────────────
const isLoginPage    = !!document.getElementById('loginForm');
const isDashboard    = !!document.getElementById('successBanner');

// =============================================
//   LOGIN PAGE LOGIC
// =============================================
if (isLoginPage) {

  const form        = document.getElementById('loginForm');
  const usernameEl  = document.getElementById('username');
  const passwordEl  = document.getElementById('password');
  const togglePw    = document.getElementById('togglePw');
  const eyeIcon     = document.getElementById('eyeIcon');
  const errorMsg    = document.getElementById('error-msg');
  const errorText   = document.getElementById('error-text');
  const btnText     = document.getElementById('btn-text');
  const btnSpinner  = document.getElementById('btn-spinner');
  const loginBtn    = document.getElementById('loginBtn');

  // -- Toggle password visibility --
  togglePw.addEventListener('click', () => {
    const isHidden = passwordEl.type === 'password';
    passwordEl.type = isHidden ? 'text' : 'password';
    eyeIcon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
  });

  // -- Clear field errors on input --
  usernameEl.addEventListener('input', () => clearFieldError('username'));
  passwordEl.addEventListener('input', () => clearFieldError('password'));

  // -- Form submit --
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();

    // Reset previous state
    hideError();
    clearFieldError('username');
    clearFieldError('password');

    // Validate fields
    let valid = true;
    if (!username) {
      showFieldError('username', 'Please enter your username.');
      valid = false;
    }
    if (!password) {
      showFieldError('password', 'Please enter your password.');
      valid = false;
    }
    if (!valid) return;

    // Simulate async login
    setLoading(true);
    await sleep(1200);
    setLoading(false);

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      // Store user info & redirect
      const remember = document.getElementById('remember').checked;
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('username', username);
      if (remember) {
        localStorage.setItem('rememberedUser', username);
      }
      // Flash the button green before redirect
      loginBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      btnText.textContent = '✓ Success!';
      await sleep(500);
      window.location.href = 'dashboard.html';
    } else {
      showError('Invalid username or password. Please try again.');
      usernameEl.classList.add('input-error');
      passwordEl.classList.add('input-error');
      // Shake animation
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 0);
    }
  });

  // -- Pre-fill if remembered --
  const remembered = localStorage.getItem('rememberedUser');
  if (remembered) {
    usernameEl.value = remembered;
    document.getElementById('remember').checked = true;
  }

  // ── Helpers ──────────────────────────────────
  function showFieldError(field, msg) {
    document.getElementById(field + '-error').textContent = msg;
    document.getElementById(field).classList.add('input-error');
  }

  function clearFieldError(field) {
    document.getElementById(field + '-error').textContent = '';
    document.getElementById(field).classList.remove('input-error');
    hideError();
  }

  function showError(msg) {
    errorText.textContent = msg;
    errorMsg.classList.remove('hidden');
  }

  function hideError() {
    errorMsg.classList.add('hidden');
  }

  function setLoading(on) {
    loginBtn.disabled = on;
    btnText.classList.toggle('hidden', on);
    btnSpinner.classList.toggle('hidden', !on);
  }
}

// =============================================
//   DASHBOARD PAGE LOGIC
// =============================================
if (isDashboard) {

  // Guard: redirect if not logged in
  if (sessionStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
  }

  const storedUser = sessionStorage.getItem('username') || 'Admin';
  const displayName = capitalise(storedUser);

  // Update greeting & avatar
  const welcomeHeading = document.getElementById('welcomeHeading');
  const userGreeting   = document.getElementById('userGreeting');
  const userAvatar     = document.getElementById('userAvatar');

  if (welcomeHeading) welcomeHeading.textContent = `Welcome back, ${displayName}! 🎉`;
  if (userGreeting)   userGreeting.textContent = displayName;
  if (userAvatar)     userAvatar.textContent = displayName.charAt(0).toUpperCase();

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('loggedIn');
      sessionStorage.removeItem('username');
      window.location.href = 'index.html';
    });
  }
}

// =============================================
//   UTILITIES
// =============================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function capitalise(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── Shake animation (injected via JS for portability) ──
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
  .shake { animation: shake 0.45s ease; }
`;
document.head.appendChild(shakeStyle);
