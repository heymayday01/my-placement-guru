'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function ClosingBand() {
  return (
    <section className="max-w-6xl mx-auto overflow-hidden mt-8 md:mt-10 mb-8 md:mb-10 p-5 sm:p-8 md:p-12 text-center">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal delay={0.1}>
          <h2 className="title mb-3">
            Your career doesn&apos;t wait.
            <br />
            <span className="text-[var(--color-primary)]">Neither should you.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-para text-center max-w-md mx-auto mb-5">
            Free Session · July 26, 2026 · 11 AM – 1 PM IST · Only 100 Seats
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[12px] sm:text-sm font-semibold uppercase tracking-[0.7px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-deep)] transition-colors duration-300 shadow-[var(--shadow-soft-lift)]"
          >
            Register Now — It&apos;s Free
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
