export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "PPC Local Starter",
    price: "₹15,000",
    period: "/ month",
    description: "Ideal for local businesses aiming to kickstart targeted client acquisition.",
    features: [
      { text: "Google/Facebook/Meta Ads setup" },
      { text: "2 custom landing page variations" },
      { text: "Weekly reporting & campaign tuning" }
    ],
    ctaText: "Choose Starter Plan",
    ctaHref: "#contact"
  },
  {
    id: "booster",
    name: "SME Growth Booster",
    price: "₹28,000",
    period: "/ month",
    description: "For scaling businesses wanting deeper automation and conversion optimization.",
    features: [
      { text: "All Starter features included" },
      { text: "A/B testing on landing pages" },
      { text: "Automated API lead integrations" },
      { text: "Monthly strategy consultation" }
    ],
    ctaText: "Plan Growth Booster",
    ctaHref: "#contact",
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise Scale Engine",
    price: "₹50,000+",
    period: "/ month",
    description: "Custom integrations, deep web vitals tuning, and dedicated lead desk routing.",
    features: [
      { text: "All Growth features included" },
      { text: "Server-side GTM configurations" },
      { text: "Custom CRM integrations" },
      { text: "24/7 priority support" }
    ],
    ctaText: "Plan Enterprise Engine",
    ctaHref: "#contact"
  }
];
