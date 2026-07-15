'use client'

import React, { useEffect, useRef } from 'react'
import { BONUSES } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Bonuses() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.bonus-card')
    gsap.set(cards, { y: 25, opacity: 0 })
    gsap.to(
      cards,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
      }
    )
  }, [])

  return (
    <section id="bonuses" className="max-w-6xl mx-auto bg-gray-100 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 overflow-hidden mt-8 md:mt-10 rounded-2xl sm:rounded-3xl">
      <div className="mx-auto flex flex-col items-center w-full">
        <div className="text-center mb-8 md:mb-10">
          <ScrollReveal delay={0.15}>
            <h2 className="title mb-2">
              Bonuses Included
            </h2>
          </ScrollReveal>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {BONUSES.map((b) => (
            <div key={b.title} className="bonus-card h-full group">
              <div className="bg-[var(--color-canvas)] rounded-2xl shadow-[var(--shadow-soft-lift)] p-6 sm:p-8 h-full relative overflow-hidden flex flex-col border border-[var(--color-hairline)] transition-transform duration-300 hover:scale-[1.02]">
                {/* Icon chip */}
                <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-xl bg-[var(--color-primary-soft)] flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="font-display text-[17px] sm:text-[20px] font-medium leading-[1.2] text-[var(--color-ink)] mb-2">
                  {b.title}
                </h3>
                <p className="text-[13px] sm:text-[15px] text-[var(--color-charcoal)] leading-[1.6]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
