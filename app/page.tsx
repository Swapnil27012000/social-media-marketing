"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  const [roiBudget, setRoiBudget] = useState<string>("50000");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100 dark" : "bg-slate-50 text-slate-900"}`}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero darkMode={darkMode} />
        <TrustedBy />
        <Services onSelectBudget={setRoiBudget} />
        <Features />
        <Process darkMode={darkMode} />
        <Results roiBudget={roiBudget} setRoiBudget={setRoiBudget} />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
