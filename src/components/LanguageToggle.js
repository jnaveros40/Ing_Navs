import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
    >
      <span className="language-icon">
        {language === 'es' ? '🇺🇸' : '🇪🇸'}
      </span>
      <span className="language-text">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageToggle;