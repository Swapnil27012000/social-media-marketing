"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { headerNavItems } from "@/data/navigation";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({ darkMode, onToggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className={`sticky top-0 z-40 w-full border-b backdrop-blur transition-colors duration-300 ${darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50/80 border-slate-200"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight focus-ring">
            <span className="text-blue-600 font-mono">Scale</span>
            <span className={darkMode ? "text-slate-200" : "text-slate-800"}>by EkLevelUp</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {headerNavItems.map((item) => (
              <a 
                key={item.href + item.title} 
                href={item.href} 
                className="hover:text-blue-600 transition focus-ring"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleDarkMode}
            className="text-xs font-semibold"
            aria-label="Toggle theme mode"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>

          <a
            href="#contact"
            className={buttonVariants({ variant: "default", size: "sm" }) + " hidden sm:inline-flex"}
          >
            Schedule Growth Audit
          </a>

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

      {mobileMenuOpen && (
        <div className={`md:hidden border-b p-4 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            {headerNavItems.map((item) => (
              <a
                key={item.href + item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
