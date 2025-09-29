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
    
    // About section
    aboutTitle: "Sobre mí",
    aboutLead: "Soy un Ingeniero de Software apasionado por crear soluciones digitales innovadoras y eficientes.",
    aboutParagraph1: "Con más de 3 años de experiencia en el desarrollo web, me especializo en tecnologías modernas como React, Node.js y Python. Me encanta resolver problemas complejos y transformar ideas en productos digitales que impacten positivamente en la vida de las personas.",
    aboutParagraph2: "Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias tecnológicas, contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.",
    yearsExperience: "Años de experiencia",
    projectsCompleted: "Proyectos completados",
    technologiesMastered: "Tecnologías dominadas",
    
    // Skills section
    skillsTitle: "Habilidades Técnicas",
    skillsSubtitle: "Tecnologías y herramientas que domino",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Bases de Datos",
    toolsDevops: "Tools & DevOps",
    auth: "Auth",
    experienceCard: "Experiencia",
    experienceText: "3+ años desarrollando aplicaciones web",
    technologiesCard: "Tecnologías",
    technologiesText: "15+ tecnologías dominadas",
    specializationCard: "Especialización",
    specializationText: "Full Stack & PWA Development",
    
    // Contact section
    contactTitle: "Contáctame",
    contactSubtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
    contactInfo: "Información de Contacto",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    locationLabel: "Ubicación",
    locationText: "Colombia",
    followMe: "Sígueme en",
    nameLabel: "Nombre",
    emailFieldLabel: "Email",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    sendMessage: "Enviar Mensaje",
    messageSent: "¡Mensaje enviado! Te contactaré pronto.",
    
    // Experience section
    experienceTitle: "Experiencia Laboral",
    experienceSubtitle: "Mi trayectoria profesional en el desarrollo de software",
    
    // Education section
    educationTitle: "Educación & Certificaciones",
    educationSubtitle: "Mi formación académica y certificaciones profesionales",
    formalEducation: "Educación Formal",
    certifications: "Certificaciones",
    
    // PWA Install Prompt
    installPortfolio: "Instalar Portafolio",
    installDescription: "Instala el portafolio de Juan Naveros para acceso rápido y uso offline",
    install: "Instalar",
    
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
    
    // About section
    aboutTitle: "About Me",
    aboutLead: "I am a Software Engineer passionate about creating innovative and efficient digital solutions.",
    aboutParagraph1: "With over 3 years of experience in web development, I specialize in modern technologies like React, Node.js and Python. I love solving complex problems and transforming ideas into digital products that positively impact people's lives.",
    aboutParagraph2: "When I'm not coding, I enjoy staying updated with the latest tech trends, contributing to open source projects and sharing knowledge with the developer community.",
    yearsExperience: "Years of experience",
    projectsCompleted: "Projects completed",
    technologiesMastered: "Technologies mastered",
    
    // Skills section
    skillsTitle: "Technical Skills",
    skillsSubtitle: "Technologies and tools I master",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    toolsDevops: "Tools & DevOps",
    auth: "Auth",
    experienceCard: "Experience",
    experienceText: "3+ years developing web applications",
    technologiesCard: "Technologies",
    technologiesText: "15+ technologies mastered",
    specializationCard: "Specialization",
    specializationText: "Full Stack & PWA Development",
    
    // Contact section
    contactTitle: "Contact Me",
    contactSubtitle: "Do you have a project in mind? Let's talk!",
    contactInfo: "Contact Information",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    locationLabel: "Location",
    locationText: "Colombia",
    followMe: "Follow me on",
    nameLabel: "Name",
    emailFieldLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendMessage: "Send Message",
    messageSent: "Message sent! I'll contact you soon.",
    
    // Experience section
    experienceTitle: "Work Experience",
    experienceSubtitle: "My professional journey in software development",
    
    // Education section
    educationTitle: "Education & Certifications",
    educationSubtitle: "My academic background and professional certifications",
    formalEducation: "Formal Education",
    certifications: "Certifications",
    
    // PWA Install Prompt
    installPortfolio: "Install Portfolio",
    installDescription: "Install Juan Naveros' portfolio for quick access and offline use",
    install: "Install",
    
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