import React, { useState, useMemo } from 'react';
import { timelineEvents } from '../data/dataStore';
import '../styles/Timeline.css';

type Category = 'legal' | 'research' | 'incident' | 'awareness' | 'technology';

const Timeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filtered = useMemo(() => {
    if (selectedCategory === 'all') return timelineEvents;
    return timelineEvents.filter(e => e.category === selectedCategory);
  }, [selectedCategory]);

  const categoryColors: Record<Category, string> = {
    legal: '#e74c3c',
    research: '#3498db',
    incident: '#e67e22',
    awareness: '#2ecc71',
    technology: '#9b59b6'
  };

  const categoryLabels: Record<Category, string> = {
    legal: 'Marco Legal',
    research: 'Investigación',
    incident: 'Incidente',
    awareness: 'Conciencia',
    technology: 'Tecnología'
  };

  return (
    <section className="timeline">
      <div className="timeline-header">
        <h2>Timeline: Historia de la Violencia Digital</h2>
        <p>Evolución del problema y respuestas sociales desde 2005</p>
      </div>

      <div className="timeline-filters">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Todos
        </button>
        {(Object.keys(categoryLabels) as Category[]).map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            style={{
              borderColor: categoryColors[cat],
              color: selectedCategory === cat ? '#fff' : categoryColors[cat],
              backgroundColor: selectedCategory === cat ? categoryColors[cat] : 'transparent'
            }}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className="timeline-container">
        {filtered.map((event, index) => (
          <div 
            key={event.id}
            className={`timeline-event timeline-${event.category}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="event-marker" style={{ backgroundColor: categoryColors[event.category] }}>
              <span className="marker-year">{event.year}</span>
            </div>

            <div className="event-content">
              <div className="event-date">
                {event.month} {event.year}
              </div>

              <h3>{event.title}</h3>
              <p>{event.description}</p>

              <div className="event-impact">
                <strong>Impacto Global:</strong> {event.impact}
              </div>

              <span 
                className="event-category"
                style={{ backgroundColor: categoryColors[event.category] }}
              >
                {categoryLabels[event.category]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
