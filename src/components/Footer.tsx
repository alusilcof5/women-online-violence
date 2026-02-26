import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">
              <div className="footer-brand-icon">H</div>
              HER City
            </div>
            <p className="footer-brand-desc">
              Plataforma de datos abiertos dedicada a la concienciación, documentación
              y acción frente a la violencia digital contra la mujer.
            </p>
          </div>

          {/* Fuentes */}
          <div>
            <span className="footer-col-title">Fuentes de Datos</span>
            <ul className="footer-list">
              {['ONU Mujeres','WHO','UNESCO','Pew Research Center','FBI / Interpol','Mossos d\'Esquadra','Sensity AI','Thorn','Amnesty International'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <span className="footer-col-title">Recursos</span>
            <ul className="footer-list">
              <li><a href="#">Centros de Denuncia</a></li>
              <li><a href="#">Protección Digital</a></li>
              <li><a href="#">Apoyo Especializado</a></li>
              <li><a href="#">Timeline de Incidentes</a></li>
              <li><a href="#">Tipos de Violencia</a></li>
              <li><a href="#">Análisis de Plataformas</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="footer-col-title">Consideraciones</span>
            <ul className="footer-list">
              <li>Datos anonimizados y verificados con ≥2 fuentes</li>
              <li>Historias basadas en casos reales completamente anonimizados</li>
              <li>Herramienta educativa de código abierto</li>
              <li>Última actualización: Febrero 2026</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} HER City — Plataforma educativa sobre Violencia Digital Contra la Mujer.
          </p>
          <div className="footer-data-badge">
            <div className="footer-data-dot" />
            Datos verificados · Actualización Feb 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;