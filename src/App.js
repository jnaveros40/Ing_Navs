import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <PWAInstallPrompt />
      </div>
    </LanguageProvider>
  );
}

export default App;
