import { Check, CreditCard, FileText, User } from 'lucide-react'

export default function LargeTimeline() {
  return (
    <ol className="relative text-gray-500 border-s-4 border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <TimelineItem
        title="Personal Info"
        description="Enter your personal details"
        icon={User}
        isCompleted={true}
      />
      <TimelineItem
        title="Account Info"
        description="Set up your account preferences"
        icon={CreditCard}
      />
      <TimelineItem
        title="Review"
        description="Review your information"
        icon={FileText}
      />
      <TimelineItem
        title="Confirmation"
        description="Confirm and complete setup"
        icon={Check}
        isLast={true}
      />
    </ol>
  )
}

interface TimelineItemProps {
  title: string
  description: string
  icon: React.ElementType
  isCompleted?: boolean
  isLast?: boolean
}

function TimelineItem({ title, description, icon: Icon, isCompleted = false, isLast = false }: TimelineItemProps) {
  return (
    <li className={`mb-12 ms-8 ${isLast ? '' : 'pb-12 border-b border-gray-200 dark:border-gray-700'}`}>
      <span className={`absolute flex items-center justify-center w-16 h-16 rounded-full -start-9 ring-8 ring-white dark:ring-gray-900 ${
        isCompleted ? 'bg-green-200 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-700'
      }`}>
        <Icon className={`w-8 h-8 ${
          isCompleted ? 'text-green-500 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
        }`} />
      </span>
      <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-lg">{description}</p>
    </li>
  )
}

