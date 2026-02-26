export interface ViolenceType {
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
  statistics: {
    label: string;
    value: string;
  }[];
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  harassmentRate: number;
  primaryViolenceTypes: string[];
  reportingProcess: string;
  contactEmail?: string;
  helpLink: string;
  statistics: {
    affectedUsers: string;
    incidentsMonthly: string;
  };
}

export interface Story {
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

export interface TimelineEvent {
  id: string;
  year: number;
  month: string;
  title: string;
  description: string;
  violenceType: string;
  impact: string;
  category: 'legal' | 'research' | 'incident' | 'awareness' | 'technology';
}

export const violenceTypes: ViolenceType[] = [
  {
    id: 'cyberstalking',
    name: 'Ciberacoso (Cyberstalking)',
    description: 'Seguimiento persistente, vigilancia y contacto no deseado a través de medios digitales',
    prevalence: '15%',
    prevalenceNumber: 15,
    ageGroup: 'Todas las edades, especialmente 18-29',
    primarySource: 'WHO 2024',
    warning: 'Puede escalar a violencia física. Requiere intervención inmediata.',
    signsAndSymptoms: [
      'Mensajes repetidos no solicitados',
      'Vigilancia de perfiles y ubicaciones',
      'Amenazas de daño personal',
      'Creación de perfiles falsos para seguir',
      'Monitoreo de actividad online'
    ],
    reportingChannels: [
      'Policía local (delito de acoso)',
      'Plataforma social (reportar cuenta)',
      'Centro de denuncias online',
      'Línea de protección de violencia de género'
    ],
    statistics: [
      {
        label: 'Mujeres afectadas globalmente',
        value: '15%'
      },
      {
        label: 'Casos que escalan a violencia física',
        value: '30%'
      },
      {
        label: 'Edad promedio de víctimas',
        value: '18-45 años'
      }
    ]
  },
  {
    id: 'sextortion',
    name: 'Sextorsión',
    description: 'Chantaje mediante contenido sexual para extorsión económica o de más contenido',
    prevalence: '8-12%',
    prevalenceNumber: 10,
    ageGroup: '13-35 años (principalmente jóvenes)',
    primarySource: 'Unidad de Ciberdelincuencia de Mossos de escuadra & Interpol 2024',
    warning: 'Delito grave. Nunca pagar. Contactar autoridades inmediatamente.',
    signsAndSymptoms: [
      'Solicitudes de dinero bajo amenaza',
      'Amenaza de publicación de contenido íntimo',
      'Extorsión continuada incluso después de pagar',
      'Presión psicológica severa',
      'Aislamiento y depresión'
    ],
    reportingChannels: [
      'Unidad de Ciberdelincuencia de Mossos de Escuadra',
      'Interpol (si es internacional)',
      'Policía local',
      'Centro de ciberdelitos nacional',
      'Línea directa de sextorsión'
    ],
    statistics: [
      {
        label: 'Aumento anual',
        value: '1200%'
      },
      {
        label: 'Edad promedio de víctimas',
        value: '15-25 años'
      },
      {
        label: 'Éxito en extorsión',
        value: '23%'
      }
    ]
  },
  {
    id: 'grooming',
    name: 'Grooming Sexual Online',
    description: 'Manipulación gradual de menores para obtener contenido sexual o contacto físico',
    prevalence: '9-15%',
    prevalenceNumber: 12,
    ageGroup: 'Niños y adolescentes (8-17 años)',
    primarySource: 'NCMEC & Thorn 2024',
    warning: 'Delito grave contra menores. Requiere intervención especializada inmediata.',
    signsAndSymptoms: [
      'Adultos intentando amistad con menores',
      'Solicitud gradual de información personal',
      'Envío de regalos o dinero digital',
      'Aislamiento del menor de amigos y familia',
      'Solicitud progresiva de contenido sexual',
      'Chantaje con contenido para más favores'
    ],
    reportingChannels: [
      'NCMEC (CyberTipline)',
      'Policía local',
      'Centro de protección de menores',
      'Internet Watch Foundation',
      'Línea de denuncias de explotación infantil'
    ],
    statistics: [
      {
        label: 'Menores afectados globalmente',
        value: '1 de cada 10'
      },
      {
        label: 'Edad promedio de víctimas',
        value: '12-15 años'
      },
      {
        label: 'Contacto físico posterior',
        value: '18%'
      }
    ]
  },
  {
    id: 'revenge-porn',
    name: 'Pornografía de Venganza (Revenge Porn)',
    description: 'Distribución no consentida de contenido íntimo con intención de dañar',
    prevalence: '10%',
    prevalenceNumber: 10,
    ageGroup: '16-40 años',
    primarySource: "Women's Media Center 2024",
    warning: '90% de víctimas son mujeres. Delito grave con penas carcelarias en muchos países.',
    signsAndSymptoms: [
      'Descubrimiento de contenido íntimo publicado sin consentimiento',
      'Mensajes burlones sobre el contenido',
      'Impacto en reputación profesional y personal',
      'Daño psicológico severo y ansiedad',
      'Presión de compañeros y en redes sociales'
    ],
    reportingChannels: [
      'Plataforma donde está publicado (DMCA takedown)',
      'Policía (delito de difusión no consentida)',
      'Organizaciones especializadas (Cyber Civil Rights)',
      'Servicios legales de derechos digitales',
      'Centro de denuncias de violencia de género'
    ],
    statistics: [
      {
        label: 'Víctimas que son mujeres',
        value: '90%'
      },
      {
        label: 'Intento de suicidio post-publicación',
        value: '35%'
      },
      {
        label: 'Impacto en carrera profesional',
        value: '73%'
      }
    ]
  },
  {
    id: 'deepfakes',
    name: 'Deepfakes de Contenido Sexual',
    description: 'Vídeos manipulados con IA que crean contenido sexual falso sin consentimiento',
    prevalence: '5-8%',
    prevalenceNumber: 6,
    ageGroup: '15-40 años',
    primarySource: 'Sensity AI 2024',
    warning: 'Tecnología emergente. 96% es pornografía no consensuada. Imposible eliminar completamente.',
    signsAndSymptoms: [
      'Aparición de vídeos manipulados en redes',
      'Distribución viral sin control',
      'Dificultad de identificación inicial',
      'Impacto psicológico catastrófico',
      'Daño reputacional irreversible'
    ],
    reportingChannels: [
      'Plataformas especializadas de detección (Sensity)',
      'Centro de denuncias de deepfakes',
      'Policía local (ciberdelitos)',
      'Abogados especializados en tecnología',
      'Organizaciones de derechos de imagen'
    ],
    statistics: [
      {
        label: 'Contenido sexual de deepfakes',
        value: '96%'
      },
      {
        label: 'Víctimas que son mujeres',
        value: '99%'
      },
      {
        label: 'Aumento anual de creación',
        value: '84%'
      }
    ]
  },
  {
    id: 'sexual-harassment',
    name: 'Acoso Sexual Online',
    description: 'Comentarios, imágenes o mensajes de naturaleza sexual no deseados',
    prevalence: '21%',
    prevalenceNumber: 21,
    ageGroup: '18-29 años (especialmente)',
    primarySource: 'Pew Research 2021',
    warning: 'Extremadamente común. Afecta salud mental y seguridad. Escalación frecuente.',
    signsAndSymptoms: [
      'Comentarios sexuales no solicitados',
      'Envío de imágenes explícitas sin solicitud',
      'Invitaciones sexuales persistentes',
      'Insinuaciones y dobles sentidos',
      'Proposiciones con ventajas materiales',
      'Mensajes a través de múltiples plataformas'
    ],
    reportingChannels: [
      'Reportar en la plataforma',
      'Bloquear usuario',
      'Guardar evidencia',
      'Policía (acoso sexual online)',
      'Línea de ayuda especializada'
    ],
    statistics: [
      {
        label: 'Mujeres 18-29 afectadas',
        value: '21%'
      },
      {
        label: 'Imágenes explícitas no solicitadas',
        value: '53%'
      },
      {
        label: 'Ocurre en redes sociales',
        value: '75%'
      }
    ]
  },
  {
    id: 'doxing',
    name: 'Doxxing',
    description: 'Publicación no autorizada de información personal para hostigamiento o amenaza',
    prevalence: '8%',
    prevalenceNumber: 8,
    ageGroup: 'Todas las edades, especialmente activistas y público',
    primarySource: 'Amnesty 2024',
    warning: 'Puede llevar a violencia física, empleabilidad comprometida, acoso coordinado.',
    signsAndSymptoms: [
      'Publicación de dirección personal',
      'Divulgación de número telefónico',
      'Revelación de información laboral',
      'Publicación de nombres de familia/amigos',
      'Mapa con ubicación exacta',
      'Información de redes bancarias o educativas'
    ],
    reportingChannels: [
      'Policía (amenaza y acoso)',
      'Plataforma (violación de privacidad)',
      'Proveedores de alojamiento (DMCA)',
      'Abogado especializado',
      'Agencia de ciberseguridad nacional'
    ],
    statistics: [
      {
        label: 'Mujeres activistas afectadas',
        value: '8%'
      },
      {
        label: 'Información expuesta en línea',
        value: '100%'
      },
      {
        label: 'Posterior acoso o amenaza',
        value: '67%'
      }
    ]
  }
];

export const platforms: Platform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'F',
    harassmentRate: 62,
    primaryViolenceTypes: ['cyberstalking', 'sexual-harassment', 'doxing'],
    reportingProcess: 'Botón de "No me gusta" en comentario/publicación > Reportar > Seleccionar razón',
    contactEmail: 'trust-safety@.com',
    helpLink: 'facebook.com/help/safety',
    statistics: {
      affectedUsers: '1.2 mil millones de usuarias',
      incidentsMonthly: '45 millones reportados'
    }
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    icon: 'X',
    harassmentRate: 24,
    primaryViolenceTypes: ['sexual-harassment', 'doxing', 'cyberstalking'],
    reportingProcess: 'Menú (•••) en tweet > Reportar tweet > Categoría de abuso > Enviar',
    contactEmail: 'report@twitter.com',
    helpLink: 'help.twitter.com/en/safety-and-security',
    statistics: {
      affectedUsers: '368 millones de usuarias',
      incidentsMonthly: '12 millones reportados'
    }
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'I',
    harassmentRate: 20,
    primaryViolenceTypes: ['sexual-harassment', 'revenge-porn', 'cyberstalking'],
    reportingProcess: '(•••) en comentario/publicación > Reportar > Seleccionar razón > Enviar',
    contactEmail: 'privacy@instagram.com',
    helpLink: 'help.instagram.com/contact/169839436915904',
    statistics: {
      affectedUsers: '464 millones de usuarias',
      incidentsMonthly: '18 millones reportados'
    }
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: 'T',
    harassmentRate: 28,
    primaryViolenceTypes: ['grooming', 'sextortion', 'sexual-harassment'],
    reportingProcess: 'Compartir (→) > Reportar > Categoría > Enviar',
    helpLink: 'tiktok.com/safety/en-US',
    statistics: {
      affectedUsers: '925 millones de usuarias',
      incidentsMonthly: '8.5 millones reportados'
    }
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: 'W',
    harassmentRate: 31,
    primaryViolenceTypes: ['sextortion', 'grooming', 'cyberstalking'],
    reportingProcess: 'Mantener presionado mensaje > Reportar > Bloquear contacto',
    helpLink: 'faq.whatsapp.com/en/security',
    statistics: {
      affectedUsers: '2 mil millones de usuarias',
      incidentsMonthly: '35 millones reportados'
    }
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: 'D',
    harassmentRate: 35,
    primaryViolenceTypes: ['grooming', 'sexual-harassment', 'sextortion'],
    reportingProcess: 'Click derecho en mensaje > Reportar mensaje > Detallar motivo',
    helpLink: 'support.discord.com/hc/en-us/articles/360000291932',
    statistics: {
      affectedUsers: '560 millones de usuarias',
      incidentsMonthly: '5.2 millones reportados'
    }
  },
  {
    id: 'dating-apps',
    name: 'Aplicaciones de Citas',
    icon: 'A',
    harassmentRate: 37,
    primaryViolenceTypes: ['sexual-harassment', 'sextortion', 'grooming'],
    reportingProcess: 'Perfil > Reportar usuario > Motivo > Bloquear y reportar',
    helpLink: 'match.com/safety',
    statistics: {
      affectedUsers: '185 millones de usuarias',
      incidentsMonthly: '2.8 millones reportados'
    }
  },
  {
    id: 'gaming',
    name: 'Plataformas Gaming',
    icon: 'G',
    harassmentRate: 40,
    primaryViolenceTypes: ['sexual-harassment', 'cyberstalking', 'grooming'],
    reportingProcess: 'Reportar jugador en sesión > Centro de seguridad > Enviado a moderadores',
    helpLink: 'support.microsoft.com/en-us/account-billing/report-abuse',
    statistics: {
      affectedUsers: '1.3 mil millones de jugadoras',
      incidentsMonthly: '22 millones reportados'
    }
  }
];

export const stories: Story[] = [
  {
    id: 'story-1',
    title: 'El Ciclo del Ciberacoso',
    violenceType: 'cyberstalking',
    platform: 'Instagram',
    ageGroup: '22 años',
    duration: '8 meses',
    narrative: 'Una profesional joven notó que su expareja creaba perfiles falsos para monitorear sus actividades. Veía que dejaba comentarios en viejas fotos, aumentando la frecuencia. Después de terminar la relación, los mensajes escalaron a amenazas de publicar sus conversaciones privadas.',
    impact: 'Ansiedad severa, paranoia en espacios públicos, incapacidad de concentrarse en el trabajo, aislamiento voluntario.',
    resolution: 'Presentó denuncia formal con screenshot de todos los mensajes. La policía ordenó una orden de restricción. Los perfiles fueron eliminados tras investigación de Meta.',
    helpSought: ['Policía local', 'Psicólogo', 'Abogado', 'Línea de ayuda 24h']
  },
  {
    id: 'story-2',
    title: 'Trampa de Sextorsión',
    violenceType: 'sextortion',
    platform: 'Discord',
    ageGroup: '19 años',
    duration: '6 meses',
    narrative: 'Una estudiante fue contactada en Discord por alguien que parecía un compañero de clase. Después de establecer confianza, le pidieron una foto íntima. Luego, mostraron capturas de pantalla falsas de su familia conocida y pidieron dinero o publicarían la foto.',
    impact: 'Depresión severa, dificultades académicas, síntomas de TEPT, vergüenza y culpa, aislamiento de amigos.',
    resolution: 'No pagó. Reportó a Discord. Descubrieron que era una operación internacional. Se bloquearon 47 cuentas asociadas.',
    helpSought: ['Discord Safety', 'Psicólogo especializado', 'Grupo de apoyo para víctimas']
  },
  {
    id: 'story-3',
    title: 'La Verdad Detrás del Perfil',
    violenceType: 'grooming',
    platform: 'TikTok',
    ageGroup: '14 años',
    duration: '4 meses',
    narrative: 'Una adolescente fue seguida por un adulto que se presentaba como un chico de 16 años interesado en su contenido. Enviaba regalos digitales, la halagaba constantemente y gradualmente le pedía fotos cada vez más provocativas. Sus amigas notaron cambios en su comportamiento.',
    impact: 'Pérdida de confianza en adultos, comportamiento sexual inapropiado, depresión, cambios de humor extremos.',
    resolution: 'Los padres descubrieron el grooming. Reportaron a TikTok y a las autoridades. Se identificó al adulto. Fue procesado bajo leyes de explotación infantil.',
    helpSought: ['Padres', 'Psicólogo infantil', 'Policía especializada', 'Centro de protección de menores']
  },
  {
    id: 'story-4',
    title: 'Cuando la Intimidad Fue Arma',
    violenceType: 'revenge-porn',
    platform: 'Facebook',
    ageGroup: '26 años',
    duration: 'Publicación continua durante 3 meses',
    narrative: 'Una mujer compartió fotos íntimas con su novio durante años de relación. Al separarse, él publicó las fotos en Facebook, Instagram y sitios de porn. Las fotos se replicaron a través de decenas de sitios y grupos privados.',
    impact: 'Pérdida de empleo (jefe vio imágenes), ruptura familiar, intentos de suicidio, imposibilidad de relaciones nuevas.',
    resolution: 'Contactó Cyber Civil Rights Initiative. Presentó DMCA takedowns en múltiples plataformas. El ex fue demandado civil y criminalmente. Continúa lidiando con replicaciones.',
    helpSought: ['Cyber Civil Rights', 'Abogada especializada', 'Terapeuta TEPT', 'Grupo de apoyo']
  },
  {
    id: 'story-5',
    title: 'El Rostro Que Nunca Fue Suyo',
    violenceType: 'deepfakes',
    platform: 'Redes Múltiples',
    ageGroup: '31 años',
    duration: '2 meses',
    narrative: 'Una activista política fue objetivo de deepfakes pornográficos. Los videos la mostraban en actos sexuales explícitos. Se distribuyeron masivamente a través de Telegram, Reddit y grupos privados de WhatsApp para desacreditarla.',
    impact: 'Abandono de carrera política, amenazas de muerte, cambio de residencia, TEPT severo.',
    resolution: 'Trabajó con expertos en IA para rastrear origen. Contactó medios. Presionó legisladores para leyes contra deepfakes. Continúa lidiando con nuevas versiones.',
    helpSought: ['Organizaciones de derechos', 'Expertos en IA forense', 'Seguridad privada', 'Terapeuta especializado']
  },
  {
    id: 'story-6',
    title: 'Palabras Que Duelen Más Que Lo Físico',
    violenceType: 'sexual-harassment',
    platform: 'Twitter/X',
    ageGroup: '24 años',
    duration: 'Continuo durante 2 años',
    narrative: 'Una periodista que cubre temas de género comenzó a recibir comentarios sexuales sistemáticos bajo sus tweets. Diarios recibía mensajes explícitos, propuestas sexuales transaccionales y violaciones de su imagen corporal.',
    impact: 'Ansiedad social, abandono de redes sociales profesionales, afectación en carrera, insomnio.',
    resolution: 'Bloqueó agresivamente, reportó en masa. Twitter suspendió múltiples cuentas. Desarrolló protocolo de protección de privacidad.',
    helpSought: ['Centro de ciberseguridad', 'Sindicato de periodistas', 'Línea de apoyo', 'Grupo de periodistas mujeres']
  },
  {
    id: 'story-7',
    title: 'Donde Vive, Donde Trabaja, Donde Estudia',
    violenceType: 'doxing',
    platform: 'Reddit',
    ageGroup: '29 años',
    duration: '1 semana de exposición masiva',
    narrative: 'Una investigadora que publicó sobre discriminación fue hackeada. Su dirección, lugar de trabajo, teléfono y redes sociales de familia fueron publicadas en Reddit. Recibió amenazas de muerte coordinadas.',
    impact: 'Tuvo que mudarse, cambiar empleo, cambiar número de teléfono, aislamiento del círculo social.',
    resolution: 'Contactó Unidad de Ciberdelincuencia de Mossos de Esquadra. Se identificó el grupo responsable. Cambio de identidad digital. Instaló sistemas de seguridad.',
    helpSought: ['Agencia de seguridad privada', 'Abogado especializado', 'Terapeuta de trauma']
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-1',
    year: 2005,
    month: 'Marzo',
    title: 'Primeras Investigaciones Sobre Ciberacoso',
    description: 'Pew Research Center publica los primeros estudios sobre hostigamiento online.',
    violenceType: 'general',
    impact: 'Inicio de documentación académica de la problemática',
    category: 'research'
  },
  {
    id: 'event-2',
    year: 2010,
    month: 'Septiembre',
    title: 'Ley de Protección Contra Ciberacoso (UK)',
    description: 'Reino Unido implementa la Ley de Protección contra Acoso Electrónico.',
    violenceType: 'cyberstalking',
    impact: 'Primer marco legal específico para ciberacoso',
    category: 'legal'
  },
  {
    id: 'event-3',
    year: 2013,
    month: 'Mayo',
    title: 'Caso Audrie Pott - Violencia Escolar Digital',
    description: 'Caso de distribución de fotos íntimas en escuela secundaria termina en tragedia.',
    violenceType: 'revenge-porn',
    impact: 'Conciencia global sobre riesgos de violencia digital en menores',
    category: 'incident'
  },
  {
    id: 'event-4',
    year: 2016,
    month: 'Octubre',
    title: 'UNESCO Publica Estudio: Violencia Online Contra Mujeres Periodistas',
    description: 'UNESCO documenta que 73% de mujeres periodistas han sufrido violencia online.',
    violenceType: 'general',
    impact: 'Reconocimiento internacional de problema sistémico',
    category: 'research'
  },
  {
    id: 'event-5',
    year: 2017,
    month: 'Junio',
    title: 'Leyes Anti Revenge Porn en 46 Países',
    description: 'Se expanden leyes contra pornografía de venganza a nivel mundial.',
    violenceType: 'revenge-porn',
    impact: 'Marco legal para persecución de distribuidores de contenido íntimo',
    category: 'legal'
  },
  {
    id: 'event-6',
    year: 2019,
    month: 'Enero',
    title: 'Primera Condena Por Sextorsión a Escala Global',
    description: 'Detención internacional de operación de sextorsión de 300+ víctimas.',
    violenceType: 'sextortion',
    impact: 'Demostración de capacidad internacional para perseguir extorsionadores',
    category: 'legal'
  },
  {
    id: 'event-7',
    year: 2020,
    month: 'Marzo',
    title: 'Pandemia Aumenta Violencia Digital 300%',
    description: 'Con cuarentena, reportes de acoso online se triplican en plataformas.',
    violenceType: 'general',
    impact: 'Visualización de escala de problema bajo confinamiento',
    category: 'incident'
  },
  {
    id: 'event-8',
    year: 2020,
    month: 'Noviembre',
    title: 'Descubrimiento de Deepfakes Pornográficos Masivos',
    description: 'Senity AI descubre 15,000 deepfakes pornográficos, 96% de mujeres no consensuadas.',
    violenceType: 'deepfakes',
    impact: 'Revelación de nueva forma de violencia digital asimétrica',
    category: 'research'
  },
  {
    id: 'event-9',
    year: 2021,
    month: 'Agosto',
    title: 'Ley India Contra Grooming y Sextorsión',
    description: 'India criminaliza grooming online con penas de hasta 5 años de cárcel.',
    violenceType: 'grooming',
    impact: 'Protección legal específica para menores contra grooming',
    category: 'legal'
  },
  {
    id: 'event-10',
    year: 2023,
    month: 'Marzo',
    title: 'Meta (Facebook/Instagram) Implementa AI de Detección Proactiva',
    description: 'Meta anuncia sistemas de IA que detectan y remiten grooming automáticamente.',
    violenceType: 'grooming',
    impact: 'Tecnología de defensa para identificar explotadores antes de contacto',
    category: 'technology'
  },
  {
    id: 'event-11',
    year: 2023,
    month: 'Octubre',
    title: 'Aumento de Sextorsión 1200% en Dos Años',
    description: 'Unidad de Ciberdelincuencia de Mossos de Escuadra reporta explosión exponencial en casos de sextorsión particularmente en adolescentes.',
    violenceType: 'sextortion',
    impact: 'Alerta global sobre amenaza emergente mayor',
    category: 'research'
  },
  {
    id: 'event-12',
    year: 2024,
    month: 'Febrero',
    title: 'Ley Contra Deepfakes Porno en 12 Países',
    description: 'Múltiples naciones criminalizan creación y distribución de deepfakes pornográficos.',
    violenceType: 'deepfakes',
    impact: 'Primer marco legal global contra deepfakes no consensuados',
    category: 'legal'
  }
];

export const resources = {
  reporting: [
    {
      category: 'Internacional',
      items: [
        {
          name: 'Unidad de Ciberdelincuencia de Mossos de Escuadra - Internet Crime Complaint Center',
          url: 'https://www.csirt.es/index.php/es/',
          types: ['sextortion', 'grooming', 'doxing'],
          description: 'Centro oficial de crímenes cibernéticos del Unidad de Ciberdelincuencia de Mossos de Esquadra'
        },
        {
          name: 'INTERPOL',
          url: 'interpol.int',
          types: ['sextortion', 'grooming'],
          description: 'Organización internacional de policía para crímenes transnacionales'
        },
        {
          name: 'CyberTipline (NCMEC)',
          url: 'cybertipline.org',
          types: ['grooming', 'child-exploitation'],
          description: 'Centro Nacional de Niños Desaparecidos y Explotados (USA)'
        }
      ]
    },
    {
      category: 'Europa',
      items: [
        {
          name: 'Internet Watch Foundation',
          url: 'iwf.org.uk',
          types: ['grooming', 'child-exploitation', 'revenge-porn'],
          description: 'Organización británica especializada en contenido ilegal online'
        },
        {
          name: 'Europol',
          url: 'europol.europa.eu',
          types: ['sextortion', 'grooming', 'doxing'],
          description: 'Agencia de aplicación de la ley de la Unión Europea'
        }
      ]
    },
    {
      category: 'América Latina',
      items: [
        {
          name: 'Centro de Ciberdelitos (Mexico)',
          url: 'gob.mx/policia-federal',
          types: ['sextortion', 'grooming', 'doxing'],
          description: 'Unidad especializada de ciberdelitos de México'
        },
        {
          name: 'Policía de Ciberdelitos (Brasil)',
          url: 'delegadosinternet.com.br',
          types: ['revenge-porn', 'sextortion', 'cyberstalking'],
          description: 'Delegacía especializada en ciberdelitos de Brasil'
        }
      ]
    },
    {
      category: 'España',
      items: [
        {
          name: 'Policía Nacional - Unidad de Ciberdelitos',
          url: 'policia.es',
          types: ['sextortion', 'grooming', 'doxing', 'cyberstalking'],
          description: 'Unidad especializada en ciberdelitos de España'
        },
        {
          name: 'Centro de Seguridad Internet (INCIBE)',
          url: 'incibe.es',
          types: ['general'],
          description: 'Instituto nacional de seguridad en internet'
        }
      ]
    }
  ],
  organizations: [
    {
      name: 'Cyber Civil Rights Initiative',
      url: 'cybercivilrights.org',
      focus: 'Revenge porn, acoso cibernético, violencia de género digital',
      services: ['Asesoría legal', 'Apoyo psicológico', 'Remoción de contenido']
    },
    {
      name: 'Thorn',
      url: 'thorn.org',
      focus: 'Explotación infantil y grooming',
      services: ['Tecnología de detección', 'Formación investigadores', 'Recursos']
    },
    {
      name: 'Women\'s Media Center',
      url: 'womensmediacenter.com',
      focus: 'Violencia digital contra mujeres en espacios públicos',
      services: ['Advocacy', 'Investigación', 'Recursos educativos']
    },
    {
      name: 'Amnesty International',
      url: 'amnesty.org',
      focus: 'Derechos digitales y violencia online',
      services: ['Advocacy', 'Documentación', 'Cambio de políticas']
    },
    {
      name: 'ONU Mujeres',
      url: 'unwomen.org',
      focus: 'Violencia de género digital a escala global',
      services: ['Datos, Recursos, Advocacy internacional']
    }
  ],
  protectionTips: [
    {
      type: 'Privacidad Básica',
      tips: [
        'Revisar configuración de privacidad en todas las plataformas semanalmente',
        'Limitar publicaciones visibles solo a amigos cercanos',
        'Desactivar localización en perfiles y fotos',
        'No compartir números de teléfono en plataformas públicas',
        'Usar nombre de usuario diferente del nombre real'
      ]
    },
    {
      type: 'Contraseñas y Seguridad',
      tips: [
        'Usar contraseñas únicas para cada plataforma (mínimo 12 caracteres)',
        'Activar autenticación de dos factores en todas las cuentas',
        'Usar gestor de contraseñas (1Password, Bitwarden)',
        'Cambiar contraseña cada 3 meses',
        'Nunca usar información personal predecible'
      ]
    },
    {
      type: 'Contenido Íntimo',
      tips: [
        'NUNCA enviar fotos íntimas a parejas nuevas (máximo esperar 2+ años)',
        'Usar aplicaciones de desvanecimiento de fotos (Snapchat)',
        'Si debe enviar, quitar datos EXIF de la foto',
        'Considerar usar VPN y dispositivo separado',
        'Tener copia de recuperación en almacenamiento seguro'
      ]
    },
    {
      type: 'Relaciones Online',
      tips: [
        'Videollamada antes de cualquier compromiso emocional',
        'Verificar información de la persona en múltiples plataformas',
        'Desconfiar de perfiles nuevos pidiendo contenido rápidamente',
        'No compartir credenciales de redes sociales',
        'Decirle a alguien de confianza sobre nuevas relaciones online'
      ]
    },
    {
      type: 'Si Ocurre un Incidente',
      tips: [
        'NO PAGAR a sextorsionadores (aumenta demanda)',
        'Reportar inmediatamente a plataforma y policía',
        'Guardar todas las pruebas digitales (screenshots, URLs)',
        'No responder a mensajes de extorsionadores',
        'Contactar organizaciones de apoyo especializadas',
        'Buscar asesoría legal sin demora'
      ]
    }
  ]
};
