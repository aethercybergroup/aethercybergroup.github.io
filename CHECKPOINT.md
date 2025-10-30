# Checkpoint – Batch 1

## Added in this batch

- `package.json` with project metadata, scripts, dependencies and devDependencies.
- `.gitignore` to exclude node modules, build artifacts, environment files and IDE folders.
- `README.md` outlining project purpose, features, setup, project structure and contribution guidelines.
- `next.config.ts` enabling experimental app directory and strict mode.
- `tailwind.config.ts` with dark mode configuration, custom color palette and file scanning globs.
- `postcss.config.js` to wire TailwindCSS and autoprefixer.
- `tsconfig.json` for TypeScript compiler options.
- `.eslintrc.js` extending Next.js and Prettier configs with custom rules.
- `.prettierrc.json` specifying Prettier formatting preferences.
- `styles/globals.css` importing Tailwind layers and setting base dark background and text colours.
- `lib/utils.ts` providing helper functions (`cn` class name combiner and `formatDate`).
- `CHECKPOINT.md` documenting this batch.

## What’s next

Proceed to Batch 2 as outlined in the roadmap:

- Initialize Tailwind with shadcn/ui components.
- Create the base layout at `/app/layout.tsx`.
- Build the root page at `/app/page.tsx`.
- Scaffold `/components/ui/*` with essential primitives (navigation, footer, card, button, etc.).
- Update `CHECKPOINT.md` after completing Batch 2.
