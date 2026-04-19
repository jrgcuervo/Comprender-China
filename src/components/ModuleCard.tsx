import type { Module } from '../types'
import { lessonsByModule } from '../data/courseData'

interface Props {
  module: Module
  completedLessons: string[]
  onOpen: (moduleId: number) => void
}

export default function ModuleCard({ module, completedLessons, onOpen }: Props) {
  const moduleLessons = lessonsByModule[module.id] ?? []
  const completed = moduleLessons.filter(l => completedLessons.includes(l.id)).length
  const progress = moduleLessons.length > 0 ? (completed / moduleLessons.length) * 100 : 0

  const handleClick = () => {
    if (!module.locked) onOpen(module.id)
  }

  return (
    <div className={`module-card ${module.locked ? 'locked' : ''}`} onClick={handleClick}>
      <div className="module-header">
        <div className="module-number">{module.number}</div>
        <h3 className="module-title">{module.title}</h3>
        <p className="module-subtitle">{module.subtitle}</p>
      </div>
      <div className="module-body">
        <div className="module-meta">
          <div className="meta-item">
            <span>⏱️</span>
            <span>{module.duration}</span>
          </div>
          <div className="meta-item">
            <span>📖</span>
            <span>{module.lessons} lecciones</span>
          </div>
        </div>
        <p className="module-description">{module.description}</p>
        <div className="module-topics">
          {module.topics.map((topic, i) => (
            <span key={i} className="topic-tag">
              {topic}
            </span>
          ))}
        </div>
        <div className="module-progress">
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-text">
            {completed} de {moduleLessons.length} lecciones
          </div>
        </div>
        <button className="module-button" disabled={module.locked}>
          {module.locked ? '🔒 Próximamente' : progress > 0 ? 'Continuar' : 'Comenzar'}
        </button>
      </div>
    </div>
  )
}
