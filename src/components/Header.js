import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <img src="/web/icon-192.png" alt="Juan Naveros Logo" />
          <h2>Juan Naveros</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
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