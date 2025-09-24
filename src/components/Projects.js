import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con React y Node.js",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://ejemplo.com",
      githubUrl: "https://github.com/jnaveros40/proyecto1",
      status: "Ready"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funciones colaborativas",
      image: "/api/placeholder/300/200",
      technologies: ["Vue.js", "Firebase", "CSS3"],
      liveUrl: "https://ejemplo2.com",
      githubUrl: "https://github.com/jnaveros40/proyecto2",
      status: "In Development"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con APIs en tiempo real",
      image: "/api/placeholder/300/200",
      technologies: ["JavaScript", "API REST", "Chart.js"],
      liveUrl: "https://ejemplo3.com",
      githubUrl: "https://github.com/jnaveros40/proyecto3",
      status: "Ready"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Proyectos</h2>
          <p>Algunos de los proyectos en los que he trabajado</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      Ver Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                      Código
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
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
          <a href="https://github.com/jnaveros40" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Ver todos los proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;