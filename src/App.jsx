// App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Register from "./pages/Register";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import CatalogPets from "./pages/CatalogPets";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Exibir Header e Footer apenas nas páginas Home e Catalog
  const showHeaderAndFooter =
    location.pathname === "/" ||
    location.pathname === "/catalogo-pets" ||
    location.pathname === "/sobre-nos";

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/catalogo-pets" element={<CatalogPets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
