import { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = (isDark) => {
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-primary text-slate' 
        : 'bg-lightPrimary text-lightText'
    }`}>
      <ThemeToggle onThemeChange={handleThemeChange} />
      <Hero isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;