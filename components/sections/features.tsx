"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  const metrics = [
    { label: "Campaign Setup Accuracy", value: "100%", change: "Configured & Audited" },
    { label: "Core Web Vitals Target", value: "<1.2s", change: "Fast Page Load Speeds" },
    { label: "Data Routing Webhooks", value: "Secure", change: "Low Latency Sync" },
    { label: "A/B Test Deployments", value: "Weekly", change: "Continuous CRO Tuning" }
  ];

  return (
    <section className="py-20 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">Precision Engineering for ROI</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              We structure your acquisition campaigns with continuous bid and audience optimization, and design landing pages that keep page load speeds fast to maximize return.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-end">
            <span className="text-xs font-mono font-bold uppercase text-blue-600 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
              Growth Intelligence indicators
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
