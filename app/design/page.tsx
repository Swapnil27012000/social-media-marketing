"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function DesignSystemGuide() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [qaStates, setQaStates] = useState<Record<string, boolean>>({
    contrast: false,
    keyboard: false,
    focusVisible: false,
    statesDefined: false,
    noOneOffs: false,
    semanticTokens: false,
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(text);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const toggleQa = (key: string) => {
    setQaStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const tokens = {
    colors: [
      { name: "color.text.primary", value: "#0f172a", bg: "bg-[#0f172a]", text: "text-white" },
      { name: "color.text.secondary", value: "#334155", bg: "bg-[#334155]", text: "text-white" },
      { name: "color.text.tertiary", value: "#64748b", bg: "bg-[#64748b]", text: "text-white" },
      { name: "color.surface.muted", value: "#ffffff", bg: "bg-[#ffffff]", text: "text-slate-900 border border-slate-200" },
      { name: "color.surface.base", value: "#000000", bg: "bg-[#000000]", text: "text-white" },
      { name: "color.surface.raised", value: "lab(55.0481 -49.9246 15.93)", bg: "bg-[lab(55.0481_-49.9246_15.93)]", text: "text-white" },
      { name: "color.surface.strong", value: "#2563eb", bg: "bg-[#2563eb]", text: "text-white" },
    ],
    typography: [
      { token: "font.size.xs", size: "11px", desc: "Caption and extra small details" },
      { token: "font.size.sm", size: "12px", desc: "Small labels and helper text" },
      { token: "font.size.md", size: "14px", desc: "Body text / standard paragraph" },
      { token: "font.size.lg", size: "16px", desc: "Lead paragraph / form labels" },
      { token: "font.size.xl", size: "18px", desc: "Sub-headings or highlighted stats" },
      { token: "font.size.2xl", size: "20px", desc: "Small sections or section titles" },
      { token: "font.size.3xl", size: "24px", desc: "Major section headers" },
      { token: "font.size.4xl", size: "36px", desc: "Hero or headline text" },
    ],
    spacing: [
      { token: "space.1", size: "4px" },
      { token: "space.2", size: "8px" },
      { token: "space.3", size: "10px" },
      { token: "space.4", size: "12px" },
      { token: "space.5", size: "14px" },
      { token: "space.6", size: "16px" },
      { token: "space.7", size: "20px" },
      { token: "space.8", size: "24px" },
    ],
    radius: [
      { token: "radius.xs", value: "8px" },
      { token: "radius.sm", value: "12px" },
      { token: "radius.md", value: "16px" },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* Top Banner */}
      <header className="bg-slate-900 text-white py-12 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-400 font-mono text-xs tracking-wider uppercase">
              <span>Scale by EkLevelUp</span>
              <span className="w-1 h-1 rounded-full bg-blue-400"></span>
              <span>Design System</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">UI System Guidance</h1>
            <p className="text-slate-400 mt-2 max-w-xl text-sm">
              Official implementation-ready tokens, foundations, and interactive state behavior guides.
            </p>
          </div>
          <div>
            <Link href="/" className={buttonVariants({ variant: "default", size: "sm" })}>
              View Landing Page
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-1">
          <nav className="sticky top-6 flex flex-col gap-1 text-sm bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">Sections</span>
            <a href="#context" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium">Context & Goals</a>
            <a href="#tokens" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium">Design Tokens</a>
            <a href="#components" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium">Component Rules</a>
            <a href="#accessibility" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium">Accessibility & Focus</a>
            <a href="#content-standards" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium">Content & Tone</a>
            <a href="#antipatterns" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium">Anti-patterns</a>
            <a href="#qa-checklist" className="px-3 py-2 rounded-md hover:bg-slate-50 transition text-slate-700 hover:text-slate-900 font-medium font-semibold text-blue-600">QA Checklist</a>
          </nav>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-12">
          {/* Section: Context */}
          <section id="context" className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-4">1. Context & Goals</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Scale by EkLevelUp is a precision growth engineering and digital marketing agency. Our marketing platform surfaces must look highly professional, optimized, and performant. All UI guidance is designed to enable teams to deliver robust interfaces that guarantee WCAG 2.2 AA compliance, semantic unity, and robust keyboard-first interaction out-of-the-box.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
              <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-wide">Design Intent</h4>
              <p className="text-blue-800 text-xs mt-1">
                Deliver clean, functional, high-density growth marketing metrics and dashboards that establish absolute professional credibility for executive buyers.
              </p>
            </div>
          </section>

          {/* Section: Tokens */}
          <section id="tokens" className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-6">2. Design Tokens & Foundations</h2>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="text-md font-bold mb-3 text-slate-700">Colors</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tokens.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => copyToClipboard(c.value)}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-left group focus-ring"
                    title="Click to copy color value"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-md ${c.bg}`} />
                      <div>
                        <p className="font-mono text-xs font-bold text-slate-800">{c.name}</p>
                        <p className="text-[11px] text-slate-500">{c.value}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-blue-600 transition font-mono">
                      {copiedToken === c.value ? "Copied!" : "Copy"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="mb-8">
              <h3 className="text-md font-bold mb-3 text-slate-700">Typography Scale</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="min-w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="p-3">Token</th>
                      <th className="p-3">Value</th>
                      <th className="p-3">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {tokens.typography.map((t) => (
                      <tr key={t.token} className="hover:bg-slate-50/50">
                        <td className="p-3 font-bold text-slate-700">{t.token}</td>
                        <td className="p-3 text-slate-500">{t.size}</td>
                        <td className="p-3 font-sans text-slate-800" style={{ fontSize: t.size }}>
                          Scale Growth
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Spacing & Radius */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-md font-bold mb-3 text-slate-700">Spacing Scale</h3>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {tokens.spacing.map((s) => (
                    <div key={s.token} className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100">
                      <span className="font-bold text-slate-600">{s.token}</span>
                      <span className="text-slate-500">{s.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-md font-bold mb-3 text-slate-700">Border Radius</h3>
                <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                  {tokens.radius.map((r) => (
                    <div key={r.token} className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100">
                      <span className="font-bold text-slate-600">{r.token}</span>
                      <span className="text-slate-500">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Component Rules */}
          <section id="components" className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-6">3. Component Rules & Anatomy (shadcn Primitives)</h2>

            {/* Interactive Showcase */}
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-bold mb-2 text-slate-700">shadcn Buttons</h3>
                <p className="text-slate-500 text-xs mb-4">
                  Buttons must support all states: Default, Hover, Active, Focus, and Disabled.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">
                    Default / Hover
                  </Button>
                  <Button variant="outline">
                    Outline
                  </Button>
                  <Button variant="secondary">
                    Secondary
                  </Button>
                  <Button variant="default" className="opacity-50 pointer-events-none" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2 text-slate-700">Navigation Component (Breadcrumbs & Bar)</h3>
                <p className="text-slate-500 text-xs mb-3">
                  Links must underline on hover and support tab focus indicators.
                </p>
                <nav className="flex items-center gap-2 text-xs text-slate-500">
                  <a href="#components" className="hover:underline hover:text-slate-900 transition focus-ring">Components</a>
                  <span>/</span>
                  <a href="#accessibility" className="hover:underline hover:text-slate-900 transition focus-ring">Anatomy</a>
                  <span>/</span>
                  <span className="text-slate-800 font-semibold">Active State</span>
                </nav>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2 text-slate-700">shadcn Cards (Anatomy & Shadow Tokens)</h3>
                <p className="text-slate-500 text-xs mb-3">
                  Use custom shadow tokens `shadow.1` or `shadow.2` for default cards, elevating to `shadow.3` or `shadow.4` on hover.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <span className="text-[10px] font-mono text-blue-600 uppercase font-bold tracking-wider">Metrics Block</span>
                      <CardTitle>Growth Analytics</CardTitle>
                      <CardDescription>Default Card containing layout, padding, and subtle shadows.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-blue-500">
                    <CardHeader>
                      <span className="text-[10px] font-mono text-blue-600 uppercase font-bold tracking-wider">Metrics Block</span>
                      <CardTitle>Growth Analytics (Active/Focused)</CardTitle>
                      <CardDescription>Active state highlights borders with `color.surface.strong` and elevates shadow depth.</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Accessibility */}
          <section id="accessibility" className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-4">4. Accessibility & Focus Rules</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-green-200 bg-green-50/50 p-4 rounded-lg">
                  <h4 className="text-xs font-bold text-green-800 uppercase tracking-wide">Pass Criteria (WCAG AA)</h4>
                  <ul className="text-xs text-green-700 mt-2 space-y-1 list-disc list-inside">
                    <li>Minimum contrast of 4.5:1 for body text</li>
                    <li>Always provide custom `focus-visible` ring wrapper styles</li>
                    <li>Ensure pointer and keyboard inputs have equivalent actions</li>
                    <li>Proper HTML structures like `button` for actions, `a` for navigating</li>
                  </ul>
                </div>

                <div className="border border-red-200 bg-red-50/50 p-4 rounded-lg">
                  <h4 className="text-xs font-bold text-red-800 uppercase tracking-wide">Fail Criteria</h4>
                  <ul className="text-xs text-red-700 mt-2 space-y-1 list-disc list-inside">
                    <li>Using `outline: none` without custom focus indicators</li>
                    <li>Using pixel text sizes below 11px</li>
                    <li>Using hardcoded color transitions that cause flashing</li>
                    <li>Using generic action button labels like "Click Here"</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-xs font-bold text-slate-600 mb-2">Focus Test Area</p>
                <p className="text-xs text-slate-500 mb-3">
                  Click on the input field and press Tab to see keyboard-first compliance.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Press tab to focus..."
                    className="w-48"
                  />
                  <Button variant="secondary" size="sm">
                    Tab Trigger
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Content Standards */}
          <section id="content-standards" className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-4">5. Content & Tone</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Scale by EkLevelUp uses a **concise, confident, and growth-oriented** tone. Avoid complex corporate jargon and present numeric results clearly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-150">
                <span className="font-bold text-slate-600 block mb-1">Standard Action Labels</span>
                <p className="text-slate-800 font-mono">"Schedule Growth Audit"</p>
                <p className="text-slate-800 font-mono">"Explore Case Studies"</p>
              </div>
              <div className="p-3 bg-red-50 rounded border border-red-150 text-red-700">
                <span className="font-bold block mb-1">Avoid</span>
                <p className="font-mono">"Click Here"</p>
                <p className="font-mono">"Submit Information"</p>
              </div>
            </div>
          </section>

          {/* Section: Anti-patterns */}
          <section id="antipatterns" className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-4">6. Prohibited Implementations & Anti-patterns</h2>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2 text-red-600 font-semibold">
                <span>🚫</span>
                <span>Do not introduce custom HEX colors outside our `--color-*` CSS definitions.</span>
              </div>
              <div className="flex items-start gap-2 text-red-600 font-semibold">
                <span>🚫</span>
                <span>Do not override focus outlines globally unless replacing with accessible custom styling.</span>
              </div>
              <div className="flex items-start gap-2 text-red-600 font-semibold">
                <span>🚫</span>
                <span>Do not use custom spacing values like `margin-top: 19px` (always stick to the spacing scale tokens).</span>
              </div>
            </div>
          </section>

          {/* Section: QA Checklist */}
          <section id="qa-checklist" className="bg-white p-8 rounded-xl border border-blue-200 shadow-md">
            <h2 className="text-xl font-bold border-b border-slate-100 pb-4 mb-4 text-blue-900">7. Interactive QA Checklist</h2>
            <p className="text-slate-500 text-xs mb-4">
              Use this checklist to self-audit implementation before committing code updates.
            </p>
            <div className="space-y-2">
              {[
                { key: "contrast", label: "Text contrast meets WCAG 2.2 AA constraints (4.5:1 for standard text)." },
                { key: "keyboard", label: "Full keyboard accessibility is tested and works correctly." },
                { key: "focusVisible", label: "Focus ring styling is visible and compliant." },
                { key: "statesDefined", label: "Hover, active, focus, loading, and disabled states are fully implemented." },
                { key: "noOneOffs", label: "No ad-hoc fonts, styles, colors, or margin values are defined." },
                { key: "semanticTokens", label: "Semantic tokens are correctly used in place of arbitrary numbers." },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleQa(item.key)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 text-left transition text-xs font-medium focus-ring"
                >
                  <div className={`w-4 h-4 rounded flex items-center justify-center border transition ${qaStates[item.key] ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300"}`}>
                    {qaStates[item.key] && (
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={qaStates[item.key] ? "text-slate-500 line-through" : "text-slate-700"}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
