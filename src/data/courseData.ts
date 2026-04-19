import type { Level, LessonMeta, Module } from '../types'

export const levels: Level[] = [
  { id: 1, name: 'Estudiante', chinese: '学徒' },
  { id: 2, name: 'Discípulo', chinese: '弟子' },
  { id: 3, name: 'Erudito', chinese: '学者' },
  { id: 4, name: 'Maestro', chinese: '大师' },
  { id: 5, name: 'Sabio', chinese: '智者' },
  { id: 6, name: 'Iluminado', chinese: '圣人' },
]

export const modules: Module[] = [
  {
    id: 0,
    number: '0',
    title: 'Las Tres Lentes',
    subtitle: 'Introducción al Curso',
    duration: '30 min',
    lessons: 3,
    description:
      'Descubre cómo tres perspectivas únicas —la vivencia personal de Yu Hua, la visión geopolítica de Kissinger y el análisis histórico de Fenby— se combinan para ofrecer una comprensión profunda de China.',
    topics: ['Metodología', 'Las 3 perspectivas', 'Sistema de aprendizaje'],
    locked: false,
  },
  {
    id: 1,
    number: '1',
    title: 'Raíces',
    subtitle: 'El Imperio y la Humillación (1800–1911)',
    duration: '3-4 horas',
    lessons: 6,
    description:
      'Del esplendor imperial a las Guerras del Opio. Cómo el "Siglo de la Humillación" forjó la psicología nacional china que aún impulsa las decisiones de Beijing.',
    topics: ['Imperio Qing', 'Guerras del Opio', 'Taiping', 'Boxer', 'Reforma'],
    locked: false,
  },
  {
    id: 2,
    number: '2',
    title: 'Caos',
    subtitle: 'República, Guerra y Revolución (1912–1949)',
    duration: '3-4 horas',
    lessons: 6,
    description:
      'El colapso imperial, los señores de la guerra, la invasión japonesa y la guerra civil que termina con Mao proclamando la República Popular.',
    topics: ['República', 'Warlords', 'Larga Marcha', 'Japón', 'Guerra Civil'],
    locked: false,
  },
  {
    id: 3,
    number: '3',
    title: 'Revolución',
    subtitle: 'La Era de Mao (1949–1976)',
    duration: '4-5 horas',
    lessons: 5,
    description:
      'Sumérgete en la era más transformadora y traumática de China moderna: desde el Gran Salto Adelante hasta la Revolución Cultural, pasando por la apertura diplomática de Nixon.',
    topics: ['Mao Zedong', 'Gran Salto', 'Revolución Cultural', 'El Pueblo', 'Nixon'],
    locked: false,
  },
  {
    id: 4,
    number: '4',
    title: 'Transformación',
    subtitle: 'Deng y la Apertura (1976–1989)',
    duration: '4 horas',
    lessons: 5,
    description:
      'Deng Xiaoping reinventa China: zonas económicas especiales, capitalismo con características chinas y el traumático desenlace de Tiananmen 1989.',
    topics: ['Deng Xiaoping', 'Zonas SEZ', 'Capitalismo', 'Tiananmen 1989'],
    locked: false,
  },
  {
    id: 5,
    number: '5',
    title: 'Ascenso',
    subtitle: 'Superpotencia (1990–hoy)',
    duration: '4-5 horas',
    lessons: 6,
    description:
      'El milagro económico, la desigualdad, los fenómenos shanzhai y huyou, y el giro autoritario de Xi Jinping hacia una nueva era.',
    topics: ['Milagro económico', 'Xi Jinping', 'Shanzhai', 'Belt & Road', 'Taiwan'],
    locked: false,
  },
  {
    id: 6,
    number: '6',
    title: 'Síntesis',
    subtitle: 'Patrones, Debates y Futuro',
    duration: '2-3 horas',
    lessons: 4,
    description:
      'Reconoce los patrones históricos, debate las grandes preguntas abiertas y obtén tu certificación como estudioso de la China moderna.',
    topics: ['Patrones', 'Debates', 'Reflexión personal', 'Certificación'],
    locked: false,
  },
]

export const lessonsByModule: Record<number, LessonMeta[]> = {
  0: [
    { id: '0.1', title: '¿Por qué tres libros?',    description: 'Las ventajas de la visión múltiple',     content: 'lesson_0_1' },
    { id: '0.2', title: 'Conoce a los autores',      description: 'Yu Hua, Kissinger y Fenby',              content: 'lesson_0_2' },
    { id: '0.3', title: 'Cómo usar este curso',      description: 'Sistema de progresión y gamificación',   content: 'lesson_0_3' },
  ],
  1: [
    { id: '1.1', title: 'El Reino Medio',            description: 'Tianxia y la cosmología imperial',       content: 'lesson_1_1' },
    { id: '1.2', title: 'Las Guerras del Opio',      description: 'El inicio del siglo de humillación',     content: 'lesson_1_2' },
    { id: '1.3', title: 'La Rebelión Taiping',       description: '20-30 millones de muertos (1850-1864)',  content: 'lesson_1_3' },
    { id: '1.4', title: 'Intentos de Reforma',       description: 'Zhongti Xiyong y sus límites',           content: 'lesson_1_4' },
    { id: '1.5', title: 'Los Boxers',                description: 'La alianza de las ocho naciones (1900)', content: 'lesson_1_5' },
    { id: '1.6', title: 'Fin del Imperio',           description: 'Puyi abdica, 2000 años de historia terminan', content: 'lesson_1_6' },
  ],
  2: [
    { id: '2.1', title: 'La República Frustrada',   description: 'Sun Yat-sen, Yuan Shikai y el 4 de Mayo', content: 'lesson_2_1' },
    { id: '2.2', title: 'Los Señores de la Guerra', description: 'China fragmentada (1916-1928)',            content: 'lesson_2_2' },
    { id: '2.3', title: 'El Kuomintang',            description: 'La masacre de Shanghai y la década de Nanjing', content: 'lesson_2_3' },
    { id: '2.4', title: 'El Ascenso Comunista',     description: 'Mao y la Gran Marcha (1927-1945)',         content: 'lesson_2_4' },
    { id: '2.5', title: 'La Invasión Japonesa',     description: 'Nanjing y ocho años de guerra (1937-1945)', content: 'lesson_2_5' },
    { id: '2.6', title: 'Guerra Civil',             description: 'Mao proclama la República Popular (1949)', content: 'lesson_2_6' },
  ],
  3: [
    { id: '3.1', title: 'Los Primeros Años',               description: 'Esperanza y terror (1949-1957)',        content: 'lesson_3_1' },
    { id: '3.2', title: 'El Gran Salto Adelante',          description: 'La gran hambruna (1958-1962)',           content: 'lesson_3_2' },
    { id: '3.3', title: 'Revolución Cultural: La Vivencia',description: 'Yu Hua cuenta su infancia (1966-1976)', content: 'lesson_3_3' },
    { id: '3.4', title: 'El Concepto de "Pueblo"',         description: 'Yu Hua y la paradoja de 人民',          content: 'lesson_3_4' },
    { id: '3.5', title: 'Nixon en China',                  description: 'El golpe diplomático del siglo (1972)', content: 'lesson_3_5' },
  ],
  4: [
    { id: '4.1', title: 'El Indestructible Deng',    description: 'Tres purgas, tres resurrecciones',           content: 'lesson_4_1' },
    { id: '4.2', title: 'Reformas Económicas',        description: 'El gato blanco y el gato negro',             content: 'lesson_4_2' },
    { id: '4.3', title: 'Zonas Económicas Especiales',description: 'Shenzhen: de aldea a megaciudad',            content: 'lesson_4_3' },
    { id: '4.4', title: 'Tensiones Crecientes',       description: 'La paradoja del éxito (1986-1989)',          content: 'lesson_4_4' },
    { id: '4.5', title: 'Tiananmen 1989',             description: 'El Hombre del Tanque y el pacto tácito',     content: 'lesson_4_5' },
  ],
  5: [
    { id: '5.1', title: 'Aceleración Económica',     description: 'El mayor crecimiento de la historia (1990-2010)', content: 'lesson_5_1' },
    { id: '5.2', title: 'La Nueva Disparidad',        description: 'Desigualdad y los mingong',                  content: 'lesson_5_2' },
    { id: '5.3', title: 'Shanzhai',                   description: 'La cultura de la imitación creativa',        content: 'lesson_5_3' },
    { id: '5.4', title: 'Huyou',                      description: 'El arte del engaño institucional',           content: 'lesson_5_4' },
    { id: '5.5', title: 'Xi Jinping',                 description: 'El Nuevo Emperador (2012-hoy)',               content: 'lesson_5_5' },
    { id: '5.6', title: 'China y el Mundo',           description: 'Belt & Road, Taiwan y la trampa de Tucídides', content: 'lesson_5_6' },
  ],
  6: [
    { id: '6.1', title: 'Patrones Históricos',        description: 'Los seis patrones que se repiten',           content: 'lesson_6_1' },
    { id: '6.2', title: 'Las Tres Perspectivas',       description: 'Síntesis de Yu Hua, Kissinger y Fenby',     content: 'lesson_6_2' },
    { id: '6.3', title: 'Debates Contemporáneos',      description: 'Colapso, amenaza y modelo alternativo',     content: 'lesson_6_3' },
    { id: '6.4', title: 'Tu Perspectiva',              description: 'Reflexión final y certificado',             content: 'lesson_6_4' },
  ],
}

// Total de lecciones del curso completo
export const TOTAL_LESSONS_WITH_CONTENT = 35

// Puntos base por lección completada
export const POINTS_PER_LESSON = 250

// Puntos necesarios para subir de nivel
export const POINTS_PER_LEVEL = 1000
