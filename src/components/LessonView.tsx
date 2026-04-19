import { useState } from 'react'
import { lessonContent } from '../data/lessonContent'
import { lessonsByModule, modules } from '../data/courseData'
import type { Section } from '../types'

interface Props {
  lessonId: string
  onComplete: () => void
  onBack: () => void
}

function renderSection(section: Section, index: number) {
  switch (section.type) {
    case 'intro':
      return (
        <div key={index} className="pieza-intro">
          <p>{section.content}</p>
        </div>
      )

    case 'text':
      return (
        <div key={index} className="pieza-text">
          <h2>{section.title}</h2>
          {section.content.map((item, i) => (
            <div key={i}>
              {item.subtitle && <h3>{item.subtitle}</h3>}
              <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
            </div>
          ))}
        </div>
      )

    case 'quote':
      return (
        <blockquote key={index} className="pieza-quote">
          <p className="pieza-quote-text">{section.text}</p>
          <cite className="pieza-quote-author">— {section.author}</cite>
        </blockquote>
      )

    case 'interactive':
      return (
        <div key={index} className="pieza-interactive">
          <div className="pieza-interactive-title">{section.title}</div>
          <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
        </div>
      )

    default:
      return null
  }
}

export default function LessonView({ lessonId, onComplete, onBack }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback]     = useState(false)

  // Resolve content key and parent module
  let contentKey   = 'lesson_wip'
  let moduleNumber = ''
  for (const moduleId in lessonsByModule) {
    const list = lessonsByModule[Number(moduleId)]
    const idx  = list.findIndex(l => l.id === lessonId)
    if (idx !== -1) {
      contentKey   = list[idx].content
      const mod    = modules.find(m => m.id === Number(moduleId))
      moduleNumber = mod?.title ?? ''
      break
    }
  }

  const lesson = lessonContent[contentKey]

  if (!lesson) {
    return (
      <div className="cc-section">
        <button className="sala-back" onClick={onBack}>← Volver a la sala</button>
        <div className="pieza-loading">
          <div className="pieza-spinner" />
          <p>Cargando pieza…</p>
        </div>
      </div>
    )
  }

  const isCorrect = selectedAnswer === lesson.quiz.correct

  function handleAnswer(index: number) {
    if (!showFeedback) {
      setSelectedAnswer(index)
      setShowFeedback(true)
    }
  }

  return (
    <div className="cc-section pieza-section">

      {/* Breadcrumb */}
      <button className="sala-back" onClick={onBack}>
        ← Volver a la sala
      </button>

      {/* Lesson header */}
      <header className="pieza-header">
        <div className="pieza-kicker">
          LECCIÓN {lessonId} · {moduleNumber.toUpperCase()}
        </div>
        <h1 className="pieza-title">{lesson.title}</h1>
      </header>

      {/* Content */}
      <div className="pieza-content">
        {lesson.sections.map(renderSection)}
      </div>

      {/* Quiz */}
      <div className="pieza-quiz">
        <div className="pieza-quiz-kicker">Quiz de comprensión</div>
        <div className="pieza-quiz-card">
          <p className="pieza-quiz-q">{lesson.quiz.question}</p>
          <div className="pieza-quiz-opts">
            {lesson.quiz.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectOpt = showFeedback && index === lesson.quiz.correct
              const isWrong = showFeedback && isSelected && !isCorrect
              return (
                <button
                  key={index}
                  className={[
                    'pieza-quiz-opt',
                    isSelected && !showFeedback ? 'selected' : '',
                    isCorrectOpt ? 'correct' : '',
                    isWrong ? 'wrong' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                >
                  <span className="opt-letter">
                    {['A', 'B', 'C', 'D'][index]}
                  </span>
                  <span>{option}</span>
                </button>
              )
            })}
          </div>
          {showFeedback && (
            <div className={`pieza-quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect
                ? lesson.quiz.feedback.correct
                : lesson.quiz.feedback.incorrect}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="pieza-nav">
        <button className="pieza-nav-back" onClick={onBack}>
          ← Volver a la sala
        </button>
        <button
          className="pieza-nav-complete"
          onClick={onComplete}
          disabled={!showFeedback}
        >
          {showFeedback ? 'Completar pieza →' : 'Completa el quiz primero'}
        </button>
      </nav>

    </div>
  )
}
