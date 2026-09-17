import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '@/data/about';
import { createHeadingId, createUniqueHeadingIds } from '../anchors';

function getAboutSectionTitles(markdown: string): string[] {
  return Array.from(
    markdown.matchAll(/^# (.+)$/gm),
    (match) => match[1],
  ).filter((title) => title !== 'Intro');
}

describe('createHeadingId', () => {
  it.each([
    ['Some History', 'some-history'],
    ['Travel / Geography', 'travel-geography'],
    ['Research & Development', 'research-and-development'],
    ["Michael's Notes", 'michaels-notes'],
    ['Café Crème', 'cafe-creme'],
  ])('creates stable ids for %s', (title, expected) => {
    expect(createHeadingId(title)).toBe(expected);
  });

  it('falls back when a heading has no anchor-safe characters', () => {
    expect(createHeadingId('!!!')).toBe('section');
  });

  /* The About page's headings are content and will change with the person
     writing it, so this pins the invariant instead of the list: every section
     the page derives yields a non-empty, unique, URL-safe id. */
  it('derives a unique, anchor-safe id for every about section', () => {
    const titles = getAboutSectionTitles(aboutMarkdown);
    expect(titles.length).toBeGreaterThan(0);

    const ids = titles.map((title) => createHeadingId(title));

    for (const id of ids) {
      expect(id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }

    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('createUniqueHeadingIds', () => {
  it('deduplicates repeated heading ids predictably', () => {
    expect(
      createUniqueHeadingIds([
        'Travel / Geography',
        'Travel / Geography',
        '!!!',
        '!!!',
      ]),
    ).toEqual([
      'travel-geography',
      'travel-geography-2',
      'section',
      'section-2',
    ]);
  });

  it('produces unique, non-empty ids for the real about headings', () => {
    const ids = createUniqueHeadingIds(getAboutSectionTitles(aboutMarkdown));

    expect(ids.every((id) => id.length > 0)).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
