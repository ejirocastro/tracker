import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar()
{
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const toggleMenu = () =>
  {
    setIsOpen(!isOpen);
  };

  useEffect(() =>
  {
    const updateNavbarHeight = () =>
    {
      const navbar = document.querySelector('.navbar');
      if (navbar)
      {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  useEffect(() =>
  {
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, [navbarHeight]);

  return (
    <header className="navbar">
      <div className="logo"><a style={{ color: "#007BFF; font-weight: bold;" }} href='/'>TrackIt</a></div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="/home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#pricing" onClick={toggleMenu}>Pricing</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="/login" className="button" onClick={toggleMenu}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
