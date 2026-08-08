"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesData } from "@/data/services";

interface ServicesProps {
  onSelectBudget?: (budget: string) => void;
}

export function Services({ onSelectBudget }: ServicesProps) {
  return (
    <section id="services" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <SectionHeading
          title="Growth Services"
          description="Our engineering and campaign teams handle end-to-end user acquisition, search engine footprint expansion, and engineering integrations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition duration-300 flex flex-col justify-between">
              <CardHeader>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">
                  {service.num}
                </div>
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm text-slate-500 dark:text-slate-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                {service.ctaType === "link" && (
                  <a
                    href={service.ctaHref}
                    className="text-xs text-blue-600 hover:underline font-semibold focus-ring inline-block"
                  >
                    {service.ctaText} &rarr;
                  </a>
                )}
                {service.ctaType === "action" && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => onSelectBudget?.(service.actionValue || "1000")}
                    className="text-[11px] font-bold"
                  >
                    {service.ctaText}
                  </Button>
                )}
                {service.ctaType === "button" && (
                  <a
                    href={service.ctaHref}
                    className={buttonVariants({ variant: "outline", size: "sm" }) + " text-[11px] font-bold w-full text-center block"}
                  >
                    {service.ctaText}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
