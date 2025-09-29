import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isPulsing, setIsPulsing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Efecto de pulso para llamar la atención al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 4000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    toggleLanguage();
    // Pequeña vibración en dispositivos móviles
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const getFlagEmoji = () => {
    return language === 'es' ? '🇺🇸' : '🇪🇸';
  };

  const getLanguageText = () => {
    return language === 'es' ? 'EN' : 'ES';
  };

  const getAriaLabel = () => {
    return language === 'es' 
      ? 'Switch to English' 
      : 'Cambiar a Español';
  };

  const getTooltipText = () => {
    return language === 'es' 
      ? 'Click to switch to English' 
      : 'Haz clic para cambiar a Español';
  };

  return (
    <div className="language-toggle-container">
      <button 
        className={`language-toggle ${isPulsing ? 'pulse' : ''}`}
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={getAriaLabel()}
        title={getTooltipText()}
        type="button"
      >
        <span className="language-icon">
          {getFlagEmoji()}
        </span>
        <span className="language-text">
          {getLanguageText()}
        </span>
        
        {/* Indicador visual adicional */}
        <span className="language-indicator" aria-hidden="true">
          {isHovered && (
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ marginLeft: '4px' }}
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;