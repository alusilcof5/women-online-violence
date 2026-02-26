import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/ViolenceRadar.css';

const ViolenceRadar: React.FC = () => {
  const data = [
    { name: 'Ciberacoso', value: 15, fullMark: 100 },
    { name: 'Sextorsión', value: 10, fullMark: 100 },
    { name: 'Grooming', value: 12, fullMark: 100 },
    { name: 'Revenge Porn', value: 10, fullMark: 100 },
    { name: 'Deepfakes', value: 6, fullMark: 100 },
    { name: 'Acoso Sexual', value: 21, fullMark: 100 },
    { name: 'Doxxing', value: 8, fullMark: 100 },
  ];

  return (
    <section className="violence-radar">
      <div className="section-container">
        <div className="section-header">
          <h2>Prevalencia de Tipos de Violencia</h2>
          <p className="section-description">
            Distribución global de diferentes formas de abuso digital contra mujeres
          </p>
        </div>

        <div className="radar-wrapper">
          <ResponsiveContainer width="100%" height={450}>
            <RadarChart data={data} margin={{ top: 20, right: 80, left: 80, bottom: 20 }}>
              <PolarGrid strokeDasharray="3 3" stroke="rgba(211, 47, 47, 0.2)" />
              <PolarAngleAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <Radar name="Prevalencia %" dataKey="value" stroke="var(--accent-red)" fill="var(--accent-red)" fillOpacity={0.6} />
              <Tooltip contentStyle={{ background: 'var(--bg-primary)', border: '2px solid var(--accent-red)', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ViolenceRadar;