export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaType: "link" | "button" | "action";
  actionValue?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "paid-acq",
    num: "01",
    title: "Paid Acquisition",
    description: "Google, Meta, social, search, retargeting and campaign optimization.",
    ctaText: "Configure PPC Campaigns",
    ctaHref: "#contact",
    ctaType: "link"
  },
  {
    id: "seo",
    num: "02",
    title: "SEO & Content Intelligence",
    description: "Technical SEO, keyword research, content strategy, schema and search optimization.",
    ctaText: "Explore Organic Growth",
    ctaHref: "#contact",
    ctaType: "link"
  },
  {
    id: "conversion-eng",
    num: "03",
    title: "Conversion & Growth Engineering",
    description: "Landing pages, CRO, A/B testing, performance optimization and funnel improvements.",
    ctaText: "Load Pro Calculator",
    ctaHref: "#calculator",
    ctaType: "action",
    actionValue: "28000"
  },
  {
    id: "analytics-auto",
    num: "04",
    title: "Analytics & Automation",
    description: "GA4, GTM, server-side tracking, CRM integrations, webhooks and reporting.",
    ctaText: "Request Automation Setup",
    ctaHref: "#contact",
    ctaType: "button"
  }
];
