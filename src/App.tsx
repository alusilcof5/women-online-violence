import React, { useState, useMemo } from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Statistics from './components/Statistics';
import ViolenceExplorer from './components/ViolenceExplorer';
import PlatformMap from './components/PlatformMap';
import Timeline from './components/Timeline';
import Resources from './components/Resources';
import Stories from './components/Stories';
import Footer from './components/Footer';

type View = 'home' | 'violence' | 'platforms' | 'stories' | 'resources' | 'timeline';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedViolenceType, setSelectedViolenceType] = useState<string | null>(null);

  const handleNavigation = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'violence':
        return (
          <ViolenceExplorer
            selectedType={selectedViolenceType}
            onSelectType={setSelectedViolenceType}
          />
        );
      case 'platforms':
        return <PlatformMap />;
      case 'stories':
        return <Stories />;
      case 'resources':
        return <Resources />;
      case 'timeline':
        return <Timeline />;
      case 'home':
      default:
        return (
          <>
            <Statistics />
            <section className="home-grid">
              <div className="grid-section">
                <h2>Tipos de Violencia Digital</h2>
                <p>Explora los diferentes tipos de abuso digital y sus características</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleNavigation('violence')}
                >
                  Investigar
                </button>
              </div>

              <div className="grid-section">
                <h2>Plataformas Afectadas</h2>
                <p>Análisis detallado de incidentes por red social y aplicación</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleNavigation('platforms')}
                >
                  Analizar
                </button>
              </div>

              <div className="grid-section">
                <h2>Historias Reales</h2>
                <p>Testimonios anonimizados que muestran el impacto real de la violencia digital</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleNavigation('stories')}
                >
                  Leer
                </button>
              </div>

              <div className="grid-section">
                <h2>Timeline de Incidentes</h2>
                <p>Cronología de casos documentados y desarrollo de la problemática</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleNavigation('timeline')}
                >
                  Ver Timeline
                </button>
              </div>

              <div className="grid-section">
                <h2>Recursos de Protección</h2>
                <p>Guías prácticas, herramientas y contactos para denunciar y protegerse</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleNavigation('resources')}
                >
                  Acceder
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navigation 
        currentView={currentView}
        onNavigate={handleNavigation}
      />
      {currentView === 'home' && <Header />}
      <main className="app-main">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
