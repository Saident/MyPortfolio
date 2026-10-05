# Averil Primayuda's Portfolio

A personal portfolio for Averil Primayuda, Software Developer at PT. YEKAPE SURABAYA. Built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.

## Local development

```sh
npm ci
npm run dev
```

```sh
npm run lint     # Check JavaScript and React Hooks
npm run build    # Build the production site in dist/
npm run preview  # Preview the production build locally
```

There is no automated test suite configured. Check responsive layouts, mobile navigation, project links, résumé downloads, and contact actions in a browser after making changes.

## Updating the portfolio

- Edit `src/data/portfolio.js` for profile details, contact links, and project information.
- Edit `src/components/About.jsx` for the biography and current role presentation.
- Edit `src/components/Skills.jsx` for the technology groups.
- Store project images and résumé files in `src/assets/`. The résumé download is configured in `src/components/Navbar.jsx`.
- Edit `src/index.css` for shared visual tokens, layouts, responsive styling, and the warm-white minimal theme.
- Keep the title and description in `index.html` aligned with public profile changes.

The Warehouse Management System is an independent Laravel project. It has no public repository link. Thesis and bootcamp projects are labeled separately.

The site uses a warm-white background (`#FAFAF9`) and charcoal text (`#18181B`). The hero uses a scoped GSAP entrance timeline; other sections use Framer Motion reveals. Both respect reduced-motion preferences. Contact email copying includes success and failure feedback.
