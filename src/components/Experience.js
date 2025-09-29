import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      id: 1,
      position: {
        es: "Desarrollador Full Stack Senior, Experto en tecnologías modernas",
        en: "Senior Full Stack Developer, Expert in modern technologies"
      },
      company: "Servicio Nacional de aprendizaje (SENA)",
      period: "2025 - Presente",
      location: {
        es: "Tolima, Colombia",
        en: "Tolima, Colombia"
      },
      description: {
        es: [
          "Lideré el desarrollo de aplicaciones web usando React y Node.js",
          "Implementé arquitecturas escalables y optimicé el rendimiento en un 40%",
          "Mentoricé a desarrolladores junior y establecí mejores prácticas de código"
        ],
        en: [
          "Led the development of web applications using React and Node.js",
          "Implemented scalable architectures and optimized performance by 40%",
          "Mentored junior developers and established code best practices"
        ]
      },
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Firebase", "Supabase"]
    },
    {
      id: 2,
      position: {
        es: "Lider de procesos",
        en: "Process Leader"
      },
      company: "Sitara",
      period: "2024 - 2025",
      location: {
        es: "Santander, Colombia",
        en: "Santander, Colombia"
      },
      description: {
        es: [
          "Desarrollé y optimicé procesos industriales y de automatización",
          "Coordiné equipos de trabajo",
          "Lideré procesos de mejora continua para aumentar la eficiencia"
        ],
        en: [
          "Developed and optimized industrial and automation processes",
          "Coordinated work teams",
          "Led continuous improvement processes to increase efficiency"
        ]
      },
      technologies: ["Siemens", "PLC", "SCADA", "Arduino"]
    },
    {
      id: 3,
      position: {
        es: "Lider de mantenimiento",
        en: "Maintenance Leader"
      },
      company: {
        es: "Embotelladora de bebidas",
        en: "Beverage Bottling Company"
      },
      period: "2020 - 2021",
      location: {
        es: "Tolima, Colombia",
        en: "Tolima, Colombia"
      },
      description: {
        es: [
          "Participé en el desarrollo de MVP para aplicaciones web",
          "Implementé sistemas de control automatizado y mantenimiento predictivo",
          "Aprendí metodologías ágiles y mejores prácticas de desarrollo",
          "Lideré equipos y mejoré la eficiencia operativa",
          "Contribuí en todas las fases del ciclo de desarrollo de software"
        ],
        en: [
          "Participated in MVP development for web applications",
          "Implemented automated control systems and predictive maintenance",
          "Learned agile methodologies and development best practices",
          "Led teams and improved operational efficiency",
          "Contributed to all phases of the software development lifecycle"
        ]
      },
      technologies: ["Siemens","Variadores de frecuencia", "PLC", "SCADA", "Arduino"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2>{t('experienceTitle')}</h2>
          <p>{t('experienceSubtitle')}</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3>{typeof exp.position === 'object' ? exp.position[language] : exp.position}</h3>
                    <div className="company-info">
                      <h4>{typeof exp.company === 'object' ? exp.company[language] : exp.company}</h4>
                      <span className="period">{exp.period}</span>
                      <span className="location">{typeof exp.location === 'object' ? exp.location[language] : exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <ul className="description">
                      {exp.description[language].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="technologies">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;