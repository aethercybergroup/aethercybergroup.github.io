# Checkpoint – Batch 3

## Added in this batch

- `prisma/schema.prisma` – Defines database models for User, Session, ApiKey, Article, PressRelease, Advisory, VulnBrief, Event, Registration, and ContactMessage, and their relations.
- `lib/db.ts` – Prisma client instantiation with singleton pattern.
- `prisma/seed.ts` – Seed script populating hundreds of records across models for development.
- `.env.example` – Example environment variables including database URLs and NextAuth secrets.

## What's next

Proceed to Batch 4 as outlined in the roadmap:

- Implement authentication with NextAuth by creating `/app/api/auth/[...nextauth]/route.ts` with provider stubs.
- Set up protected portal layout under `/app/(portal)/layout.tsx` and scaffold `/app/(portal)/portal/dashboard/page.tsx`.
- Configure session and authentication using the Prisma adapter.
- Update `CHECKPOINT.md` after completing Batch 4.
