# Checkpoint – Batch 2

## Added in this batch

- `app/layout.tsx` – Defines the root layout for the App Router, imports global styles and renders Navbar and Footer components.
- `app/page.tsx` – Home page with hero section and call-to-action button.
- `components/ui/Button.tsx` – Reusable Button component built on next/link with Tailwind styling.
- `components/ui/Navbar.tsx` – Navigation bar listing top-level pages (Home, About, Services, Solutions, Research, Resources, Newsroom, Events, Portal).
- `components/ui/Footer.tsx` – Footer component with copyright notice and links to Privacy, Terms, and Contact pages.

## What's next

Proceed to Batch 3 as outlined in the roadmap:

- Create Prisma schema and configure the database client.
- Add `lib/db.ts` for Prisma client instantiation.
- Implement `prisma/seed.ts` to generate 500–1,000 seed records.
- Include `.env.example` with necessary environment variables.
