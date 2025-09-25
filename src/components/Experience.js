import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Desarrollador Full Stack Senior, Experto en tecnologías modernas",
      company: "Servicio Nacional de aprendizaje (SENA)",
      period: "2025 - Presente",
      location: "Tolima, Colombia",
      description: [
        "Lideré el desarrollo de aplicaciones web usando React y Node.js",
        "Implementé arquitecturas escalables y optimicé el rendimiento en un 40%",
        "Mentoricé a desarrolladores junior y establecí mejores prácticas de código"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Firebase", "Supabase"]
    },
    {
      id: 2,
      position: "Lider de procesos",
      company: "Sitara",
      period: "2024 - 2025",
      location: "Santander, Colombia",
      description: [
        "Desarrollé y optimicé procesos industriales y de automatización",
        "Coordiné equipos de trabajo",
        "Lidere procesos de mejora continua para aumentar la eficiencia"
      ],
      technologies: ["Siemens", "PLC", "SCADA", "Arduino"]
    },
    {
      id: 3,
      position: "Lider de mantenimiento",
      company: "Embotelladora de bebidas",
      period: "2020 - 2021",
      location: "Tolima, Colombia",
      description: [
        "Participé en el desarrollo de MVP para aplicaciones web",
        "Implementé sistemas de control automatizado y mantenimiento predictivo",
        "Aprendí metodologías ágiles y mejores prácticas de desarrollo",
        "Lideré equipos y mejoré la eficiencia operativa",
        "Contribuí en todas las fases del ciclo de desarrollo de software"
      ],
      technologies: ["Siemens","Variadores de frecuencia", "PLC", "SCADA", "Arduino"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-header">
          <h2>Experiencia Laboral</h2>
          <p>Mi trayectoria profesional en el desarrollo de software</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3>{exp.position}</h3>
                    <div className="company-info">
                      <h4>{exp.company}</h4>
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <ul className="description">
                      {exp.description.map((item, idx) => (
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