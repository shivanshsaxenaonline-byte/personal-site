# Deployment

The site is a static Next.js export. Vercel builds it from `main`; the GitHub
Actions workflow validates every push but does not deploy.

Canonical URL: `https://shivansh.indevs.in`

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

## 3. Register shivansh.indevs.in

`indevs.in` names are handed out free by
[Stackryze](https://github.com/stackryze/FreeDomains). They only delegate the
name — its nameservers — so every record lives with a DNS provider you choose.
This setup uses Cloudflare, which is free and has a true catch-all for email.

`indevs.in` is on the Public Suffix List, so Cloudflare's free plan accepts
`shivansh.indevs.in` as a site of its own.

Names are valid for **one year** and renew free. Stackryze emails a reminder
before expiry — do not ignore it, or the site and the mailbox both go dark.

1. Sign in with GitHub at <https://domain.stackryze.com> and register
   `shivansh` under `indevs.in`.
2. Create a free Cloudflare account, choose **Add a domain**, enter
   `shivansh.indevs.in`, and pick the **Free** plan. Cloudflare shows two
   nameservers ending in `ns.cloudflare.com`.
3. In the Stackryze dashboard, set those two nameservers on the domain.
4. Wait for Cloudflare to report the domain as **Active**. Usually minutes,
   occasionally a few hours.

## 4. DNS records in Cloudflare

The domain is already attached to the Vercel project, which issued these
values. Add them under **DNS → Records**:

| Type | Name      | Content                                                    | Proxy    |
| ---- | --------- | ---------------------------------------------------------- | -------- |
| A    | `@`       | `216.198.79.1`                                             | DNS only |
| A    | `@`       | `64.29.17.1`                                               | DNS only |
| TXT  | `_vercel` | `vc-domain-verify=shivansh.indevs.in,ba60da95121ec7201d04` | —        |

Set the A records to **DNS only** (grey cloud). Vercel issues its own
certificate and needs to see traffic arrive directly.

Use A records, not the CNAME Vercel also offers: a name carrying a CNAME cannot
carry any other record, and this one needs MX records for mail.

## 5. Catch-all email with Cloudflare Email Routing

1. In Cloudflare: **Email → Email Routing → Get started**. Let it add the MX
   and SPF records it proposes.
2. **Destination addresses → Add** your Gmail, and click the verification link
   Cloudflare sends.
3. **Routing rules → Catch-all address → Edit**: action _Send to an email_,
   destination your Gmail, and enable it.

Every address at `shivansh.indevs.in` now reaches your inbox. Test with one
nobody would guess before trusting it.

Then merge the `feat/domain-email` branch, which switches the site's canonical
URL and the contact address to this domain and makes the contact page cycle
plain words before the `@`. Do not merge it before mail is arriving.

Replying _as_ the custom address from Gmail is not an option long term: Gmail
drops "Send as" for third-party addresses in January 2027. Reply from Gmail, or
use a mail client with SMTP if the difference starts to matter.

## Appendix: the is-a.dev alternative

`shivanshsaxena.is-a.dev` was requested first and is a working fallback.
Pull request is-a-dev/register#52805 carries its records.

### Registering shivanshsaxena.is-a.dev

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

#### If the pull request is denied

is-a.dev's review bot closes a request automatically when the PR template is
not fully filled in — every checkbox ticked, plus the website preview and
purpose between their comment markers. The denial is not a judgement on the
records; the `Tests` check can pass while the template check fails.

A denied PR can normally be reopened from the button at the bottom of the page.
When that button does not appear, open a new pull request from the same branch
instead — the branch and its files are untouched by the denial:

    https://github.com/is-a-dev/register/compare/main...shivanshsaxenaonline-byte:register:add-shivanshsaxena?expand=1

GitHub loads a blank template into a new pull request, so paste the completed
one from `PR-BODY.md` in this folder over it rather than filling it in again.

### Email on the is-a.dev name

The contact page animates through aliases and the link resolves to whatever
`email` is set to in `src/data/profile.json`.

Right now that is a Gmail address and the aliases use Gmail's `+suffix` form.
Those work today, but only the part _after_ the `+` is free — the local part is
fixed. `hello@gmail.com` is a stranger's address, not yours. A true catch-all,
where anything before the `@` reaches you, needs your own domain.

#### Receiving anything@shivanshsaxena.is-a.dev — free

The MX and SPF records are already in `is-a-dev/shivanshsaxena.json`. They are
fixed ImprovMX values, not account-specific, so they go in with the same pull
request that sets up the site.

After the pull request merges:

1. Create an account at <https://improvmx.com> and add
   `shivanshsaxena.is-a.dev` as the domain.
2. ImprovMX creates a catch-all alias (`*`) by default. Point it at your Gmail.
3. Verify the destination address from the email it sends.

Every address at the domain now forwards to your inbox. The free tier allows
500 forwards a day across 25 named aliases, and the catch-all is included.

Then make the site match:

- Set `email` in `src/data/profile.json` to `hi@shivanshsaxena.is-a.dev`.
- In `src/components/Contact/EmailLink.tsx`, drop the `${CONTACT_LOCAL_PART}+`
  prefix from the alias list so it cycles bare words — `hello`, `hi`,
  `anything`. That is the joke the catch-all finally earns.

Do not make that second change before mail is actually arriving. Those
addresses would bounce.

#### Sending from it — the part that costs something

Receiving is free. Sending is where it gets awkward, and the reason is a
deadline, not a limitation of this setup:

> Starting January 2027, Gmail no longer supports "Send as" for third-party
> email addresses.

Google's transition window is Q3–Q4 2026. Plus-aliases of your own Gmail,
other Gmail addresses, and Google Workspace aliases are unaffected; a free
Gmail account sending as your own custom domain over SMTP is the case being
removed. ImprovMX's free tier has no SMTP either, so it cannot send regardless.

Four options, none of them blocking:

1. **Reply from Gmail.** Mail arrives at the custom address and you answer from
   your Gmail. Slightly inconsistent, costs nothing, works forever.
2. **Zoho Mail free tier.** A real mailbox on the domain, send and receive,
   five users, 5 GB each, free permanently. Webmail and mobile app only — no
   IMAP — so it lives outside Gmail. is-a.dev documents the DNS setup at
   <https://docs.is-a.dev/guides/zoho-mail/>, and note Zoho is regional, so an
   Indian account uses `zoho.in` hosts rather than `zoho.com`.
3. **A desktop client** such as Thunderbird. Google confirms IMAP/SMTP in
   desktop clients keeps working.
4. **Google Workspace**, around ₹136 per user per month in India. The only way
   to keep a custom domain inside the Gmail web interface long-term.

Option 1 is fine until the contact form starts mattering.
