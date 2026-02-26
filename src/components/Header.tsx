import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  onNavigate: (view: 'violence' | 'resources' | 'platforms' | 'stories' | 'timeline') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="header">
      {/* Background */}
      <div className="header-bg">
        <div className="header-bg-gradient" />
        <div className="header-bg-dots" />
        <div className="header-bg-lines" />
        <div className="header-orb header-orb-1" />
        <div className="header-orb header-orb-2" />
      </div>

      {/* Decorative numbers */}
      <div className="header-deco-numbers" aria-hidden="true">
        <span className="header-deco-num">58</span>
        <span className="header-deco-num">73</span>
        <span className="header-deco-num">96</span>
      </div>

      {/* Main content */}
      <div className="header-content">
        {/* Eyebrow */}
        <div className="header-eyebrow">
          <span className="header-eyebrow-tag">Datos Verificados · Feb 2026</span>
          <div className="header-eyebrow-line" />
        </div>

        {/* Title */}
        <h1 className="header-title">
          Violencia Digital
          <span className="header-title-accent">Contra la Mujer</span>
        </h1>

        {/* Subtitle */}
        <p className="header-subtitle">
          Una plataforma de datos abiertos para entender, visualizar y combatir
          la violencia digital de género. Basada en fuentes internacionales verificadas.
        </p>

        {/* Stats */}
        <div className="header-stats-strip">
          <div className="header-stat">
            <span className="header-stat-number">58%</span>
            <span className="header-stat-label">Mujeres han sufrido violencia digital</span>
          </div>
          <div className="header-stat">
            <span className="header-stat-number">+1200%</span>
            <span className="header-stat-label">Aumento anual en sextorsión (FBI)</span>
          </div>
          <div className="header-stat">
            <span className="header-stat-number">96%</span>
            <span className="header-stat-label">Deepfakes son pornografía no consensuada</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="header-ctas">
          <button
            className="btn btn-gold"
            onClick={() => onNavigate('platforms')}
          >
            Explorar Datos →
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => onNavigate('resources')}
          >
            Obtener Ayuda
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="header-scroll" aria-hidden="true">
        <span className="header-scroll-text">Scroll</span>
        <div className="header-scroll-arrow" />
      </div>
    </header>
  );
};

export default Header;