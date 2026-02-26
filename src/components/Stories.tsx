import React, { useState } from 'react';
import { stories } from '../data/dataStore';
import '../styles/Stories.css';

const Stories: React.FC = () => {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const toggleStory = (id: string) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <section className="stories">
      <div className="stories-header">
        <h2>Historias Reales</h2>
        <p>Testimonios anonimizados de impacto real de la violencia digital</p>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <article
            key={story.id}
            className={`story-card ${expandedStory === story.id ? 'expanded' : ''}`}
          >
            <button
              className="story-trigger"
              onClick={() => toggleStory(story.id)}
            >
              <div className="story-preview">
                <h3>{story.title}</h3>
                <div className="story-meta">
                  <span className="badge violence-type">{story.violenceType}</span>
                  <span className="badge platform">{story.platform}</span>
                  <span className="badge age">{story.ageGroup}</span>
                </div>
                <p className="story-duration">Duración: {story.duration}</p>
              </div>
              <span className="expand-icon">+</span>
            </button>

            {expandedStory === story.id && (
              <div className="story-full">
                <div className="story-section">
                  <h4>La Historia</h4>
                  <p>{story.narrative}</p>
                </div>

                <div className="story-section">
                  <h4>Impacto</h4>
                  <div className="impact-box">
                    <p>{story.impact}</p>
                  </div>
                </div>

                <div className="story-section">
                  <h4>Ayuda Buscada</h4>
                  <div className="help-tags">
                    {story.helpSought.map((help, index) => (
                      <span key={index} className="help-tag">{help}</span>
                    ))}
                  </div>
                </div>

                <div className="story-section">
                  <h4>Resolución</h4>
                  <p>{story.resolution}</p>
                </div>

                <div className="story-reflection">
                  <p>
                    Estas historias no son únicas. Representan a millones de mujeres que 
                    sufren violencia digital cada año. Tu acción puede marcar diferencia.
                  </p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="stories-cta">
        <h3>Si Esto Te Sucede a Ti</h3>
        <p>
          No estás sola. Hay recursos, apoyo y justicia disponibles. 
          Los pasos iniciales más importantes son: reportar, documentar y buscar apoyo especializado.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Denunciar un Incidente</button>
          <button className="btn btn-secondary">Ver Recursos de Ayuda</button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
