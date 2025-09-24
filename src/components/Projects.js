import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "InmoSofts",
      description: "Plataforma de software inmobiliario completa con gestión de propiedades, CRM y herramientas de análisis para el sector inmobiliario.",
      image: "/Projects/InmoSoft.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Material-UI"],
      liveUrl: "https://inmosofts.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Grupo Ceiba Colombia",
      description: "Sitio web corporativo para empresa de construcción y desarrollo inmobiliario con portafolio de proyectos y servicios.",
      image: "/Projects/Grupo_Ceiba.jpg",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://grupoceibacolombia.com.co/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Corporate Website"
    },
    {
      id: 3,
      title: "Scouting Goal",
      description: "Plataforma de scouting deportivo para análisis y seguimiento de jugadores de fútbol con estadísticas avanzadas.",
      image: "/Projects/Scouting_Goal.jpg",
      technologies: ["React", "Chart.js", "API REST", "Bootstrap"],
      liveUrl: "https://scoutingoal.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Sports Analytics"
    },
    {
      id: 4,
      title: "Atomic Ed Vision",
      description: "Plataforma educativa innovadora con contenido interactivo y herramientas de aprendizaje adaptativo.",
      image: "/Projects/Atomic_Ed_Vision.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://atomic-ed-vision.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "EdTech Platform"
    },
    {
      id: 5,
      title: "Learn AI",
      description: "Plataforma de aprendizaje de inteligencia artificial con cursos interactivos y laboratorios prácticos.",
      image: "/Projects/Learn_AI.jpg",
      technologies: ["Next.js", "Python", "TensorFlow", "OpenAI API"],
      liveUrl: "https://learn-ai-nu-seven.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "AI Education"
    },
    {
      id: 6,
      title: "JN Finanza Web",
      description: "Aplicación web de gestión financiera personal con análisis de gastos, presupuestos y planificación financiera.",
      image: "/Projects/my_Finanzas_App.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "https://jn-finanza-web.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "FinTech"
    },
    {
      id: 7,
      title: "Esencia Viva",
      description: "E-commerce de productos naturales y orgánicos con sistema de pedidos y gestión de inventario.",
      image: "/Projects/Esencia_Viva.jpg",
      technologies: ["React", "Stripe", "Node.js", "CSS3"],
      liveUrl: "https://esencia-viva.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "E-Commerce"
    },
    {
      id: 8,
      title: "Lujo Real",
      description: "Plataforma de bienes raíces de lujo con búsqueda avanzada, tours virtuales y gestión de propiedades premium.",
      image: "/Projects/LujoReal.jpg",
      technologies: ["React", "Google Maps API", "Node.js", "PostgreSQL"],
      liveUrl: "https://lujoreal.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Real Estate"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Portfolio de Proyectos</h2>
          <p>Proyectos reales desarrollados con tecnologías modernas y mejores prácticas</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      Ver aplicativo
                    </a>
                    
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-section">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-footer">
          <div className="projects-stats">
            <div className="stat-item">
              <h4>8+</h4>
              <span>Proyectos Completados</span>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <span>Proyectos Entregados</span>
            </div>
            <div className="stat-item">
              <h4>5+</h4>
              <span>Tecnologías Dominadas</span>
            </div>
          </div>
          <a href="https://github.com/jnaveros40" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver más proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;