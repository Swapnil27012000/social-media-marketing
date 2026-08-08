"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <SectionHeading
          title="Clear Investment Plans. Zero Hidden Costs."
          description="Tailored digital marketing engineering plans with absolute accountability. Select the package that fits your operational runway."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-lg dark:bg-slate-900/40"
                  : "border border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white border-blue-600 px-4 py-0.5 shadow-sm text-[10px]">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pt-8">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  {plan.id === "starter" ? "Starter Plan" : plan.id === "booster" ? "Growth Plan" : "Enterprise"}
                </span>
                <CardTitle className="text-xl font-bold mt-1">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-blue-600 font-mono">{plan.price}</span>
                  <span className="text-xs text-slate-500 font-semibold">{plan.period}</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                <div className="h-px bg-slate-100 dark:bg-slate-850" />
                <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-350">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5 font-bold">✓</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={buttonVariants({ variant: plan.popular ? "default" : "outline" }) + " w-full mt-4 font-semibold text-center"}
                >
                  {plan.ctaText}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
