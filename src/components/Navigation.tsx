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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { view: View; label: string }[] = [
    { view: 'home',      label: 'Inicio' },
    { view: 'violence',  label: 'Tipos de Violencia' },
    { view: 'platforms', label: 'Plataformas' },
    { view: 'timeline',  label: 'Timeline' },
    { view: 'stories',   label: 'Historias' },
    { view: 'resources', label: 'Recursos' },
  ];

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => handleNavigate('home')}>
          <div className="nav-logo-icon">H</div>
          HER City
        </button>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(({ view, label }) => (
            <li key={view}>
              <button
                className={`nav-link ${currentView === view ? 'active' : ''}`}
                onClick={() => handleNavigate(view)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;