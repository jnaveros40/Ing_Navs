import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "InmoSofts",
      description: "Sistema de gestión inmobiliaria moderno desarrollado con React y Vite. Incluye administración de propiedades, dashboard analítico, gestión de usuarios. Diseño responsive con Material-UI y tema personalizado.",
      image: "/Projects/InmoSoft.jpg",
      technologies: ["React", "TypeScript", "Vite", "Material-UI", "React Router", "Node.js", "PostgreSQL"],
      liveUrl: "https://inmosofts.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Grupo Ceiba Colombia",
      description: "Plataforma web institucional y e-commerce completa para Grupo Ceiba Colombia, organización BIC dedicada a la agricultura sostenible. Incluye tienda online con 20+ productos, sistema de carrito persistente, panel administrativo completo, chatbot inteligente con base de conocimientos, generador visual de contenido corporativo, y optimización SEO avanzada.",
      technologies: ["React", "CSS3", "JavaScript","TypeScript", "Material-UI", "React Router", "Node.js", "PostgreSQL","Responsive Design"],
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
      technologies: ["React", "Chart.js", "API REST", "Bootstrap", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
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
      technologies: ["React", "TypeScript", "Firebase","PWA", "HTML", "Tailwind CSS", "JavaScript"],
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
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "JavaScript", "React Icons", "CSS-in-JS", "Firebase Auth"],
      liveUrl: "https://jn-finanza-web.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "FinTech"
    },
    {
      id: 7,
      title: "Esencia Viva",
      description: "Aplicación web progresiva (PWA) moderna para la gestión integral de un spa. Permite a los clientes reservar citas y adquirir planes de servicios con calendario interactivo, mientras que los administradores gestionan el negocio con panel de control completo, estadísticas avanzadas, gestión de planes, calendario de disponibilidad y sistema de notificaciones automáticas.",
      image: "/Projects/Esencia_Viva.jpg",
      technologies: ["React", "Stripe", "Node.js", "CSS3", "React", "Vite", "Firebase", "PWA", "FullCalendar", "React Router", "Firestore", "Firebase Auth", "Workbox", "ESLint"],
      liveUrl: "https://esencia-viva.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Spa Management"
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
    },
    {
      id: 9,
      title: "SENA Bus",
      description: "Sistema de transporte inteligente para el SENA con seguimiento en tiempo real, rutas optimizadas y gestión de usuarios.",
      image: "/Projects/sena_bus.jpg",
      technologies: ["React", "Firebase", "Google Maps API", "Progressive Web App"],
      liveUrl: "https://bus-sena.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "Ready",
      category: "Transport System"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Portafolio de Proyectos</h2>
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
              <h4>9+</h4>
              <span>Proyectos Completados</span>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <span>Proyectos Entregados</span>
            </div>
            <div className="stat-item">
              <h4>15+</h4>
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