# Project: fe

## Tech Stack
- Next.js 16 (App Router, RSC)
- React 19
- TypeScript
- Tailwind CSS v4

## UI & Component Rules
- **UI Library**: Always use [shadcn/ui](https://ui.shadcn.com/) for UI components. Add new components via `npx shadcn@latest add <component>`.
- **Icon Library**: Always use [Lucide React](https://lucide.dev/) (`lucide-react`) for icons. Never use emoji or other icon libraries.
- shadcn/ui config: `components.json` (style: new-york, baseColor: neutral, CSS variables enabled)
- UI components live in `@/components/ui`
- Utility functions in `@/lib/utils` (includes `cn()` for class merging)

## Path Aliases
- `@/components` -> `components/`
- `@/lib` -> `lib/`
- `@/hooks` -> `hooks/`
- `@/components/ui` -> shadcn/ui components
