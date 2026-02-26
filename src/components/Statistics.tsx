import React, { useEffect, useRef, useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';
import '../styles/Statistics.css';

/* ─── Mini hooks ─── */
function useCountUp(target: number, duration = 1600, suffix = '') {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setValue(target); clearInterval(timer); return; }
        setValue(Math.floor(start));
      }, 16);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { value, ref };
}

/* ─── Trend data ─── */
const trendData = [
  { year: '2018', cases: 18 },
  { year: '2019', cases: 24 },
  { year: '2020', cases: 72 },
  { year: '2021', cases: 85 },
  { year: '2022', cases: 94 },
  { year: '2023', cases: 112 },
  { year: '2024', cases: 134 },
];

const violenceRadar = [
  { type: 'Acoso Sexual', pct: 21 },
  { type: 'Ciberacoso',   pct: 15 },
  { type: 'Grooming',     pct: 12 },
  { type: 'Sextorsión',   pct: 10 },
  { type: 'Revenge Porn', pct: 10 },
  { type: 'Doxxing',      pct: 8 },
  { type: 'Deepfakes',    pct: 6 },
];

/* ─── Stat card subcomponent ─── */
interface StatCardProps {
  value: string;
  numericValue?: number;
  label: string;
  context: string;
  trend?: string;
  barWidth?: number;
  featured?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  value, numericValue, label, context, trend, barWidth = 60, featured = false
}) => {
  const { value: animated, ref } = useCountUp(numericValue ?? 0);
  const display = numericValue !== undefined ? (value.includes('%') ? `${animated}%` : `${animated}`) : value;

  return (
    <div className={`stat-card ${featured ? 'featured' : ''}`}>
      <span className="stat-value" ref={ref}>{display}</span>
      <div className="stat-label">{label}</div>
      <div className="stat-context">{context}</div>
      {trend && <div className={`stat-trend ${trend.startsWith('+') ? 'up' : 'data'}`}>{trend}</div>}
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ width: `${barWidth}%` }} />
      </div>
    </div>
  );
};

/* ─── Main component ─── */
const Statistics: React.FC = () => {
  return (
    <section className="statistics">
      <div className="statistics-inner">
        {/* Header */}
        <div className="stats-header">
          <div className="stats-header-text">
            <span className="section-label">Datos Globales Verificados</span>
            <h2 className="section-title">Dimensión del Problema</h2>
          </div>
          <div className="stats-sources">
            {['ONU Mujeres','WHO','UNESCO','Pew Research','FBI','Mossos/Interpol'].map(s => (
              <span key={s} className="stats-source-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="stats-grid">
          <StatCard
            value="58%"
            numericValue={58}
            label="Mujeres afectadas globalmente"
            context="16–58% según región · ONU 2024"
            barWidth={58}
            featured
          />
          <StatCard
            value="+300%"
            numericValue={300}
            label="Aumento durante pandemia"
            context="2020 — solo en 3 meses"
            trend="+300% en 2020"
            barWidth={100}
          />
          <StatCard
            value="73%"
            numericValue={73}
            label="Periodistas mujeres"
            context="Sufren violencia online · UNESCO"
            trend="↑ tendencia"
            barWidth={73}
          />
          <StatCard
            value="21%"
            numericValue={21}
            label="Acoso sexual online"
            context="Mujeres 18–29 años · Pew 2021"
            barWidth={21}
          />
          <StatCard
            value="96%"
            numericValue={96}
            label="Deepfakes son pornografía"
            context="No consensuada · Sensity AI"
            trend="96% no consensuados"
            barWidth={96}
          />
          <StatCard
            value="+1200%"
            numericValue={1200}
            label="Aumento anual sextorsión"
            context="Mossos d'Esquadra · 2023"
            trend="+1200% anual"
            barWidth={100}
          />
        </div>

        {/* Charts row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>
          {/* Trend area chart */}
          <div className="chart-wrapper" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 20, padding: 28 }}>
            <div className="chart-title" style={{ color: 'var(--cream)' }}>Evolución de Casos Reportados</div>
            <div className="chart-subtitle" style={{ color: 'rgba(240,234,216,.4)' }}>Índice base 2018 = 100 · Proyección normalizada</div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={trendData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#c9a84c" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#c9a84c" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.06)" />
                <XAxis dataKey="year" tick={{ fill: 'rgba(240,234,216,.4)', fontSize: 11, fontFamily: 'DM Mono' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'rgba(240,234,216,.3)', fontSize: 10, fontFamily: 'DM Mono' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#1a3a2a', border: '1px solid rgba(201,168,76,.3)', borderRadius: 8, color: '#f0ead8', fontSize: 12, fontFamily: 'DM Mono' }}
                  itemStyle={{ color: '#e8c85a' }}
                />
                <Area type="monotone" dataKey="cases" name="Índice" stroke="#c9a84c" strokeWidth={2.5} fill="url(#trendGrad)" dot={{ fill: '#c9a84c', r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Radar chart */}
          <div className="chart-wrapper" style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 20, padding: 28 }}>
            <div className="chart-title" style={{ color: 'var(--cream)' }}>Distribución por Tipo de Violencia</div>
            <div className="chart-subtitle" style={{ color: 'rgba(240,234,216,.4)' }}>Prevalencia relativa global · %</div>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={violenceRadar} margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                <PolarGrid stroke="rgba(255,255,255,.08)" />
                <PolarAngleAxis dataKey="type" tick={{ fill: 'rgba(240,234,216,.5)', fontSize: 9.5, fontFamily: 'DM Mono' }} />
                <Radar dataKey="pct" stroke="#6b9e7a" fill="#6b9e7a" fillOpacity={0.3} strokeWidth={2} />
                <Tooltip
                  contentStyle={{ background: '#1a3a2a', border: '1px solid rgba(107,158,122,.4)', borderRadius: 8, color: '#f0ead8', fontSize: 12, fontFamily: 'DM Mono' }}
                  itemStyle={{ color: '#8fbf9f' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;