import React from 'react'
import Image from 'next/image'
import { CalendarDays, MapPin } from 'lucide-react'
import { educationData, EducationItem } from '@/data'

export default function EducationTimeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {educationData.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === educationData.length - 1} />
      ))}
    </ol>
  )
}

interface TimelineItemProps {
  item: EducationItem
  isLast: boolean
}

function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <li className={`ms-6 ${isLast ? '' : 'mb-10'}`}>
      <span className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full -start-8 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
        <Image src={item.icon} alt={`${item.place} logo`} width={60} height={60} className="rounded-full" />
      </span>
      <div className="p-4 bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
        <div className="text-xl font-semibold text-gray-900">
          {item.place}
        </div>
        <div className="items-center justify-between mb-2 sm:flex">
          <time className="mb-1 font-normal text-gray-400 sm:order-last sm:mb-0">
            <CalendarDays className="inline-block w-4 h-4 mr-1" />
            {item.date}
          </time>
          <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
            <MapPin className="inline-block w-4 h-4 mr-1" />
            {item.location}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800  dark:text-white">
          {item.title}
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </li>
  )
}

