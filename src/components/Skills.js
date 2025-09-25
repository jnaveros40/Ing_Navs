import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: "HTML/CSS", icon: "🌐", level: 95 },
      { name: "JavaScript", icon: "⚡", level: 95 },
      { name: "TypeScript", icon: "📘", level: 90 },
      { name: "React", icon: "⚛️", level: 95 },
      { name: "Next.js", icon: "🔺", level: 90 },
      { name: "Vue.js", icon: "", level: 90 },
      { name: "Laravel", icon: "", level: 90 },
      { name: "Tailwind CSS", icon: "🎨", level: 85 }
    ],
    Backend: [
      { name: "Node.js", icon: "💚", level: 90 },
      { name: "Express", icon: "🚀", level: 85 },
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "SQL", icon: "🗄️", level: 80 },
      { name: "Java", icon: "☕", level: 80 },
      { name: "Python", icon: "🐍", level: 80 },
      { name: "C#", icon: "", level: 80 },
      { name: "PHP", icon: "🐘", level: 75 },
      
      { name: "Spring", icon: "🌱", level: 75 }
    ],
    BBDD: [
      { name: "Firebase", icon: "🔥", level: 80 },
      { name: "Supabase", icon: "", level: 80 },
      { name: "PostgreSQL", icon: "🐘", level: 80 },
      { name: "MySQL", icon: "🐬", level: 75 },
    ],
    
    "Tools & DevOps": [
      { name: "Git", icon: "🔧", level: 95 },
      { name: "Docker", icon: "🐳", level: 75 },
      { name: "AWS", icon: "☁️", level: 70 },
      { name: "Vercel", icon: "🚀", level: 85 },
      { name: "GitHub Actions", icon: "🤖", level: 70 },
      

      { name: "CI/CD", icon: "🔄", level: 70 }
    ]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <h2>Habilidades Técnicas</h2>
          <p>Tecnologías y herramientas que domino</p>
        </div>
        
        <div className="skills-tabs">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-cards-grid">
            {skillCategories[activeTab].map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h4>Experiencia</h4>
            <p>3+ años desarrollando aplicaciones web</p>
          </div>
          <div className="summary-card">
            <h4>Tecnologías</h4>
            <p>15+ tecnologías dominadas</p>
          </div>
          <div className="summary-card">
            <h4>Especialización</h4>
            <p>Full Stack & PWA Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;