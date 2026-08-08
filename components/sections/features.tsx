"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const metrics = [
    { label: "Organic Search traffic", value: "842.1k", change: "New & Organic" },
    { label: "Sales Pipeline Boost", value: "425%", change: "Scale & Growth" },
    { label: "Target Keyword Leads", value: "12,402", change: "Qualified Leads" },
    { label: "Growth Velocity", value: "vs Metro", change: "Performance Index" }
  ];

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">Precision Engineering for ROI</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              Every system we deploy is calibrated to maximize return on advertising spend. We combine data pipelines, crawler-friendly layouts, and algorithmic bid optimization to eliminate waste.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-end">
            <span className="text-xs font-mono font-bold uppercase text-blue-600 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
              Live Stats Hub
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <Card key={i} className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{metric.label}</span>
                <p className="text-3xl font-mono font-extrabold text-blue-600">{metric.value}</p>
                <div className="h-1 w-12 bg-blue-600 rounded" />
                <p className="text-[11px] text-slate-500 font-semibold">{metric.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
