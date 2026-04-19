import type { Module, UserProgress } from '../types'
import DashboardGallery from './DashboardGallery'

interface Props {
  modules: Module[]
  progress: UserProgress
  onOpenModule: (moduleId: number) => void
}

export default function Dashboard({ modules, progress, onOpenModule }: Props) {
  return (
    <DashboardGallery
      modules={modules}
      progress={progress}
      onOpenModule={onOpenModule}
    />
  )
}
