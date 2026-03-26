import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import "./pages/Pages.css";

function Layout() {
  return (
    <div className="page">
      <div className="grain" aria-hidden />
      <nav className="site-nav" aria-label="Site">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "site-nav-link is-active" : "site-nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "site-nav-link is-active" : "site-nav-link"
          }
        >
          Portfolio
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
      </Route>
    </Routes>
  );
}
