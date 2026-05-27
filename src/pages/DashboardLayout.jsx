import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./pages.css";

const navItems = [
  { path: "/dashboard",  icon: "🏠", label: "Dashboard" },
  { path: "/analisis",   icon: "📊", label: "Analisis" },
  { path: "/pengaturan", icon: "⚙️", label: "Pengaturan" },
];

const breadcrumbMap = {
  "/dashboard":  "Dashboard",
  "/analisis":   "Analisis Tidur",
  "/pengaturan": "Pengaturan",
};

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dl-root">

      {/* ══════════ SIDEBAR ══════════ */}
      <aside className={`dl-sidebar ${sidebarOpen ? "open" : ""}`}>

        {/* Logo */}
        <div className="dl-logo">
          <span className="dl-logo-icon">🌙</span>
          <span className="dl-logo-text">SleepSync</span>
        </div>

        {/* Nav Items */}
        <nav className="dl-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `dl-nav-item ${isActive ? "active" : ""}`
              }
              onClick={closeSidebar}
            >
              <span className="dl-nav-icon">{item.icon}</span>
              <span className="dl-nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="dl-divider" />

        {/* Kembali ke Beranda */}
        <button
          className="dl-nav-item danger"
          onClick={() => { navigate("/"); closeSidebar(); }}
        >
          <span className="dl-nav-icon">🚪</span>
          <span className="dl-nav-label">Kembali ke Beranda</span>
        </button>

      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="dl-overlay" onClick={closeSidebar} />
      )}

      {/* ══════════ MAIN AREA ══════════ */}
      <div className="dl-main">

        {/* Top Bar */}
        <header className="dl-topbar">
          <button
            className="dl-hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Buka menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="dl-topbar-logo">
            <span>🌙</span>
            <span>SleepSync</span>
          </div>

          <div className="dl-breadcrumb">
            <span>SleepSync</span>
            <span className="dl-breadcrumb-sep">›</span>
            <span className="dl-breadcrumb-current">
              {breadcrumbMap[location.pathname] ?? "Halaman"}
            </span>
          </div>

          <div className="dl-topbar-right">
            <div className="dl-topbar-score">
             
              <span>halo budi</span>
            </div>
            <div className="dl-topbar-avatar">BS</div>
          </div>
        </header>

        {/* Page Content */}
        <main className="dl-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
