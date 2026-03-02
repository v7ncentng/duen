'use client'

import { useState } from 'react'
import OfficerBadge from './OfficerBadge'
import OfficerType from '@/app/models/IOfficerType'

interface CohortSectionProps {
  cohortName: string
  officers: OfficerType[]
}

const CohortSection: React.FC<CohortSectionProps> = ({ cohortName, officers }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex flex-col items-center pb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-4 text-3xl md:text-4xl lg:text-5xl pb-10 text-purple font-bold hover:text-purple-700 transition-colors"
      >
        <span>{cohortName}</span>
        <svg
          className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-wrap justify-center pt-5">
          {officers.map((curr_officer) => {
            return (
              <OfficerBadge
                key={curr_officer.name}
                name={curr_officer.name}
                year={curr_officer.year}
                major={curr_officer.major}
                cohort={curr_officer.cohort}
                position={curr_officer.position}
                linkedin={curr_officer.linkedin}
                image={curr_officer.image}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CohortSection