# VDCM - Violencia Digital Contra la Mujer

Una plataforma web interactiva, educativa e impactante dedicada a la concienciación sobre violencia digital contra la mujer.

## Descripción del Proyecto

VDCM es una aplicación React/TypeScript que proporciona:

- **Análisis de 7 tipos de violencia digital**: Ciberacoso, sextorsión, grooming, stalking, revenge porn, deepfakes y acoso sexual online
- **Visualización por plataforma**: Análisis detallado de incidentes en Instagram, TikTok, Twitter/X, WhatsApp, Discord, Dating Apps y Gaming
- **Historias anonimizadas reales**: 7 testimonios verificados del impacto real
- **Timeline histórico**: Cronología desde 2005 hasta 2024 de eventos legales, investigativos e incidentes
- **Recursos prácticos**: Centros de denuncia internacionales, consejos de protección y organizaciones de apoyo
- **Diseño orientado al impacto**: Interfaz profesional que conciencia sin sensacionalismo

## Arquitectura

### Estructura de Carpetas

```
src/
├── components/
│   ├── App.tsx                 // Componente principal
│   ├── Navigation.tsx          // Navegación sticky
│   ├── Header.tsx              // Encabezado con stats
│   ├── Statistics.tsx          // Grid de estadísticas globales
│   ├── ViolenceExplorer.tsx    // Explorador de tipos de violencia
│   ├── PlatformMap.tsx         // Análisis por plataforma
│   ├── Timeline.tsx            // Timeline histórico
│   ├── Stories.tsx             // Historias anonimizadas
│   ├── Resources.tsx           // Recursos de denuncia y protección
│   └── Footer.tsx              // Pie de página
├── data/
│   └── dataStore.ts            // Base de datos centralizada
├── styles/
│   ├── App.css                 // Estilos globales
│   ├── Navigation.css
│   ├── Header.css
│   ├── Statistics.css
│   ├── ViolenceExplorer.css
│   ├── PlatformMap.css
│   ├── Timeline.css
│   ├── Stories.css
│   ├── Resources.css
│   └── Footer.css
├── index.tsx                   // Entry point
└── vite.config.ts              // Configuración Vite
```

## Características Principales

### 1. Tipos de Violencia Digital

Cada tipo incluye:
- Descripción clara y accesible
- Prevalencia global (%)
- Grupo de edad afectado
- Signos y síntomas de identificación
- Estadísticas clave
- Canales oficiales de denuncia
- Avisos de seguridad

Tipos cubiertos:
- Ciberacoso (Cyberstalking)
- Sextorsión
- Grooming Sexual Online
- Pornografía de Venganza (Revenge Porn)
- Deepfakes
- Acoso Sexual Online
- Doxxing

### 2. Análisis por Plataforma

8 plataformas analizadas:
- Facebook (62% harassment rate)
- Twitter/X (24%)
- Instagram (20%)
- TikTok (28%)
- WhatsApp (31%)
- Discord (35%)
- Dating Apps (37%)
- Gaming (40%)

Cada plataforma incluye:
- Visualización de tasa de harassment
- Tipos de violencia predominantes
- Estadísticas de usuarias afectadas
- Proceso oficial de reporte
- Enlace a centro de ayuda

### 3. Historias Anonimizadas

7 casos reales pero anonimizados que muestran:
- Narrativa de lo ocurrido
- Impacto psicológico
- Ayuda buscada
- Resolución del caso
- Reflexión sobre la realidad global

### 4. Timeline Interactivo

12 eventos clave desde 2005 hasta 2024:
- Investigaciones académicas
- Leyes implementadas
- Incidentes documentados
- Avances tecnológicos
- Iniciativas de conciencia

Filtrable por categoría:
- Marco Legal
- Investigación
- Incidente
- Conciencia
- Tecnología

### 5. Recursos Completos

#### Centros de Denuncia Oficiales
- Unidad de Ciberdelincuencia de Mossos d'Esquadra (Barcelona)
- INTERPOL
- CyberTipline (NCMEC)
- Internet Watch Foundation (UK)
- Europol
- Unidades nacionales especializadas

#### Consejos de Protección
- Privacidad básica
- Seguridad de contraseñas
- Gestión de contenido íntimo
- Relaciones online seguras
- Respuesta ante incidentes

#### Organizaciones de Apoyo
- Cyber Civil Rights Initiative
- Thorn
- Women's Media Center
- Amnesty International
- ONU Mujeres

## Tecnologías Utilizadas

### Frontend
- **React 18.2**: Framework UI
- **TypeScript 5.2**: Tipado estático
- **Vite 5.0**: Build tool rápido
- **CSS3**: Estilos modernos sin framework

### Características Técnicas
- Componentes funcionales con hooks
- Gestión de estado con useState
- SPA (Single Page Application)
- Responsive design (mobile-first)
- Accesibilidad (WCAG 2.1)
- Optimización de rendimiento

## Principios de Diseño

### Visual
- Paleta de colores directa: rojo para urgencia, azul para información, verde para acción
- Tipografía clara y legible
- Espaciado generoso para claridad
- Animaciones significativas sin exceso
- Dark header con gradientes dinámicos

### Interactividad
- Navegación sticky clara
- Filtros interactivos sin recarga
- Expansión suave de contenido
- Transiciones fluidas
- Indicadores de estado claros

### Accesibilidad
- Navegación por teclado
- Contraste de color adecuado
- Alt text en todos los elementos
- Jerarquía de títulos correcta
- Reducción de movimiento respetada

## Datos y Fuentes

Todos los datos provienen de fuentes verificadas:

- **ONU Mujeres**: Global Database on Violence Against Women
- **WHO**: Violence Against Women Survey
- **UNESCO**: Online Violence Against Women Study
- **Pew Research Center**: Online Harassment Research
- **Unidad de Ciberdelincuencia de Mossos d'Esquadra & INTERPOL**: Cybercrime Statistics
- **Women's Media Center**: Verified Statistics Database
- **World Bank**: Gender Data Portal

**Última actualización**: Febrero 2026

## Estructura de Datos

### ViolenceType
```typescript
{
  id: string;
  name: string;
  description: string;
  prevalence: string;
  prevalenceNumber: number;
  ageGroup?: string;
  primarySource: string;
  warning: string;
  signsAndSymptoms: string[];
  reportingChannels: string[];
  statistics: { label: string; value: string }[];
}
```

### Platform
```typescript
{
  id: string;
  name: string;
  icon: string;
  harassmentRate: number;
  primaryViolenceTypes: string[];
  reportingProcess: string;
  contactEmail?: string;
  helpLink: string;
  statistics: { affectedUsers: string; incidentsMonthly: string };
}
```

### Story
```typescript
{
  id: string;
  title: string;
  violenceType: string;
  platform: string;
  ageGroup: string;
  duration: string;
  narrative: string;
  impact: string;
  resolution: string;
  helpSought: string[];
}
```

## Instalación y Desarrollo

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
cd /path/to/project
npm install
```

### Desarrollo Local

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

### Build Producción

```bash
npm run build
npm run preview
```

## Consideraciones Éticas

- Todas las historias están completamente anonimizadas
- Datos basados en fuentes públicas verificadas
- Respeto por la privacidad de víctimas
- Lenguaje sensible pero directo
- Presentación sin sensacionalismo
- Énfasis en acción y recursos

## Mejoras Futuras

- Integración con APIs de centros de denuncia
- Chat con asesor especializado
- Cuestionario de autoevaluación de riesgo
- Formulario de denuncia anónima integrado
- Disponibilidad en múltiples idiomas
- Estadísticas en tiempo real
- Directorio de psicólogos especializados por país

## Contribución

Este proyecto es una herramienta educativa abierta. Para contribuciones:
1. Verificar toda nueva información con 2+ fuentes oficiales
2. Mantener anonimato completo de historias
3. Respetar principios éticos
4. Seguir guía de estilo TypeScript/React

## Licencia

Este proyecto está disponible bajo licencia educativa de código abierto para fines de concienciación.

## Contacto y Recursos

Para información sobre violencia digital:
- ONU Mujeres: unwomen.org
- WHO: who.int
- Cyber Civil Rights: cybercivilrights.org
- Thorn: thorn.org

## Agradecimientos

Este proyecto fue desarrollado como herramienta de concienciación global sobre violencia digital contra la mujer, utilizando datos de organizaciones internacionales especializadas.

---

**VDCM** - Porque la violencia digital es violencia real, y merece visibilidad, acción y justicia.
