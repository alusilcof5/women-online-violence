import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>VDCM</h4>
          <p>
            Una plataforma dedicada a concienciar, informar y proporcionar 
            recursos contra la violencia digital contra la mujer.
          </p>
        </div>

        <div className="footer-section">
          <h4>Fuentes de Datos</h4>
          <ul>
            <li>ONU Mujeres</li>
            <li>WHO (Organización Mundial de Salud)</li>
            <li>UNESCO</li>
            <li>Unidad de Ciberdelincuencia de Mossos d'Esquadra & Interpol</li>
            <li>Pew Research Center</li>
            <li>Women's Media Center</li>
            <li>World Bank</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Recursos Principales</h4>
          <ul>
            <li><a href="#reporting">Centros de Denuncia</a></li>
            <li><a href="#protection">Protección Digital</a></li>
            <li><a href="#support">Apoyo Especializado</a></li>
            <li><a href="#timeline">Historia del Problema</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Consideraciones Éticas</h4>
          <p>
            Todos los datos han sido anonimizados y verificados. 
            Las historias están basadas en casos reales pero totalmente anonimizadas 
            para proteger la privacidad de las víctimas.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright {currentYear}. Plataforma educativa sobre Violencia Digital Contra la Mujer.
          Todos los derechos reservados.
        </p>
        <p className="footer-note">
          Última actualización: Febrero 2026. 
          Datos basados en fuentes oficiales de ONU, WHO, UNESCO, CSIRT e instituciones verificadas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
