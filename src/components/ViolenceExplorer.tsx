import React, { useState } from 'react';
import { violenceTypes } from '../data/dataStore';
import '../styles/ViolenceExplorer.css';

interface ViolenceExplorerProps {
  selectedType: string | null;
  onSelectType: (type: string | null) => void;
}

const ViolenceExplorer: React.FC<ViolenceExplorerProps> = ({ selectedType, onSelectType }) => {
  const [expandedType, setExpandedType] = useState<string | null>(selectedType || violenceTypes[0].id);

  const selected = violenceTypes.find(t => t.id === expandedType);

  return (
    <section className="violence-explorer">
      <div className="explorer-header">
        <h2>Tipos de Violencia Digital</h2>
        <p>Entiende cada forma de abuso para identificarla y combatirla</p>
      </div>

      <div className="explorer-content">
        <div className="violence-list">
          {violenceTypes.map((type) => (
            <button
              key={type.id}
              className={`violence-item ${expandedType === type.id ? 'active' : ''}`}
              onClick={() => setExpandedType(type.id)}
            >
              <div className="violence-item-header">
                <h3>{type.name}</h3>
                <span className="prevalence-badge">{type.prevalence}</span>
              </div>
              <p className="violence-description">{type.description}</p>
            </button>
          ))}
        </div>

        {selected && (
          <div className="violence-detail">
            <div className="detail-header">
              <h2>{selected.name}</h2>
              <div className="detail-meta">
                <span className="prevalence">Prevalencia: {selected.prevalence}</span>
                <span className="source">Fuente: {selected.primarySource}</span>
              </div>
            </div>

            <div className="detail-warning">
              <span className="warning-icon">!</span>
              <p>{selected.warning}</p>
            </div>

            <div className="detail-section">
              <h3>Descripción</h3>
              <p>{selected.description}</p>
            </div>

            {selected.ageGroup && (
              <div className="detail-section">
                <h3>Grupo Afectado Principalmente</h3>
                <p>{selected.ageGroup}</p>
              </div>
            )}

            <div className="detail-section">
              <h3>Signos y Síntomas</h3>
              <ul className="symptoms-list">
                {selected.signsAndSymptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h3>Estadísticas Clave</h3>
              <div className="statistics-list">
                {selected.statistics.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Canales de Denuncia</h3>
              <ul className="reporting-list">
                {selected.reportingChannels.map((channel, index) => (
                  <li key={index}>{channel}</li>
                ))}
              </ul>
            </div>

            <div className="detail-actions">
              <a href="#resources" className="btn btn-secondary">
                Ver Recursos Adicionales
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViolenceExplorer;
