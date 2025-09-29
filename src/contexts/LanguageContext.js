import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  es: {
    // Header
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    contact: "Contacto",
    
    // Hero section
    heroTitle: "Hola, soy Juan Naveros",
    heroSubtitle: "Ingeniero de Software & Desarrollador Full Stack",
    heroDescription: "Desarrollo soluciones web modernas y escalables utilizando las últimas tecnologías. Apasionado por crear experiencias de usuario excepcionales.",
    viewProjects: "Ver Proyectos",
    contactMe: "Contáctame",
    
    // Projects section
    projectsTitle: "Portafolio de Proyectos",
    projectsSubtitle: "Proyectos reales desarrollados con tecnologías modernas y mejores prácticas",
    viewApp: "Ver aplicativo",
    moreProjects: "Descubre más sobre mis proyectos y habilidades en mi perfil de GitHub",
    
    // Status
    ready: "Listo",
    inDevelopment: "En desarrollo",
    
    // Categories
    webApplication: "Aplicación Web",
    corporateWebsite: "Sitio Web Corporativo",
    sportsAnalytics: "Análisis Deportivo",
    edTechPlatform: "Plataforma Educativa",
    aiEducation: "Educación en IA",
    finTech: "FinTech",
    spaManagement: "Gestión de Spa",
    realEstate: "Bienes Raíces",
    transportSystem: "Sistema de Transporte",
    tourismApp: "App de Turismo"
  },
  en: {
    // Header
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    
    // Hero section
    heroTitle: "Hello, I'm Juan Naveros",
    heroSubtitle: "Software Engineer & Full Stack Developer",
    heroDescription: "I develop modern and scalable web solutions using the latest technologies. Passionate about creating exceptional user experiences.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    
    // Projects section
    projectsTitle: "Project Portfolio",
    projectsSubtitle: "Real projects developed with modern technologies and best practices",
    viewApp: "View App",
    moreProjects: "Discover more about my projects and skills on my GitHub profile",
    
    // Status
    ready: "Ready",
    inDevelopment: "In Development",
    
    // Categories
    webApplication: "Web Application",
    corporateWebsite: "Corporate Website",
    sportsAnalytics: "Sports Analytics",
    edTechPlatform: "EdTech Platform",
    aiEducation: "AI Education",
    finTech: "FinTech",
    spaManagement: "Spa Management",
    realEstate: "Real Estate",
    transportSystem: "Transport System",
    tourismApp: "Tourism App"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};