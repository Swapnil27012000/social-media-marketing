export interface NavItem {
  title: string;
  href: string;
}

export const headerNavItems: NavItem[] = [
  { title: "Solutions", href: "#services" },
  { title: "Engineering", href: "#growth-plan" },
  { title: "Case Studies", href: "#calculator" },
  { title: "Company", href: "#about" },
];

export const footerNavItems = {
  solutions: [
    { title: "Growth Engine", href: "#services" },
    { title: "SEO Strategy", href: "#services" },
    { title: "Paid Acquisition", href: "#services" },
  ],
  company: [
    { title: "About Us", href: "#about" },
    { title: "Contact Info", href: "#contact" },
    { title: "Privacy Policy", href: "#privacy" },
  ],
};
