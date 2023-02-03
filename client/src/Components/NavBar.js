import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky-scroll" : "sticky"}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="brand-logo">TAHOE + NAPA IDYLLS</Link>
          <div className="navbar-links">
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a href="/" className="dropdown-toggle">
                Rentals
              </a>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/tahoe">Tahoe</a>
                  </li>
                  <li>
                    <a href="/napa">Napa</a>
                  </li>
                </ul>
              )}
            </div>
            <Link to="/reserve">Reserve</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
