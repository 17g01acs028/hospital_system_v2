import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    document.body.classList.toggle("nav-active");
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={Logo} width="70" height="40" alt="Hospital home" />
          <h2>Uzyma</h2>
        </a>

        <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src={Logo} width="90" height="40" alt="Hospital home" />
              <h2>Uzyma</h2>
            </a>

            <button
              className="nav-close-btn"
              onClick={toggleNav}
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a
                href="#"
                onClick={isNavActive ? toggleNav : ""}
                className="navbar-link title-md"
              >
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="#services"
                onClick={isNavActive ? toggleNav : ""}
                className="navbar-link title-md"
              >
                Services
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="#about"
                onClick={isNavActive ? toggleNav : ""}
                className="navbar-link title-md"
              >
                About Us
              </a>
            </li>
          </ul>

          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNav}
          data-nav-toggler
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <div className="header_btn">
          <a href="#" className="btn has-before title-md">
            Login
          </a>
          or
          <a href="#" className="btn has-before title-md">
            Signup
          </a>
        </div>

        <div
          className={`overlay ${isNavActive ? "active" : ""}`}
          onClick={toggleNav}
          data-nav-toggler
          data-overlay
        ></div>
      </div>
    </header>
  );
};

export default Header;
