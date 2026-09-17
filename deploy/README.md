# Deployment

The site is a static Next.js export. Vercel builds it from `main`; the GitHub
Actions workflow validates every push but does not deploy.

Canonical URL: `https://shivanshsaxena.is-a.dev`

It is set in two places, and they must agree — `npm run verify-export` reads the
first and the site reads the second:

- `homepage` in `package.json`
- `SITE_URL` in `src/lib/utils.ts`

## 1. Push this repository to GitHub

```bash
git remote add origin https://github.com/shivanshsaxenaonline-byte/personal-site.git
git push -u origin main
```

The stats page reads star and fork counts from the GitHub API for this
repository. Until it exists the build logs `GitHub API returned 404, using
fallback` and renders placeholder numbers. That is expected and harmless.

## 2. Deploy on Vercel

1. Sign in to <https://vercel.com> with GitHub.
2. **Add New → Project**, import `personal-site`.
3. Vercel detects Next.js on its own. Leave the build settings alone — the
   `output: 'export'` in `next.config.mjs` is served as static files.
4. Deploy. You get a working `*.vercel.app` URL immediately.

## 3. Attach the is-a.dev subdomain

1. In the Vercel project: **Settings → Domains → Add**, enter
   `shivanshsaxena.is-a.dev`.
2. Vercel shows the DNS records it wants — an **A record** for the subdomain and
   a **TXT record** on `_vercel.shivanshsaxena.is-a.dev`. Copy both values.
3. Fork <https://github.com/is-a-dev/register>.
4. Copy the two files from `is-a-dev/` in this folder into the fork's `domains/`
   directory, replacing the `REPLACE_WITH_...` placeholders with the values from
   step 2.
5. Open a pull request. Read their docs first — the repository README asks
   contributors not to submit AI-generated requests, and reviewers do check.
6. Records publish within minutes of the merge. Vercel issues the certificate
   automatically once it can see them.

`shivanshsaxena.is-a.dev` was free when checked against the registry on
2026-09-17. If someone has claimed it since, `shivansh-saxena`, `saxena`, and
`shivanshdev` were also free. Note that a plain DNS lookup cannot tell you —
is-a.dev answers every name through a wildcard, so check for
`domains/<name>.json` in their repository instead.

## 4. Optional: email at the domain

The contact page animates through aliases, and the link resolves to whatever
`email` is set to in `src/data/profile.json`. It is currently a Gmail address,
and the aliases use Gmail's `+suffix` form, which genuinely works today.

To receive mail at `you@shivanshsaxena.is-a.dev` instead, add ImprovMX records
to the same is-a.dev JSON file:

```json
"MX": ["mx1.improvmx.com", "mx2.improvmx.com"],
"TXT": ["v=spf1 include:spf.improvmx.com ~all"]
```

Then create the domain at <https://improvmx.com> and point its aliases at your
Gmail. The free tier forwards 500 emails a day across 25 aliases.

Two limits worth knowing before you rely on it:

- The free tier has **no SMTP sending**. You can receive at the address but not
  send from it without a separate relay.
- True wildcard catch-all is not confirmed on the free tier. Twenty-five named
  aliases cover the contact-page joke either way.

Once mail is arriving, change `email` in `src/data/profile.json`, and drop the
`${CONTACT_LOCAL_PART}+` prefix from the alias list in
`src/components/Contact/EmailLink.tsx` so it cycles bare words. Do not make that
second change before the mailbox works — those addresses would bounce.
