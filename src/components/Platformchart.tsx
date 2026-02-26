import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import '../styles/PlatformChart.css';

const PlatformChart: React.FC = () => {
  const data = [
    { name: 'Gaming', harassment: 40, users: '1B' },
    { name: 'Dating Apps', harassment: 37, users: '300M' },
    { name: 'Discord', harassment: 35, users: '150M' },
    { name: 'WhatsApp', harassment: 31, users: '2B' },
    { name: 'TikTok', harassment: 28, users: '800M' },
    { name: 'Twitter', harassment: 24, users: '500M' },
    { name: 'Instagram', harassment: 20, users: '1.4B' },
    { name: 'Facebook', harassment: 62, users: '2.1B' },
  ];

  const colors = ['#9146FF', '#FF6B6B', '#5865F2', '#25D366', '#000000', '#000000', '#E4405F', '#1877F2'];

  return (
    <section className="platform-chart">
      <div className="section-container">
        <div className="section-header">
          <h2>Tasa de Acoso por Plataforma</h2>
          <p className="section-description">
            Porcentaje de incidentes de violencia digital por red social
          </p>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={120} tick={{ fontSize: 12 }} />
              <YAxis label={{ value: 'Tasa de Acoso %', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ background: 'var(--bg-primary)', border: '2px solid var(--accent-red)', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="harassment" name="Tasa de Acoso %">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default PlatformChart;