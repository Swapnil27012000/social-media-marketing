export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    quote: "Scale by EkLevelUp overhauled our SEO structure and marketing pipelines. In less than 90 days, we reached first-page rank on key terms.",
    author: "Arjun Sharma",
    role: "VP of Growth",
    company: "Metro Fintech",
    metric: "4.17x ROI Boost"
  },
  {
    quote: "The server-side GTM configurations and custom CRM endpoints they engineered gave us 100% accurate conversion data.",
    author: "Neha Patel",
    role: "Head of Marketing",
    company: "ZetaCloud",
    metric: "425% pipeline growth"
  }
];
