"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [roiBudget, setRoiBudget] = useState<string>("1000");
  const [roiResult, setRoiResult] = useState<number | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const calculateRoi = (e: React.FormEvent) => {
    e.preventDefault();
    const budget = parseFloat(roiBudget);
    if (!isNaN(budget) && budget > 0) {
      setRoiResult(Math.round(budget * 3.4));
    }
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      
      {/* 1. Header Navigation Bar (Navigation Component #1) */}
      <header className={`sticky top-0 z-40 w-full border-b backdrop-blur ${darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50/80 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight focus-ring">
              <span className="text-blue-600 font-mono">Scale</span>
              <span className={darkMode ? "text-slate-200" : "text-slate-800"}>by EkLevelUp</span>
            </Link>
            
            {/* Top header links: Links 1-5 */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#services" className="hover:text-blue-600 transition focus-ring">Solutions</a>
              <a href="#growth-plan" className="hover:text-blue-600 transition focus-ring">Engineering</a>
              <a href="#calculator" className="hover:text-blue-600 transition focus-ring">Case Studies</a>
              <a href="#about" className="hover:text-blue-600 transition focus-ring">Company</a>
              {/* <Link href="/design" className="hover:text-blue-600 transition focus-ring font-semibold">Design Guide</Link> */}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme switcher: Button 1 */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="text-xs font-semibold"
              aria-label="Toggle theme mode"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </Button>

            {/* Header CTA: Button 2 */}
            <a
              href="#contact"
              className={buttonVariants({ variant: "default", size: "sm" }) + " hidden sm:inline-flex"}
            >
              Schedule Growth Audit
            </a>

            {/* Mobile Menu Toggle: Button 3 */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-xs font-bold"
              aria-label="Toggle Menu"
            >
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b p-4 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            <nav className="flex flex-col gap-3 text-sm font-semibold">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Solutions</a>
              <a href="#growth-plan" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Engineering</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Case Studies</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Company</a>
              <Link href="/design" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600">Design System Guide</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold text-blue-600">
              ⚡ Precision Growth Engineering Agency
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Scale Your Pipeline with Data-Driven Acquisition
            </h1>
            
            <p className={`text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              We engineer custom digital marketing engines, hyper-focused optimization campaigns, and advanced growth analytics frameworks built specifically for high-growth enterprises.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Hero Primary CTA: Button 4 */}
              <a
                href="#contact"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Launch Your Campaign
              </a>

              {/* Hero Secondary CTA: Button 5 */}
              <a
                href="#calculator"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Calculate ROI
              </a>
            </div>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {/* Hero links: Links 6-7 */}
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
      </section>

      {/* Services Grid Section (9 Cards) */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Growth Services</h2>
          <p className="text-slate-500 text-sm mt-3">
            Our engineering and campaign teams handle end-to-end user acquisition, search engine footprint expansion, and engineering integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">01</div>
              <CardTitle>Precision SEO</CardTitle>
              <CardDescription>Rank higher for high-intent keywords through custom content matrices and technical SEO optimization pipelines.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Inline Link 8 */}
              <a href="#contact" className="text-xs text-blue-600 hover:underline font-semibold focus-ring">Explore SEO Strategy &rarr;</a>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">02</div>
              <CardTitle>Growth Engineering</CardTitle>
              <CardDescription>Custom lead generators, dynamic landing page engines, and analytics pipeline setups customized for your team.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Button 6 inside card */}
              <Button variant="default" size="sm" onClick={() => setRoiBudget("15000")} className="text-[11px] font-bold">
                Load Growth Plan
              </Button>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">03</div>
              <CardTitle>Paid Acquisition</CardTitle>
              <CardDescription>Scale revenue through programmatic search, social, and display ads managed by automated algorithmic bids.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Inline Link 9 */}
              <a href="#calculator" className="text-xs text-blue-600 hover:underline font-semibold focus-ring">Analyze PPC Metrics &rarr;</a>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">04</div>
              <CardTitle>Web Performance</CardTitle>
              <CardDescription>Optimize Core Web Vitals to increase conversion rates and ranking metrics on Google and Bing.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Inline Link 10 */}
              <a href="#services" className="text-xs text-blue-600 hover:underline font-semibold focus-ring">Test Site Speed &rarr;</a>
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">05</div>
              <CardTitle>High-Performance Analytics</CardTitle>
              <CardDescription>Cookieless attribution tracking setups built with server-side GTM configurations for absolute privacy compliance.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Button 7 inside card */}
              <Button variant="secondary" size="sm" onClick={() => setRoiBudget("25000")} className="text-[11px] font-bold">
                Load Pro Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Card 6 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">06</div>
              <CardTitle>Marketing Automation</CardTitle>
              <CardDescription>Connect CRMs, email service providers, and product tracking APIs with low latency webhook routing.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Inline Link 11 */}
              <a href="#contact" className="text-xs text-blue-600 hover:underline font-semibold focus-ring">Design Automation Flow &rarr;</a>
            </CardContent>
          </Card>

          {/* Card 7 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">07</div>
              <CardTitle>Conversion Rate Optimization (CRO)</CardTitle>
              <CardDescription>Identify and repair funnel leaks through continuous, high-precision layout and styling changes.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Inline Link 12 */}
              <a href="#calculator" className="text-xs text-blue-600 hover:underline font-semibold focus-ring">Test CRO Math &rarr;</a>
            </CardContent>
          </Card>

          {/* Card 8 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">08</div>
              <CardTitle>Custom API Integrations</CardTitle>
              <CardDescription>Bespoke backend synchronization systems connecting Salesforce, HubSpot, and custom tools securely.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Button 8 inside card */}
              <a
                href="#contact"
                className={buttonVariants({ variant: "outline", size: "sm" }) + " text-[11px] font-bold w-full text-center inline-block"}
              >
                Request API Integration
              </a>
            </CardContent>
          </Card>

          {/* Card 9 */}
          <Card className="hover:shadow-lg transition duration-300">
            <CardHeader>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">09</div>
              <CardTitle>Content Intelligence</CardTitle>
              <CardDescription>Generate content briefs, keyword clustering charts, and domain authority analyses automatically.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Inline Link 13 */}
              <a href="#services" className="text-xs text-blue-600 hover:underline font-semibold focus-ring">Run Auditing Scan &rarr;</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Methodology Section (List: 7 items) */}
      <section id="growth-plan" className={`py-20 px-6 border-t ${darkMode ? "bg-slate-900/50 border-slate-800" : "bg-slate-100/50 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">Our Precision Engineering Loop</h2>
            <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              We don't guess. We deploy structured pipelines designed to optimize conversion, organic footprint, and acquisition budgets iteratively.
            </p>
          </div>

          <div className="lg:col-span-7">
            {/* Lists (7 Items) */}
            <ul className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 1</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">Deep Tech Audit</h4>
                  <p className="text-slate-500 mt-1">Review indexing errors, Lighthouse scores, and existing cookie tracking configurations.</p>
                </div>
              </li>
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 2</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">Target Audience Profiling</h4>
                  <p className="text-slate-500 mt-1">Map critical developer, business team, and buyer avatars to exact search terms.</p>
                </div>
              </li>
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 3</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">Data Pipeline Implementation</h4>
                  <p className="text-slate-500 mt-1">Set up robust webhook-driven capture points for absolute lead intelligence mapping.</p>
                </div>
              </li>
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 4</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">Conversion Optimization Loops</h4>
                  <p className="text-slate-500 mt-1">Implement fast layout variations and button style shifts targeting key dropoff points.</p>
                </div>
              </li>
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 5</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">SEO Crawler Optimizations</h4>
                  <p className="text-slate-500 mt-1">Pre-render, update sitemaps, and structure semantic JSON-LD data graphs correctly.</p>
                </div>
              </li>
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 6</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">Continuous A/B Testing</h4>
                  <p className="text-slate-500 mt-1">Run continuous experiments on headlines, CTAs, and pricing options weekly.</p>
                </div>
              </li>
              <li className="py-4 flex gap-4 items-start">
                <span className="font-bold text-blue-600 font-mono">STEP 7</span>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white">End-of-Month Executive Reporting</h4>
                  <p className="text-slate-500 mt-1">Review clear growth metrics and plan next month's engineering pipeline tasks.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-20 px-6 max-w-4xl mx-auto">
        <Card className="p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl">Estimate Your Growth ROI</CardTitle>
            <CardDescription className="text-slate-500">
              Enter your projected monthly acquisition budget to estimate potential pipeline returns generated by our campaigns.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <form onSubmit={calculateRoi} className="space-y-4">
              <div>
                <label htmlFor="budget-input" className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  Monthly Advertising Budget ($)
                </label>
                <Input
                  id="budget-input"
                  type="number"
                  value={roiBudget}
                  onChange={(e) => setRoiBudget(e.target.value)}
                  placeholder="5000"
                  required
                />
              </div>

              {/* Calculate ROI button: Button 9 */}
              <Button
                type="submit"
                className="w-full py-3"
              >
                Compute Estimated Returns
              </Button>
            </form>

            {roiResult !== null && (
              <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                <p className="text-xs text-slate-500">Estimated Annual Revenue Lift</p>
                <p className="text-3xl font-extrabold text-blue-600 font-mono mt-1">${roiResult.toLocaleString()}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 border-t ${darkMode ? "bg-slate-900/30 border-slate-800" : "bg-slate-100/30 border-slate-200"}`}>
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">Accelerate Growth Today</h2>
          <p className="text-slate-500 text-sm">
            Ready to design a reliable, scalable inbound user engine? Schedule a custom growth audit with our engineering leads.
          </p>

          {contactSubmitted ? (
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-xs font-bold">
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

              {/* Submit Button: Button 10 */}
              <Button
                type="submit"
                className="w-full py-3"
              >
                Send Request
              </Button>
            </form>
          )}

          <div className="pt-6">
            <p className="text-xs text-slate-400">Join our mailing list for quarterly marketing strategy insights.</p>
            <div className="mt-3 flex gap-2">
              <Input
                type="email"
                placeholder="news@company.com"
                aria-label="Newsletter email"
                className="flex-1"
              />
              {/* Subscribe button: Button 11 */}
              <Button
                variant="secondary"
                onClick={() => alert("Subscribed!")}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Footer Navigation Bar (Navigation Component #2) */}
      <footer className={`border-t py-12 px-6 ${darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-600">Solutions</h4>
            <ul className="space-y-2 text-xs">
              {/* Links 14-16 */}
              <li><a href="#services" className="hover:text-blue-600 transition focus-ring">Growth Engine</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition focus-ring">SEO Strategy</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition focus-ring">Paid Acquisition</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-400">Company</h4>
            <ul className="space-y-2 text-xs">
              {/* Links 17-19 */}
              <li><a href="#about" className="hover:text-blue-600 transition focus-ring">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition focus-ring">Contact Info</a></li>
              <li><a href="#privacy" className="hover:text-blue-600 transition focus-ring">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-400">Connect</h4>
            <div className="flex gap-4 text-xs font-semibold">
              {/* Links 20-22 */}
              <a href="https://x.com/eklevelup" target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-ring">Twitter</a>
              <a href="https://linkedin.com/company/eklevelup" target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-ring">LinkedIn</a>
              <a href="https://github.com/eklevelup" target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-ring">GitHub</a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Scale by EkLevelUp. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-400 leading-normal">
              Designed according to WCAG 2.2 AA guidelines, utilizing standard spacing and color palette tokens.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
