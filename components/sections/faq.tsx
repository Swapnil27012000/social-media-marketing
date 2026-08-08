"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { faqData } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-900/5">
      <Container className="max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Have questions about onboarding, timelines, or server setups? Find immediate answers below."
        />

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <Card key={idx} className="cursor-pointer hover:shadow-md transition duration-200">
              <CardHeader 
                onClick={() => toggle(idx)} 
                className="flex flex-row justify-between items-center py-4 select-none"
              >
                <CardTitle className="text-sm font-bold text-slate-800 dark:text-white">
                  {faq.question}
                </CardTitle>
                <span className="text-blue-600 font-mono font-extrabold text-sm ml-2">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </CardHeader>
              {openIndex === idx && (
                <CardContent className="pb-4 pt-0 text-xs text-slate-500 leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
