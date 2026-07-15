'use client'

import React from 'react'
import { m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  once?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'none',
  once = true,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  // Smaller offsets on mobile for snappier feel
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  const offset = isMobile ? 20 : 30

  const yOffset = direction === 'up' ? offset : 0
  const xOffset = direction === 'left' ? -offset : direction === 'right' ? offset : 0

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{
          y: yOffset,
          x: xOffset,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        viewport={{ once, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
