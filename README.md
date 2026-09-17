# Shivansh Saxena: Personal Site

The source for my portfolio, résumé, project archive, and writing, built with
[Next.js](https://nextjs.org/), [React](https://react.dev/),
[TypeScript](https://www.typescriptlang.org/), and
[Tailwind CSS](https://tailwindcss.com/).

The architecture comes from [mldangelo/personal-site](https://github.com/mldangelo/personal-site)
(MIT). The content, colours, and typography are mine.

## What is here

- A statically exported Next.js 16 site.
- A responsive light/dark design system built from semantic CSS tokens, checked
  against WCAG AA.
- Markdown writing with drafts, RSS, and page metadata.
- A filterable résumé that still prints in full.
- Tests for components, content, metadata, and the final static export.

## Setup

Requires a Node version accepted by `engines.node` in `package.json`
(22, 24, or 26+). With [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install
npm ci
npm run dev
```

The dev server runs at http://localhost:3000.

## Commands

```bash
npm run dev             # Start the development server
npm run format          # Format with Prettier and Biome
npm run lint            # Run Biome checks
npm run type-check      # Run TypeScript
npm test                # Run Vitest
npm run build           # Build the production static export
npm run verify-export   # Inspect the generated HTML and XML
npm run og              # Regenerate the share card
npm run og:check        # Verify the committed share card is current
npm run favicons        # Regenerate the favicon set from the monogram
npm run portrait        # Regenerate the placeholder portrait
```

CI checks formatting, linting, types, the share card, tests, the production
build, and the exported site on every pull request.

## Where the content lives

| Content                           | Location                                                   |
| --------------------------------- | ---------------------------------------------------------- |
| Name, role, city, email           | `src/data/profile.json`                                    |
| Canonical URL, bio, social handle | `src/lib/utils.ts`                                         |
| Social links                      | `src/data/contact.ts`                                      |
| Homepage intro                    | `src/components/Template/Hero.tsx`                         |
| About page                        | `src/data/about.ts`                                        |
| Work history                      | `src/data/resume/work.ts`                                  |
| Education                         | `src/data/resume/degrees.ts`                               |
| Skills                            | `src/data/resume/skills.ts`                                |
| Projects                          | `src/data/projects.ts`                                     |
| Blog posts                        | `content/writing/*.md`                                     |
| External writing                  | `src/data/writing.ts`                                      |
| Stats                             | `src/data/stats/personal.tsx`                              |
| Colours                           | `app/styles/tokens/colors.css`, `app/styles/dark-mode.css` |
| Fonts                             | `app/fonts.ts`                                             |

The [adapting guide](./docs/adapting-guide.md) has more detail, including the
prompts used to rebrand the fork.

## Deploy

Deployed on [Vercel](https://vercel.com), which builds from `main`. The GitHub
Actions workflow validates every push and pull request but does not deploy.

To change the canonical URL, update `homepage` in `package.json` and `SITE_URL`
in `src/lib/utils.ts` — `npm run verify-export` reads the first and the site
reads the second, and they must agree.

## License

MIT. See [LICENSE](./LICENSE), which retains the original copyright.
