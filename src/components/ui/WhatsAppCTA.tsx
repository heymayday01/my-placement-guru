"use client";

import React, { useState, useEffect } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="fixed bottom-5 right-4 z-50 flex items-center gap-2"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {/* Tooltip — desktop only */}
            <AnimatePresence>
              {showTooltip && (
                <m.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
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

            {/* Pulsing ring behind button */}
            <span
              className="absolute right-0 bottom-0 w-12 h-12 rounded-full"
              style={{
                backgroundColor: "#25D366",
                opacity: 0.3,
                animation: "wa-pulse 2s ease-in-out infinite",
              }}
            />

            {/* WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="relative flex items-center justify-center w-12 h-12 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: "#25D366",
                color: "#fff",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
              }}
            >
              <WhatsappLogo size={24} weight="fill" />
            </a>
          </m.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes wa-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </LazyMotion>
  );
}
