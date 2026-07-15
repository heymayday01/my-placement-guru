'use client'

import React from 'react'
import { CounterStat } from '@/components/ui/CounterStat'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const STATS = [
  {
    value: '90',
    suffix: '%',
    label: 'Resumes rejected before a human sees them',
    color: 'var(--color-primary)',
  },
  {
    value: '6',
    suffix: 's',
    label: 'Average time a hiring manager spends on a resume',
    color: 'var(--color-ink)',
  },
  {
    value: '70',
    suffix: '%',
    label: 'Of jobs are never publicly posted',
    color: 'var(--color-ink)',
  },
]

export function RealityCheck() {
  return (
    <section className="bg-gray-100 max-w-6xl mx-auto overflow-hidden rounded-2xl p-5 sm:p-7 mb-8 md:mb-10">
      <div className="flex flex-col items-center text-center pb-8">
        {/* Heading */}
        <div className="mb-6 md:mb-7">
          <ScrollReveal delay={0.1}>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-[1.1] text-[var(--color-ink)] mb-1 text-balance">
              The Truth Is
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-[15px] sm:text-[18px] opacity-90 md:text-2xl font-medium leading-[1.1] mb-1 text-balance">
              Colleges teach you the syllabus.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <p className="text-[15px] sm:text-[18px] opacity-90 md:text-2xl font-medium leading-[1.1] text-[var(--color-primary)] text-balance">
              They don&apos;t teach you the Selection.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats grid — 3 columns on all sizes, but compact on mobile */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full md:w-2/3 mx-auto">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={0.3 + i * 0.08} direction="up">
              <div className="bg-[var(--color-canvas)] rounded-xl shadow-[var(--shadow-soft-lift)] p-2.5 sm:p-4 md:p-5 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 h-full min-h-[130px] sm:min-h-[160px] md:min-h-[200px] border border-[var(--color-hairline)]">
                <CounterStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  accentColor={stat.color}
                  className="items-center text-center"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-para mt-8 text-balance mx-auto w-full md:w-2/3">
            Are you part of that 90%? If your resume isn&apos;t built for the algorithm,
            you&apos;re invisible — no matter how good you actually are.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
