# Scale by EkLevelUp - Marketing & Growth Engineering Portal

This is the front-end marketing page for **Scale by EkLevelUp**, a precision digital marketing and growth engineering agency. The project is built using Next.js, styled with Tailwind CSS, and structured modularly for absolute maintainability and accessibility.

## Getting Started

First, install the dependencies and launch the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project has been refactored into modular components, separation of concerns, and clean static datasets:

```
frontend/
├── app/                  # Next.js App Router Page Entry
│   ├── layout.tsx        # Global Layout Wrapper
│   ├── page.tsx          # Orchestrator of landing page components
│   ├── globals.css       # Tailwind configuration & design tokens
│   ├── robots.ts         # Search engine crawler permissions
│   └── sitemap.ts        # XML Sitemap index
│
├── components/
│   ├── layout/           # Global navbar and footer
│   ├── sections/         # Individual landing page sections (Hero, Services, Pricing, etc.)
│   └── ui/               # Standardized reusable visual elements (Container, Badge, Card)
│
├── data/                 # Static content matrices (services, pricing, FAQ, testimonials)
├── config/               # Site configuration and global metadata constants
└── lib/                  # Helper utilities and constant metrics
```

## Features

- **Modular UI Structure**: Components are isolated, allowing easy modifications to specific sections of the page.
- **Dynamic Calculator**: Includes an interactive monthly advertising budget return (ROI) calculator.
- **Accessible Design**: Complies with WCAG 2.2 AA standards, utilizing designated theme tokens and focus behaviors.
- **Search Engine Optimization**: Implements semantic structures, robots crawling permissions, and dynamic sitemaps.
