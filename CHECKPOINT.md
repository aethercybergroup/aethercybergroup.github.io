# Checkpoint – Batch 4

## Added in this batch

- `app/api/auth/[...nextauth]/route.ts` – Implements NextAuth configuration with an email/password credentials provider (and stubs for additional OAuth providers) using the Prisma adapter.
- `app/(portal)/layout.tsx` – Protected portal layout that checks the user session via `getServerSession` and redirects unauthenticated visitors to the sign‑in page.
- `app/(portal)/portal/dashboard/page.tsx` – Member dashboard page that greets the logged‑in user and serves as the entry point for portal features.

## What's next

Proceed to Batch 5 as outlined in the roadmap:

- Build the Home section with at least four subpages (e.g., case studies, partners, trust‑and‑security, roadmap).
- Create appropriate components and charts using Recharts to visualize data on the Home subpages.
- Ensure pages fetch or mock data via API routes when necessary.
- Update `CHECKPOINT.md` after completing Batch 5.
