/* ── Re-export everything from the existing dataStore + add new typed exports ── */

export interface ReportingChannel {
  id: string;
  name: string;
  description: string;
  urgency: string;
  jurisdiction: string;
  availability: string;
  url: string;
}

export interface SupportOrganization {
  id: string;
  name: string;
  focus: string;
  description: string;
  services: string[];
  website: string;
}

export interface ProtectionTip {
  title: string;
  description: string;
  actions: string[];
}

export const reportingChannels: ReportingChannel[] = [
  {
    id: 'csirt',
    name: 'CSIRT — Mossos d\'Esquadra',
    description: 'Centro oficial de respuesta a incidentes cibernéticos en Catalunya. Especializado en sextorsión, grooming y doxxing.',
    urgency: 'URGENTE',
    jurisdiction: 'España / Catalunya',
    availability: '24h · 7 días',
    url: 'https://www.csirt.es/index.php/es/',
  },
  {
    id: 'interpol',
    name: 'INTERPOL — Ciberdelitos',
    description: 'Organización internacional de policía para crímenes transnacionales. Coordinación global en casos de violencia digital.',
    urgency: 'INTERNACIONAL',
    jurisdiction: 'Internacional',
    availability: 'Oficinas en 195 países',
    url: 'https://www.interpol.int',
  },
  {
    id: 'ncmec',
    name: 'CyberTipline — NCMEC',
    description: 'Centro Nacional de Niños Desaparecidos y Explotados. Para casos de grooming, explotación infantil y revenge porn.',
    urgency: 'MENORES',
    jurisdiction: 'Global (USA base)',
    availability: '24h',
    url: 'https://www.cybertipline.org',
  },
  {
    id: 'iwf',
    name: 'Internet Watch Foundation',
    description: 'Organización especializada en eliminar contenido sexual ilegal online, incluyendo deepfakes y revenge porn.',
    urgency: 'CONTENIDO',
    jurisdiction: 'Europa / Global',
    availability: 'Lun–Vie 9h–17h',
    url: 'https://www.iwf.org.uk',
  },
  {
    id: 'europol',
    name: 'Europol — EC3',
    description: 'Agencia europea de aplicación de la ley. Centro Europeo de Cibercrimen para delitos digitales graves.',
    urgency: 'EUROPEO',
    jurisdiction: 'Unión Europea',
    availability: 'Via policía nacional',
    url: 'https://www.europol.europa.eu',
  },
  {
    id: 'incibe',
    name: 'INCIBE — España',
    description: 'Instituto Nacional de Ciberseguridad. Línea de ayuda gratuita para incidentes de seguridad y acoso digital.',
    urgency: 'NACIONAL',
    jurisdiction: 'España',
    availability: '017 · 24h',
    url: 'https://www.incibe.es',
  },
];

export const supportOrganizations: SupportOrganization[] = [
  {
    id: 'ccri',
    name: 'Cyber Civil Rights Initiative',
    focus: 'revenge porn · acoso cibernético',
    description: 'Organización líder en derechos digitales especializada en pornografía no consensuada y acoso digital de género.',
    services: ['Asesoría legal', 'Remoción de contenido', 'Apoyo psicológico'],
    website: 'https://cybercivilrights.org',
  },
  {
    id: 'thorn',
    name: 'Thorn',
    focus: 'explotación infantil · grooming',
    description: 'Desarrolla tecnología para detectar y eliminar material de abuso sexual infantil. Recursos para supervivientes.',
    services: ['Tecnología de detección', 'Formación', 'Recursos supervivientes'],
    website: 'https://www.thorn.org',
  },
  {
    id: 'wmc',
    name: 'Women\'s Media Center',
    focus: 'violencia digital · mujeres públicas',
    description: 'Documenta y combate la violencia digital contra mujeres en espacios públicos y medios de comunicación.',
    services: ['Investigación', 'Advocacy', 'Recursos educativos'],
    website: 'https://womensmediacenter.com',
  },
  {
    id: 'amnesty',
    name: 'Amnesty International',
    focus: 'derechos digitales · libertad expresión',
    description: 'Investiga y documenta la violencia online contra mujeres como vulneración de derechos humanos fundamentales.',
    services: ['Advocacy', 'Documentación', 'Cambio de políticas'],
    website: 'https://www.amnesty.org',
  },
  {
    id: 'unwomen',
    name: 'ONU Mujeres',
    focus: 'violencia de género digital · global',
    description: 'Entidad de la ONU dedicada a la igualdad de género. Base de datos global y recursos internacionales.',
    services: ['Datos globales', 'Recursos', 'Advocacy internacional'],
    website: 'https://www.unwomen.org',
  },
];

export const protectionTips: ProtectionTip[] = [
  {
    title: 'Privacidad Básica',
    description: 'Configura tus redes sociales para minimizar la exposición de datos personales.',
    actions: [
      'Revisar configuración de privacidad semanalmente',
      'Limitar publicaciones a amigos cercanos únicamente',
      'Desactivar geolocalización en fotos y perfiles',
      'No compartir número de teléfono públicamente',
      'Usar seudónimo en lugar de nombre real si es posible',
    ],
  },
  {
    title: 'Contraseñas y Seguridad',
    description: 'Protege el acceso a tus cuentas con autenticación robusta.',
    actions: [
      'Contraseñas únicas de ≥12 caracteres por cuenta',
      'Activar 2FA en todas las cuentas posibles',
      'Usar un gestor de contraseñas (Bitwarden, 1Password)',
      'Cambiar contraseñas sospechosas inmediatamente',
      'Verificar brechas en haveibeenpwned.com',
    ],
  },
  {
    title: 'Contenido Íntimo',
    description: 'Precauciones específicas para proteger tu privacidad íntima.',
    actions: [
      'No enviar fotos íntimas por mensajería convencional',
      'Eliminar metadatos EXIF antes de compartir imágenes',
      'Usar plataformas end-to-end encrypted si es necesario',
      'Nunca incluir cara o marcas identificables',
      'Documentar cualquier presión o chantaje antes de responder',
    ],
  },
  {
    title: 'Relaciones Online',
    description: 'Protégete al establecer relaciones a través de internet.',
    actions: [
      'Realizar videollamada antes de cualquier confianza profunda',
      'Verificar identidad en múltiples plataformas independientes',
      'Desconfiar de solicitudes rápidas de contenido íntimo',
      'Informar a alguien de confianza sobre relaciones nuevas',
    ],
  },
  {
    title: 'Ante un Incidente',
    description: 'Pasos críticos si ya has sufrido violencia digital.',
    actions: [
      'NO pagar nunca a extorsionadores (escala la demanda)',
      'Capturar screenshots y URLs como evidencia legal',
      'Reportar inmediatamente a plataforma y policía',
      'No responder ni confrontar al agresor',
      'Contactar una organización especializada',
      'Buscar asesoría legal sin demora',
    ],
  },
];

/* ─── Re-export from original dataStore ─── */
export type { ViolenceType, Platform, Story, TimelineEvent } from './dataStore';
export { violenceTypes, platforms, stories, timelineEvents } from './dataStore';