import React from 'react';
import '../styles/GlobalStats.css';

const GlobalStats: React.FC = () => {
  const stats = [
    { value: '1 de 2', label: 'Mujeres Afectadas', desc: 'Ha sufrido violencia digital' },
    { value: '296M', label: 'Víctimas Globales', desc: 'Estimación mundial' },
    { value: '+300%', label: 'Aumento 2020', desc: 'Durante pandemia' },
    { value: '96%', label: 'Deepfakes Porno', desc: 'No consensuados' },
    { value: '73%', label: 'Periodistas Mujeres', desc: 'Sufren violencia digital' },
    { value: '1200%', label: 'Sextorsión Anual', desc: 'Reportada al FBI' },
  ];

  return (
    <section className="global-stats">
      <div className="section-container">
        <div className="section-header">
          <h2>Dimensión Global</h2>
          <p className="section-description">
            Estadísticas verificadas de organismos internacionales
          </p>
        </div>

        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div key={index} className="statistic-card">
              <div className="stat-icon-wrapper">
                <span className="stat-value">{stat.value}</span>
              </div>
              <div className="stat-content">
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-description">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="statistics-sources">
          <h3>Fuentes Verificadas</h3>
          <div className="sources-list">
            <span className="source-badge">ONU Mujeres</span>
            <span className="source-badge">WHO</span>
            <span className="source-badge">UNESCO</span>
            <span className="source-badge">FBI</span>
            <span className="source-badge">Pew Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStats;