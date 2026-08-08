"use client";

import React from "react";
import { footerNavItems } from "@/data/navigation";
import { siteConfig } from "@/config/site";

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`border-t py-12 px-6 transition-colors duration-300 ${darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-600">Solutions</h4>
          <ul className="space-y-2 text-xs">
            {footerNavItems.solutions.map((item) => (
              <li key={item.title + item.href}>
                <a href={item.href} className="hover:text-blue-600 transition focus-ring">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-400">Company</h4>
          <ul className="space-y-2 text-xs">
            {footerNavItems.company.map((item) => (
              <li key={item.title + item.href}>
                <a href={item.href} className="hover:text-blue-600 transition focus-ring">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-400">Connect</h4>
          <div className="flex gap-4 text-xs font-semibold">
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-ring">Twitter</a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-ring">LinkedIn</a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 focus-ring">GitHub</a>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-400 leading-normal">
            Designed according to WCAG 2.2 AA guidelines, utilizing standard spacing and color palette tokens.
          </p>
        </div>
      </div>
    </footer>
  );
}
