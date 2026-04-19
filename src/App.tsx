import { useEffect } from 'react'
import { useState } from 'react'
import type { View } from './types'
import { modules } from './data/courseData'
import { useProgress } from './hooks/useProgress'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ModuleView from './components/ModuleView'
import LessonView from './components/LessonView'
import AchievementNotification from './components/AchievementNotification'

export default function App() {
  const [view, setView]                     = useState<View>('dashboard')
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null)
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null)
  const [showAchievement, setShowAchievement] = useState(false)

  const { progress, completeLesson, resetProgress, isLessonCompleted } = useProgress()

  // Lock palette to Tinta & Papel
  useEffect(() => {
    document.body.classList.remove('pal-A', 'pal-B', 'pal-C')
    document.body.classList.add('pal-A')
  }, [])

  function openModule(moduleId: number) {
    setActiveModuleId(moduleId)
    setView('module')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function openLesson(lessonId: string) {
    setActiveLessonId(lessonId)
    setView('lesson')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleCompleteLesson() {
    if (activeLessonId) {
      const wasNew = !isLessonCompleted(activeLessonId)
      completeLesson(activeLessonId)
      if (wasNew) {
        setShowAchievement(true)
        setTimeout(() => setShowAchievement(false), 5000)
      }
    }
    setView('module')
    setActiveLessonId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeModule = modules.find(m => m.id === activeModuleId) ?? null

  return (
    <div className="app-container">
      <Header progress={progress} onReset={resetProgress} />

      <main>
        {view === 'dashboard' && (
          <Dashboard
            modules={modules}
            progress={progress}
            onOpenModule={openModule}
          />
        )}

        {view === 'module' && activeModule && (
          <ModuleView
            module={activeModule}
            completedLessons={progress.completedLessons}
            onOpenLesson={openLesson}
            onBack={() => { setView('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          />
        )}

        {view === 'lesson' && activeLessonId && (
          <LessonView
            lessonId={activeLessonId}
            onComplete={handleCompleteLesson}
            onBack={() => { setView('module'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          />
        )}
      </main>

      {showAchievement && (
        <AchievementNotification
          title="¡Pieza completada!"
          icon="🎉"
          description="+250 Perlas de Sabiduría ganadas"
        />
      )}
    </div>
  )
}
