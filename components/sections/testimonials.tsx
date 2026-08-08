"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/5">
      <Container>
        <SectionHeading
          title="Client Partner Success"
          description="Read accounts of engineering audits, campaign launches, and growth performance lifts from real client partners."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, i) => (
            <Card key={i} className="hover:shadow-md transition duration-300 p-6 flex flex-col justify-between">
              <CardContent className="p-0 space-y-4">
                <p className="text-sm italic text-slate-600 dark:text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 dark:text-white">{t.author}</h5>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                    {t.metric}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
