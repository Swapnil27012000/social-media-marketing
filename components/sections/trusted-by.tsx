"use client";

import React from "react";
import { Container } from "@/components/ui/container";

export function TrustedBy() {
  const logos = ["Acquisition", "Paid Traffic", "SEO Audit", "Analytics & CRO"];
  return (
    <section className="py-10 border-t border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Trusted by growth teams at high-growth startups and enterprises worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div 
              key={logo} 
              className="text-sm font-bold font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-6 py-2 rounded-lg bg-white dark:bg-slate-900/60 shadow-sm transition hover:scale-105"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
