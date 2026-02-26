import React, { useState } from 'react';
import { reportingChannels, supportOrganizations, protectionTips } from '../data/dataStore';
import '../styles/Resources.css';

interface ResourceDashboardProps {
  detailed?: boolean;
  onViewChange?: (view: string) => void;
}

type TabType = 'report' | 'protect' | 'support';

const ResourceDashboard: React.FC<ResourceDashboardProps> = ({ detailed = false, onViewChange }) => {
  const [activeTab, setActiveTab] = useState<TabType>('report');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section className={`resource-dashboard ${detailed ? 'detailed' : ''}`}>
      <div className="section-container">
        <div className="section-header">
          <h2>Recursos y Apoyo</h2>
          <p className="section-description">
            Información sobre denuncia, protección y apoyo psicológico
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs-menu">
            <button
              className={`tab-button ${activeTab === 'report' ? 'active' : ''}`}
              onClick={() => handleTabChange('report')}
            >
              Reportar
            </button>
            <button
              className={`tab-button ${activeTab === 'protect' ? 'active' : ''}`}
              onClick={() => handleTabChange('protect')}
            >
              Protegerse
            </button>
            <button
              className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => handleTabChange('support')}
            >
              Apoyo
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'report' && (
              <div className="tab-panel">
                <div className="resources-grid">
                  {reportingChannels.map(channel => (
                    <div key={channel.id} className="resource-card">
                      <div className="resource-header">
                        <h3>{channel.name}</h3>
                        <span className="urgency-badge urgent">{channel.urgency}</span>
                      </div>
                      <p className="resource-description">{channel.description}</p>
                      <div className="resource-details">
                        <div className="detail">
                          <span className="detail-label">Jurisdicción:</span>
                          <span className="detail-value">{channel.jurisdiction}</span>
                        </div>
                        <div className="detail">
                          <span className="detail-label">Disponibilidad:</span>
                          <span className="detail-value">{channel.availability}</span>
                        </div>
                      </div>
                      <a href={channel.url} target="_blank" rel="noopener noreferrer" className="resource-button">
                        Reportar Ahora
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'protect' && (
              <div className="tab-panel">
                <div className="protection-grid">
                  {protectionTips.map((tip, index) => (
                    <div key={index} className="protection-card">
                      <div className="tip-number">{index + 1}</div>
                      <h4>{tip.title}</h4>
                      <p>{tip.description}</p>
                      <ul className="tip-list">
                        {tip.actions.map((action, idx) => (
                          <li key={idx}>{action}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="tab-panel">
                <div className="support-grid">
                  {supportOrganizations.map(org => (
                    <div key={org.id} className="support-card">
                      <div className="org-header">
                        <h3>{org.name}</h3>
                        <span className="focus-badge">{org.focus}</span>
                      </div>
                      <p className="org-description">{org.description}</p>
                      <div className="org-services">
                        <span className="service-label">Servicios:</span>
                        <div className="services-list">
                          {org.services.map((service, idx) => (
                            <span key={idx} className="service-tag">{service}</span>
                          ))}
                        </div>
                      </div>
                      <a href={org.website} target="_blank" rel="noopener noreferrer" className="org-button">
                        Contactar
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {!detailed && (
          <div className="cta-section">
            <h3>Información Detallada</h3>
            <p>Accede a recursos completos organizados por categoría</p>
            <div className="cta-buttons">
              <button
                className="cta-button"
                onClick={() => onViewChange?.('informacion-recursos')}
              >
                Ver Recursos Completos
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceDashboard;