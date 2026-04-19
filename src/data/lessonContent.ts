import type { LessonContent } from '../types'
import { module0_1Content } from './content/module0_1'
import { module2Content } from './content/module2'
import { module3_4Content } from './content/module3_4'
import { module5_6Content } from './content/module5_6'

// ─── Lecciones originales del MVP (Módulos 0 y 3) ────────────────────────────

const mvpContent: Record<string, LessonContent> = {
  lesson_0_1: {
    title: '¿Por qué tres libros?',
    sections: [
      {
        type: 'intro',
        content:
          'Comprender China es como observar un diamante: necesitas múltiples ángulos para ver su verdadera naturaleza. Este curso fusiona tres perspectivas únicas que, juntas, revelan una imagen completa de la China moderna.',
      },
      {
        type: 'text',
        title: 'Las Tres Perspectivas',
        content: [
          {
            subtitle: '🎭 Yu Hua: La Voz desde Dentro',
            text: "Yu Hua vivió la Revolución Cultural siendo niño. Su libro 'China en Diez Palabras' no es historia académica, sino testimonio vital. Nos muestra CÓMO SE SINTIÓ crecer en el caos maoísta, cómo cambió China en cuatro décadas, y qué significa ser chino hoy. Sus anécdotas personales humanizan los grandes eventos históricos.",
          },
          {
            subtitle: '🎖️ Henry Kissinger: El Testigo Privilegiado',
            text: "Kissinger fue el arquitecto de la apertura de China al mundo en 1971. Ha conversado con cuatro generaciones de líderes chinos. Su libro 'China' explica POR QUÉ IMPORTA China en el orden mundial, cómo piensa estratégicamente, y qué significa su ascenso para el futuro. Ofrece la perspectiva geopolítica que solo un diplomático de alto nivel puede dar.",
          },
          {
            subtitle: '📖 Jonathan Fenby: El Historiador Completo',
            text: "Fenby es un historiador británico que escribió 'Modern China' —la historia integral de China desde 1850 hasta hoy. Nos dice QUÉ PASÓ exactamente: fechas, eventos, causas y consecuencias. Conecta el pasado imperial con el presente de superpotencia. Es nuestra brújula cronológica.",
          },
        ],
      },
      {
        type: 'quote',
        text: 'El pasado de China no es algo que se estudie en los libros de historia. Es algo que se vive cada día en las calles de Beijing y Shanghai.',
        author: 'Yu Hua',
      },
      {
        type: 'interactive',
        title: '🤔 Reflexiona',
        content:
          'Imagina que quieres comprender la Segunda Guerra Mundial. ¿Preferirías leer solo un libro académico, solo las memorias de Churchill, o solo el diario de Ana Frank? Cada uno te daría una pieza. Los tres juntos te darían la verdad.',
      },
    ],
    quiz: {
      question: '¿Cuál es la principal ventaja de combinar tres perspectivas sobre China?',
      options: [
        'Es más entretenido leer tres libros que uno',
        'Cada autor aporta un ángulo único: vivencia personal, análisis geopolítico e historia completa',
        'Los tres autores son muy famosos',
        'Es más fácil memorizar datos con tres fuentes',
      ],
      correct: 1,
      feedback: {
        correct:
          '¡Exacto! Como observar un diamante desde tres ángulos: cada perspectiva revela algo que las otras no pueden mostrar.',
        incorrect:
          'No del todo. La clave está en que cada autor aporta algo único: Yu Hua la vivencia emocional, Kissinger la visión geopolítica y Fenby el contexto histórico completo.',
      },
    },
  },

  lesson_0_2: {
    title: 'Conoce a los autores',
    sections: [
      {
        type: 'text',
        title: 'Yu Hua (余华)',
        content: [
          {
            subtitle: 'El Escritor que Vivió la Historia',
            text: 'Nacido en 1960 en Hangzhou, Yu Hua tenía 6 años cuando comenzó la Revolución Cultural. Presenció los Guardias Rojos, la destrucción del "Viejo Mundo", y el culto a Mao. En 1989, a los 29 años, estuvo en la Plaza de Tiananmen cuando los tanques entraron.',
          },
          {
            subtitle: 'Su Perspectiva Única',
            text: 'Yu Hua no analiza China desde fuera —la lleva en la piel. Sus descripciones son viscerales: "La plaza era el paraíso del anarquismo", "El pueblo es Mao, Mao es el pueblo". Su libro, publicado en 2010, está prohibido en China continental. Solo puede leerse en Taiwan, Hong Kong y traducciones occidentales.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Henry Kissinger',
        content: [
          {
            subtitle: 'El Diplomático Histórico',
            text: 'Secretario de Estado de EE.UU. bajo Nixon y Ford, Kissinger orquestó la visita secreta a China en 1971 que cambió el orden mundial. Ha visitado China más de 50 veces y conversado cara a cara con Mao, Deng, Jiang Zemin y Xi Jinping.',
          },
          {
            subtitle: 'Su Perspectiva Única',
            text: 'Kissinger entiende cómo piensa China estratégicamente —como en el juego de Go, no como en ajedrez. Explica conceptos como "tianxia" (天下, todo bajo el cielo) y por qué China busca influencia, no dominación territorial. Su libro "China" es historia + geopolítica + memorias personales.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Jonathan Fenby',
        content: [
          {
            subtitle: 'El Historiador Riguroso',
            text: 'Periodista y editor británico (Observer, Reuters), Fenby ha dedicado décadas a estudiar China. Escribió biografías de Chiang Kai-shek y análisis de la China moderna. Su libro "Modern China" abarca 1850 hasta el presente.',
          },
          {
            subtitle: 'Su Perspectiva Única',
            text: 'Fenby conecta los puntos: ¿cómo las Guerras del Opio de 1840 explican el nacionalismo chino hoy? ¿Por qué la invasión japonesa de 1937 todavía importa? Su fortaleza es la panorámica histórica que sitúa cada evento en su contexto.',
          },
        ],
      },
      {
        type: 'interactive',
        title: '💡 Analogía',
        content:
          'Si China fuera una película:\n\n• Yu Hua sería el actor principal contando su experiencia en el set\n• Kissinger sería el co-productor explicando por qué se hizo la película y su impacto\n• Fenby sería el crítico de cine situando la película en la historia del cine\n\nLos tres cuentan la misma película, pero desde ángulos totalmente diferentes.',
      },
    ],
    quiz: {
      question: '¿Qué hace única la perspectiva de Yu Hua?',
      options: [
        'Es el autor más joven de los tres',
        'Vivió personalmente la Revolución Cultural y Tiananmen como ciudadano chino',
        'Escribe mejor que los otros dos autores',
        'Es el único que habla chino',
      ],
      correct: 1,
      feedback: {
        correct: '¡Correcto! Yu Hua no observa desde fuera —él VIVIÓ los eventos más traumáticos de la China moderna.',
        incorrect:
          'Piénsalo de nuevo. La clave está en su experiencia PERSONAL de los eventos, no en su edad o habilidades lingüísticas.',
      },
    },
  },

  lesson_3_1: {
    title: 'Los Primeros Años (1949-1957)',
    sections: [
      {
        type: 'intro',
        content:
          'El 1 de octubre de 1949, Mao Zedong proclamó desde la Puerta de Tiananmen: "El pueblo chino se ha puesto de pie". Comenzaba un experimento social sin precedentes que transformaría radicalmente a un cuarto de la humanidad.',
      },
      {
        type: 'text',
        title: 'Victoria Comunista y Primeros Pasos',
        content: [
          {
            subtitle: 'Un País en Ruinas',
            text: 'China emergió de la Guerra Civil (1945-1949) devastada. El Kuomintang de Chiang Kai-shek huyó a Taiwan. El Partido Comunista heredó un país con:\n• 80% de analfabetismo\n• Economía agraria medieval\n• Infraestructura destruida por 12 años de guerra con Japón + 4 años de guerra civil\n• 500 millones de personas en pobreza extrema',
          },
          {
            subtitle: 'Las Reformas Iniciales (1949-1952)',
            text: 'El PCCh implementó cambios radicales:\n\n1. Reforma Agraria: Redistribución de tierra de terratenientes a campesinos\n2. Nacionalización de industrias\n3. Campaña de alfabetización masiva\n4. Modelo soviético de desarrollo',
          },
        ],
      },
      {
        type: 'quote',
        text: 'China se ha puesto de pie. Nadie podrá nunca más humillarla.',
        author: 'Mao Zedong, 1 de octubre de 1949',
      },
      {
        type: 'text',
        title: 'La Campaña de las Cien Flores (1956-1957)',
        content: [
          {
            subtitle: 'Apertura Breve',
            text: 'En 1956, Mao sorprendió al mundo invitando a la crítica:\n\n"Que florezcan cien flores, que compitan cien escuelas de pensamiento"\n\nIntelectuales, profesores y estudiantes comenzaron a criticar abiertamente al Partido.',
          },
          {
            subtitle: 'La Trampa',
            text: 'En 1957, la apertura se cerró brutalmente. 500,000+ intelectuales catalogados como "derechistas", enviados a campos de reeducación. ¿Fue una trampa deliberada o Mao cambió de opinión? Los historiadores debaten hasta hoy.',
          },
        ],
      },
      {
        type: 'interactive',
        title: '🎯 Dilema Histórico',
        content:
          'Imagina que eres un intelectual chino en 1956. Mao te invita a criticar al Partido.\n\n¿Qué haces?\n\nA) Hablas honestamente (arriesgas tu vida, pero quizá mejores el país)\nB) Permaneces en silencio (seguro, pero perpetúas el sistema)\n\nNo hay respuesta correcta. Miles enfrentaron este dilema. La mitad que habló terminó en campos de trabajo.',
      },
    ],
    quiz: {
      question: '¿Qué fue la Campaña de las Cien Flores?',
      options: [
        'Una campaña de plantación de flores en las ciudades',
        'Una invitación de Mao a la crítica que terminó en represión masiva',
        'Una celebración de la victoria comunista',
        'Un programa de alfabetización',
      ],
      correct: 1,
      feedback: {
        correct:
          'Exacto. Mao invitó a la crítica en 1956, pero en 1957 reprimió brutalmente a quienes hablaron. Un ejemplo del patrón de "revolución permanente" que Kissinger identifica.',
        incorrect:
          'No. Las "Cien Flores" se refiere a la frase "Que florezcan cien flores" —una invitación a la crítica que se convirtió en trampa.',
      },
    },
  },

  lesson_3_2: {
    title: 'El Gran Salto Adelante',
    sections: [
      {
        type: 'intro',
        content:
          'Entre 1958 y 1962, China experimentó la peor hambruna provocada por el hombre en la historia. Entre 30 y 45 millones de personas murieron de hambre. No por sequía, no por guerra, sino por políticas económicas desastrosas.',
      },
      {
        type: 'text',
        title: 'La Utopía de Mao',
        content: [
          {
            subtitle: 'La Ambición',
            text: 'En 1958, Mao declaró: "China superará la producción de acero de Reino Unido en 15 años". Lanzó el Gran Salto Adelante:\n• Communes populares de 20,000-50,000 personas\n• Industrialización rural: cada aldea debía producir acero\n• Cocinas privadas prohibidas\n• Cuotas imposibles de grano',
          },
          {
            subtitle: 'La Mentira Sistémica',
            text: 'Los funcionarios reportaban cifras falsas —si decían la verdad, eran "derechistas". Los campesinos derretían sus herramientas de trabajo para hacer acero inservible. Resultado: acero inútil + sin herramientas para cultivar = hambruna.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Cuando no hay nada que comer, las personas no lloran. Solo esperan la muerte en silencio.',
        author: 'Yang Jisheng, historiador chino que perdió a su padre en la hambruna',
      },
      {
        type: 'text',
        title: 'Los Números de la Tragedia',
        content: [
          {
            subtitle: 'Escala de la Catástrofe',
            text: '• Muertos estimados: 30-45 millones\n• Primera Guerra Mundial: 17 millones de muertos\n• El Gran Salto mató MÁS que la Primera Guerra Mundial... en 4 años\n\nProvincias más afectadas: Sichuan (9M muertos), Anhui (2.4M), Henan (2M)',
          },
        ],
      },
      {
        type: 'interactive',
        title: '📊 Visualiza la Escala',
        content:
          'Imagina que cada persona que conoces representa 1,000 muertos en el Gran Salto.\n\nNecesitarías conocer a 300,000-450,000 personas para representar la verdadera escala de la tragedia.\n\nEs difícil para la mente humana comprender números tan grandes. Por eso las historias personales importan.',
      },
    ],
    quiz: {
      question: '¿Cuál fue la principal causa de la hambruna del Gran Salto Adelante?',
      options: [
        'Una terrible sequía que destruyó las cosechas',
        'La invasión japonesa que destruyó la agricultura',
        'Políticas económicas desastrosas y reportes falsos de producción',
        'Un terremoto masivo',
      ],
      correct: 2,
      feedback: {
        correct:
          'Correcto. No fue un desastre natural —fue causado por humanos. Las communes, cuotas imposibles y reportes falsos crearon un sistema que llevó a millones a morir de hambre.',
        incorrect:
          'No. La hambruna fue provocada por POLÍTICAS: communes populares, cuotas imposibles y mentiras sistémicas sobre la producción.',
      },
    },
  },

  lesson_3_3: {
    title: 'Revolución Cultural: La Vivencia',
    sections: [
      {
        type: 'intro',
        content:
          "Yu Hua tenía 6 años cuando comenzó la Revolución Cultural en 1966. En su libro 'China en Diez Palabras', narra su infancia en el caos: escuelas cerradas, padres perseguidos, propaganda omnipresente.",
      },
      {
        type: 'text',
        title: 'El Descubrimiento de un Niño',
        content: [
          {
            subtitle: 'Pueblo = Mao, Mao = Pueblo',
            text: '\'Tenía seis años cuando descubrí algo maravilloso. Aprendí a leer dos palabras antes que mi propio nombre: 毛主席 (Presidente Mao) y 人民 (pueblo).\n\nSi el presidente Mao vive en el corazón de cada persona, ¿quién vive en el corazón del presidente Mao? ¡Pues el pueblo entero! Entonces: El pueblo es el presidente Mao y el presidente Mao es el pueblo.\'\n\nExcitado, Yu Hua compartió su descubrimiento. Pronto, toda la ciudad repetía la frase.',
          },
          {
            subtitle: 'La Pérdida de la Autoría',
            text: '\'Sentí mi posición amenazada. Mi condición de inventor de la frase se estaba perdiendo. En tiempos de revolución, uno no tiene derecho a reclamar la patente de nada.\'\n\nEsta anécdota infantil revela algo profundo: incluso los pensamientos pertenecían al colectivo, no al individuo.',
          },
        ],
      },
      {
        type: 'text',
        title: 'Primavera 1989: Tiananmen',
        content: [
          {
            subtitle: 'Pekín, el Paraíso del Anarquismo',
            text: '\'En la primavera de 1989, Pekín era el paraíso del anarquismo. La policía había desaparecido de un día para otro. Las metas comunes y las aspiraciones compartidas permitieron que una Pekín libre de policía funcionara en perfecto orden.\n\nIncluso los rateros emitieron un comunicado declarando que suspendían todo tipo de robos. Se puede decir que Pekín era una ciudad "en la que todo el mundo era hermano".\'',
          },
          {
            subtitle: 'El Olvido Forzado',
            text: '\'Cuando en octubre de ese mismo año regresé a la Universidad de Pekín, solo había pasado un verano y ya nada recordaba a lo que había sucedido en primavera, como si jamás hubiera pasado.\'\n\nEl contraste es escalofriante: del idealismo político al pragmatismo económico en apenas meses.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Jamás había viajado en un tren tan atiborrado de gente como aquél. Todos los vagones estaban repletos de estudiantes que huían de Pekín. Tras los disparos del 4 de junio, todo el mundo trataba de irse.',
        author: 'Yu Hua, describiendo su regreso a Beijing el 4 de junio de 1989',
      },
      {
        type: 'interactive',
        title: '🎭 Dos Perspectivas, Un Evento',
        content:
          'TIANANMEN 1989:\n\nYu Hua (en la plaza):\n• "Pekín era el paraíso del anarquismo"\n• "Todo el mundo era hermano"\n• "Apenas había pasado un verano y ya se olvidó"\n\nKissinger (en Washington):\n• "Dilema entre valores y realpolitik"\n• "Prueba de fuego para relación USA-China"\n• "Sanciones limitadas preservan diálogo"\n\nDos hombres, el mismo evento, dos mundos totalmente diferentes.',
      },
    ],
    quiz: {
      question: 'Según Yu Hua, ¿qué simbolizó Tiananmen 1989?',
      options: [
        'El inicio de la democracia en China',
        'La liberación del ardor político acumulado y su agotamiento, dando paso a la pasión por el dinero',
        'El fortalecimiento del comunismo',
        'El comienzo de la modernización económica',
      ],
      correct: 1,
      feedback: {
        correct:
          'Exacto. Yu Hua ve Tiananmen como el momento en que China agotó su entusiasmo político heredado de la Revolución Cultural, dando paso a la obsesión por el dinero de los años 90.',
        incorrect:
          'No del todo. Para Yu Hua, Tiananmen fue el FINAL del idealismo político, no su inicio. Después vino la pasión por enriquecerse que caracteriza la China actual.',
      },
    },
  },
}

// ─── Mapa completo: MVP + todos los módulos ───────────────────────────────────

export const lessonContent: Record<string, LessonContent> = {
  ...mvpContent,
  ...module0_1Content,
  ...module2Content,
  ...module3_4Content,
  ...module5_6Content,
}
