import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
              <a href="#about" onClick={closeMenu}>
                Who I am
              </a>
            </li>
            <li>
              <a href="#skill" onClick={closeMenu}>
                What I do
              </a>
            </li>
            <li>
              <a href="#project" onClick={closeMenu}>
                My work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
