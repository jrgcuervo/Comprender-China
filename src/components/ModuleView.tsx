import type { Module } from '../types'
import { lessonsByModule } from '../data/courseData'

interface Props {
  module: Module
  completedLessons: string[]
  onOpenLesson: (lessonId: string) => void
  onBack: () => void
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']
const MODULE_CN: Record<number, string> = {
  0: '三种视角',
  1: '根',
  2: '乱',
  3: '革命',
  4: '改革',
  5: '腾飞',
  6: '合',
}

export default function ModuleView({ module, completedLessons, onOpenLesson, onBack }: Props) {
  const lessons   = lessonsByModule[module.id] ?? []
  const completed = lessons.filter(l => completedLessons.includes(l.id)).length
  const cn        = MODULE_CN[module.id] ?? ''

  return (
    <div className="cc-section">

      {/* Breadcrumb back */}
      <button className="sala-back" onClick={onBack}>
        ← Volver a la colección
      </button>

      {/* Sala header */}
      <header className="sala-header">
        <div className="sala-kicker">
          SALA {ROMAN[module.id]} · MÓDULO {module.number}
          <span className="sala-progress">
            {completed}/{lessons.length} piezas completadas
          </span>
        </div>
        <h1 className="sala-title">
          {module.title}
          <span className="sala-cn">{cn}</span>
        </h1>
        <p className="sala-subtitle">{module.subtitle}</p>
        <p className="sala-desc">{module.description}</p>
        <div className="sala-tags">
          {module.topics.map((t, i) => (
            <span key={i} className="continue-tag">{t}</span>
          ))}
          <span className="continue-tag">{module.duration}</span>
        </div>
      </header>

      {/* Progress bar */}
      {lessons.length > 0 && (
        <div className="sala-prog-wrap">
          <div
            className="sala-prog-bar"
            style={{ width: `${(completed / lessons.length) * 100}%` }}
          />
        </div>
      )}

      {/* Lesson pieces grid */}
      <div className="sala-pieces">
        {lessons.map((lesson, idx) => {
          const isDone = completedLessons.includes(lesson.id)
          return (
            <article
              key={lesson.id}
              className={`sala-piece${isDone ? ' done' : ''}`}
              onClick={() => onOpenLesson(lesson.id)}
            >
              <div className="sala-piece-art">
                <span className="sala-piece-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {isDone && <span className="sala-piece-done-badge">✓</span>}
              </div>
              <div className="sala-piece-body">
                <span className="sala-piece-label">
                  PIEZA {String(idx + 1).padStart(2, '0')} · LECCIÓN {lesson.id}
                </span>
                <h3 className="sala-piece-title">{lesson.title}</h3>
                <p className="sala-piece-desc">{lesson.description}</p>
                <span className="sala-piece-cta">
                  {isDone ? 'Repasar →' : 'Entrar →'}
                </span>
              </div>
            </article>
          )
        })}
      </div>

    </div>
  )
}
