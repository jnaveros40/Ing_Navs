import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Ingeniería de Mantenimiento",
      institution: "Universidad de San Gil",
      period: "2018 - 2022",
      location: "Santander, Colombia",
      description: "Especialización en desarrollo de software y arquitectura de sistemas",
      achievements: ["Tesis sobre sistemas de adquisiscion, mantenimiento y control de datos en tiempo real", "Promedio: 4.2/5.0"]
    },
    {
      id: 2,
      degree: "Tecnólogo en Mantenimiento Industrial",
      institution: "Universidad de Ibagué",
      period: "2016 - 2018",
      location: "Ibagué, Colombia",
      description: "Fundamentos de programación y desarrollo web",
      achievements: ["Proyecto final destacado", "Certificación en desarrollo web"]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Desarrollador de aplicaciones WEB",
      issuer: "Universidad de Caldas",
      date: "2022",
      credentialId: "U-CALDAS-789"
      
    },
    {
      id: 2,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2022",
      credentialId: "UC-REACT-123"
    },
    {
      id: 3,
      title: "Formulacion y Evaluacion de Proyectos",
      issuer: "Sena",
      date: "2022",
      credentialId: "NODE-456789"
    },
    {
      id: 4,
      title: "Scrum Master Certified",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-789012"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education-header">
          <h2>Educación & Certificaciones</h2>
          <p>Mi formación académica y certificaciones profesionales</p>
        </div>
        
        <div className="education-content">
          {/* Educación Formal */}
          <div className="education-section">
            <h3>Educación Formal</h3>
            <div className="education-list">
              {education.map(edu => (
                <div key={edu.id} className="education-card">
                  <div className="card-header">
                    <h4>{edu.degree}</h4>
                    <span className="period">{edu.period}</span>
                  </div>
                  <div className="card-body">
                    <h5>{edu.institution}</h5>
                    <p className="location">{edu.location}</p>
                    <p className="description">{edu.description}</p>
                    <ul className="achievements">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="certifications-section">
            <h3>Certificaciones</h3>
            <div className="certifications-grid">
              {certifications.map(cert => (
                <div key={cert.id} className="certification-card">
                  <div className="cert-header">
                    <h4>{cert.title}</h4>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <div className="cert-body">
                    <p className="issuer">{cert.issuer}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;