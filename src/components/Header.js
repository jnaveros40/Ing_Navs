import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <img src="/web/icon-192.png" alt="Juan Naveros Logo" />
          <h2>Ing Navs</h2>
        </div>
        
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
          <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        </ul>
        
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </nav>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Hola, soy Juan Naveros</h1>
          <h3>Ingeniero de Software & Desarrollador Full Stack</h3>
          <p>
            Desarrollo soluciones web modernas y escalables utilizando las últimas tecnologías.
            Apasionado por crear experiencias de usuario excepcionales.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contact" className="btn btn-secondary">Contáctame</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img 
              src="/web/icon-512.png" 
              alt="Juan Naveros" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '16px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;