import React, { useState } from 'react';
import { platforms } from '../data/dataStore';
import '../styles/PlatformMap.css';

interface HeatmapProps {
  detailed?: boolean;
}

const PlatformHeatmap: React.FC<HeatmapProps> = ({ detailed = false }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const getHeatmapColor = (rate: number): string => {
    if (rate >= 50) return '#c41e3a';
    if (rate >= 40) return '#d32f2f';
    if (rate >= 30) return '#f57c00';
    if (rate >= 20) return '#fbc02d';
    return '#7cb342';
  };

  const sortedPlatforms = [...platforms].sort((a, b) => b.harassmentRate - a.harassmentRate);

  return (
    <section className={`platform-heatmap ${detailed ? 'detailed' : ''}`}>
      <div className="section-container">
        <div className="section-header">
          <h2>Mapa de Calor - Prevalencia de Acoso</h2>
          <p className="section-description">
            Tasa de incidentes de acoso sexual y violencia digital por plataforma
          </p>
        </div>

        <div className="heatmap-grid">
          {sortedPlatforms.map(platform => {
            const backgroundColor = getHeatmapColor(platform.harassmentRate);
            const isSelected = selectedPlatform === platform.id;

            return (
              <div
                key={platform.id}
                className={`heatmap-cell ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedPlatform(isSelected ? null : platform.id)}
                style={{
                  '--cell-color': backgroundColor,
                } as React.CSSProperties & { '--cell-color': string }}
              >
                <div className="cell-label">{platform.name}</div>
                <div className="cell-value">{platform.harassmentRate}%</div>
              </div>
            );
          })}
        </div>

        {selectedPlatform && (
          <div className="heatmap-details">
            {platforms
              .filter(p => p.id === selectedPlatform)
              .map(platform => (
                <div key={platform.id} className="details-panel">
                  <div className="details-header">
                    <h3>{platform.name}</h3>
                    <span className="severity-badge">Severidad: {platform.harassmentRate}%</span>
                  </div>

                  <div className="details-content">
                    <div className="detail-item">
                      <h4>Usuarias Afectadas</h4>
                      <p>{platform.statistics.affectedUsers}</p>
                    </div>

                    <div className="detail-item">
                      <h4>Incidentes Mensuales</h4>
                      <p>{platform.statistics.incidentsMonthly}</p>
                    </div>

                    <div className="detail-item">
                      <h4>Tipos de Violencia Predominantes</h4>
                      <div className="violence-types">
                        {platform.primaryViolenceTypes.map((type, idx) => (
                          <span key={idx} className="type-tag">{type}</span>
                        ))}
                      </div>
                    </div>

                    <div className="detail-item">
                      <h4>Cómo Reportar</h4>
                      <p>{platform.reportingProcess}</p>
                    </div>

                    <a href={platform.helpLink} target="_blank" rel="noopener noreferrer" className="help-button">
                      Centro de Ayuda Oficial
                    </a>
                  </div>
                </div>
              ))}
          </div>
        )}

        {!detailed && (
          <div className="heatmap-legend">
            <h4>Escala de Severidad</h4>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#7cb342' }}></div>
                <span>Bajo (20-29%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#fbc02d' }}></div>
                <span>Moderado (30-39%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#f57c00' }}></div>
                <span>Alto (40-49%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#d32f2f' }}></div>
                <span>Muy Alto (50%+)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlatformHeatmap;