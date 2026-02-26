# Guía Rápida de Inicio - VDCM

## En 3 Pasos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

### 3. Abrir en navegador
Abre automáticamente en `http://localhost:5173`

## Estructura del Proyecto

**Componentes principales:**
- `Header.tsx` - Banner principal impactante
- `Statistics.tsx` - Estadísticas globales
- `ViolenceExplorer.tsx` - Explorador de tipos de violencia (7 tipos)
- `PlatformMap.tsx` - Análisis por plataforma (8 plataformas)
- `Timeline.tsx` - Cronología 2005-2024
- `Stories.tsx` - Historias anonimizadas (7 casos)
- `Resources.tsx` - Recursos de denuncia y protección

**Base de datos:**
- `src/data/dataStore.ts` - Contiene todos los datos estructurados
  - 7 tipos de violencia digital
  - 8 plataformas analizadas
  - 7 historias reales anonimizadas
  - 12 eventos históricos
  - Centros de denuncia internacionales
  - Consejos de protección

## Modificar Datos

Todos los datos están centralizados en `src/data/dataStore.ts`:

```typescript
// Agregar nuevo tipo de violencia
export const violenceTypes: ViolenceType[] = [
  {
    id: 'nuevo-tipo',
    name: 'Nombre del Tipo',
    description: 'Descripción...',
    // ... resto de propiedades
  }
];

// Agregar nueva historia
export const stories: Story[] = [
  {
    id: 'story-x',
    title: 'Título de la historia',
    violenceType: 'id-del-tipo',
    // ... resto de propiedades
  }
];
```

## Personalizar Estilos

Los colores principales están en `src/styles/App.css`:

```css
:root {
  --accent-red: #d32f2f;      /* Color principal de urgencia */
  --accent-blue: #1976d2;     /* Color de información */
  --accent-green: #388e3c;    /* Color de acción/éxito */
  --accent-orange: #f57c00;   /* Color de advertencia */
}
```

## Compilar para Producción

```bash
npm run build
```

Genera carpeta `dist/` lista para deployment.

## Características Principales

✓ 7 tipos de violencia digital con estadísticas
✓ 8 plataformas analizadas con tasas de incidentes
✓ 7 historias anonimizadas reales
✓ Timeline interactivo de 12 eventos clave
✓ Centros de denuncia internacionales
✓ Consejos de protección digital
✓ Organizaciones especializadas
✓ Diseño responsive (mobile-first)
✓ Navegación intuitiva
✓ Animaciones significativas
✓ Accesibilidad WCAG 2.1

## Preguntas Frecuentes

**¿Dónde están los datos?**
En `src/data/dataStore.ts` - toda la información está centralizada para fácil mantenimiento.

**¿Puedo agregar más historias?**
Sí, en `stories` array. Asegúrate de mantener anonimato completo.

**¿Cómo cambio colores?**
Edita las variables CSS en `src/styles/App.css`

**¿Es responsive?**
Sí, con breakpoints en 768px y 968px.

**¿Qué navegadores soporta?**
Todos los navegadores modernos (Chrome, Firefox, Safari, Edge).

## Estructura de Navegación

```
Inicio
├── Tipos de Violencia (7 tipos explorables)
├── Plataformas (8 plataformas con análisis)
├── Timeline (12 eventos históricos)
├── Historias (7 casos anonimizados)
└── Recursos
    ├── Denunciar (centros oficiales)
    ├── Protegerse (consejos prácticos)
    └── Apoyo (organizaciones especializadas)
```

## Datos Incluidos

### Tipos de Violencia
1. Ciberacoso (15%)
2. Sextorsión (10%)
3. Grooming (12%)
4. Revenge Porn (10%)
5. Deepfakes (6%)
6. Acoso Sexual (21%)
7. Doxxing (8%)

### Plataformas
1. Facebook (62%)
2. Twitter/X (24%)
3. Instagram (20%)
4. TikTok (28%)
5. WhatsApp (31%)
6. Discord (35%)
7. Dating Apps (37%)
8. Gaming (40%)

### Recursos de Denuncia
- Unidad de Ciberdelincuencia de Mossos d'Esquadra
- INTERPOL
- CyberTipline (NCMEC)
- Internet Watch Foundation (UK)
- Europol
- Unidades nacionales especializadas

## Licencia

Herramienta educativa de código abierto para concienciación global.

---

Para más información, ver `README.md`
