import { describe, expect, it } from 'vitest';
import { SITE_URL } from '@/lib/utils';
import { getWritingItems } from '@/lib/writing';

import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses canonical trailing-slash links for writing pages', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/writing/`);

    // Driven off the posts that actually exist, so adding or renaming one is
    // not also a test edit.
    const posts = getWritingItems().filter((item) => !item.isExternal);
    expect(posts.length).toBeGreaterThan(0);

    for (const post of posts) {
      expect(xml).toContain(`${SITE_URL}${post.url}`);
    }
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });

  it('derives lastBuildDate from content rather than the build clock', async () => {
    const response = await GET();
    const xml = await response.text();

    // The point is that the date comes from the newest item rather than
    // `new Date()`, so it is compared against that item, not a literal.
    const newest = getWritingItems().find((item) => item.date);
    expect(newest).toBeDefined();

    const expected = new Date(`${newest!.date}T12:00:00Z`).toUTCString();
    expect(xml).toContain(`<lastBuildDate>${expected}</lastBuildDate>`);
  });
});
