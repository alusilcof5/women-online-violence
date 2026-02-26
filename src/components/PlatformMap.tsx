import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList
} from 'recharts';
import { platforms } from '../data/dataStore';
import '../styles/PlatformMap.css';

/* ─── Color scale by rate ─── */
const rateColor = (rate: number) => {
  if (rate >= 60) return '#c0392b';
  if (rate >= 40) return '#d35400';
  if (rate >= 30) return '#e8c85a';
  if (rate >= 25) return '#c9a84c';
  return '#6b9e7a';
};

/* ─── Custom tooltip ─── */
const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: '#1a3a2a', border: '1px solid rgba(201,168,76,.3)',
      borderRadius: 10, padding: '12px 16px', color: '#f0ead8'
    }}>
      <div style={{ fontFamily: 'DM Mono', fontSize: 11, color: 'rgba(240,234,216,.5)', marginBottom: 4 }}>{d.name}</div>
      <div style={{ fontFamily: 'Playfair Display', fontSize: 24, fontWeight: 900, color: rateColor(d.harassmentRate), lineHeight: 1 }}>
        {d.harassmentRate}%
      </div>
      <div style={{ fontFamily: 'DM Mono', fontSize: 10, color: 'rgba(240,234,216,.5)', marginTop: 4 }}>tasa de acoso</div>
    </div>
  );
};

const PlatformMap: React.FC = () => {
  const sorted = [...platforms].sort((a, b) => b.harassmentRate - a.harassmentRate);
  const [selected, setSelected] = useState<string>(sorted[0].id);

  const selectedPlat = platforms.find(p => p.id === selected)!;

  /* Chart data */
  const chartData = sorted.map(p => ({
    name: p.name.replace('Aplicaciones de Citas', 'Dating Apps').replace('Plataformas Gaming', 'Gaming'),
    harassmentRate: p.harassmentRate,
    id: p.id,
    fill: rateColor(p.harassmentRate),
  }));

  /* Platform icon colors */
  const iconColors: Record<string, string> = {
    facebook:    '#1877F2',
    twitter:     '#14171A',
    instagram:   '#E4405F',
    tiktok:      '#010101',
    whatsapp:    '#25D366',
    discord:     '#5865F2',
    'dating-apps': '#FF6B6B',
    gaming:      '#9146FF',
  };

  return (
    <section className="platform-section">
      <div className="platform-section-inner">
        <span className="section-label">Análisis por Plataforma</span>
        <h2 className="section-title">¿Dónde Ocurre la Violencia Digital?</h2>
        <p className="section-desc">
          Tasa de incidentes de acoso y violencia de género en las principales plataformas digitales.
          Haz clic en cualquier barra o plataforma para ver el detalle.
        </p>

        <div className="platform-charts-grid">
          {/* Main bar chart */}
          <div className="platform-bar-chart">
            <div className="chart-title">Tasa de Acoso por Plataforma</div>
            <div className="chart-subtitle" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 24 }}>
              % de usuarias que han experimentado acoso
            </div>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 8, left: -16, bottom: 60 }}
                onClick={(e) => { if (e?.activePayload?.[0]) setSelected((e.activePayload[0].payload as any).id); }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,.05)" vertical={false} />
                <XAxis
                  dataKey="name"
                  angle={-35}
                  textAnchor="end"
                  height={70}
                  tick={{ fill: 'var(--text-muted)', fontSize: 11, fontFamily: 'DM Mono' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={v => `${v}%`}
                  tick={{ fill: 'var(--text-muted)', fontSize: 10, fontFamily: 'DM Mono' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,.04)' }} />
                <Bar dataKey="harassmentRate" radius={[6, 6, 0, 0]} maxBarSize={56} cursor="pointer">
                  <LabelList
                    dataKey="harassmentRate"
                    position="top"
                    formatter={(v: number) => `${v}%`}
                    style={{ fill: 'var(--text-secondary)', fontSize: 10, fontFamily: 'DM Mono', fontWeight: 600 }}
                  />
                  {chartData.map((d, i) => (
                    <Cell
                      key={i}
                      fill={d.fill}
                      opacity={selected === d.id ? 1 : 0.65}
                      stroke={selected === d.id ? '#c9a84c' : 'transparent'}
                      strokeWidth={2}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="chart-legend">
              <div className="legend-item"><div className="legend-dot" style={{ background: '#c0392b' }} />+60% — Crítico</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: '#d35400' }} />40–59% — Alto</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: '#e8c85a' }} />30–39% — Moderado</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: '#6b9e7a' }} />&lt;30% — Bajo</div>
            </div>
          </div>

          {/* Side panel */}
          <div className="platform-side">
            {/* List */}
            <div className="platform-list">
              {sorted.map(p => (
                <button
                  key={p.id}
                  className={`platform-list-item ${selected === p.id ? 'active' : ''}`}
                  onClick={() => setSelected(p.id)}
                >
                  <div
                    className="plat-icon"
                    style={{ background: iconColors[p.id] || '#ccc', color: 'white' }}
                  >
                    {p.icon}
                  </div>
                  <div className="plat-info">
                    <span className="plat-name">{p.name}</span>
                    <span className="plat-sub">{p.statistics.affectedUsers}</span>
                  </div>
                  <span
                    className="plat-rate"
                    style={{
                      background: `${rateColor(p.harassmentRate)}20`,
                      color: rateColor(p.harassmentRate),
                    }}
                  >
                    {p.harassmentRate}%
                  </span>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="platform-detail-panel" key={selected}>
              <div className="detail-panel-header">
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: iconColors[selectedPlat.id] || '#3d6b52',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 800, fontSize: '1.1rem',
                    fontFamily: 'var(--font-display)', flexShrink: 0,
                  }}
                >
                  {selectedPlat.icon}
                </div>
                <h3 className="detail-panel-name">{selectedPlat.name}</h3>
                <div className="detail-rate-big">{selectedPlat.harassmentRate}%</div>
              </div>

              <div className="detail-row">
                <span className="detail-key">Usuarias afectadas</span>
                <span className="detail-val">{selectedPlat.statistics.affectedUsers}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Incidentes mensuales</span>
                <span className="detail-val">{selectedPlat.statistics.incidentsMonthly}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">Proceso de reporte</span>
                <span className="detail-val" style={{ fontSize: '0.82rem' }}>{selectedPlat.reportingProcess}</span>
              </div>

              <div style={{ marginTop: 16 }}>
                <div className="detail-key" style={{ marginBottom: 8 }}>Tipos de violencia</div>
                <div className="violence-chips">
                  {selectedPlat.primaryViolenceTypes.map((t, i) => (
                    <span key={i} className="violence-chip">{t.replace(/-/g, ' ')}</span>
                  ))}
                </div>
              </div>

              <a
                href={`https://${selectedPlat.helpLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link"
              >
                Centro de Ayuda Oficial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformMap;