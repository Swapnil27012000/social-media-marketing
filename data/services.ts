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
    id: "seo",
    num: "01",
    title: "Precision SEO",
    description: "Rank higher for high-intent keywords through custom content matrices and technical SEO optimization pipelines.",
    ctaText: "Explore SEO Strategy",
    ctaHref: "#contact",
    ctaType: "link"
  },
  {
    id: "growth-eng",
    num: "02",
    title: "Growth Engineering",
    description: "Custom lead generators, dynamic landing page engines, and analytics pipeline setups customized for your team.",
    ctaText: "Load Growth Plan",
    ctaHref: "#calculator",
    ctaType: "action",
    actionValue: "15000"
  },
  {
    id: "paid-acq",
    num: "03",
    title: "Paid Acquisition",
    description: "Scale revenue through programmatic search, social, and display ads managed by automated algorithmic bids.",
    ctaText: "Analyze PPC Metrics",
    ctaHref: "#calculator",
    ctaType: "link"
  },
  {
    id: "web-perf",
    num: "04",
    title: "Web Performance",
    description: "Optimize Core Web Vitals to increase conversion rates and ranking metrics on Google and Bing.",
    ctaText: "Test Site Speed",
    ctaHref: "#services",
    ctaType: "link"
  },
  {
    id: "analytics",
    num: "05",
    title: "High-Performance Analytics",
    description: "Cookieless attribution tracking setups built with server-side GTM configurations for absolute privacy compliance.",
    ctaText: "Load Pro Analytics",
    ctaHref: "#calculator",
    ctaType: "action",
    actionValue: "25000"
  },
  {
    id: "marketing-auto",
    num: "06",
    title: "Marketing Automation",
    description: "Connect CRMs, email service providers, and product tracking APIs with low latency webhook routing.",
    ctaText: "Design Automation Flow",
    ctaHref: "#contact",
    ctaType: "link"
  },
  {
    id: "cro",
    num: "07",
    title: "Conversion Rate Optimization (CRO)",
    description: "Identify and repair funnel leaks through continuous, high-precision layout and styling changes.",
    ctaText: "Test CRO Math",
    ctaHref: "#calculator",
    ctaType: "link"
  },
  {
    id: "custom-api",
    num: "08",
    title: "Custom API Integrations",
    description: "Bespoke backend synchronization systems connecting Salesforce, HubSpot, and custom tools securely.",
    ctaText: "Request API Integration",
    ctaHref: "#contact",
    ctaType: "button"
  },
  {
    id: "content-intel",
    num: "09",
    title: "Content Intelligence",
    description: "Generate content briefs, keyword clustering charts, and domain authority analyses automatically.",
    ctaText: "Run Auditing Scan",
    ctaHref: "#services",
    ctaType: "link"
  }
];
