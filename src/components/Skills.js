import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: "HTML/CSS", icon: "html.png", level: 95 },
      { name: "JavaScript", icon: "js.png", level: 95 },
      { name: "TypeScript", icon: "ts.png", level: 90 },
      { name: "React", icon: "react.png", level: 95 },
      { name: "Next.js", icon: "nextjs.png", level: 90 },
      { name: "Vue.js", icon: "vue.png", level: 90 },
      { name: "Tailwind CSS", icon: "tailwind.png", level: 85 }
    ],
    Backend: [
      { name: "Node.js", icon: "node.png", level: 90 },
      { name: "Java", icon: "java.png", level: 80 },
      { name: "Python", icon: "python.png", level: 80 },
      { name: "C#", icon: "csharp.png", level: 80 },
      { name: "PHP", icon: "php.png", level: 75 },
      { name: "Laravel", icon: "laravel.png", level: 90 },
      { name: "Spring", icon: "spring.png", level: 75 }
    ],
    "Bases de Datos": [
      { name: "Firebase", icon: "firebase.png", level: 80 },
      { name: "Supabase", icon: "supabase.png", level: 80 },
      { name: "MongoDB", icon: "mongodb.png", level: 85 },
      { name: "SQL", icon: "sql.png", level: 80 },
      { name: "PostgreSQL", icon: "postgresql.png", level: 80 },
      { name: "MySQL", icon: "mysql.png", level: 75 },
    ],

    "Tools & DevOps": [
      { name: "Git", icon: "git.png", level: 95 },
      { name: "Docker", icon: "docker.png", level: 75 },
      { name: "AWS", icon: "aws.png", level: 70 },
      { name: "Vercel", icon: "vercel.png", level: 85 },
      { name: "GitHub Actions", icon: "github.png", level: 70 },
      { name: "CI/CD", icon: "cicd.png", level: 70 }
    ],
    "Auth": [
      { name: "Supabase Auth", icon: "supabase.png", level: 80 },
      { name: "Firebase Auth", icon: "firebase.png", level: 80 },
      { name: "Auth0", icon: "auth0.png", level: 75 },
      { name: "JWT", icon: "jwt.png", level: 85 },
      { name: "NextAuth.js", icon: "nextauth.png", level: 80 }
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
                <div className="skill-icon">
                  {skill.icon.endsWith('.png') ? 
                    <img src={`/icons/${skill.icon}`} alt={skill.name} /> : 
                    skill.icon
                  }
                </div>
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