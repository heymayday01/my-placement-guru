"use client";

import React, { useEffect, useRef } from "react";
import { THREE_PILLARS } from "@/lib/constants";
import { initGSAP } from "@/lib/gsap";
import * as PhosphorIcons from "@phosphor-icons/react";
import { m, LazyMotion, domAnimation } from "framer-motion";

export function ThreePillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = initGSAP();
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".pillar-card");

    // Use fromTo with immediate render to avoid FOUC
    gsap.set(cards, { y: 30, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="max-w-6xl mx-auto bg-gray-100 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 overflow-hidden mt-8 md:mt-10 rounded-2xl sm:rounded-3xl">
      <h2 className="title text-center mb-1">What Will You Learn</h2>
      <p className="sub-title text-[var(--color-primary)] pb-8 sm:pb-10 text-center">
        Three Pillars That Change Everything
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full"
      >
        <LazyMotion features={domAnimation}>
          {THREE_PILLARS.map((pillar, i) => {
            const Icon =
              (PhosphorIcons as unknown as Record<string, React.ComponentType<{ size?: number; weight?: string }>>)[pillar.icon] || PhosphorIcons.Star;
            return (
              <div key={i} className="pillar-card h-full group">
                <div className="bg-[var(--color-canvas)] rounded-2xl shadow-[var(--shadow-soft-lift)] p-6 sm:p-8 h-full relative overflow-hidden flex flex-col border border-[var(--color-hairline)] transition-transform duration-300 hover:scale-[1.02]">
                  {/* Large background number */}
                  <m.span className="absolute -right-2 -bottom-6 select-none pointer-events-none font-display text-[100px] sm:text-[120px] lg:text-[140px] font-bold text-[var(--color-fog)] leading-none">
                    {pillar.number}
                  </m.span>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon chip */}
                    <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-xl bg-[var(--color-primary-soft)] flex items-center justify-center mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} weight="fill" />
                    </div>

                    <div className="font-display text-[11px] sm:text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-2">
                      {pillar.number}
                    </div>

                    <h3 className="font-display text-[17px] sm:text-[20px] font-medium leading-[1.2] text-[var(--color-ink)] mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-[13px] sm:text-[15px] text-[var(--color-charcoal)] leading-[1.6]">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </LazyMotion>
      </div>
    </section>
  );
}
