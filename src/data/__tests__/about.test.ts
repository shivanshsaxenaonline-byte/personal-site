import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

/**
 * These assertions describe the *shape* the About page relies on, not one
 * person's biography. The previous version pinned the upstream author's
 * content ("OpenAI", "MS-DOS", "# I Like"), so every fork failed this file
 * before it had written a word. Rewriting the page should not break the suite;
 * breaking its structure should.
 */
describe('about data', () => {
  it('exports aboutMarkdown as a non-empty string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.trim().length).toBeGreaterThan(0);
  });

  it('opens with an intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
  });

  it('uses level-one headings to divide sections', () => {
    const headers = aboutMarkdown.match(/^# .+$/gm);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThanOrEqual(2);
  });

  it('has no duplicate section headings', () => {
    const headers = (aboutMarkdown.match(/^# .+$/gm) ?? []).map((h) =>
      h.trim(),
    );

    expect(new Set(headers).size).toBe(headers.length);
  });

  it('contains well-formed markdown links', () => {
    const links = aboutMarkdown.match(/\[.+?\]\(.+?\)/g);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(0);
  });

  it('leaves no empty link targets', () => {
    expect(aboutMarkdown).not.toMatch(/\]\(\s*\)/);
  });
});
