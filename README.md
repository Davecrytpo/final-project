# Twitter Clone (Vite + React + TypeScript)

A modern React + TypeScript project scaffolded with Vite and Tailwind CSS. This repo has been upgraded with:
- Clean removal of Bolt-specific tooling
- Vitest + Testing Library for unit tests
- GitHub Actions CI (lint, typecheck, test, build)
- Prettier for consistent formatting
- Dependabot for automated dependency updates

## Getting Started

Requirements:
- Node.js 18+ (20 recommended)
- npm 9+

Install dependencies:

```bash
npm ci
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Quality

- Type check:

```bash
npm run typecheck
```

- Lint:

```bash
npm run lint
```

- Format:

```bash
npm run format
```

- Test:

```bash
npm test
npm run test:coverage
```

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- Vitest + @testing-library/react
- ESLint (flat config) + Prettier

## Project Structure

- `src/` — application source
- `src/components/` — UI components
- `src/pages/` — route pages
- `src/test/setup.ts` — test setup for jest-dom
- `.github/workflows/ci.yml` — CI pipeline

## Notes

- This project preserves proper attribution and licensing where applicable and uses a custom, neutral X-style logo (not affiliated with Twitter/X).
- Feel free to extend with API layers, state management (Zustand/Redux), end-to-end tests (Playwright), or deployment configs as next steps.
- Images now use fixed dimensions and aspect ratios to minimize layout shift (CLS).
