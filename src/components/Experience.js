import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Desarrollador Full Stack Senior",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      location: "Bogotá, Colombia",
      description: [
        "Lideré el desarrollo de aplicaciones web usando React y Node.js",
        "Implementé arquitecturas escalables y optimicé el rendimiento en un 40%",
        "Mentoricé a desarrolladores junior y establecí mejores prácticas de código"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      id: 2,
      position: "Desarrollador Frontend",
      company: "Digital Agency",
      period: "2021 - 2022",
      location: "Medellín, Colombia",
      description: [
        "Desarrollé interfaces de usuario responsivas y accesibles",
        "Colaboré con equipos de diseño para implementar experiencias excepcionales",
        "Integré APIs RESTful y optimicé tiempos de carga"
      ],
      technologies: ["Vue.js", "JavaScript", "CSS3", "REST APIs"]
    },
    {
      id: 3,
      position: "Desarrollador Junior",
      company: "StartUp Innovadora",
      period: "2020 - 2021",
      location: "Cali, Colombia",
      description: [
        "Participé en el desarrollo de MVP para aplicaciones web",
        "Aprendí metodologías ágiles y mejores prácticas de desarrollo",
        "Contribuí en todas las fases del ciclo de desarrollo de software"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"]
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