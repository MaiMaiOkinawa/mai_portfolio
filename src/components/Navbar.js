import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <Link className="logo" to="/">
            Maï <br />
            Uchida
          </Link>
          <div className="menu" onClick={toggleMenu}>
            {menuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Top
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={closeMenu}>
                Who I am
              </Link>
            </li>
            <li>
              <Link to="/#skill" onClick={closeMenu}>
                What I do
              </Link>
            </li>
            <li>
              <Link to="/#project" onClick={closeMenu}>
                My work
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={closeMenu}>
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
