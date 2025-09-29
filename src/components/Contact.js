import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';              

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar el envío del formulario
    console.log('Formulario enviado:', formData);
    alert(t('messageSent'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const whatsappMessage = language === 'es' 
    ? 'Hola%20Juan,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios%20de%20desarrollo%20web'
    : 'Hello%20Juan,%20I%20am%20interested%20in%20learning%20more%20about%20your%20web%20development%20services';

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>{t('contactTitle')}</h2>
          <p>{t('contactSubtitle')}</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>{t('contactInfo')}</h3>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <h4>{t('emailLabel')}</h4>
                  <a href="mailto:jnaveros40@gmail.com" className="contact-link">jnaveros40@gmail.com</a>
                </div>
              </div>
              <div className="info-item whatsapp-item">
                <div className="icon whatsapp-icon">
                  <img src="/WhatsApp.png" alt="WhatsApp" />
                </div>
                <div>
                  <h4>{t('whatsappLabel')}</h4>
                  <a href={`https://wa.me/573025091063?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">
                    +57 302 509 1063
                  </a>
                </div>
              </div>

              
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>{t('locationLabel')}</h4>
                  <p>{t('locationText')}</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>{t('followMe')}</h3>
              <div className="social-grid">
                <a href="https://github.com/jnaveros40" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/juan-guillermo-naveros-jimenez-38b0ba185/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                </a>
                
                <a href="https://www.instagram.com/jnaveros40?igsh=MWNhMHpyZjhzanpvMg==" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('nameLabel')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('emailFieldLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">{t('subjectLabel')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t('messageLabel')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                {t('sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;