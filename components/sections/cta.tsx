"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendTelegramNotification } from "@/app/actions";

interface CTAProps {
  darkMode: boolean;
}

export function CTA({ darkMode }: CTAProps) {
  
  const [fullName, setFullName] = useState<string>("");
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [scaleNote, setScaleNote] = useState<string>("");

  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState<boolean>(false);

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailOrPhone) return;
    setContactSubmitted(true);
    const res = await sendTelegramNotification("audit", {
      fullName,
      emailOrPhone,
      websiteUrl,
      scaleNote,
    });
    console.log("Audit request Telegram result:", res);
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    const res = await sendTelegramNotification("newsletter", newsletterEmail);
    console.log("Newsletter Telegram result:", res);
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
              <label htmlFor="name-input" className="block text-xs font-bold uppercase text-slate-400 mb-2">Your Full Name *</label>
              <Input
                id="name-input"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
              />
            </div>

            <div>
              <label htmlFor="contact-input" className="block text-xs font-bold uppercase text-slate-400 mb-2">Email Address or Phone *</label>
              <Input
                id="contact-input"
                type="text"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="name@company.com or +91..."
              />
            </div>

            <div>
              <label htmlFor="url-input" className="block text-xs font-bold uppercase text-slate-400 mb-2">Business / Website URL</label>
              <Input
                id="url-input"
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://yourbrand.com or Institute Name"
              />
            </div>

            <div>
              <label htmlFor="scale-input" className="block text-xs font-bold uppercase text-slate-400 mb-2">How Can We Help You Scale?</label>
              <textarea
                id="scale-input"
                value={scaleNote}
                onChange={(e) => setScaleNote(e.target.value)}
                placeholder="Tell us about your goals..."
                rows={3}
                className="flex w-full rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-slate-900 dark:text-slate-100"
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
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
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
