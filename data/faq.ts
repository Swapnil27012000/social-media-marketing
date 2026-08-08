export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "How long does it take to see results?",
    answer: "Typically, PPC and acquisition campaigns start showing performance data in 72 hours, while SEO positioning and indexing loops usually yield compounding returns in 4 to 8 weeks."
  },
  {
    question: "Do you configure server-side attribution tracking?",
    answer: "Yes. All high-performance analytics plans include configuring server-side Google Tag Manager (sGTM) containers on Cloudflare or Google Cloud Platform to maintain absolute data privacy compliance and tracking accuracy."
  },
  {
    question: "Can we migrate our existing Salesforce or HubSpot pipelines?",
    answer: "Absolutely. Our engineering team builds secure, low-latency webhook endpoints that sync contact records, attribution sources, and pipelines directly with your CRM of choice."
  }
];
