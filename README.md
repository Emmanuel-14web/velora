# VELORA V12

VELORA is a fictional ultra-premium electric grand tourer concept built as a cinematic portfolio website. It combines editorial product storytelling with tactile interactions, an interactive configurator, a performance experience, and a reservation flow. All specifications, pricing, branding, and service claims are illustrative.

## Technology

- React 19 with Vinext/Vite and TypeScript
- Framer Motion for spring interactions, menus, modals, and scroll progress
- GSAP ScrollTrigger for cinematic section reveals and the sticky vehicle sequence
- Modern responsive CSS and Lucide icons
- LocalStorage persistence for paint, wheel, and interior selections

## Run locally

```bash
pnpm install
pnpm run dev
```

Open the local URL printed by the development server. Create a production build with `pnpm run build`.

## Project structure

- `app/page.tsx` — primary route
- `app/[...slug]/page.tsx` — portfolio routes
- `app/layout.tsx` — global metadata
- `app/globals.css` — responsive visual and motion system
- `components/VeloraExperience.tsx` — sections, interactions, configurator, and modal
- `public/velora-v12.png` — original generated concept vehicle artwork

## Customization

Brand copy and vehicle data live in `components/VeloraExperience.tsx`. Update the `colors` and `tech` arrays to change configurator and technology options. Replace `public/velora-v12.png` with another same-name landscape asset, or update its references in the component. Pricing appears in the configurator panel; performance values appear in the hero and performance sections.

## Accessibility and performance

The experience includes a skip link, semantic sectioning, accessible dialog labeling, named controls, keyboard focus behavior, alt text, touch-friendly selectors, and a reduced-motion mode. Images are reused across scenes to reduce transfer cost; animation is transform-based and scroll effects clean up on route changes.

## SEO and indexing

The layout supplies title, description, Open Graph, Twitter, and `noindex, follow` metadata. `public/robots.txt` and `public/sitemap.xml` are included. Before launching a real client site, replace `velora.example` with the production domain, remove the `robots` noindex directive from `app/layout.tsx`, add that domain as the canonical origin, and verify every route’s unique metadata.

## Deployment

For Vercel, import the repository and use the detected framework settings. For Netlify, connect the repository, use `pnpm run build`, and configure the generated output according to the Vinext adapter. Environment-specific hosting settings are stored in `.openai/hosting.json`.

## Portfolio honesty

VELORA is not a real company. Do not remove the fictional-brand disclosure when presenting the concept publicly.
