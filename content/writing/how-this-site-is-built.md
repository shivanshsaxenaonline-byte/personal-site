---
title: How this site is built
date: '2026-09-17'
description: 'A colophon: static Next.js on Vercel, a colour system checked against WCAG AA, generated share cards and favicons, and a free subdomain with a catch-all mailbox.'
---

## The stack

The site is a statically exported [Next.js](https://nextjs.org) 16 application —
React 19, TypeScript, Tailwind 4. There is no server. `next build` writes plain
HTML, CSS, and JavaScript, and Vercel serves the folder.

Static export is a real constraint rather than a default. There are no API
routes, no server components fetching at request time, no image optimisation
pipeline. Everything a page needs is decided when the site is built. The
upside is that the whole thing is a folder of files, so it cannot break in
production in any way it did not already break in CI.

## Content is data, not markup

The architecture comes from [mldangelo/personal-site](https://github.com/mldangelo/personal-site),
which is MIT licensed. Its best idea is that content lives in typed data files
rather than inside components.

My résumé is an array of objects in `src/data/resume/work.ts`. Skills are
objects with a competency and a list of categories, and the category filters on
the résumé page are _derived_ from that list rather than maintained beside it —
add a skill in a new category and the filter button appears on its own. Posts
like this one are Markdown files in `content/writing/`, where the filename
becomes the URL.

That separation is why adapting the fork was mostly editing data. It also means
the parts that are genuinely mine — colour, type, content, structure — are the
parts I actually changed.

## The colour system

Every colour is a CSS custom property defined once in
`app/styles/tokens/colors.css`, with a second set of values for dark mode. No
component hardcodes a colour.

The palette is a deep teal against cool slate. Picking it was not a matter of
taste alone, because a link colour has to clear WCAG AA — a 4.5:1 contrast
ratio against the surface behind it. So I computed the ratios instead of
eyeballing them:

```
accent  #0d7a70 on #fbfcfc   5.06:1   pass
accent  #0d7a70 on #eef1f1   4.58:1   pass
white   #ffffff on #0d7a70   5.20:1   pass
```

Dark mode is not the same palette inverted. A teal tuned for contrast against
paper is far too dark against ink, so the accent lifts to `#5fd3c4` for text —
and filled buttons need a _different_ pair again, because light text on that
lifted accent fails badly. My first attempt at the dark button hover came out
at 4.40:1. Close enough to look fine, and still a failure. It is `#127a6f` now,
at 4.78:1.

## Generated assets

Three things that are usually made by hand are scripts here:

- `npm run og` draws the social share card with `next/og` and writes a digest
  alongside it, so CI can tell when the committed image has gone stale.
- `npm run favicons` renders the whole favicon set — 25 PNGs plus an ICO — from
  a single monogram definition. Changing the brand colour is a one-line edit
  and a re-run, not twenty-five trips through an image editor.
- `npm run portrait` generates the placeholder portrait.

Committing generated assets rather than building them on demand keeps builds
deterministic and means CI does not depend on Google Fonts being reachable.

## What CI actually checks

Formatting, linting, and types, then the test suite, then a production build on
Ubuntu, macOS, and Windows across two Node versions.

The last step is the interesting one. `npm run verify-export` reads the
generated HTML and XML and checks things component tests cannot see: that no
draft leaked into the export, that no page declares a duplicate element id,
that every internal link and fragment resolves, that canonicals and share
metadata are complete and point at the right origin, and that the sitemap and
RSS feed agree with the posts that exist.

It reads the canonical origin from `homepage` in `package.json`, which means
the site's URL is declared in exactly one place and a mismatch fails the build
rather than shipping quietly.

## Hosting, and an address that accepts anything

Vercel builds from `main`. The GitHub Actions workflow does not deploy — it is
the gate that decides whether a commit should be deployed at all.

The domain is a free name under `indevs.in`, handed out by
[Stackryze](https://github.com/stackryze/FreeDomains). Stackryze only delegates
it: the name's nameservers point at [Cloudflare](https://www.cloudflare.com),
and every record lives there.

That works on Cloudflare's free plan because `indevs.in` is on the
[Public Suffix List](https://publicsuffix.org). Browsers and DNS providers
treat `shivansh.indevs.in` as a registrable domain in its own right, the same
way they treat `example.co.uk`, rather than as somebody else's subdomain.

The address records are `A` records rather than the `CNAME` Vercel suggests,
and the reason is a nice piece of DNS trivia: a name carrying a CNAME cannot
carry any other record type. This name also needs `MX` records, because mail to
it is handled by Cloudflare Email Routing with a catch-all rule. A CNAME would
have quietly made email impossible.

The catch-all is why the address on the [contact page](/contact/) cycles. Every
alias it shows reaches the same inbox, because every address at the domain
does.
