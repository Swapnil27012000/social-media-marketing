"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

interface ProcessProps {
  darkMode: boolean;
}

export function Process({ darkMode }: ProcessProps) {
  const steps = [
    { step: "STEP 1", title: "Deep Tech Audit", desc: "Review indexing errors, Lighthouse scores, and existing cookie tracking configurations." },
    { step: "STEP 2", title: "Target Audience Profiling", desc: "Map critical developer, business team, and buyer avatars to exact search terms." },
    { step: "STEP 3", title: "Data Pipeline Implementation", desc: "Set up robust webhook-driven capture points for absolute lead intelligence mapping." },
    { step: "STEP 4", title: "Conversion Optimization Loops", desc: "Implement fast layout variations and button style shifts targeting key dropoff points." },
    { step: "STEP 5", title: "SEO Crawler Optimizations", desc: "Pre-render, update sitemaps, and structure semantic JSON-LD data graphs correctly." },
    { step: "STEP 6", title: "Continuous A/B Testing", desc: "Run continuous experiments on headlines, CTAs, and pricing options weekly." },
    { step: "STEP 7", title: "End-of-Month Executive Reporting", desc: "Review clear growth metrics and plan next month's engineering pipeline tasks." },
  ];

  return (
    <section id="growth-plan" className={`py-20 border-t ${darkMode ? "bg-slate-900/50 border-slate-800" : "bg-slate-100/50 border-slate-200"}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              title="Our Precision Engineering Loop"
              description="We don't guess. We deploy structured pipelines designed to optimize conversion, organic footprint, and acquisition budgets iteratively."
              align="left"
              className="mb-0"
            />
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
              {steps.map((item, i) => (
                <li key={i} className="py-4 flex gap-4 items-start">
                  <span className="font-bold text-blue-600 font-mono">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white">{item.title}</h4>
                    <p className="text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
