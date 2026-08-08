"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge>⚡ Precision Growth Engineering Agency</Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Engineer Your Growth. Scale Your Pipeline.
            </h1>

            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              We build data-driven acquisition systems that combine paid media, SEO, conversion optimization, analytics, and automation to turn marketing spend into measurable pipeline for ambitious businesses.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Launch Your Campaign
              </a>

              <a
                href="#calculator"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Calculate ROI
              </a>
            </div>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <a href="#services" className="text-blue-600 hover:underline font-semibold focus-ring">
                Read our SEO strategy guide &rarr;
              </a>
              <a href="#growth-plan" className="text-blue-600 hover:underline font-semibold focus-ring">
                View our marketing performance loops &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <Card className="shadow-xl">
              <CardHeader className="flex flex-row justify-between items-center pb-2">
                <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-wider">Metrics Terminal</span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Campaigns Optimized</p>
                    <p className="text-xl font-bold text-slate-800 dark:text-white font-mono">25+</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Landing Pages Built</p>
                    <p className="text-xl font-bold text-slate-800 dark:text-white font-mono">40+</p>
                  </div>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Businesses Supported</p>
                    <p className="text-xl font-bold text-green-500 font-mono">15+</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Marketing Integrations</p>
                    <p className="text-xl font-bold text-slate-800 dark:text-white font-mono">30+</p>
                  </div>
                </div>
                <div className="pt-2 text-center border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] text-slate-400 italic font-medium">Growth Intelligence dashboard</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
