import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "InmoSofts",
      description: {
        es: "Sistema de gestión inmobiliaria moderno desarrollado con React y Vite. Incluye administración de propiedades, dashboard analítico, gestión de usuarios. Diseño responsive con Material-UI y tema personalizado.",
        en: "Modern real estate management system developed with React and Vite. Includes property administration, analytical dashboard, user management. Responsive design with Material-UI and custom theme."
      },
      image: "/Projects/InmoSoft.jpg",
      technologies: ["React", "TypeScript", "Vite", "Material-UI", "React Router", "Node.js", "PostgreSQL"],
      liveUrl: "https://inmosofts.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "webApplication"
    },
    {
      id: 2,
      title: "Grupo Ceiba Colombia",
      description: {
        es: "Plataforma web institucional y e-commerce completa para Grupo Ceiba Colombia, organización BIC dedicada a la agricultura sostenible. Incluye tienda online con 20+ productos, sistema de carrito persistente, panel administrativo completo, chatbot inteligente con base de conocimientos, generador visual de contenido corporativo, y optimización SEO avanzada.",
        en: "Complete institutional web platform and e-commerce for Grupo Ceiba Colombia, BIC organization dedicated to sustainable agriculture. Includes online store with 20+ products, persistent cart system, complete administrative panel, intelligent chatbot with knowledge base, visual corporate content generator, and advanced SEO optimization."
      },
      image: "/Projects/Grupo_Ceiba.jpg",
      technologies: ["React", "CSS3", "JavaScript","TypeScript", "Material-UI", "React Router", "Node.js", "PostgreSQL","Responsive Design"],
      liveUrl: "https://grupoceibacolombia.com.co/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "corporateWebsite"
    },
    {
      id: 3,
      title: "Scouting Goal",
      description: {
        es: "Plataforma de scouting deportivo para análisis y seguimiento de jugadores de fútbol con estadísticas avanzadas.",
        en: "Sports scouting platform for analysis and tracking of soccer players with advanced statistics."
      },
      image: "/Projects/Scouting_Goal.jpg",
      technologies: ["React", "Chart.js", "API REST", "Bootstrap", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      liveUrl: "https://scoutingoal.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "sportsAnalytics"
    },
    {
      id: 4,
      title: "Atomic Ed Vision",
      description: {
        es: "Plataforma educativa innovadora con contenido interactivo y herramientas de aprendizaje adaptativo.",
        en: "Innovative educational platform with interactive content and adaptive learning tools."
      },
      image: "/Projects/Atomic_Ed_Vision.jpg",
      technologies: ["React", "TypeScript", "Firebase","PWA", "HTML", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://atomic-ed-vision.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "edTechPlatform"
    },
    {
      id: 5,
      title: "Learn AI",
      description: {
        es: "Plataforma de aprendizaje de inteligencia artificial con cursos interactivos y laboratorios prácticos.",
        en: "Artificial intelligence learning platform with interactive courses and practical labs."
      },
      image: "/Projects/Learn_AI.jpg",
      technologies: ["Next.js", "Python", "TensorFlow", "OpenAI API"],
      liveUrl: "https://learn-ai-nu-seven.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "inDevelopment",
      category: "aiEducation"
    },
    {
      id: 6,
      title: "JN Finanza Web",
      description: {
        es: "Aplicación web de gestión financiera personal con análisis de gastos, presupuestos y planificación financiera.",
        en: "Personal financial management web application with expense analysis, budgets, and financial planning."
      },
      image: "/Projects/my_Finanzas_App.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "JavaScript", "React Icons", "CSS-in-JS", "Firebase Auth"],
      liveUrl: "https://jn-finanza-web.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "finTech"
    },
    {
      id: 7,
      title: "Esencia Viva",
      description: {
        es: "Aplicación web progresiva (PWA) moderna para la gestión integral de un spa. Permite a los clientes reservar citas y adquirir planes de servicios con calendario interactivo, mientras que los administradores gestionan el negocio con panel de control completo, estadísticas avanzadas, gestión de planes, calendario de disponibilidad y sistema de notificaciones automáticas.",
        en: "Modern progressive web application (PWA) for comprehensive spa management. Allows clients to book appointments and purchase service plans with interactive calendar, while administrators manage the business with complete control panel, advanced statistics, plan management, availability calendar and automatic notification system."
      },
      image: "/Projects/Esencia_Viva.jpg",
      technologies: ["React", "Stripe", "Node.js", "CSS3", "React", "Vite", "Firebase", "PWA", "FullCalendar", "React Router", "Firestore", "Firebase Auth", "Workbox", "ESLint"],
      liveUrl: "https://esencia-viva.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "spaManagement"
    },
    {
      id: 8,
      title: "Lujo Real",
      description: {
        es: "Plataforma de bienes raíces de lujo con búsqueda avanzada, tours virtuales y gestión de propiedades premium.",
        en: "Luxury real estate platform with advanced search, virtual tours and premium property management."
      },
      image: "/Projects/LujoReal.jpg",
      technologies: ["React", "Google Maps API", "Node.js", "PostgreSQL", "Firebase", "Firestore", "Firebase Auth", "Cloudinary", "Styled Components", "React Router", "PWA", "Service Worker", "React Icons", "Context API"],
      liveUrl: "https://lujoreal.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "inDevelopment",
      category: "realEstate"
    },
    {
      id: 9,
      title: "SENA Bus",
      description: {
        es: "Sistema de transporte inteligente para el SENA con seguimiento en tiempo real, rutas optimizadas y gestión de usuarios.",
        en: "Intelligent transportation system for SENA with real-time tracking, optimized routes and user management."
      },
      image: "/Projects/sena_bus.jpg",
      technologies: ["React", "Firebase", "Google Maps API", "Progressive Web App", "JavaScript", "Vite", "CSS3", "React Router", "Lucide React"],
      liveUrl: "https://bus-sena.vercel.app/",
      githubUrl: "https://github.com/jnaveros40",
      status: "ready",
      category: "transportSystem"
    },
    {
      id: 10,
      title: "Keki",
      description: {
        es: "Aplicación progresiva de turismo moderna que ofrece una experiencia completa para viajeros y exploradores. Incluye funcionalidades de búsqueda de destinos, planificación de viajes, gestión de reservas, galería de imágenes optimizada con Cloudinary, y autenticación segura. Diseño responsive y optimizada como PWA para acceso offline.",
        en: "Modern progressive tourism application that offers a complete experience for travelers and explorers. Includes destination search functionality, trip planning, booking management, image gallery optimized with Cloudinary, and secure authentication. Responsive design and optimized as PWA for offline access."
      },
      image: "/Projects/keki.jpg",
      technologies: ["TypeScript", "JavaScript", "HTML", "CSS", "Vite", "PWA", "Supabase", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "https://github.com/jnaveros40",
      status: "inDevelopment",
      category: "tourismApp"
    },
    {
      id: 11,
      title: "Chocolata",
      description: {
        es: "Aplicación web progresiva (PWA) para catálogo de chocolates artesanales premium. Desarrollada con React, TypeScript y Vite. Incluye galería responsive, funcionalidad offline, instalación nativa, contacto WhatsApp integrado y diseño glassmorphism con temática chocolate.",
        en: "Progressive Web App (PWA) for premium artisanal chocolate catalog. Developed with React, TypeScript and Vite. Includes responsive gallery, offline functionality, native installation, integrated WhatsApp contact and glassmorphism design with chocolate theme."
      },
      image: "/Projects/Chocolata.jpg",
      technologies: ["React", "TypeScript", "Vite", "PWA", "Service Worker", "CSS3", "Responsive Design"],
      liveUrl: "chocolat-inky.vercel.app",
      githubUrl: "https://github.com/jnaveros40/chocolata",
      status: "ready",
      category: "PWA"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>{t('projectsTitle')}</h2>
          <p>{t('projectsSubtitle')}</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      {t('viewApp')}
                    </a>
                    
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-section">
                    <h3>{project.title}</h3>
                    <span className="project-category">{t(project.category)}</span>
                  </div>
                  <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {t(project.status)}
                  </span>
                </div>
                <p>{project.description[language]}</p>
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
          
          <a href="https://github.com/jnaveros40" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t('moreProjects')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;