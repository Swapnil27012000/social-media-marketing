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
    name: "PPC Launch Engine",
    price: "₹15,000",
    period: "/ month",
    description: "For local businesses and early-stage companies starting structured paid acquisition.",
    features: [
      { text: "Google & Meta Ads setup" },
      { text: "Campaign & audience configuration" },
      { text: "2 landing-page variations" },
      { text: "Weekly campaign optimization" },
      { text: "Monthly performance report" }
    ],
    ctaText: "Start Your Campaign",
    ctaHref: "#contact"
  },
  {
    id: "booster",
    name: "Growth Optimization Engine",
    price: "₹28,000",
    period: "/ month",
    description: "For growing businesses ready to improve acquisition and conversion efficiency.",
    features: [
      { text: "Everything in Starter" },
      { text: "Landing-page A/B testing" },
      { text: "Conversion optimization" },
      { text: "Lead automation" },
      { text: "CRM/API integrations" },
      { text: "Monthly growth strategy session" }
    ],
    ctaText: "Build My Growth Engine",
    ctaHref: "#contact",
    popular: true
  },
  {
    id: "enterprise",
    name: "Custom Growth Engineering",
    price: "₹50,000+",
    period: "/ month",
    description: "For organizations requiring custom analytics, integrations and advanced acquisition infrastructure.",
    features: [
      { text: "Everything in Growth" },
      { text: "Server-side tracking" },
      { text: "Custom CRM integrations" },
      { text: "Advanced attribution" },
      { text: "Custom API/webhook systems" },
      { text: "Performance optimization" },
      { text: "Priority support" }
    ],
    ctaText: "Talk to a Growth Engineer",
    ctaHref: "#contact"
  }
];
