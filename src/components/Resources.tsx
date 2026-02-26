import React, { useState } from 'react';
import { reportingChannels, supportOrganizations, protectionTips } from '../data/index';
import '../styles/Resources.css';

type Tab = 'report' | 'protect' | 'support';

const Resources: React.FC = () => {
  const [tab, setTab] = useState<Tab>('report');

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'report',   label: 'Denunciar',   icon: '🚨' },
    { id: 'protect',  label: 'Protegerse',  icon: '🛡️' },
    { id: 'support',  label: 'Apoyo',       icon: '🤝' },
  ];

  return (
    <section className="resources-section">
      <div className="resources-inner">
        <span className="section-label">Herramientas & Apoyo</span>
        <h2 className="section-title">Recursos Verificados</h2>
        <p className="section-desc">
          Organismos oficiales, consejos de seguridad y organizaciones especializadas
          para actuar frente a cualquier forma de violencia digital.
        </p>

        {/* Tabs */}
        <div className="res-tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`res-tab-btn ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <span className="res-tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Report */}
        {tab === 'report' && (
          <div className="res-report-grid">
            {reportingChannels.map(ch => (
              <div key={ch.id} className="res-report-card">
                <div className="res-card-header">
                  <h3>{ch.name}</h3>
                  <span className="res-urgency">{ch.urgency}</span>
                </div>
                <p className="res-description">{ch.description}</p>
                <div className="res-meta">
                  <div className="res-meta-item">
                    <span className="res-meta-key">Jurisdicción</span>
                    <span className="res-meta-val">{ch.jurisdiction}</span>
                  </div>
                  <div className="res-meta-item">
                    <span className="res-meta-key">Disponibilidad</span>
                    <span className="res-meta-val">{ch.availability}</span>
                  </div>
                </div>
                <a href={ch.url} target="_blank" rel="noopener noreferrer" className="res-cta-btn">
                  Acceder al Recurso →
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Protect */}
        {tab === 'protect' && (
          <div className="res-tips-grid">
            {protectionTips.map((tip, i) => (
              <div key={i} className="res-tip-card">
                <div className="res-tip-num">{i + 1}</div>
                <h4>{tip.title}</h4>
                <p>{tip.description}</p>
                <ul className="res-tip-list">
                  {tip.actions.map((a, j) => <li key={j}>{a}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Support */}
        {tab === 'support' && (
          <div className="res-support-grid">
            {supportOrganizations.map(org => (
              <div key={org.id} className="res-org-card">
                <div className="res-org-header">
                  <h3>{org.name}</h3>
                  <span className="res-focus">{org.focus}</span>
                </div>
                <p className="res-org-desc">{org.description}</p>
                <div className="res-services">
                  {org.services.map((s, i) => (
                    <span key={i} className="res-service-tag">{s}</span>
                  ))}
                </div>
                <a href={org.website} target="_blank" rel="noopener noreferrer" className="res-cta-btn">
                  Contactar →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;