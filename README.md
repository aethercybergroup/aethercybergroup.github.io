# Aether Cyber Group

Aether Cyber Group is a professional cybersecurity firm offering intelligence, red/blue team services, compliance solutions and research. This repository contains the source code for the official website and member portal built with Next.js 14 (App Router) and TypeScript.

## Features

- ⚡ Dark, professional cyber aesthetic using Tailwind CSS and shadcn/ui components.
- 🔐 Auth‭gated member portal via NextAuth.
- 📈 Interactive charts powered by Recharts.
- 🧩 Modular architecture with nine top‑level sections and multiple subpages.
- 🛡️ Prisma ORM with SQLite (development) and Postgres (production) support.
- ✅ API routes validated with Zod and protected by rate‑limiting middleware.
- 🧪 Unit tests with Vitest and e2e smoke tests with Playwright.

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment**

   Copy `.env.example` to `.env` and fill in the required variables for your environment (database URLs, auth secrets, etc.).

3. **Database**

   Push the schema and seed the development database:

   ```bash
   pnpm db:push
   pnpm db:seed
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

5. **Testing**

   ```bash
   pnpm test    # Unit tests (Vitest)
   pnpm e2e     # End‭to‭end tests (Playwright)
   ```

## Project Structure

- `/app` – Top‑level routes and layouts (App Router).
- `/components` – Reusable UI components (shadcn/ui based).
- `/prisma` – Prisma schema and seed scripts.
- `/lib` – Utility functions and database client.
- `/styles` – Global CSS files.
- `/public` – Static assets, OpenAPI spec, downloadable PDFs.

## Contributing

Contributions are welcome. Please open issues and submit pull requests. Ensure that all linting rules pass and tests succeed before submitting.

## License

This project is licensed under the MIT License.
