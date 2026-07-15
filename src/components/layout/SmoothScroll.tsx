'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Skip smooth scroll on mobile/touch for native momentum scrolling
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: !isMobile,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    })

    lenisRef.current = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change
  const pathname = usePathname()
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
