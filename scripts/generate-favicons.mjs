#!/usr/bin/env node
/**
 * Generates the favicon set at `public/images/favicon/` from one monogram.
 *
 * Same reasoning as `generate-og.mjs`: satori/`next/og` renders the mark, the
 * font is fetched from Google as TTF at generation time, and the output is
 * committed so builds stay deterministic. Run with `npm run favicons` after
 * changing the initials or the brand colour.
 *
 * `favicon.ico` is written as a single-entry ICO wrapping a 32x32 PNG. Every
 * target browser has accepted PNG-compressed ICO entries since Vista, and it
 * avoids pulling in a BMP encoder for one file.
 */
import { writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { createElement as h } from 'react';

const { ImageResponse } = createRequire(import.meta.url)('next/og');

const OUT = join(process.cwd(), 'public', 'images', 'favicon');
const MONOGRAM = 'SS';
const TEAL = '#0d7a70';

/** Every generated file, and the pixel size it is rendered at. */
const TARGETS = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'favicon-96x96.png': 96,
  'android-icon-36x36.png': 36,
  'android-icon-48x48.png': 48,
  'android-icon-72x72.png': 72,
  'android-icon-96x96.png': 96,
  'android-icon-144x144.png': 144,
  'android-icon-192x192.png': 192,
  'apple-icon-57x57.png': 57,
  'apple-icon-60x60.png': 60,
  'apple-icon-72x72.png': 72,
  'apple-icon-76x76.png': 76,
  'apple-icon-114x114.png': 114,
  'apple-icon-120x120.png': 120,
  'apple-icon-144x144.png': 144,
  'apple-icon-152x152.png': 152,
  'apple-icon-180x180.png': 180,
  'apple-icon.png': 192,
  'apple-icon-precomposed.png': 192,
  'apple-touch-icon.png': 180,
  'ms-icon-70x70.png': 70,
  'ms-icon-144x144.png': 144,
  'ms-icon-150x150.png': 150,
  'ms-icon-310x310.png': 310,
};

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

function mark(size) {
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: TEAL,
        // Apple and Android mask their own corners, so the source stays
        // square above 96px and only the small in-tab marks are rounded.
        borderRadius: size <= 96 ? Math.round(size * 0.156) : 0,
        color: '#ffffff',
        fontFamily: 'Display',
        fontSize: Math.round(size * 0.46),
        fontWeight: 700,
        letterSpacing: `${-size * 0.015}px`,
      },
    },
    MONOGRAM,
  );
}

async function png(size) {
  const response = new ImageResponse(mark(size), {
    width: size,
    height: size,
    fonts: [{ name: 'Display', data: display, weight: 700, style: 'normal' }],
  });
  return Buffer.from(await response.arrayBuffer());
}

/** Wraps a PNG in a single-entry ICO container. */
function ico(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // one image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 means 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette size
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(header.length + entry.length, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

const rendered = new Map();
for (const size of new Set(Object.values(TARGETS))) {
  rendered.set(size, await png(size));
}

await Promise.all(
  Object.entries(TARGETS).map(([name, size]) =>
    writeFile(join(OUT, name), rendered.get(size)),
  ),
);

await writeFile(join(OUT, 'favicon.ico'), ico(rendered.get(32), 32));

console.log(
  `Wrote ${Object.keys(TARGETS).length} PNGs and favicon.ico to ${OUT}`,
);
