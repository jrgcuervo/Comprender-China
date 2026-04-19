import type { Module, UserProgress } from '../types'
import { levels, lessonsByModule } from '../data/courseData'

interface Props {
  modules: Module[]
  progress: UserProgress
  onOpenModule: (moduleId: number) => void
}

/** Per-module metadata for the timeline rail */
const RAIL_META: Record<number, { era: string; cn: string; act: string }> = {
  0: { era: 'MÉTODO',    cn: '三种视角', act: 'Prólogo'  },
  1: { era: '1800–1911', cn: '根',       act: 'Acto I'   },
  2: { era: '1912–1949', cn: '乱',       act: 'Acto II'  },
  3: { era: '1949–1976', cn: '革命',     act: 'Acto III' },
  4: { era: '1976–1989', cn: '改革',     act: 'Acto IV'  },
  5: { era: '1990–HOY',  cn: '腾飞',     act: 'Acto V'   },
  6: { era: 'EPÍLOGO',   cn: '合',       act: 'Epílogo'  },
}

const ERA_STRIP = [
  { yr: '1949', title: 'Fundación',      desc: 'Proclamación de la República Popular. Del colapso imperial al Estado-partido.' },
  { yr: '1978', title: 'Reforma',        desc: 'Deng abre la economía. Nace la China de las zonas económicas especiales.' },
  { yr: '2001', title: 'Globalización',  desc: 'Ingreso en la OMC. China pasa de periferia a centro del sistema productivo.' },
  { yr: '2012', title: 'Nueva Era',      desc: 'Xi Jinping. Consolidación del poder, iniciativa de la Franja y la Ruta.' },
]

export default function DashboardTimeline({ modules, progress, onOpenModule }: Props) {
  const { completedLessons, level } = progress
  const currentLevel = levels[level - 1]

  /** Module progress helpers */
  function completedInModule(moduleId: number) {
    const lessons = lessonsByModule[moduleId] ?? []
    return lessons.filter(l => completedLessons.includes(l.id)).length
  }
  function totalInModule(moduleId: number) {
    return (lessonsByModule[moduleId] ?? []).length
  }
  function isModuleDone(moduleId: number) {
    const total = totalInModule(moduleId)
    return total > 0 && completedInModule(moduleId) === total
  }
  /** Find the first module not fully complete */
  const nextModule = modules.find(m => !isModuleDone(m.id)) ?? modules[0]
  const nextModuleLessons = (lessonsByModule[nextModule.id] ?? []).slice(0, 4)

  return (
    <div className="cc-section">
      {/* ---- HERO ---- */}
      <div className="tl-hero">
        <div>
          <span className="tl-hero-kicker">
            {completedInModule(nextModule.id) > 0 ? 'Bienvenido de vuelta' : 'Bienvenido al curso'}
          </span>
          <h2>
            Tu viaje por la <em>China moderna.</em>
          </h2>
          <p>
            Siete capítulos. Dos mil años de historia comprimidos en perspectivas que se complementan.
            Empezamos donde todo lo demás se vuelve inteligible.
          </p>
        </div>

        {/* Rank panel */}
        <aside className="rank-panel">
          <span className="rank-now-label">Rango actual</span>
          <h3>
            {currentLevel.name}
            <span className="cn">{currentLevel.chinese}</span>
          </h3>
          <div className="rank-sub">
            {level} de 6 — {level === 1 ? 'primer peldaño' : level === 6 ? 'cima alcanzada' : 'en ascenso'}
          </div>
          <ul className="rank-rungs">
            {[...levels].reverse().map(lvl => (
              <li key={lvl.id} className={lvl.id === level ? 'now' : ''}>
                <span className="num">{['I','II','III','IV','V','VI'][lvl.id - 1]}</span>
                <span>{lvl.name}{lvl.id === level ? ' →' : ''}</span>
                <span className="cn">{lvl.chinese}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* ---- TIMELINE RAIL ---- */}
      <div
        className="rail-wrap"
        style={{ '--ticks': modules.length } as React.CSSProperties}
      >
        <div
          className="rail-labels"
          style={{ '--ticks': modules.length } as React.CSSProperties}
        >
          {modules.map(m => (
            <div key={m.id} className="rail-label">{RAIL_META[m.id]?.act}</div>
          ))}
        </div>
        <div className="rail" />
        <div
          className="rail-ticks"
          style={{ '--ticks': modules.length } as React.CSSProperties}
        >
          {modules.map(m => {
            const done = isModuleDone(m.id)
            const isNext = m.id === nextModule.id
            const meta = RAIL_META[m.id]
            const completed = completedInModule(m.id)
            const total = totalInModule(m.id)
            return (
              <div
                key={m.id}
                className={`rail-tick${done ? ' done' : ''}${isNext ? ' now' : ''}`}
                onClick={() => onOpenModule(m.id)}
                title={`Abrir módulo ${m.number}: ${m.title}`}
              >
                <span className="era">{meta.era}</span>
                <span className="ttl">{m.title}</span>
                <span className="cn">{meta.cn}</span>
                <span className="prog">
                  {done
                    ? `✓ ${total} lecciones`
                    : total > 0
                      ? `${completed} / ${total} lecc.`
                      : 'Próximamente'}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ---- CONTINUE CARD ---- */}
      <article className="continue-card">
        <div className="continue-left">
          <span className="continue-kicker">
            {completedInModule(nextModule.id) > 0 ? 'Continuar' : 'Comenzar'}&nbsp;·&nbsp;Capítulo {nextModule.number}
          </span>
          <h3>{nextModule.title}</h3>
          <div className="continue-sub">{nextModule.subtitle}</div>
          <p>{nextModule.description}</p>
          <div className="continue-tags">
            {nextModule.topics.slice(0, 3).map((t, i) => (
              <span key={i} className="continue-tag">{t}</span>
            ))}
            <span className="continue-tag">{nextModule.duration}</span>
            <span className="continue-tag">{nextModule.lessons} lecciones</span>
          </div>
          <button className="continue-cta" onClick={() => onOpenModule(nextModule.id)}>
            {completedInModule(nextModule.id) > 0 ? 'Continuar el capítulo' : 'Comenzar el capítulo'}&nbsp;→
          </button>
        </div>

        <div className="continue-right">
          <h4>En este capítulo</h4>
          <ol>
            {nextModuleLessons.map(l => (
              <li key={l.id}>{l.title}</li>
            ))}
          </ol>
          <div className="continue-meta-line">Progreso guardado automáticamente</div>
        </div>
      </article>

      {/* ---- ERA STRIP ---- */}
      <div className="era-strip">
        {ERA_STRIP.map(era => (
          <div key={era.yr} className="era-item">
            <span className="era-yr">{era.yr}</span>
            <h4>{era.title}</h4>
            <p>{era.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
