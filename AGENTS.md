# Repository Guidelines

## Project Structure & Module Organization

This is a single-page portfolio built with React 19, Vite 8, Tailwind CSS 4, and Framer Motion.

- `src/main.jsx` initializes React; `src/App.jsx` assembles the page sections.
- `src/components/` contains `Navbar`, `Hero`, `About`, `Skills`, `Projects`, and `Contact`, plus the shared `ScrollReveal` animation wrapper.
- `src/assets/` stores imported images, SVGs, and the résumé PDF. `public/` stores assets served directly, including favicons.
- `src/index.css` defines global typography, colors, and base styles; `src/App.css` also exists for app styling.
- Root configuration lives in `vite.config.js` and `eslint.config.js`. Production output goes into ignored `dist/`.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start Vite with hot module replacement.
- `npm run build`: generate the production bundle in `dist/`.
- `npm run preview`: serve the built bundle locally after building.
- `npm run lint`: run ESLint across the repository.

## Coding Style & Naming Conventions

Use JavaScript ES modules, functional React components, and two-space indentation. Name component files and exports in PascalCase, such as `ScrollReveal.jsx`; use camelCase for variables and handlers, such as `handleCopy`.

Prefer Tailwind utilities for component layouts and global CSS for shared typography and tokens. Preserve existing section IDs so navigation anchors remain valid. Match the edited file's quote and semicolon style; no formatter is configured. ESLint checks JavaScript, React Hooks, React Refresh, and unused variables.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is configured. Run lint and a production build before submitting changes. Manually verify desktop and mobile layouts, navigation anchors, scroll animations, project links, résumé downloads, and contact copy buttons when affected. Check that imported assets resolve and the browser console has no new errors.

## Commit & Pull Request Guidelines

History uses short, descriptive messages such as `optimized photo size` and `updated skills section`; no enforced prefix convention is evident. Keep commits focused and describe the actual change.

Pull requests should explain the change, list validation performed, link relevant issues when available, and include desktop/mobile screenshots for visual changes. Avoid committing generated output or unrelated dependency changes.
