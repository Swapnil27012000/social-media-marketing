"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CTAProps {
  darkMode: boolean;
}

export function CTA({ darkMode }: CTAProps) {
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState<boolean>(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <section id="contact" className={`py-20 border-t transition-colors duration-300 ${darkMode ? "bg-slate-900/30 border-slate-800" : "bg-slate-100/30 border-slate-200"}`}>
      <Container className="max-w-xl text-center space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight">Accelerate Growth Today</h2>
        <p className="text-slate-500 text-sm">
          Ready to design a reliable, scalable inbound user engine? Schedule a custom growth audit with our engineering leads.
        </p>

        {contactSubmitted ? (
          <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-xs font-bold transition-all">
            ✓ Audit Request Received. We will contact you within 2 business hours.
          </div>
        ) : (
          <form onSubmit={handleContact} className="space-y-4 text-left">
            <div>
              <label htmlFor="email-input" className="block text-xs font-bold uppercase text-slate-400 mb-2">Work Email Address</label>
              <Input
                id="email-input"
                type="email"
                required
                placeholder="name@company.com"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-3 font-semibold"
            >
              Send Request
            </Button>
          </form>
        )}

        <div className="pt-6">
          <p className="text-xs text-slate-450">Join our mailing list for quarterly marketing strategy insights.</p>
          
          {newsletterSubmitted ? (
            <div className="mt-3 text-xs text-green-500 font-bold">✓ Subscribed successfully!</div>
          ) : (
            <form onSubmit={handleNewsletter} className="mt-3 flex gap-2">
              <Input
                type="email"
                required
                placeholder="news@company.com"
                aria-label="Newsletter email"
                className="flex-1"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
