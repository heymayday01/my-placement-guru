'use client'

import React, { useState, useEffect } from 'react'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { CalendarBlank, Clock, User } from '@phosphor-icons/react'
import { FREE_DATE_ISO, FREE_TIME_ISO } from '@/lib/constants'

// Fixed webinar date: July 26, 2026 at 11:00 AM IST (UTC+5:30)
const WEBINAR_TARGET_ISO = `${FREE_DATE_ISO}T${FREE_TIME_ISO}:00+05:30`
const WEBINAR_TARGET_MS = new Date(WEBINAR_TARGET_ISO).getTime()

// Split a millisecond delta into days/hours/minutes/seconds.
function splitDelta(ms: number) {
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((ms % (1000 * 60)) / 1000),
  }
}

export function WebinarHero() {
  // SSR renders 00:00:00:00; the client hydrates the same, then the
  // interval kicks in and updates to the real values. This avoids both
  // hydration mismatches AND the setState-in-effect lint rule.
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Tick once immediately (deferred via rAF so we don't call setState
    // synchronously in the effect body), then every second thereafter.
    const tick = () => setTimeLeft(splitDelta(WEBINAR_TARGET_MS - Date.now()))
    const raf = requestAnimationFrame(tick)
    const interval = setInterval(tick, 1000)

    return () => {
      cancelAnimationFrame(raf)
      clearInterval(interval)
    }
  }, [])

  const handleScrollToForm = () => {
    const formElement = document.getElementById('webinar-registration-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Format single digits with leading zero
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time)

  return (
    <section className="bg-[var(--color-ink)] pt-20 pb-16 px-6 text-center overflow-hidden rounded-3xl">
      <div className="max-w-[850px] mx-auto flex flex-col items-center">
        {/* Live Badge */}
        <ScrollReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-[var(--color-primary-soft)] text-[var(--color-primary-deep)] px-3.5 py-1.5 rounded-full text-[12px] font-bold tracking-[0.05em] uppercase mb-6 animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
            Free Live Webinar
          </div>
        </ScrollReveal>

        {/* Catchy headline */}
        <SplitText
          text="Stop Applying. Start Getting Hired."
          as="h1"
          className="text-balance font-display text-[clamp(28px,5vw,52px)] font-bold leading-[1.1] text-[var(--color-on-ink)] mb-4"
          by="word"
          staggerDelay={0.05}
        />

        <ScrollReveal delay={0.4}>
          <p className="font-body text-[16px] sm:text-[18px] font-normal text-[var(--color-steel)] mb-8 max-w-[650px] leading-[1.5]">
            Learn the Hiring Manager's Secret to cracking top IT & Marketing roles in a live 3-hour session directly with a startup Founder.
          </p>
        </ScrollReveal>

        {/* Countdown Timer */}
        <ScrollReveal delay={0.5} className="w-full max-w-[500px] mb-8">
          <div className="bg-black/40 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
            <p className="text-[12px] font-bold tracking-wider uppercase text-white/50 mb-3">
              Seats are filling fast! Session starts in:
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {/* Days */}
              <div className="bg-white/5 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-display text-[24px] sm:text-[32px] font-bold text-white leading-none">
                  {formatTime(timeLeft.days)}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 mt-1.5">Days</span>
              </div>
              {/* Hours */}
              <div className="bg-white/5 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-display text-[24px] sm:text-[32px] font-bold text-white leading-none">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 mt-1.5">Hours</span>
              </div>
              {/* Minutes */}
              <div className="bg-white/5 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-display text-[24px] sm:text-[32px] font-bold text-white leading-none">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 mt-1.5">Mins</span>
              </div>
              {/* Seconds */}
              <div className="bg-white/5 rounded-xl py-3 px-2 flex flex-col items-center">
                <span className="font-display text-[24px] sm:text-[32px] font-bold text-white leading-none text-[var(--color-primary-bright)]">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 mt-1.5">Secs</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Quick details */}
        <ScrollReveal delay={0.6} className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/70 text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <CalendarBlank size={18} className="text-[var(--color-primary-bright)]" />
              <span>July 26, 2026</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[var(--color-primary-bright)]" />
              <span>11:00 AM IST (2 Hours Live)</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <User size={18} className="text-[var(--color-primary-bright)]" />
              <span>By Sarang Thakre</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Direct Action Button */}
        <ScrollReveal delay={0.7}>
          <button
            onClick={handleScrollToForm}
            className="cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-[14px] shadow-[0_12px_24px_rgba(22,163,74,0.3)] transition-all duration-200"
          >
            Claim Your Free Seat Now
          </button>
          <p className="text-[12px] text-white/40 mt-3 font-medium">
            No credit card required · Only 100 spots available
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
