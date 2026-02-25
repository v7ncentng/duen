'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LogoLoopProps {
  children: ReactNode[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
  gap?: string
}

export default function LogoLoop({ 
  children, 
  speed = 20, 
  direction = 'left',
  className = '',
  gap = 'gap-6'
}: LogoLoopProps) {
  // Split children into three rows
  const thirdPoint = Math.ceil(children.length / 3)
  const firstRow = children.slice(0, thirdPoint)
  const secondRow = children.slice(thirdPoint, thirdPoint * 2)
  const thirdRow = children.slice(thirdPoint * 2)
  
  // Duplicate each row to create seamless loop
  const duplicatedFirstRow = [...firstRow, ...firstRow]
  const duplicatedSecondRow = [...secondRow, ...secondRow]
  const duplicatedThirdRow = [...thirdRow, ...thirdRow]

  return (
    <div className={`flex flex-col overflow-hidden w-full ${className}`}>
      {/* First Row - scrolls in specified direction */}
      <div className="overflow-hidden w-full">
        <motion.div
          className={`flex ${gap}`}
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          }}
        >
          {duplicatedFirstRow.map((child, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Second Row - scrolls in opposite direction */}
      <div className="overflow-hidden w-full">
        <motion.div
          className={`flex ${gap}`}
          animate={{
            x: direction === 'left' ? ['-50%', '0%'] : ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          }}
        >
          {duplicatedSecondRow.map((child, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Third Row - scrolls in same direction as first row */}
      <div className="overflow-hidden w-full">
        <motion.div
          className={`flex ${gap}`}
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          }}
        >
          {duplicatedThirdRow.map((child, index) => (
            <div key={`row3-${index}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
