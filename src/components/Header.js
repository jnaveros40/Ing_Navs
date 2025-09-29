import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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
        
        
        
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>{t('about')}</a></li>
          <li><a href="#skills" onClick={closeMenu}>{t('skills')}</a></li>
          <li><a href="#projects" onClick={closeMenu}>{t('projects')}</a></li>
          <li><a href="#experience" onClick={closeMenu}>{t('experience')}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t('contact')}</a></li>
        </ul>
      </nav>
      
      {isMenuOpen && <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>}
      
      <section className="hero">
        <div className="hero-content">
          <h1>{t('heroTitle')}</h1>
          <h3>{t('heroSubtitle')}</h3>
          <p>
            {t('heroDescription')}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">{t('viewProjects')}</a>
            <a href="#contact" className="btn btn-secondary">{t('contactMe')}</a>
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