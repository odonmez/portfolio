import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <header>
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
          <div className="navbar_logo">
            <img
              src="https://oguzdonmez.com/wp-content/uploads/2019/01/logo-blanc.png"
              alt="Logo"
              width="200"
            />
          </div>
          <ul className="navbar_links">
            <li className="navbar_item slideInDown-1">
              <Link
                to="/"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Accueil
              </Link>
            </li>
            <li className="navbar_item slideInDown-2">
              <Link
                to="/Services"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Services
              </Link>
            </li>
            <li className="navbar_item slideInDown-3">
              <Link
                to="/Apropos"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                A propos
              </Link>
            </li>
            <li className="navbar_item slideInDown-4">
              <Link
                to="/Devis"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Demander un devis
              </Link>
            </li>
            <li className="navbar_item slideInDown-5">
              <Link
                to="/Portfolio"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Portfolio
              </Link>
            </li>
          </ul>
          <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Oguz Donmez | Tous droits réservés.</p>
        <p className="mentions-legales">
          <Link to="/Mention">Mentions Légales</Link>
        </p>
      </footer>
    </>
  );
}

export default Nav;



