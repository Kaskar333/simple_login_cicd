# 🔐 Sparkle — Login Web App

A clean, modern, fully client-side login web application built with pure **HTML, CSS, and JavaScript**.

---

## ✅ Completed Features

| Feature | Status |
|---|---|
| Beautiful split-panel login page | ✅ |
| Form validation (empty fields, inline errors) | ✅ |
| Wrong credential error with shake animation | ✅ |
| Password show / hide toggle | ✅ |
| Remember Me (localStorage) | ✅ |
| Fake async loading spinner | ✅ |
| Auth guard on dashboard (redirects if not logged in) | ✅ |
| Personalized welcome banner on dashboard | ✅ |
| Stats cards with animated entrance | ✅ |
| Recent Activity feed | ✅ |
| Quick Action buttons | ✅ |
| Logout functionality | ✅ |
| Fully responsive (mobile-friendly) | ✅ |

---

## 📄 Pages & Entry Points

| Path | Description |
|---|---|
| `index.html` | Login page (entry point) |
| `dashboard.html` | Success / Dashboard page (post-login) |

---

## 🔑 Demo Credentials

| Field | Value |
|---|---|
| Username | `admin` |
| Password | `password123` |

---

## 🗂 Project Structure

```
├── index.html          # Login page
├── dashboard.html      # Dashboard (post-login)
├── css/
│   └── style.css       # All styles for both pages
└── js/
    └── script.js       # Login logic + dashboard guard
```

---

## ⚙️ How It Works

1. User enters credentials on `index.html`
2. JS validates the fields and checks against demo credentials
3. On success → stores `loggedIn = true` in **sessionStorage** and redirects
4. `dashboard.html` reads sessionStorage on load; if not logged in it redirects back
5. Logout clears sessionStorage and returns to the login page

---

## 🚀 Recommended Next Steps

- Connect to a real authentication API (JWT / OAuth)
- Add a registration / sign-up page
- Persist user sessions with a proper backend
- Add dark-mode support
- Extend the dashboard with real charts (Chart.js / ECharts)
