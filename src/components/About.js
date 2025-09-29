import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t('aboutTitle')}</h2>
            <p className="lead">
              {t('aboutLead')}
            </p>
            <p>
              {t('aboutParagraph1')}
            </p>
            <p>
              {t('aboutParagraph2')}
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <span>{t('yearsExperience')}</span>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <span>{t('projectsCompleted')}</span>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <span>{t('technologiesMastered')}</span>
              </div>
            </div>
          </div>
          {/*
          <div className="about-image">
            <div className="image-placeholder">
              <span>Tu foto profesional aquí</span>
            </div>
          </div>
          */}
          
        </div>
      </div>
    </section>
  );
};

export default About;