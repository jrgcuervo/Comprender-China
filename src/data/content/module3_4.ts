import type { LessonContent } from '../../types'

export const module3_4Content: Record<string, LessonContent> = {
  lesson_3_4: {
    title: 'El Concepto de "Pueblo"',
    sections: [
      {
        type: 'intro',
        content:
          'Yu Hua abre un capítulo de su libro "China en Diez Palabras" con una sola pregunta: ¿qué significa la palabra 人民 (rénmín), "el pueblo"? En la China maoísta, esa palabra no era un término político neutro. Era la fuente de toda legitimidad, la justificación de todo acto, la arma más poderosa del idioma. Y como toda arma, dependía de quién la empuñara.',
      },
      {
        type: 'text',
        title: 'La Palabra Más Peligrosa del Idioma',
        content: [
          {
            subtitle: 'El poder absoluto de "pueblo"',
            text: 'En la Revolución Cultural, "pueblo" era la palabra más poderosa del vocabulario político chino. Todo se hacía en su nombre: los juicios, las purgas, los campos de trabajo, las sesiones de autocrítica pública. Ser declarado "enemigo del pueblo" equivalía a la muerte social —y con frecuencia, a la muerte física o al gulag. No había apelación posible, porque ¿quién puede apelar contra el veredicto del pueblo?',
          },
          {
            subtitle: 'El carnicero Wang',
            text: 'Yu Hua cuenta la historia del carnicero Wang, el personaje más poderoso de su barrio de infancia. En la economía racionada de la China maoísta, el carnicero controlaba el acceso a la carne —uno de los bienes más escasos. Pero Wang no solo tenía poder económico. Tenía poder moral.\n\nCuando Wang maltrataba a sus clientes —cuando los insultaba, los humillaba, o simplemente se negaba a servirles— lo hacía "en nombre del pueblo". Nadie podía discutirle esa autoridad. ¿Quién iba a disputarle la representación del pueblo? Hacerlo equivalía a declararse enemigo del pueblo.',
          },
          {
            subtitle: '"Pueblo" como Dios laico',
            text: 'Yu Hua establece una comparación brillante: "el pueblo" en la China maoísta funcionaba exactamente como Dios en la Europa medieval. Era omnipresente, omnipotente, e invocable para justificar cualquier cosa. Los reyes medievales gobernaban "por la gracia de Dios"; los funcionarios y delatores de la Revolución Cultural actuaban "en nombre del pueblo".\n\nLa diferencia crucial: nadie podía ver a Dios, pero todo el mundo podía ver al pueblo... y sin embargo, el Partido decidía quién formaba parte de él y quién era "enemigo" del mismo.',
          },
          {
            subtitle: 'El individuo disuelto en el colectivo',
            text: 'Kissinger contextualiza el fenómeno desde la perspectiva del poder: Mao construyó su legitimidad sobre "el pueblo", pero en la práctica era el Partido quien decidía quién era el pueblo y quién era su enemigo. El individuo desaparecía como entidad moral autónoma: existía solo como parte del colectivo. Pensar por uno mismo, actuar por cuenta propia, tener opiniones privadas era, en sí mismo, una forma de traición.\n\nEsta lógica no era exclusiva de China. Cualquier ideología que coloque un colectivo abstracto —la nación, la raza, la clase— por encima del individuo concreto reproduce la misma estructura.',
          },
          {
            subtitle: 'El contraste permanente',
            text: '"Pueblo" tenía dos caras simultáneas: como ideal, significaba la dignidad de los trabajadores, la soberanía popular, la emancipación de los oprimidos. Como instrumento, era el mecanismo más eficaz de control social jamás inventado: un veredicto sin apelación, una autoridad sin rostro, un tribunal que nunca se equivoca porque nunca puede ser cuestionado.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'En la China de mi infancia, "el pueblo" era la palabra más temida y la más usada. Todos hablaban en su nombre; nadie sabía qué significaba.',
        author: 'Yu Hua, "China en Diez Palabras" (2011)',
      },
      {
        type: 'interactive',
        title: '¿Quién Define "el Pueblo"?',
        content:
          'La estructura de "hablar en nombre del pueblo" no es exclusiva de la China maoísta. A lo largo de la historia, diferentes grupos han reclamado esa representación exclusiva:\n\n• La Revolución Francesa: "la nación" y "el pueblo" justificaron tanto la abolición del Ancien Régime como el Terror de Robespierre.\n• El fascismo: "el pueblo" se convirtió en "la raza" o "la nación orgánica", excluyendo a quienes no pertenecían.\n• El comunismo soviético: "el proletariado" como encarnación del pueblo, representado por el Partido.\n• Las democracias actuales: los partidos políticos compiten para reclamar hablar "en nombre del pueblo".\n\nLa pregunta clave no es quién dice representar al pueblo. Es: ¿qué mecanismos existen para disputar esa representación? ¿Qué ocurre cuando no hay ninguno?\n\nReflexiona: ¿Cuándo una invocación del "pueblo" es legítima y cuándo es una usurpación? ¿Existe alguna forma de invocar al pueblo que no pueda ser corrompida?',
      },
    ],
    quiz: {
      question: 'Según Yu Hua, ¿cómo usaba el carnicero Wang la palabra "pueblo"?',
      options: [
        'Para pedir mejores condiciones laborales a las autoridades del barrio',
        'Para ejercer poder arbitrario sobre sus clientes sin posibilidad de ser cuestionado',
        'Para organizar a los vecinos contra la corrupción de los funcionarios locales',
        'Para justificar el racionamiento desigual de carne entre las familias del barrio',
      ],
      correct: 1,
      feedback: {
        correct:
          '¡Exacto! El carnicero Wang usaba la invocación del "pueblo" como escudo de impunidad: cualquier comportamiento arbitrario quedaba legitimado si se hacía "en nombre del pueblo". Y nadie podía disputarle esa autoridad sin correr el riesgo de ser acusado de ser enemigo del pueblo.',
        incorrect:
          'Según Yu Hua, el carnicero Wang usaba la palabra "pueblo" para ejercer poder arbitrario sin posibilidad de ser cuestionado. En la lógica de la Revolución Cultural, disputar la autoridad de alguien que actuaba "en nombre del pueblo" equivalía a declararse enemigo del pueblo mismo.',
      },
    },
  },

  lesson_3_5: {
    title: 'Nixon en China (1972)',
    sections: [
      {
        type: 'intro',
        content:
          'Febrero de 1972. El presidente más anticomunista de la historia reciente de Estados Unidos aterriza en Pekín, estrecha la mano del líder comunista más influyente del mundo, y cambia el equilibrio de poder global en una semana. La visita de Nixon a China fue el movimiento geopolítico más audaz de la Guerra Fría, y fue posible porque ambos lados entendían que el verdadero juego no era el que todo el mundo creía.',
      },
      {
        type: 'text',
        title: 'El Enemigo de Mi Enemigo',
        content: [
          {
            subtitle: 'El contexto estratégico',
            text: 'Para entender la apertura Nixon-China hay que comprender el triángulo estratégico de 1970:\n\n• Estados Unidos estaba atascado en Vietnam, perdiendo la guerra y la credibilidad internacional.\n• China llevaba más de veinte años aislada: expulsada de la ONU, sin relaciones con Occidente, devastada por el Gran Salto y la Revolución Cultural.\n• La URSS era la amenaza para ambos: había invadido Checoslovaquia en 1968, tenía millones de soldados en la frontera chino-soviética, y en 1969 había habido conflictos armados serios en el río Ussuri.\n\nChina y Estados Unidos tenían un enemigo común: una URSS expansionista y agresiva.',
          },
          {
            subtitle: 'La lógica de Kissinger',
            text: 'Kissinger vio lo que pocos vieron: si China y EE.UU. establecían relaciones, la URSS se encontraría amenazada en dos frentes simultáneos. No necesitaban ser aliados. No necesitaban compartir valores. Solo necesitaban compartir un interés estratégico: limitar el poder soviético.\n\nEra realpolitik en estado puro: las ideologías no importaban; importaba el equilibrio de poder. Nixon, el gran anticomunista, podía hacer esto precisamente porque nadie podía acusarle de "blando" con el comunismo.',
          },
          {
            subtitle: 'La misión secreta de Kissinger (julio 1971)',
            text: 'El 9 de julio de 1971, Kissinger "desapareció" durante 48 horas en un viaje oficial a Pakistán. En realidad, voló en secreto desde Islamabad a Beijing en un avión pakistaní. Se reunió con Zhou Enlai durante dos días. Ningún periodista lo sabía. Ningún aliado había sido avisado.\n\nCuando la noticia se anunció el 15 de julio, fue un shock global: el mundo entendió que algo fundamental había cambiado. Kissinger describe esos dos días con Zhou como "la conversación más intelectualmente estimulante de mi carrera diplomática".',
          },
          {
            subtitle: 'La semana que cambió el mundo',
            text: 'Del 21 al 28 de febrero de 1972, Nixon estuvo en China. El momento clave llegó el primer día: Mao recibió a Nixon en su biblioteca privada —una sala llena de libros hasta el techo, con el anciano líder hundido en un sillón. La conversación fue filosófica, casi críptica. Mao comentó que no le gustaban los comunistas. Nixon preguntó si prefería a los conservadores. Ambos entendieron el lenguaje del poder.\n\nEl Comunicado de Shanghai, firmado al final de la visita, contenía una frase ambigua pero crucial: Estados Unidos "no desafía" la posición de que hay "una sola China". Taiwan no era reconocida como estado separado. Ese lenguaje calculado abrió el camino.',
          },
          {
            subtitle: 'El shock del pueblo chino',
            text: 'Yu Hua recuerda la visita desde la perspectiva del pueblo chino ordinario: nadie sabía nada hasta que ocurrió. De repente, Nixon apareció en las pantallas de televisión —el gran imperialismo yanqui, el enemigo de clase— estrechando manos y brindando en Pekín. Fue un momento de desorientación total. Las categorías mentales con las que habían sido educados dejaron de tener sentido.\n\nNingún periódico oficial explicó la contradicción ideológica. Simplemente ocurrió, y el pueblo aprendió a no buscar explicaciones.',
          },
          {
            subtitle: 'Las consecuencias estratégicas',
            text: 'Las consecuencias fueron exactamente las que Kissinger había calculado:\n\n• La URSS, aterrorizada ante la perspectiva de un eje Washington-Beijing, aceleró la distensión (détente) con EE.UU.\n• China salió del aislamiento internacional: entró en la ONU y reemplazó a Taiwan en el Consejo de Seguridad.\n• Vietnam se volvió relativamente secundario en el cálculo estratégico global.\n• El orden mundial bipolar de la Guerra Fría se convirtió en un triángulo, y EE.UU. estaba en el vértice más favorable.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Nixon en China fue el mayor triunfo estratégico de la diplomacia americana del siglo XX. Y fue posible porque ambos lados entendían el juego de Go.',
        author: 'Henry Kissinger, "China" (2011)',
      },
      {
        type: 'interactive',
        title: 'El Dilema de la Realpolitik',
        content:
          'Kissinger eligió abrir relaciones con China en 1971-72 a pesar de que sabía perfectamente lo que había ocurrido durante el Gran Salto Adelante (30-45 millones de muertos) y la Revolución Cultural (millones de perseguidos, torturados, asesinados).\n\nSu argumento: la alternativa —China aislada y resentida, empujada hacia la URSS— era más peligrosa para la paz mundial que China integrada pero autoritaria.\n\nEste dilema no es único de ese momento. Aparece en política exterior constantemente:\n\n• ¿Deberían las democracias hacer negocios con Arabia Saudita?\n• ¿Debería la comunidad internacional haber aislado a China tras Tiananmen?\n• ¿Justifica la estabilidad estratégica ignorar violaciones masivas de derechos humanos?\n\nNo hay respuesta fácil. Reflexiona: ¿Cuándo la realpolitik —actuar según los intereses, no los valores— es sabio? ¿Y cuándo es complicidad moral? ¿Existe una línea clara?',
      },
    ],
    quiz: {
      question: '¿Cuál fue el motivo estratégico principal de la apertura Nixon-China?',
      options: [
        'Ampliar los mercados comerciales para las exportaciones estadounidenses',
        'Resolver el conflicto de Vietnam con la mediación china',
        'Aislar a la URSS usando la enemistad chino-soviética como palanca',
        'Evitar que China desarrollara armas nucleares propias',
      ],
      correct: 2,
      feedback: {
        correct:
          '¡Correcto! El cálculo estratégico central de Kissinger era que una China alineada con EE.UU. —o simplemente no alineada con la URSS— presionaría a Moscú en dos frentes simultáneos. Esto obligó a los soviéticos a ser más cooperativos en Europa y a aceptar la détente, transformando el equilibrio de la Guerra Fría.',
        incorrect:
          'El motivo principal fue estratégico frente a la URSS: Kissinger calculó que acercar a China y EE.UU. obligaría a la Unión Soviética a dividir su atención y recursos, debilitando su posición global. Era realpolitik clásica: usar la enemistad chino-soviética como herramienta geopolítica.',
      },
    },
  },

  lesson_4_1: {
    title: 'El Indestructible Deng',
    sections: [
      {
        type: 'intro',
        content:
          'Hay pocos personajes en la historia política del siglo XX que encarnen mejor la paradoja de la resiliencia y la brutalidad que Deng Xiaoping. Medía 1,52 metros. Fue purgado tres veces por el mismo sistema que serviría durante décadas. Y cuando finalmente alcanzó el poder definitivo, transformó la economía más grande del mundo con una pragmática precisión que dejó sin palabras a economistas y estadistas de todo el planeta.',
      },
      {
        type: 'text',
        title: 'Tres Purgas, Tres Resurrecciones',
        content: [
          {
            subtitle: 'Primera purga (1933): el protegido cae',
            text: 'Deng Xiaoping llevaba ya años en el Partido Comunista Chino cuando fue expulsado por primera vez en 1933, durante la lucha interna que precedió a la Larga Marcha. Fue acusado de "desviacionismo" —de apoyar la línea de Mao en un momento en que otros líderes del partido controlaban la dirección ideológica. Su rehabilitación llegó con la victoria de Mao en las luchas internas del partido.',
          },
          {
            subtitle: 'Segunda purga (1966): la Revolución Cultural',
            text: 'La Revolución Cultural fue el nadir de Deng. Fue públicamente humillado en sesiones de crítica —obligado a ponerse de rodillas ante multitudes que le gritaban "traidor" y "capitalista". Fue enviado a trabajar en una fábrica de tractores en Jiangxi, la misma región donde había combatido décadas antes.\n\nPero lo más devastador no le ocurrió a él. Su hijo mayor, Deng Pufang, fue acorralado en la Universidad de Pekín por los Guardias Rojos. Cayó —o fue arrojado— desde un edificio. Sobrevivió, pero quedó paralítico de por vida. Deng nunca hablaría públicamente de ese momento, pero quienes le conocían decían que nunca lo olvidó.',
          },
          {
            subtitle: 'Tercera purga (1976): acusado de "apaciguamiento capitalista"',
            text: 'Tras la muerte de Zhou Enlai en enero de 1976, Deng —que había sido rehabilitado y actuaba como primer ministro de facto— fue depurado nuevamente. La Banda de los Cuatro, liderada por la esposa de Mao, Jiang Qing, le acusó de ser la "mano negra" detrás de las manifestaciones populares de duelo por Zhou Enlai en la Plaza de Tiananmen.\n\nMao, ya moribundo, le retiró su apoyo. Deng fue purgado por tercera vez.',
          },
          {
            subtitle: 'La resurrección definitiva (1978)',
            text: 'Mao murió en septiembre de 1976. La Banda de los Cuatro fue arrestada apenas un mes después. Deng regresó al poder gradualmente entre 1977 y 1978, y en diciembre de 1978 consolidó su posición en el Tercer Pleno del XI Comité Central —la reunión que marcaría el inicio de las reformas económicas.\n\nHabía sobrevivido a todo. No por ser un superviviente pasivo, sino porque tenía algo que ninguno de sus rivales poseía: la combinación de experiencia, pragmatismo y capital político acumulado durante cincuenta años de lucha.',
          },
          {
            subtitle: 'Pragmatismo contra dogma',
            text: 'La diferencia fundamental entre Deng y Mao no era de ideología sino de temperamento y método. Mao era un revolucionario permanente: creía que la lucha continua, la pureza ideológica y el caos creativo eran necesarios para mantener vivo el espíritu revolucionario. Deng era un administrador práctico: creía que la legitimidad del Partido dependía de resultados concretos, no de pureza doctrinaria.\n\nKissinger, que negociaría con ambos, lo describe sin rodeos: "Nunca vi a alguien más capaz de sostener la vista en el objetivo esencial y subordinar todo lo demás a ese objetivo."',
          },
        ],
      },
      {
        type: 'quote',
        text: 'La pobreza no es el socialismo. Hacerse rico es glorioso.',
        author: 'Deng Xiaoping (atribuido, 1978)',
      },
      {
        type: 'interactive',
        title: 'El Dilema del Pragmatismo',
        content:
          'La figura de Deng Xiaoping plantea uno de los dilemas morales más incómodos de la historia contemporánea:\n\nMao Zedong: fue un revolucionario idealista cuyas utopías —el Gran Salto Adelante, la Revolución Cultural— causaron entre 30 y 45 millones de muertos. Creía genuinamente en una China igualitaria. Las consecuencias de ese idealismo fueron catastróficas.\n\nDeng Xiaoping: fue un pragmático sin escrúpulos doctrinarios que sacó a 400 millones de personas de la pobreza en dos décadas. También ordenó la masacre de Tiananmen en 1989 y construyó el capitalismo autoritario que define a China hoy.\n\n¿Es mejor un líder idealista cuyos sueños matan millones, o un pragmático que salva millones pero aplasta a quienes se oponen?\n\nNo hay respuesta fácil. Pero reflexiona: ¿qué criterio usas para juzgar a un líder histórico? ¿Intenciones o resultados? ¿Y qué pasa cuando ambos son simultáneamente extraordinarios y terribles?',
      },
    ],
    quiz: {
      question: '¿Cuántas veces fue purgado Deng Xiaoping antes de alcanzar el poder definitivamente?',
      options: [
        'Una vez, durante la Revolución Cultural',
        'Dos veces, en 1933 y durante la Revolución Cultural',
        'Tres veces: en 1933, durante la Revolución Cultural, y en 1976',
        'Cuatro veces a lo largo de toda su carrera política',
      ],
      correct: 2,
      feedback: {
        correct:
          '¡Correcto! Deng fue purgado tres veces: en 1933 por "desviacionismo" durante las luchas internas del partido, en 1966 durante la Revolución Cultural (cuando su hijo fue lanzado desde un edificio y quedó paralítico), y en 1976 tras la muerte de Zhou Enlai. Cada vez regresó. Su resurrección definitiva llegó en 1978.',
        incorrect:
          'Deng Xiaoping fue purgado exactamente tres veces: en 1933 (acusado de desviacionismo en las luchas internas del partido), en 1966 (humillado públicamente durante la Revolución Cultural, su hijo lanzado desde un edificio), y en 1976 (tras la muerte de Zhou Enlai, acusado de apaciguamiento capitalista). Alcanzó el poder definitivo en 1978.',
      },
    },
  },

  lesson_4_2: {
    title: 'Reformas Económicas',
    sections: [
      {
        type: 'intro',
        content:
          'En diciembre de 1978, el Tercer Pleno del XI Comité Central del PCCh tomó decisiones que ningún libro de texto de economía había previsto. No fue una privatización al estilo occidental. No fue una terapia de choque como la que destruiría la URSS quince años después. Fue algo más extraño, más pragmático, y más exitoso: una transformación económica por prueba y error, a velocidad asombrosa, sin red de seguridad ideológica.',
      },
      {
        type: 'text',
        title: 'La Lógica de "Socialismo con Características Chinas"',
        content: [
          {
            subtitle: 'Las Cuatro Modernizaciones',
            text: 'El programa de Deng se articulaba en torno a las "Cuatro Modernizaciones", un concepto que Zhou Enlai había formulado antes de morir: modernizar la agricultura, la industria, la tecnología y la defensa. No era una ideología nueva —era un programa de resultados.\n\nLa formulación "socialismo con características chinas" era deliberadamente ambigua. Significaba: podemos hacer lo que funcione, y si funciona, es socialista por definición. Fue la fórmula que permitió al Partido Comunista gobernar una economía de mercado sin crisis de identidad ideológica.',
          },
          {
            subtitle: 'La descolectivización agraria',
            text: 'La primera y más exitosa reforma fue en el campo. Las comunas populares maoístas —donde los campesinos trabajaban tierras colectivas y entregaban toda la producción al Estado— fueron disueltas gradualmente entre 1978 y 1984.\n\nEl Sistema de Responsabilidad Familiar devolvió la tierra a las familias, aunque la propiedad legal seguía siendo del Estado. Cada familia firmaba un contrato: producía una cuota mínima para el Estado y podía vender los excedentes en el mercado libre.\n\nEl resultado fue inmediato y dramático: la producción agrícola subió un 25% en los primeros cinco años. Los campesinos chinos, liberados de la lógica colectiva que penalizaba el esfuerzo individual, respondieron exactamente como la teoría económica predice.',
          },
          {
            subtitle: 'Apertura al capital extranjero',
            text: 'Por primera vez desde 1949, la inversión extranjera directa fue permitida —con condiciones cuidadosamente controladas. Las empresas extranjeras podían instalarse en zonas específicas, con socios chinos obligatorios, bajo regulaciones que garantizaban la transferencia de tecnología y conocimiento.\n\nNo fue una apertura total. Fue una apertura estratégica: China tomaba lo que necesitaba del capitalismo global sin ceder el control político.',
          },
          {
            subtitle: 'El experimento de los precios duales',
            text: 'Entre 1979 y 1985, China operó con un sistema de precios que habría confundido a cualquier economista: algunos precios eran fijados por el Estado (el sistema antiguo), otros eran libres de mercado (el sistema nuevo). El mismo bien podía tener dos precios simultáneos.\n\nCreó distorsiones enormes y una corrupción explosiva —los que tenían acceso a los precios controlados los revendían al precio de mercado. Pero también fue un laboratorio de aprendizaje brutal: China estaba descubriendo cómo funcionaba una economía de mercado sin haber estudiado nunca la materia.',
          },
          {
            subtitle: 'Los resultados a una década',
            text: 'Los números son difíciles de procesar:\n\n• El PIB se duplicó entre 1978 y 1988\n• 100 millones de personas salieron de la pobreza en una década\n• Surgió una clase media urbana por primera vez en décadas\n• Las ciudades costeras se transformaron físicamente a velocidad sin precedentes\n\nPero también:\n\n• Inflación del 28% anual en 1988-89\n• Corrupción explosiva: los hijos de los dirigentes ("princelings") se enriquecían con los contactos políticos\n• Desigualdad creciente entre la costa desarrollada y el interior rural',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Si en 1980 me hubieran dicho que China crecería al 10% anual durante 30 años, no lo habría creído. Nadie lo habría creído.',
        author: 'Economista occidental citado por Jonathan Fenby, "The Penguin History of Modern China"',
      },
      {
        type: 'interactive',
        title: 'Semillas del Conflicto',
        content:
          'El éxito económico de Deng plantea una de las preguntas más importantes de la ciencia política del siglo XX:\n\n¿Puede haber modernización económica sin modernización política?\n\nLas reformas de Deng crearon —deliberadamente o no— una clase media urbana educada que por primera vez tenía acceso a información del exterior, que viajaba, que comparaba. Esa misma clase media que las reformas enriquecieron sería la que llenaría la Plaza de Tiananmen en 1989.\n\nHistóricamente, la hipótesis de la "clase media democratizadora" sugiere que el crecimiento económico genera inevitablemente demanda de participación política. España, Corea del Sur, Taiwan: todos siguieron ese patrón.\n\nChina desafió —o pospuso— esa hipótesis. El Partido ofreció crecimiento a cambio de aceptación política. Funcionó durante décadas.\n\nReflexiona: ¿Sigue funcionando hoy? ¿Hay un punto en que el éxito económico hace inevitable la democratización? ¿O China demostrará que el capitalismo autoritario es un modelo estable a largo plazo?',
      },
    ],
    quiz: {
      question: '¿Cuál fue la primera y más exitosa reforma económica de Deng Xiaoping?',
      options: [
        'La apertura de Zonas Económicas Especiales en la costa',
        'La descolectivización agraria: devolver la tierra a las familias campesinas',
        'La privatización de las empresas estatales industriales',
        'La eliminación de los precios controlados en favor del libre mercado',
      ],
      correct: 1,
      feedback: {
        correct:
          '¡Correcto! La descolectivización agraria fue la primera y más rápidamente exitosa reforma: el Sistema de Responsabilidad Familiar devolvió la tierra a las familias, que podían vender los excedentes en el mercado libre. En cinco años, la producción agrícola subió un 25% y 100 millones de personas comenzaron a salir de la pobreza.',
        incorrect:
          'La primera y más exitosa reforma fue la descolectivización agraria. El Sistema de Responsabilidad Familiar (1978-1984) disolvió las comunas maoístas y devolvió la gestión de la tierra a las familias, que podían quedarse con los excedentes. La producción agrícola subió un 25% en cinco años — un resultado inmediato que ninguna otra reforma igualó en velocidad.',
      },
    },
  },

  lesson_4_3: {
    title: 'Zonas Económicas Especiales',
    sections: [
      {
        type: 'intro',
        content:
          'Imagina construir una ciudad desde cero. No reformar una ciudad existente —crearla. En 1980, el gobierno chino tomó un pueblo de pescadores al norte de Hong Kong, lo rodeó de alambre de espino y legislación especial, y declaró: aquí las reglas son diferentes. Ese lugar se llamaba Shenzhen. Hoy tiene doce millones de habitantes y alberga algunas de las empresas tecnológicas más importantes del mundo.',
      },
      {
        type: 'text',
        title: 'El Laboratorio Capitalista dentro del Estado Socialista',
        content: [
          {
            subtitle: 'El concepto: ventanas al mundo',
            text: 'La lógica de las Zonas Económicas Especiales (ZEE) era elegante y pragmática: no hacía falta reformar todo el sistema para probar si el capitalismo funcionaba. Bastaba con crear zonas delimitadas donde las reglas fueran distintas: impuestos bajos, regulación flexible, bienvenida al capital extranjero, orientación hacia la exportación.\n\nSi el experimento funcionaba, se expandía. Si fracasaba, no "contaminaba" el resto del sistema. Era la lógica del laboratorio aplicada a la política económica.',
          },
          {
            subtitle: 'Shenzhen: el milagro en cifras',
            text: 'Las cifras de Shenzhen desafían la comprensión:\n\n• 1980: 30,000 habitantes, pueblo de pescadores y arrozales\n• 1990: 2 millones de habitantes, ciudad industrial en construcción\n• 2000: 7 millones de habitantes, hub manufacturero global\n• 2010: 10 millones de habitantes, ciudad tecnológica de primer nivel\n\nEn treinta años, Shenzhen hizo lo que Manchester tardó cien años en hacer durante la Revolución Industrial. No de forma orgánica, sino diseñada en una sala de reuniones en Beijing.',
          },
          {
            subtitle: 'Las otras ZEE: Zhuhai, Shantou, Xiamen, Hainan',
            text: 'Shenzhen fue la más famosa, pero no fue la única. En 1980 se establecieron cuatro ZEE originales, cada una con una lógica geográfica y política específica:\n\n• Shenzhen: capitalizar la proximidad a Hong Kong y su capital británico\n• Zhuhai: adjacent to Macau y el capital portugués\n• Shantou: conectar con la diáspora china en el Sudeste Asiático\n• Xiamen: enfrente de Taiwan, la provincia rebelde, con su capital taiwanés y lazos culturales\n\nLa ubicación no era aleatoria: todas estaban en la costa sur, lejos de Beijing, donde los experimentos podían hacerse con cierta distancia política.',
          },
          {
            subtitle: 'Fabricado en China',
            text: 'El impacto sobre el comercio global fue radical. "Made in China" pasó en dos décadas de ser sinónimo de artículos de mala calidad y bajo precio a ser omnipresente en cada categoría de producto imaginable.\n\nLas fábricas de las ZEE y de las zonas industriales que se multiplicaron en los años 90 convirtieron a China en la "fábrica del mundo": el lugar donde todo se hacía porque la combinación de costes laborales bajos, infraestructura nueva e incentivos fiscales era insuperable.',
          },
          {
            subtitle: 'Las empresas que nacieron en la zona',
            text: 'El verdadero legado de Shenzhen no es su infraestructura. Son las empresas que nacieron en su ecosistema:\n\n• Huawei: fundada en Shenzhen en 1987, hoy el mayor fabricante de equipos de telecomunicaciones del mundo\n• Tencent: fundada en Shenzhen en 1998, WeChat y la mayor empresa de videojuegos del planeta\n• BYD: fundada en Shenzhen en 1995, hoy el mayor fabricante de vehículos eléctricos del mundo\n\nNinguna de estas empresas habría existido sin la ZEE.',
          },
          {
            subtitle: 'La tensión que no se resuelve',
            text: 'El modelo de las ZEE resolvió el problema del crecimiento. Pero creó otro: la desigualdad geográfica institucionalizada. Las provincias costeras se enriquecieron; el interior rural se quedó atrás. La brecha entre Guangdong y Guizhou, entre Shanghai y Gansu, no era un accidente —era el resultado directo de concentrar los recursos en las zonas costeras.\n\nKissinger observa que las ZEE fueron "el equivalente chino del Plan Marshall": concentrar recursos en puntos estratégicos para demostrar que el modelo funciona. Pero el Plan Marshall reconstruyó una Europa que ya era desarrollada. Las ZEE dejaron atrás a un interior que nunca había tenido la oportunidad de serlo.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Shenzhen es el milagro económico más rápido de la historia humana. Y fue diseñado desde cero en una sala de reuniones.',
        author: 'Financial Times, análisis especial sobre Shenzhen (2010)',
      },
      {
        type: 'interactive',
        title: 'Shenzhen vs. Manchester: Velocidad del Cambio',
        content:
          'Compara dos procesos de industrialización:\n\nManchester, Revolución Industrial (1780-1880):\n• De ciudad textil artesanal a capital industrial del mundo\n• Duración: aproximadamente 100 años\n• Proceso orgánico: inversión privada, mercado libre, sin planificación central\n\nShenzhen, Reforma China (1980-2010):\n• De pueblo de 30,000 pescadores a metrópolis de 10 millones\n• Duración: 30 años\n• Proceso diseñado: decisión política centralizada, inversión estatal y extranjera dirigida\n\n¿Qué explica la diferencia de velocidad?\n• El Estado chino podía concentrar recursos con una eficiencia que ningún mercado libre puede igualar\n• Las tecnologías disponibles en 1980 eran muy superiores a las de 1780\n• China se benefició del "efecto de ponerse al día": no tenía que inventar, solo copiar y adaptar\n\nReflexiona: ¿Es la velocidad siempre buena? ¿Qué se pierde cuando el cambio es tan rápido que las instituciones sociales, culturales y políticas no pueden seguirle el ritmo? Manchester tardó 100 años en industrializarse y produjo sindicatos, leyes laborales y parlamentarismo. Shenzhen lo hizo en 30 años. ¿Qué instituciones tiene hoy Shenzhen?',
      },
    ],
    quiz: {
      question: '¿Cuál fue la primera y más famosa Zona Económica Especial de China?',
      options: [
        'Zhuhai, por su proximidad a Macao',
        'Shenzhen, por su proximidad a Hong Kong',
        'Xiamen, por su conexión con Taiwan',
        'Shanghai, por ser el centro financiero histórico',
      ],
      correct: 1,
      feedback: {
        correct:
          '¡Correcto! Shenzhen fue establecida en 1980, adyacente a Hong Kong, para capitalizar el capital y la experiencia empresarial británica. En 30 años pasó de 30,000 habitantes a 10 millones, convirtiéndose en símbolo del "milagro económico chino" y sede de empresas como Huawei, Tencent y BYD.',
        incorrect:
          'La primera y más famosa fue Shenzhen, establecida en 1980 al norte de Hong Kong. Su proximidad a la colonia británica permitió atraer capital, tecnología y know-how empresarial de forma inmediata. En treinta años pasó de pueblo de pescadores a ciudad de diez millones de habitantes.',
      },
    },
  },

  lesson_4_4: {
    title: 'Tensiones Crecientes',
    sections: [
      {
        type: 'intro',
        content:
          'El éxito económico de los años 80 creó algo que ningún planificador había previsto con claridad: una generación joven, educada, con acceso a información del mundo exterior, con expectativas que el sistema político no podía satisfacer. La paradoja de los años 80 en China es que el mismo éxito que legitimaba al Partido estaba generando las condiciones para el mayor desafío a su autoridad desde la fundación de la República Popular.',
      },
      {
        type: 'text',
        title: 'La Tormenta Perfecta de 1989',
        content: [
          {
            subtitle: 'La nueva clase media urbana',
            text: 'Las reformas de Deng crearon, por primera vez en décadas, una clase media urbana con tiempo libre, dinero disponible y acceso a información. Las universidades se expandieron. Estudiantes y jóvenes profesionales podían leer publicaciones extranjeras, ver películas occidentales, comparar.\n\nEsta generación no había vivido el hambre de los años 50, ni el terror de la Revolución Cultural. Solo conocía las reformas y sus promesas. Y sus expectativas no eran ya solo económicas —eran también políticas.',
          },
          {
            subtitle: 'La inflación de 1988-89',
            text: 'En 1988, la inflación alcanzó el 28% anual. Para una sociedad acostumbrada a precios estables (el lado positivo de la economía planificada), fue un shock cultural además de económico.\n\nLos ahorros de toda una vida se evaporaban. Los salarios fijos en el sector público no se ajustaban a la inflación. Los campesinos que habían migrado a las ciudades se encontraban con que sus salarios ya no cubrían los precios del mercado. La frustración económica era tangible y concreta.',
          },
          {
            subtitle: 'La corrupción de los "princelings"',
            text: 'El sistema de precios duales —algunos controlados, otros de mercado— creó oportunidades de corrupción extraordinarias para quienes tenían contactos políticos. Los hijos y sobrinos de los dirigentes del Partido, llamados "princelings" (太子党, tàizǐdǎng), se enriquecían usando sus conexiones para acceder a materias primas a precios estatales y venderlas al precio de mercado.\n\nEra el capitalismo de compadres en estado puro. Y era visible para todos: la misma gente que predicaba el socialismo enviaba a sus hijos a hacer fortunas con los dos sistemas.',
          },
          {
            subtitle: 'El movimiento estudiantil de 1986-87',
            text: 'Las tensiones no llegaron sin aviso. En 1986-87, estudiantes en varias ciudades organizaron protestas moderadas, pidiendo más libertad de prensa y reformas políticas. El Secretario General del Partido, Hu Yaobang, simpatizaba con los reformistas y se negó a reprimir duramente las protestas.\n\nLa consecuencia: los conservadores del Partido forzaron su dimisión en enero de 1987, acusándole de "actitud blanda ante la liberalización burguesa". Hu Yaobang se convirtió en símbolo de la esperanza reformista frustrada.',
          },
          {
            subtitle: 'El detonante: muerte de Hu Yaobang (15 de abril de 1989)',
            text: 'Hu Yaobang murió de un ataque al corazón el 15 de abril de 1989. Los estudiantes comenzaron a reunirse en la Plaza de Tiananmen para llorarle —y el luto se transformó en protesta.\n\nLa lógica era clara: Hu había sido expulsado del poder por defender la libertad. Su muerte era la ocasión para reivindicar lo que él había representado. De 100 personas el primer día, la plaza pasó a 100,000 en dos semanas.',
          },
          {
            subtitle: 'Las demandas: diálogo, no revolución',
            text: 'Este punto es crucial y con frecuencia mal entendido: los estudiantes de Tiananmen NO pedían derrocar al Partido Comunista. Sus demandas eran:\n\n• Diálogo directo con los líderes del gobierno\n• Libertad de prensa\n• Fin de la corrupción\n• Rehabilitación de Hu Yaobang\n• Reconocimiento del movimiento como "patriótico", no como "turbulencia"\n\nEran demandas de un sistema que funcionara mejor, no de un sistema diferente. Eso hace la represión que vendría aún más difícil de justificar.',
          },
          {
            subtitle: 'La huelga de hambre y la visita de Gorbachov',
            text: 'En mayo de 1989, mientras el presidente soviético Gorbachov visitaba Beijing en la primera visita de un líder soviético en 30 años, 3,000 estudiantes iniciaron una huelga de hambre en la plaza. Las cámaras de televisión del mundo, congregadas para cubrir la histórica cumbre chino-soviética, se encontraron con otro espectáculo: el mayor movimiento de protesta del mundo comunista desde Hungría en 1956.\n\nEl gobierno chino quedó humillado ante las cámaras del mundo. Deng Xiaoping interpretó eso como una amenaza existencial.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'Los estudiantes no pedían derrocar el sistema. Pedían que el sistema funcionara mejor. Eso hizo la represión aún más incomprensible.',
        author: 'Jonathan Fenby, "The Penguin History of Modern China" (2008)',
      },
      {
        type: 'interactive',
        title: 'La Lógica de Deng',
        content:
          'Para entender las decisiones de Deng en mayo de 1989, hay que intentar ver el mundo desde su perspectiva:\n\nDeng tenía 84 años. Había vivido la anarquía de los señores de la guerra, la invasión japonesa, la guerra civil, el Gran Salto y la Revolución Cultural. Para él, el mayor enemigo de China no era el capitalismo ni el imperialismo —era el 乱 (luàn): el caos, la anarquía, la disgregación del orden.\n\nCuando miraba la Plaza de Tiananmen, no veía estudiantes idealismos. Veía el comienzo del caos que él había vivido y temía más que nada. La Revolución Cultural también había comenzado con estudiantes idealizados marchando por las calles con demandas aparentemente razonables.\n\nKissinger comprende este razonamiento sin compartirlo necesariamente: Deng actuó desde su experiencia de lo que ocurre cuando el orden colapsa en China.\n\nReflexiona: ¿Justifica el miedo al caos la supresión de la disidencia pacífica? ¿Hay circunstancias en que el orden sea un valor superior a la libertad? ¿Cómo cambia tu respuesta según el contexto histórico?',
      },
    ],
    quiz: {
      question: '¿Qué detonó las protestas de Tiananmen de 1989?',
      options: [
        'La visita de Gorbachov y el efecto inspirador de la glasnost soviética',
        'La muerte del reformista Hu Yaobang y la frustración acumulada por la inflación y la corrupción',
        'La decisión del gobierno de endurecer las restricciones a la prensa universitaria',
        'El anuncio de nuevos recortes en el gasto educativo universitario',
      ],
      correct: 1,
      feedback: {
        correct:
          '¡Correcto! La muerte de Hu Yaobang el 15 de abril de 1989 fue el detonante inmediato. Los estudiantes le lloraron como símbolo de la esperanza reformista frustrada. Pero el combustible llevaba años acumulándose: inflación del 28%, corrupción visible de los hijos de los dirigentes, expectativas políticas no satisfechas por una generación que no había vivido el terror de los años anteriores.',
        incorrect:
          'El detonante fue la muerte del ex Secretario General Hu Yaobang el 15 de abril de 1989. Pero las causas profundas eran múltiples: inflación del 28% que evaporaba los ahorros, corrupción explosiva de los "princelings", y una generación joven educada con expectativas políticas que el sistema no satisfacía.',
      },
    },
  },

  lesson_4_5: {
    title: 'Tiananmen 1989',
    sections: [
      {
        type: 'intro',
        content:
          'En la noche del 3 al 4 de junio de 1989, los tanques del Ejército Popular de Liberación entraron en Beijing. Lo que ocurrió en las horas siguientes se convirtió en el momento más fotografiado —y más censurado— de la historia china reciente. Tiananmen no fue solo una masacre. Fue una elección: el Partido Comunista Chino eligió qué tipo de China quería ser.',
      },
      {
        type: 'text',
        title: 'La Noche del 3 al 4 de Junio',
        content: [
          {
            subtitle: 'El Hombre del Tanque',
            text: 'La imagen más icónica de Tiananmen fue tomada el 5 de junio de 1989, el día después de la represión. Un hombre solo, con bolsas de la compra en las manos, se plantó delante de una columna de tanques en el Bulevar Chang\'an y no se movió. Los tanques intentaron rodearle. El hombre se movió para bloquear el paso. Una y otra vez.\n\nNadie sabe su nombre. Nadie sabe qué fue de él. La imagen fue prohibida en China y se convirtió en una de las fotografías más reproducidas del siglo XX en el resto del mundo.',
          },
          {
            subtitle: 'Las cifras que nadie sabe con certeza',
            text: 'El gobierno chino dijo "cientos". Las estimaciones independientes oscilan entre 500 y 3,000 muertos, con miles de heridos y decenas de miles de arrestados en las semanas siguientes.\n\nLa incertidumbre es en sí misma parte del fenómeno: el gobierno chino destruyó sistemáticamente los registros, impidió la cobertura periodística y procesó a cualquiera que intentara documentar lo ocurrido. No saber es una forma de control.',
          },
          {
            subtitle: 'Tres perspectivas sobre la misma noche',
            text: 'Yu Hua estaba en Beijing en las semanas previas. Recuerda la plaza como "el paraíso del anarquismo": estudiantes de toda China discutiendo filosofía política, montando carpas, compartiendo comida, como si hubieran construido una ciudad alternativa en el corazón de la capital. La sensación, recuerda, era de que todo era posible.\n\nTras el 4 de junio, algo se rompió en la sociedad china. No hubo duelo público. No hubo rabia colectiva. Hubo silencio y, después, el gran viraje: "todo el mundo quería enriquecerse, olvidar la política". La represión no solo mató a los manifestantes. Mató una forma de soñar.\n\nKissinger, en Washington, lo vivió desde la perspectiva estratégica: "Fue una tragedia. También fue un test de si podíamos preservar una relación vital para el equilibrio de poder global."\n\nFenby, el historiador, lo ve en perspectiva larga: "Tiananmen fue el momento en que el PCCh eligió el capitalismo autoritario en lugar de la democratización. Esa elección define China hasta hoy."',
          },
          {
            subtitle: 'Represión post-Tiananmen',
            text: 'En las semanas y meses siguientes a la represión:\n\n• Miles de estudiantes y activistas fueron arrestados\n• Varios de los líderes estudiantiles más conocidos fueron condenados a muerte o a largas penas de prisión\n• Otros huyeron a través de la llamada "Operación Pato Amarillo": una red clandestina que sacó a decenas de disidentes por Hong Kong hacia Occidente\n• El Secretario General reformista Zhao Ziyang —que había visitado a los estudiantes en la plaza llorando y diciéndoles "hemos llegado demasiado tarde"— fue colocado bajo arresto domiciliario. Pasó los siguientes 15 años de su vida sin poder salir de su propia casa.',
          },
          {
            subtitle: 'Las sanciones que no duraron',
            text: 'Occidente reaccionó con indignación. Estados Unidos, la Unión Europea y otros países impusieron sanciones económicas y suspendieron la cooperación militar con China.\n\nDuraron poco. El mundo necesitaba el mercado chino. Las empresas presionaron a sus gobiernos. En 1990, la mayoría de las sanciones habían sido levantadas o ignoradas en la práctica.',
          },
          {
            subtitle: 'El pacto tácito que define China hoy',
            text: 'De las cenizas de Tiananmen emergió un acuerdo implícito que nadie firmó pero todos entendieron:\n\nEl Partido ofrece: crecimiento económico, prosperidad material, estabilidad, orgullo nacional.\nLos ciudadanos aceptan: no cuestionar el monopolio político del Partido.\n\nEste pacto no es coerción pura. Es, en muchos casos, aceptación genuina. La alternativa —el caos, la fragmentación— es un miedo real en un país con la historia de China. Y durante tres décadas, el Partido cumplió su parte: las tasas de crecimiento más altas de la historia humana, la mayor reducción de la pobreza jamás lograda, el renacimiento del orgullo nacional chino.\n\nXi Jinping heredó ese pacto. La pregunta es si seguirá siendo suficiente.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'El Partido Comunista Chino aprendió de Tiananmen: la legitimidad no viene de las urnas sino del crecimiento económico. Esa es la apuesta que Xi Jinping heredó.',
        author: 'Jonathan Fenby, "The Penguin History of Modern China" (2008)',
      },
      {
        type: 'interactive',
        title: '¿Cómo Juzgamos a Deng Xiaoping?',
        content:
          'Este es uno de los ejercicios más difíciles de este curso, y lo es intencionalmente. No hay respuesta correcta.\n\nDeng Xiaoping ordenó la masacre de Tiananmen. En los años siguientes, también sacó a 400 millones de personas de la pobreza, transformó China en la segunda economía del mundo, y construyó la infraestructura que hoy da a China proyección global.\n\nHemos hablado mucho de los dilemas morales en historia. Este es quizás el más agudo:\n\n¿Cómo juzgamos a un líder cuyo peor acto y cuyo mejor acto son igualmente extraordinarios?\n\nAlgunas perspectivas para considerar:\n• El utilitarismo diría: cuenta los muertos de Tiananmen y los liberados de la pobreza. El resultado neto importa más que el acto individual.\n• La ética deontológica diría: hay actos que no pueden ser compensados por sus consecuencias. Ordenar una masacre es uno de ellos.\n• La perspectiva histórica china podría decir: sin la estabilidad que Deng impuso, el caos habría matado a más personas que Tiananmen.\n• La perspectiva de los estudiantes de 1989 diría: no hay desarrollo económico que valga una bala.\n\nReflexiona: ¿Qué marco moral usas para juzgar a los líderes históricos? ¿Intenciones, métodos, o resultados? ¿Cambia tu respuesta según la escala del bien y del mal que está en juego?',
      },
    ],
    quiz: {
      question: '¿Qué "pacto tácito" surgió tras Tiananmen según Fenby?',
      options: [
        'El Partido promete reformas políticas graduales; los ciudadanos aceptan esperar pacientemente',
        'El Partido garantiza estabilidad y seguridad; los ciudadanos renuncian a las libertades individuales',
        'El Partido ofrece crecimiento económico; los ciudadanos no cuestionan el monopolio político del PCCh',
        'El Partido permite libertad económica total; los ciudadanos aceptan la censura de la prensa',
      ],
      correct: 2,
      feedback: {
        correct:
          '¡Correcto! El pacto tácito post-Tiananmen fue el fundamento de la China contemporánea: el Partido ofrece crecimiento económico, prosperidad material y orgullo nacional; los ciudadanos no cuestionan el monopolio político del PCCh. Este acuerdo implícito, que ninguna de las dos partes ha firmado jamás, ha sostenido el sistema durante más de tres décadas. Xi Jinping lo heredó y sigue apostando por él.',
        incorrect:
          'Según Fenby, el pacto tácito fue: el Partido ofrece crecimiento económico y prosperidad; los ciudadanos aceptan no cuestionar el monopolio político del PCCh. No era un acuerdo explícito —nadie lo firmó— pero ambas partes lo entendieron. Este pacto ha definido la relación entre el Estado y la sociedad china durante más de treinta años.',
      },
    },
  },
}
