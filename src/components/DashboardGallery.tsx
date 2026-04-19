import type { Module, UserProgress } from '../types'
import { levels, lessonsByModule } from '../data/courseData'
import ModuleIllustration from './ModuleIllustration'

interface Props {
  modules: Module[]
  progress: UserProgress
  onOpenModule: (moduleId: number) => void
}

const PIECE_NUM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const PIECE_ACT = ['PRÓLOGO', 'ACTO I', 'ACTO II', 'ACTO III', 'ACTO IV', 'ACTO V', 'EPÍLOGO']

/** Hero illustration: big version of the "three lenses" (module 0) */
function HeroIllustration() {
  return (
    <svg viewBox="0 0 600 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grain" width="3" height="3" patternUnits="userSpaceOnUse">
          <rect width="3" height="3" fill="var(--card-2)" />
          <circle cx="1" cy="1" r=".4" fill="var(--ink)" opacity=".07" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill="url(#grain)" />
      {/* Horizon line */}
      <line x1="0" y1="300" x2="600" y2="300" stroke="var(--ink)" strokeWidth=".5" opacity=".3" />
      {/* Moon/sun ring */}
      <circle cx="470" cy="170" r="62" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity=".55" />
      {/* Three lenses */}
      <g stroke="var(--ink)" strokeWidth="1.5" fill="none">
        <circle cx="200" cy="240" r="95" />
        <circle cx="300" cy="240" r="95" />
        <circle cx="400" cy="240" r="95" />
      </g>
      <g fill="var(--accent)" opacity=".16">
        <circle cx="200" cy="240" r="95" />
        <circle cx="300" cy="240" r="95" />
        <circle cx="400" cy="240" r="95" />
      </g>
      {/* Mountain silhouette */}
      <path
        d="M0 330 L80 300 L140 320 L220 290 L300 310 L380 285 L460 305 L540 290 L600 305 L600 480 L0 480Z"
        fill="var(--ink)" opacity=".9"
      />
      {/* Chinese character watermark */}
      <text x="540" y="120" fontFamily="'Noto Serif SC', serif" fontSize="88"
        fill="var(--accent)" opacity=".1" textAnchor="end">視</text>
      {/* Vertical rain/strokes */}
      <g stroke="var(--ink)" strokeWidth=".4" opacity=".2">
        <line x1="30" y1="60"  x2="30" y2="220" />
        <line x1="50" y1="80"  x2="50" y2="210" />
        <line x1="70" y1="70"  x2="70" y2="230" />
      </g>
    </svg>
  )
}

export default function DashboardGallery({ modules, progress, onOpenModule }: Props) {
  const { completedLessons, level } = progress
  const currentLevel = levels[level - 1]
  const nextLevel    = levels[level] ?? null

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

  /** First incomplete module */
  const featuredModule = modules.find(m => !isModuleDone(m.id)) ?? modules[0]
  const visitedCount   = modules.filter(m => completedInModule(m.id) > 0).length

  function badgeLabel(m: Module) {
    if (m.id === featuredModule.id && completedInModule(m.id) === 0) return 'EMPIEZA AQUÍ'
    if (m.id === featuredModule.id) return 'ESTÁS AQUÍ'
    if (isModuleDone(m.id)) return 'COMPLETADO'
    if (completedInModule(m.id) > 0) return 'EN PROGRESO'
    return null
  }

  return (
    <div className="cc-section">
      {/* ---- GALLERY HERO ---- */}
      <div className="gal-hero">
        <div className="gal-art">
          <HeroIllustration />
          <span className="gal-art-plate">
            Pabellón {PIECE_NUM[featuredModule.id]} · {featuredModule.title}
          </span>
        </div>
        <div className="gal-copy">
          <div className="gal-kicker">Sala destacada</div>
          <h2>
            {featuredModule.title.split(' ').length > 1
              ? <>{featuredModule.title.split(' ')[0]} <em>{featuredModule.title.split(' ').slice(1).join(' ')}.</em></>
              : <em>{featuredModule.title}.</em>
            }
          </h2>
          <div className="gal-sub">{featuredModule.subtitle}</div>
          <p>{featuredModule.description}</p>
          <div className="gal-meta">
            <span>{featuredModule.duration}</span>
            <span>{featuredModule.lessons} lecciones</span>
            <span>Módulo {featuredModule.number}</span>
          </div>
          <button className="gal-cta" onClick={() => onOpenModule(featuredModule.id)}>
            {completedInModule(featuredModule.id) > 0 ? 'Continuar el pabellón' : 'Entrar al pabellón'}&nbsp;→
          </button>
        </div>
      </div>

      {/* ---- COLLECTION GRID ---- */}
      <section>
        <div className="exhibit-head">
          <b>La colección completa</b>
          <span>{visitedCount} de {modules.length} salas visitadas</span>
        </div>
        <div className="pieces">
          {modules.map((m, idx) => {
            const done       = isModuleDone(m.id)
            const isFeatured = m.id === featuredModule.id
            const badge      = badgeLabel(m)
            return (
              <div
                key={m.id}
                className={`piece${isFeatured ? ' now' : ''}${done ? ' done' : ''}`}
                onClick={() => onOpenModule(m.id)}
                title={`Módulo ${m.number}: ${m.title}`}
              >
                <div className="piece-img">
                  {badge && <span className="piece-badge">{badge}</span>}
                  <ModuleIllustration moduleId={m.id} />
                </div>
                <span className="piece-num">
                  {PIECE_NUM[idx]} · {PIECE_ACT[idx]}
                </span>
                <h4>
                  {m.title}
                  <span className="piece-cn">{['三种视角','根','乱','革命','改革','腾飞','合'][idx]}</span>
                </h4>
                <span className="piece-era">
                  {m.subtitle.includes('(')
                    ? m.subtitle.split('(')[0].trim()
                    : m.subtitle}
                  {totalInModule(m.id) > 0 && ` · ${completedInModule(m.id)}/${totalInModule(m.id)} lecc.`}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---- DOCENT PANEL ---- */}
      <div className="docent">
        <div className="docent-seal">
          {currentLevel.chinese.slice(0, 1)}
        </div>
        <div className="docent-txt">
          <b>{currentLevel.name} de China · Rango {['I','II','III','IV','V','VI'][level - 1]}</b>
          <span>
            {nextLevel
              ? `El rango ${nextLevel.name} (${nextLevel.chinese}) te espera tras completar más pabellones.`
              : '¡Has alcanzado el máximo rango. China ya no tiene secretos para ti.'}
          </span>
        </div>
        <div className="docent-ladder">
          {levels.map(lvl => (
            <i
              key={lvl.id}
              className={lvl.id < level ? 'on' : lvl.id === level ? 'now' : ''}
            />
          ))}
        </div>
        {nextLevel && (
          <div className="docent-next">
            Siguiente rango
            <b>{nextLevel.name} {nextLevel.chinese}</b>
          </div>
        )}
      </div>
    </div>
  )
}
