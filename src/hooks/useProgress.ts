import { useState, useEffect } from 'react'
import type { UserProgress } from '../types'
import { POINTS_PER_LESSON, POINTS_PER_LEVEL } from '../data/courseData'

const STORAGE_KEY = 'comprender_china_progreso'

const defaultProgress: UserProgress = {
  level: 1,
  points: 0,
  streak: 0,
  completedLessons: [],
  lastVisit: new Date().toISOString(),
}

function loadProgress(): UserProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
  return defaultProgress
}

function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // ignorar errores de escritura
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress)

  // Persistir cada vez que cambia el progreso
  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  // Actualizar racha al cargar la app
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const lastVisit = progress.lastVisit.split('T')[0]

    if (lastVisit !== today) {
      const daysDiff = Math.floor(
        (new Date(today).getTime() - new Date(lastVisit).getTime()) / (1000 * 60 * 60 * 24)
      )
      setProgress(prev => ({
        ...prev,
        streak: daysDiff === 1 ? prev.streak + 1 : 1,
        lastVisit: new Date().toISOString(),
      }))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function completeLesson(lessonId: string) {
    if (progress.completedLessons.includes(lessonId)) return

    setProgress(prev => {
      const newPoints = prev.points + POINTS_PER_LESSON
      const newLevel = Math.min(Math.floor(newPoints / POINTS_PER_LEVEL) + 1, 6)
      return {
        ...prev,
        points: newPoints,
        level: newLevel,
        completedLessons: [...prev.completedLessons, lessonId],
        lastVisit: new Date().toISOString(),
      }
    })
  }

  function resetProgress() {
    if (window.confirm('¿Estás seguro de que quieres reiniciar tu progreso? Esta acción no se puede deshacer.')) {
      localStorage.removeItem(STORAGE_KEY)
      setProgress(defaultProgress)
    }
  }

  function isLessonCompleted(lessonId: string) {
    return progress.completedLessons.includes(lessonId)
  }

  return { progress, completeLesson, resetProgress, isLessonCompleted }
}
