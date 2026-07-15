"use client";

import React, { useState, useEffect } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 22, stiffness: 120 }}
            className="fixed bottom-[88px] right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-[60] flex items-center gap-3"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <AnimatePresence>
              {showTooltip && (
                <m.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-on-ink)",
                    padding: "8px 14px",
                    borderRadius: "var(--rounded-md)",
                    fontSize: 13,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    boxShadow: "var(--shadow-float)",
                  }}
                  className="hidden md:block"
                >
                  Join the Community
                </m.div>
              )}
            </AnimatePresence>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#0b0b0bff",
                color: "#fff",
                transition: "box-shadow 0.2s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              }}
              className="h-12 w-12 md:h-[52px] md:w-[52px]"
            >
              <WhatsappLogo size={24} weight="fill" />
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
