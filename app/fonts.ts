import localFont from 'next/font/local';

/**
 * Fontsource supplies versioned files through npm; next/font/local adds
 * preload tags and metric-adjusted fallbacks without contacting Google during
 * the build. Keep these paths on the Latin variable files so adding a family
 * does not silently preload every script Fontsource ships.
 */
export const spaceGrotesk = localFont({
  src: '../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',
  variable: '--font-space-grotesk',
  weight: '300 700',
  style: 'normal',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial'],
  adjustFontFallback: 'Arial',
});

export const sourceSerif = localFont({
  src: '../node_modules/@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2',
  variable: '--font-source-serif',
  weight: '200 900',
  style: 'normal',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman'],
  adjustFontFallback: 'Times New Roman',
});

export const jetbrainsMono = localFont({
  src: '../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
  variable: '--font-jetbrains',
  weight: '100 800',
  style: 'normal',
  display: 'swap',
  fallback: ['SFMono-Regular', 'Consolas'],
  adjustFontFallback: 'Arial',
});

/**
 * Long-form writing is the only current surface that uses authored italics.
 * Its separate route-level instance avoids preloading the italic face on every
 * page while preserving a real italic rather than browser synthesis.
 */
export const sourceSerifItalic = localFont({
  src: '../node_modules/@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-italic.woff2',
  variable: '--font-source-serif-italic',
  weight: '200 900',
  style: 'italic',
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'Times New Roman'],
  adjustFontFallback: 'Times New Roman',
});
