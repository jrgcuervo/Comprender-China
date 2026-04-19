import type { UserProgress } from '../types'
import { levels } from '../data/courseData'

interface Props {
  progress: UserProgress
  onReset: () => void
}

export default function Header({ progress, onReset }: Props) {
  const currentLevel = levels[progress.level - 1]

  return (
    <header className="cc-chrome">
      <div className="cc-chrome-inner">
        <span className="cc-logo">
          Comprender China <span className="cn">理解</span>
        </span>

        <div className="cc-meta">
          <span>
            Rango&nbsp;
            <b>{currentLevel.name}</b>
            <span className="cn">{currentLevel.chinese}</span>
          </span>
          <span>
            Progreso&nbsp;
            <b>{progress.completedLessons.length}/35</b>
          </span>
          <span className="cc-meta-streak">
            Racha&nbsp;<b>{progress.streak} día{progress.streak !== 1 ? 's' : ''}</b>
          </span>
        </div>

        <button className="cc-reset" onClick={onReset} title="Reiniciar progreso">
          RESET
        </button>
      </div>
    </header>
  )
}
