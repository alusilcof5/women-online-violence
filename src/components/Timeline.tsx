import React, { useState, useMemo } from 'react';
import { timelineEvents } from '../data/dataStore';
import '../styles/Timeline.css';

type Category = 'legal' | 'research' | 'incident' | 'awareness' | 'technology';

const CAT_CONFIG: Record<Category | 'all', { label: string; color: string; bg: string }> = {
  all:        { label: 'Todos',         color: '#3d6b52', bg: '#3d6b52' },
  legal:      { label: 'Marco Legal',   color: '#c0392b', bg: '#c0392b' },
  research:   { label: 'Investigación', color: '#1976d2', bg: '#1976d2' },
  incident:   { label: 'Incidente',     color: '#d35400', bg: '#d35400' },
  awareness:  { label: 'Conciencia',    color: '#3d6b52', bg: '#3d6b52' },
  technology: { label: 'Tecnología',    color: '#7b1fa2', bg: '#7b1fa2' },
};

const Timeline: React.FC = () => {
  const [active, setActive] = useState<Category | 'all'>('all');

  const filtered = useMemo(() => {
    return active === 'all'
      ? timelineEvents
      : timelineEvents.filter(e => e.category === active);
  }, [active]);

  return (
    <section className="timeline-section">
      <div className="timeline-inner">
        <span className="section-label">Cronología 2005–2024</span>
        <h2 className="section-title">Historia de la Violencia Digital</h2>
        <p className="section-desc">
          Desde las primeras investigaciones académicas hasta la legislación más reciente.
          Los hitos que marcaron la visibilidad del problema.
        </p>

        {/* Filters */}
        <div className="timeline-filters">
          {(Object.keys(CAT_CONFIG) as (Category | 'all')[]).map(cat => {
            const cfg = CAT_CONFIG[cat];
            return (
              <button
                key={cat}
                className={`timeline-filter-btn ${active === cat ? 'active' : ''}`}
                style={active === cat ? { background: cfg.bg, borderColor: cfg.bg } : {}}
                onClick={() => setActive(cat)}
              >
                <span
                  className="filter-dot"
                  style={{ background: active === cat ? 'white' : cfg.color }}
                />
                {cfg.label}
                {active === cat && ` (${filtered.length})`}
              </button>
            );
          })}
        </div>

        {/* Track */}
        <div className="timeline-track">
          {filtered.length === 0 && (
            <div className="timeline-empty">No hay eventos para este filtro.</div>
          )}

          {filtered.map((event, i) => {
            const cfg = CAT_CONFIG[event.category];
            return (
              <div
                key={event.id}
                className="timeline-event"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{ color: cfg.color, background: cfg.color }}
                />

                {/* Card */}
                <div className="timeline-card">
                  <div className="timeline-card-top">
                    <div className="timeline-date">
                      <span className="timeline-year-badge">{event.year}</span>
                      {event.month}
                    </div>
                    <span
                      className="timeline-cat-badge"
                      style={{ background: cfg.bg }}
                    >
                      {cfg.label}
                    </span>
                  </div>

                  <h3>{event.title}</h3>
                  <p>{event.description}</p>

                  <div className="timeline-impact">
                    <strong>Impacto:</strong> {event.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;