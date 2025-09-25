import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre mí</h2>
            <p className="lead">
              Soy un Ingeniero de Software apasionado por crear soluciones digitales 
              innovadoras y eficientes.
            </p>
            <p>
              Con más de 3 años de experiencia en el desarrollo web, me especializo 
              en tecnologías modernas como React, Node.js y Python. Me encanta 
              resolver problemas complejos y transformar ideas en productos digitales 
              que impacten positivamente en la vida de las personas.
            </p>
            <p>
              Cuando no estoy programando, me gusta mantenerme actualizado con las 
              últimas tendencias tecnológicas, contribuir a proyectos open source 
              y compartir conocimiento con la comunidad de desarrolladores.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <span>Años de experiencia</span>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <span>Proyectos completados</span>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <span>Tecnologías dominadas</span>
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