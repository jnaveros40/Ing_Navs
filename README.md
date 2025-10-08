<div align="center">

# 💼 **Ing Navs - Portfolio Personal**

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/PWA-Enabled-4CAF50?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA">
  <img src="https://img.shields.io/badge/i18n-ES%20%7C%20EN-FF6B6B?style=for-the-badge" alt="Languages">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License">
</p>

<p align="center">
  <strong>Un portafolio web moderno y responsivo que presenta mis habilidades, experiencia y proyectos como ingeniero de software.</strong>
</p>

<p align="center">
  <a href="#-demo">Demo</a> •
  <a href="#-características">Características</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-tecnologías">Tecnologías</a> •
  <a href="#-contacto">Contacto</a>
</p>

---

</div>

## 🎯 **Demo**

🔗 **[Ver Portfolio en Vivo](https://ing-navs.com)** 

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Portfolio+Preview)

## 🚀 **Características**

<table>
<tr>
<td align="center" width="33%">
<img src="https://img.shields.io/badge/-Responsive-4CAF50?style=for-the-badge&logo=responsive&logoColor=white" alt="Responsive">
<br><strong>Diseño Responsivo</strong>
<br>Optimizado para todos los dispositivos
</td>
<td align="center" width="33%">
<img src="https://img.shields.io/badge/-PWA-FF6B6B?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA">
<br><strong>Progressive Web App</strong>
<br>Instalable y funciona offline
</td>
<td align="center" width="33%">
<img src="https://img.shields.io/badge/-i18n-2196F3?style=for-the-badge&logo=translate&logoColor=white" alt="i18n">
<br><strong>Multiidioma</strong>
<br>Español e Inglés
</td>
</tr>
<tr>
<td align="center" width="33%">
<img src="https://img.shields.io/badge/-Modern-9C27B0?style=for-the-badge&logo=design&logoColor=white" alt="Modern">
<br><strong>Interfaz Moderna</strong>
<br>Diseño limpio y profesional
</td>
<td align="center" width="33%">
<img src="https://img.shields.io/badge/-Fast-FF9800?style=for-the-badge&logo=speed&logoColor=white" alt="Fast">
<br><strong>Alto Rendimiento</strong>
<br>Optimizado para velocidad
</td>
<td align="center" width="33%">
<img src="https://img.shields.io/badge/-Interactive-E91E63?style=for-the-badge&logo=animation&logoColor=white" alt="Interactive">
<br><strong>Interactivo</strong>
<br>Animaciones y transiciones suaves
</td>
</tr>
</table>

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 19.1.1
- CSS3 con animaciones personalizadas
- Context API para gestión de estado
- React Router DOM para navegación

### Herramientas
- Create React App como base
- Workbox para funcionalidades PWA
- Testing Library para pruebas

## 📱 Secciones del Portfolio

- **Header**: Navegación principal con toggle de idioma
- **About**: Información personal y profesional
- **Skills**: Tecnologías organizadas por categorías (Frontend, Backend, Databases, Tools & DevOps, Auth)
- **Experience**: Experiencia laboral y profesional
- **Education**: Formación académica
- **Projects**: Proyectos destacados
- **Contact**: Información de contacto

## 🌐 Características de Internacionalización

El sitio soporta dos idiomas:
- **Español** (es)
- **English** (en)

La selección de idioma se mantiene persistente durante la sesión del usuario.

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jnaveros40/Ing_Navs.git
cd Ing_Navs
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recarga automáticamente cuando realizas cambios.\
También verás errores de lint en la consola.

### `npm test`

Inicia el ejecutor de pruebas en modo interactivo.\
Consulta la sección sobre [ejecutar pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa React correctamente en modo producción y optimiza la compilación para el mejor rendimiento.

La compilación está minificada y los nombres de archivo incluyen hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── About.js        # Sección sobre mí
│   ├── Contact.js      # Formulario de contacto
│   ├── Education.js    # Formación académica
│   ├── Experience.js   # Experiencia laboral
│   ├── Header.js       # Navegación principal
│   ├── LanguageToggle.js # Selector de idioma
│   ├── Projects.js     # Proyectos destacados
│   ├── Skills.js       # Habilidades técnicas
│   └── PWAInstallPrompt.js # Prompt instalación PWA
├── contexts/           # Context API
│   └── LanguageContext.js # Gestión de idiomas
├── App.js             # Componente principal
└── index.js           # Punto de entrada
```

## 🌟 Funcionalidades PWA

Esta aplicación es una Progressive Web App que incluye:

- **Instalable**: Se puede instalar en dispositivos móviles y escritorio
- **Offline**: Funcionalidad básica disponible sin conexión
- **Responsive**: Adaptable a cualquier tamaño de pantalla
- **Rápida**: Carga optimizada y cache inteligente

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**Juan Naveros** - Ingeniero de Software

- 🌐 Portfolio: [ing-navs.com](https://ing-navs.com)
- 📧 Email: jnaveros40@gmail.com
- 💼 LinkedIn: [linkedin.com/in/juan-naveros](https://linkedin.com/in/juan-naveros)
- 🐱 GitHub: [github.com/jnaveros40](https://github.com/jnaveros40)

---

⭐ ¡Dale una estrella al proyecto si te gustó!
