import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", level: 90, color: "#f7df1e" },
        { name: "Python", level: 85, color: "#3776ab" },
        { name: "Java", level: 80, color: "#007396" },
        { name: "TypeScript", level: 75, color: "#3178c6" },
        { name: "C#", level: 70, color: "#239120" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "#61dafb" },
        { name: "Vue.js", level: 80, color: "#4fc08d" },
        { name: "HTML5", level: 95, color: "#e34f26" },
        { name: "CSS3", level: 90, color: "#1572b6" },
        { name: "SASS", level: 75, color: "#cc6699" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Express.js", level: 80, color: "#000000" },
        { name: "Django", level: 75, color: "#092e20" },
        { name: "Spring Boot", level: 70, color: "#6db33f" },
        { name: "GraphQL", level: 65, color: "#e10098" }
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "MongoDB", level: 85, color: "#47a248" },
        { name: "PostgreSQL", level: 80, color: "#336791" },
        { name: "MySQL", level: 85, color: "#4479a1" },
        { name: "Redis", level: 70, color: "#dc382d" }
      ]
    },
    {
      title: "Herramientas & DevOps",
      skills: [
        { name: "Git", level: 90, color: "#f05032" },
        { name: "Docker", level: 75, color: "#2496ed" },
        { name: "AWS", level: 70, color: "#ff9900" },
        { name: "Vercel", level: 85, color: "#000000" },
        { name: "GitHub Actions", level: 70, color: "#2088ff" }
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
                          width: `${skill.level}%`,
                          backgroundColor: skill.color 
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