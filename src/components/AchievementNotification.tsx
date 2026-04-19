interface Props {
  title: string
  icon: string
  description: string
}

export default function AchievementNotification({ title, icon, description }: Props) {
  return (
    <div className="achievement-notification">
      <div className="achievement-icon">{icon}</div>
      <div className="achievement-title">{title}</div>
      <div className="achievement-description">{description}</div>
    </div>
  )
}
