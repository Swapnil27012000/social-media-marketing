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
              Scale Your Pipeline with Data-Driven Acquisition
            </h1>
            
            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              We engineer custom digital marketing engines, hyper-focused optimization campaigns, and advanced growth analytics frameworks built specifically for high-growth enterprises.
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
                Read our SEO whitepaper &rarr;
              </a>
              <a href="#growth-plan" className="text-blue-600 hover:underline font-semibold focus-ring">
                View our 2026 performance stats &rarr;
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
                <div>
                  <p className="text-xs text-slate-500">Pipeline Generated</p>
                  <p className="text-2xl font-bold text-slate-800 dark:text-white font-mono">$184.2M</p>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Avg. ROI Boost</p>
                    <p className="text-lg font-bold text-green-500 font-mono">+340%</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Active Ad Campaigns</p>
                    <p className="text-lg font-bold text-slate-800 dark:text-white font-mono">1,489</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
