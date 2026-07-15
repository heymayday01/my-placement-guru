"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { SplitText } from "@/components/animations/SplitText";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { LogoMarquee } from "@/components/smoothui/logo-cloud-3/Logos";
import { BookOpen, CalendarBlank, Clock } from "@phosphor-icons/react";
import {
  FREE_DATE_DISPLAY,
  FREE_DATE_ISO,
  FREE_TIME_DISPLAY,
  FREE_TIME_ISO,
  FREE_DURATION,
} from "@/lib/constants";

export interface HeroProps {
  duration?: string;
  startDate?: string;
  startDateTime?: string;
  timeRange?: string;
  timeDateTime?: string;
}

export function Hero({
  duration = FREE_DURATION,
  startDate = FREE_DATE_DISPLAY.toUpperCase(),
  startDateTime = FREE_DATE_ISO,
  timeRange = FREE_TIME_DISPLAY.toUpperCase(),
  timeDateTime = FREE_TIME_ISO,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden mb-8 md:mb-10">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/Images/a.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* ── Left Column: Copy ── */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
              <SplitText
                text="Stop Applying. Start Getting Hired."
                as="h1"
                className="text-balance font-display text-[26px] xs:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.08] text-white m-0"
                by="word"
                staggerDelay={0.05}
              />

              <ScrollReveal delay={0.4}>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[1.5] text-white/85 m-0 text-balance max-w-xl">
                  Learn the Hiring Manager's Secret to cracking top IT
                  &amp; Marketing roles from a <b className="text-white">Founder</b> who's been on both
                  sides of the table.
                </p>
              </ScrollReveal>

              {/* Info pills */}
              <ScrollReveal delay={0.5}>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start items-center mt-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm text-[11px] sm:text-[13px] font-semibold text-[var(--color-ink)] uppercase tracking-wide">
                    <BookOpen size={14} className="text-[var(--color-primary)]" weight="bold" />
                    <span>{duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm text-[11px] sm:text-[13px] font-semibold text-[var(--color-ink)] uppercase tracking-wide">
                    <CalendarBlank size={14} className="text-[var(--color-primary)]" weight="bold" />
                    <time dateTime={startDateTime}>{startDate}</time>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm text-[11px] sm:text-[13px] font-semibold text-[var(--color-ink)] uppercase tracking-wide">
                    <Clock size={14} className="text-[var(--color-primary)]" weight="bold" />
                    <time dateTime={timeDateTime}>{timeRange}</time>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal delay={0.6}>
                <Button
                  className="relative z-10 inline-flex items-center justify-center bg-green-600 text-white border border-white/30 rounded-xl px-6 sm:px-8 py-2.5 text-sm sm:text-base font-semibold tracking-tight shadow-lg hover:bg-green-700 transition-colors"
                  size="lg"
                  href="/register"
                >
                  Register for Free →
                </Button>
              </ScrollReveal>

              <ScrollReveal delay={0.7}>
                <p className="text-[13px] sm:text-[15px] font-medium leading-[1.5] text-white/75 m-0 text-balance mt-1">
                  To Get Placed at Top Companies
                </p>
              </ScrollReveal>

              {/* Logo marquee */}
              <ScrollReveal delay={0.8} className="w-full mt-3">
                <LogoMarquee title="" description="" speed="fast" />
              </ScrollReveal>
            </div>

            {/* ── Right Column: Photo + Floating Stat Cards ── */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <LazyMotion features={domAnimation}>
                {/* Photo frame — larger on mobile, proper aspect ratio */}
                <m.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/Images/hero-mentor.png"
                    alt="Sarang Thakre — Career Mastery Mentor"
                    width={896}
                    height={1195}
                    priority
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </m.div>

                {/* Stat card – top left — positioned inside frame on mobile, outside on desktop */}
                <m.div
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", delay: 0.7, damping: 20 }}
                  className="absolute top-2 left-2 lg:top-[-16px] lg:left-[-16px] z-20"
                >
                  <div className="bg-white rounded-xl shadow-lg px-3 py-2 lg:px-4 lg:py-2.5 border border-[var(--color-hairline)]">
                    <span className="font-display text-[16px] lg:text-[20px] font-bold text-[var(--color-ink)] block leading-tight">
                      5+ Years
                    </span>
                    <span className="text-[8px] lg:text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--color-primary)]">
                      IT Experience
                    </span>
                  </div>
                </m.div>

                {/* Stat card – bottom right */}
                <m.div
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", delay: 0.9, damping: 20 }}
                  className="absolute bottom-2 right-2 lg:bottom-[-16px] lg:right-[-16px] z-20"
                >
                  <div className="bg-white rounded-xl shadow-lg px-3 py-2 lg:px-4 lg:py-2.5 border border-[var(--color-hairline)]">
                    <span className="font-display text-[16px] lg:text-[20px] font-bold text-[var(--color-ink)] block leading-tight">
                      2
                    </span>
                    <span className="text-[8px] lg:text-[10px] font-semibold tracking-[0.1em] uppercase text-[var(--color-charcoal)]">
                      Companies Founded
                    </span>
                  </div>
                </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>
      </div>

      {/* Event Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Stop Applying. Start Getting Hired. Masterclass",
            "description": "Learn the Hiring Manager's Secret to cracking top IT & Marketing roles from a Founder who's been on both sides of the table.",
            "startDate": `${startDateTime}T${timeDateTime}`,
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "VirtualLocation",
              "url": "https://myplacementguru.com"
            },
            "organizer": {
              "@type": "Organization",
              "name": "MyPlacementGuru",
              "url": "https://myplacementguru.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-07-13"
            }
          })
        }}
      />
    </section>
  );
}
