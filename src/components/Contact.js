import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Contáctame</h2>
          <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Información de Contacto</h3>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>juan.naveros@email.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📱</span>
                <div>
                  <h4>Teléfono</h4>
                  <p>+57 300 123 4567</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Sígueme en</h3>
              <div className="social-grid">
                <a href="https://github.com/jnaveros40" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/juan-naveros" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/juan_naveros" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>Twitter</span>
                </a>
                <a href="https://instagram.com/juan.naveros" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="subject">Asunto</label>
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
                <label htmlFor="message">Mensaje</label>
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
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;