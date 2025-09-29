import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Education.css';

const Education = () => {
  const { t, language } = useLanguage();

  const education = [
    {
      id: 1,
      degree: {
        es: "Ingeniería de Mantenimiento",
        en: "Maintenance Engineering"
      },
      institution: "Universidad de San Gil",
      period: "2018 - 2022",
      location: "Santander, Colombia",
      description: {
        es: "Especialización en desarrollo de software y arquitectura de sistemas",
        en: "Specialization in software development and systems architecture"
      },
      achievements: {
        es: ["Tesis sobre sistemas de adquisición, mantenimiento y control de datos en tiempo real", "Promedio: 4.6/5.0"],
        en: ["Thesis on real-time data acquisition, maintenance and control systems", "GPA: 4.6/5.0"]
      }
    },
    {
      id: 2,
      degree: {
        es: "Tecnólogo en Mantenimiento Industrial",
        en: "Industrial Maintenance Technologist"
      },
      institution: "Universidad de Ibagué",
      period: "2016 - 2018",
      location: "Ibagué, Colombia",
      description: {
        es: "Fundamentos de programación y desarrollo web",
        en: "Programming fundamentals and web development"
      },
      achievements: {
        es: ["Proyecto final destacado", "Certificación en desarrollo web"],
        en: ["Outstanding final project", "Web development certification"]
      }
    }
  ];

  const certifications = [
    {
      id: 1,
      title: {
        es: "Desarrollador de aplicaciones WEB",
        en: "WEB Application Developer"
      },
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
      title: {
        es: "Formulación y Evaluación de Proyectos",
        en: "Project Formulation and Evaluation"
      },
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
          <h2>{t('educationTitle')}</h2>
          <p>{t('educationSubtitle')}</p>
        </div>
        
        <div className="education-content">
          {/* Educación Formal */}
          <div className="education-section">
            <h3>{t('formalEducation')}</h3>
            <div className="education-list">
              {education.map(edu => (
                <div key={edu.id} className="education-card">
                  <div className="card-header">
                    <h4>{typeof edu.degree === 'object' ? edu.degree[language] : edu.degree}</h4>
                    <span className="period">{edu.period}</span>
                  </div>
                  <div className="card-body">
                    <h5>{edu.institution}</h5>
                    <p className="location">{edu.location}</p>
                    <p className="description">
                      {typeof edu.description === 'object' ? edu.description[language] : edu.description}
                    </p>
                    <ul className="achievements">
                      {(typeof edu.achievements === 'object' ? edu.achievements[language] : edu.achievements).map((achievement, idx) => (
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
            <h3>{t('certifications')}</h3>
            <div className="certifications-grid">
              {certifications.map(cert => (
                <div key={cert.id} className="certification-card">
                  <div className="cert-header">
                    <h4>{typeof cert.title === 'object' ? cert.title[language] : cert.title}</h4>
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