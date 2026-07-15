'use client'

import React, { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'

const FAQS = [
  { q: 'Who is this for?', a: 'Final-year students and freshers in the Nagpur region looking to enter IT or Marketing roles.' },
  { q: 'Do I need prior experience?', a: 'No. This is designed specifically for students with zero corporate experience.' },
  { q: 'What happens after the free session?', a: 'You can choose to upgrade to the 10-day masterclass at the early bird price of ₹999.' },
  { q: 'Is the internship guaranteed?', a: 'The internship opportunity is offered to top performers at the discretion of the mentors. It is merit-based.' },
  { q: 'How do I contact support?', a: 'Message us on WhatsApp — link available on every page.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mt-8 md:mt-10 mb-8 md:mb-10">
      <div className="max-w-6xl mx-auto px-0">
        <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[var(--shadow-soft-lift)]">
          <h3 className="title text-center mb-6 md:mb-10">
            Frequently Asked Questions
          </h3>

          <LazyMotion features={domAnimation}>
            <div className="flex flex-col">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={i}
                    className={i < FAQS.length - 1 ? 'border-b border-[var(--color-hairline)]' : ''}
                  >
                    <button
                      className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-body text-[14px] sm:text-[15px] font-medium leading-[1.4] transition-colors duration-200 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-ink)]'}`}>
                        {faq.q}
                      </span>
                      <CaretDown
                        size={18}
                        className={`text-[var(--color-graphite)] shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <m.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[var(--color-charcoal)] leading-[1.6] pb-4">
                            {faq.a}
                          </p>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </LazyMotion>
        </div>
      </div>
    </section>
  )
}
