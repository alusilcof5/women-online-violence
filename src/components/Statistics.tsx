import React from 'react';
import '../styles/Statistics.css';

const Statistics: React.FC = () => {
  const stats = [
    {
      label: 'Mujeres afectadas globalmente',
      value: '1 de cada 2',
      context: '16-58% según región'
    },
    {
      label: 'Aumento de ciberacoso en pandemia',
      value: '+300%',
      context: 'En 2020'
    },
    {
      label: 'Violencia online en periodistas',
      value: '73%',
      context: 'Mujeres periodistas (UNESCO)'
    },
    {
      label: 'Acoso sexual online 18-29 años',
      value: '21%',
      context: 'Pew Research 2021'
    },
    {
      label: 'Deepfakes sin consentimiento',
      value: '96%',
      context: 'Son pornografía'
    },
    {
      label: 'Aumento anual sextorsión',
      value: '+1200%',
      context: 'Unidad de Ciberdelincuencia de Mossos de Esquadra'
    }
  ];

  return (
    <section className="statistics">
      <h2>Dimensión Global del Problema</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="stat-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-context">{stat.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
