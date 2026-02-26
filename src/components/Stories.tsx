import React, { useState } from 'react';
import { stories } from '../data/dataStore';
import '../styles/Stories.css';

const Stories: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="stories-section">
      <div className="stories-inner">
        <span className="section-label">7 Testimonios Verificados</span>
        <h2 className="section-title">Historias Reales</h2>
        <p className="section-desc">
          Casos completamente anonimizados que muestran el impacto humano de la violencia digital.
          Cada historia representa a miles de mujeres en situaciones similares.
        </p>

        <div className="stories-grid">
          {stories.map((story, idx) => {
            const isOpen = expanded === story.id;
            return (
              <article
                key={story.id}
                className={`story-card ${isOpen ? 'expanded' : ''}`}
              >
                <button
                  className="story-trigger"
                  onClick={() => setExpanded(isOpen ? null : story.id)}
                  aria-expanded={isOpen}
                >
                  <div className="story-preview">
                    <span className="story-number">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="story-type-tag">{story.violenceType.replace(/-/g, ' ')}</span>
                    <h3 className="story-title">{story.title}</h3>
                    <div className="story-meta-row">
                      <span className="story-badge story-badge-platform">{story.platform}</span>
                      <span className="story-badge story-badge-age">{story.ageGroup}</span>
                      <span className="story-badge story-badge-duration">{story.duration}</span>
                    </div>
                    <div className="story-expand-icon">{isOpen ? '×' : '+'}</div>
                  </div>
                </button>

                {isOpen && (
                  <div className="story-full">
                    <div className="story-section">
                      <span className="story-section-title">La Historia</span>
                      <p>{story.narrative}</p>
                    </div>

                    <div className="story-section">
                      <span className="story-section-title">Impacto Psicológico y Social</span>
                      <div className="story-impact-box">{story.impact}</div>
                    </div>

                    <div className="story-section">
                      <span className="story-section-title">Ayuda Buscada</span>
                      <div className="story-help-tags">
                        {story.helpSought.map((h, i) => (
                          <span key={i} className="story-help-tag">{h}</span>
                        ))}
                      </div>
                    </div>

                    <div className="story-section">
                      <span className="story-section-title">Resolución</span>
                      <p>{story.resolution}</p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="stories-cta">
          <div className="stories-cta-text">
            <h3>Si Estás Viviendo Esto</h3>
            <p>
              No estás sola. Existen recursos, organizaciones especializadas y apoyo legal
              disponibles. Los primeros pasos son documentar, reportar y buscar ayuda.
            </p>
          </div>
          <div className="stories-cta-actions">
            <a href="#resources" className="btn btn-gold">Ver Recursos →</a>
            <a href="#reporting" className="btn btn-ghost">Cómo Denunciar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;