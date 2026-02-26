import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

type View = 'home' | 'violence' | 'platforms' | 'stories' | 'resources' | 'timeline';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavigate = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button 
          className="nav-logo"
          onClick={() => handleNavigate('home')}
        >
          HER City
        </button>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigate('home')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === 'violence' ? 'active' : ''}`}
              onClick={() => handleNavigate('violence')}
            >
              Tipos de Violencia
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === 'platforms' ? 'active' : ''}`}
              onClick={() => handleNavigate('platforms')}
            >
              Plataformas
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === 'timeline' ? 'active' : ''}`}
              onClick={() => handleNavigate('timeline')}
            >
              Timeline
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === 'stories' ? 'active' : ''}`}
              onClick={() => handleNavigate('stories')}
            >
              Historias
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === 'resources' ? 'active' : ''}`}
              onClick={() => handleNavigate('resources')}
            >
              Recursos
            </button>
          </li>
        </ul>

        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          aria-label="Cambiar modo oscuro"
        >
          {isDark ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;