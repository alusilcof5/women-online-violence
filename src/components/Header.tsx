import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="header-gradient"></div>
      </div>

      <div className="header-content">
        <h1 className="header-title">
          Violencia Digital Contra la Mujer
        </h1>
        <p className="header-subtitle">
          Un problema global que requiere acción inmediata
        </p>
        <div className="header-stats">
          <div className="stat-box">
            <div className="stat-number">58%</div>
            <div className="stat-label">Mujeres han sufrido violencia digital</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">73%</div>
            <div className="stat-label">Periodistas mujeres afectadas</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1200%</div>
            <div className="stat-label">Aumento anual en sextorsión</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
