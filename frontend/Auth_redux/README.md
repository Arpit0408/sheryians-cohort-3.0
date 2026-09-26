# Auth & Redux Toolkit Starter

A modern React application built with **Redux Toolkit**, **React Router v7**, **React Hook Form (RHF)**, **Tailwind CSS v4**, and **React Icons**.

---

## 🚀 Tech Stack

- **[React 19](https://react.dev/)** + **[Vite](https://vite.dev/)**
- **[Redux Toolkit](https://redux-toolkit.js.org/)** (`@reduxjs/toolkit`, `react-redux`): State management with persistent `authSlice`
- **[React Router DOM](https://reactrouter.com/)**: Client-side routing with navigation guards (`ProtectedRoute`)
- **[React Hook Form](https://react-hook-form.com/)**: Form handling, custom validation, and password confirmation
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Modern styling using `@tailwindcss/vite`
- **[React Icons](https://react-icons.github.io/react-icons/)**: Modern SVG iconography
- **[React Toastify](https://fkhadra.github.io/react-toastify/)**: Responsive notifications (login, register, logout, profile update)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx          # Top navigation with live auth status and logout
│   └── ProtectedRoute.jsx  # Route guard redirecting unauthenticated users to /login
├── pages/
│   ├── Home.jsx            # Landing page showcasing architecture and current auth state
│   ├── Login.jsx           # RHF login form with mock authentication and Redux dispatch
│   ├── Register.jsx        # RHF register form with password confirmation
│   └── Dashboard.jsx       # Protected dashboard with Redux state inspector & profile editor
├── routes/
│   └── AppRoutes.jsx       # Application routes configuration
├── store/
│   ├── slices/
│   │   └── authSlice.js    # Auth reducer, actions (login, logout, updateProfile), & selectors
│   └── store.js            # Redux store configuration
├── App.jsx
├── index.css               # Tailwind CSS v4 entry point
└── main.jsx                # App bootstrap with Redux Provider & BrowserRouter
```

---

## 🛠️ Getting Started

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Build for Production
```bash
npm run build
```

### 3. Run Linting
```bash
npm run lint
```
