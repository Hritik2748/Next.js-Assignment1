"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleThemeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  return (
    <div className="main-navbar">
      <nav className="navbar">
        
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        <div className={`navbar-link ${isOpen ? "active" : ""}`}>
          <Link className="link" href="/">HOME</Link>
          <Link className="link" href="/about">ABOUT</Link>
          <Link className="link" href="/contact">CONTACT</Link>
          <Link className="link" href="/login">LOGIN</Link>

          
          <button className="theme-toggle" onClick={handleThemeToggle}>
            {darkMode ? " Light " : " Dark"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;