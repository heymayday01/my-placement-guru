import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function initGSAP() {
  if (registered) return gsap
  gsap.registerPlugin(ScrollTrigger)
  registered = true

  // Refresh ScrollTrigger after a tick to ensure all elements are rendered
  if (typeof window !== 'undefined') {
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }

  return gsap
}

export { gsap, ScrollTrigger }
