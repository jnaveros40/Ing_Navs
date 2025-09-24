import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "C#", level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "SASS", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "GraphQL", level: 65 }
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "Herramientas & DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "GitHub Actions", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2>Habilidades Técnicas</h2>
          <p>Tecnologías y herramientas que domino</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h4>Experiencia</h4>
            <p>3+ años desarrollando aplicaciones web</p>
          </div>
          <div className="summary-card">
            <h4>Proyectos</h4>
            <p>15+ proyectos completados</p>
          </div>
          <div className="summary-card">
            <h4>Clientes</h4>
            <p>10+ clientes satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;