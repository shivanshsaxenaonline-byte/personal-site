#!/usr/bin/env node
/**
 * Writes a placeholder portrait to `public/images/me.jpg`.
 *
 * This exists so the site never ships somebody else's face. The upstream
 * repository commits the original author's photograph at this path, and it is
 * referenced by the hero, the footer, and the JSON-LD `image` — all of which
 * assert it is a picture of whoever owns the site.
 *
 * Replace the file with a real square photograph (1024x1024 works well) and
 * this script becomes unnecessary. If your photograph is a .jpg, point
 * `SITE_IMAGE_PATH` in `src/lib/utils.ts` and the `src` in
 * `src/components/Template/ThemePortrait.tsx` at the new filename — the
 * extension has to match the bytes, or the schema test will say so.
 *
 * Run with `npm run portrait` to regenerate.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { createElement as h } from 'react';

const { ImageResponse } = createRequire(import.meta.url)('next/og');

const profile = JSON.parse(
  await readFile(join(process.cwd(), 'src/data/profile.json'), 'utf8'),
);

const OUTPUT = join(process.cwd(), 'public', 'images', 'me.png');
const SIZE = 1024;
const TEAL = '#0d7a70';
const PAPER = '#eef1f1';

const initials = profile.name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((word) => word[0].toUpperCase())
  .join('');

async function loadGoogleFont(family, weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } },
  ).then((r) => r.text());

  const url = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  )?.[1];
  if (!url) throw new Error(`No font URL found for ${family} ${weight}`);

  const font = await fetch(url);
  if (!font.ok) throw new Error(`Failed to download ${family}: ${font.status}`);

  return font.arrayBuffer();
}

const display = await loadGoogleFont('Space+Grotesk', 700);

const response = new ImageResponse(
  h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: PAPER,
        color: TEAL,
        fontFamily: 'Display',
        fontSize: SIZE * 0.34,
        fontWeight: 700,
        letterSpacing: '-0.03em',
      },
    },
    initials,
  ),
  {
    width: SIZE,
    height: SIZE,
    fonts: [{ name: 'Display', data: display, weight: 700, style: 'normal' }],
  },
);

await writeFile(OUTPUT, Buffer.from(await response.arrayBuffer()));

console.log(
  `Wrote placeholder portrait (${initials}, ${SIZE}x${SIZE}) to ${OUTPUT}`,
);
console.log('Replace it with a real photograph when you have one.');
