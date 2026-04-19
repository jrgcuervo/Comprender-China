// ============================================================
// TIPOS TYPESCRIPT — Comprender China
// ============================================================

export interface Level {
  id: number
  name: string
  chinese: string
}

export interface LessonMeta {
  id: string
  title: string
  description: string
  content: string
}

export interface Module {
  id: number
  number: string
  title: string
  subtitle: string
  duration: string
  lessons: number
  description: string
  topics: string[]
  locked: boolean
}

// --- Contenido de lecciones ---

export interface ContentItemText {
  subtitle?: string
  text: string
}

export interface SectionIntro {
  type: 'intro'
  content: string
}

export interface SectionText {
  type: 'text'
  title: string
  content: ContentItemText[]
}

export interface SectionQuote {
  type: 'quote'
  text: string
  author: string
}

export interface SectionInteractive {
  type: 'interactive'
  title: string
  content: string
}

export type Section = SectionIntro | SectionText | SectionQuote | SectionInteractive

export interface Quiz {
  question: string
  options: string[]
  correct: number
  feedback: {
    correct: string
    incorrect: string
  }
}

export interface LessonContent {
  title: string
  sections: Section[]
  quiz: Quiz
}

// --- Progreso del usuario ---

export interface UserProgress {
  level: number
  points: number
  streak: number
  completedLessons: string[]
  lastVisit: string
}

// --- Vista activa ---

export type View = 'dashboard' | 'module' | 'lesson'
