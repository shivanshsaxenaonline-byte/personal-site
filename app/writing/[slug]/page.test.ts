import { describe, expect, it } from 'vitest';

import { getAllPosts } from '@/lib/posts';
import { SHARE_IMAGE_PATH, SITE_URL } from '@/lib/utils';

import { generateMetadata } from './page';

/**
 * Driven off the posts that actually exist. The upstream version named two of
 * the author's essays by slug, so deleting his writing — the first thing any
 * fork does — took these down with it.
 */
describe('writing post metadata', () => {
  const posts = getAllPosts();

  it('has at least one published post for the static build', () => {
    // `generateStaticParams` needs one, so this failing explains the build
    // failure that would otherwise follow.
    expect(posts.length).toBeGreaterThan(0);
  });

  it('uses a trailing-slash canonical URL for posts', async () => {
    for (const post of posts) {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: post.slug }),
      });

      const expected = `${SITE_URL}/writing/${post.slug}/`;
      expect(metadata.openGraph?.url).toBe(expected);
      expect(metadata.alternates?.canonical).toBe(expected);
    }
  });

  it('carries an article image when the post declares one', async () => {
    const withImage = posts.filter((post) => post.image);

    for (const post of withImage) {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: post.slug }),
      });

      const images = metadata.openGraph?.images as { url: string }[];
      expect(images).toHaveLength(1);
      expect(images[0].url).toBe(`${SITE_URL}${post.image}`);
      expect(metadata.twitter?.images).toEqual(metadata.openGraph?.images);
    }
  });

  it('falls back to the site share card when a post declares no image', async () => {
    const withoutImage = posts.filter((post) => !post.image);

    for (const post of withoutImage) {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: post.slug }),
      });

      // The shared OpenGraph block is spread in, so an imageless post still
      // gets a card rather than nothing.
      const images = metadata.openGraph?.images as { url: string }[];
      expect(images).toBeDefined();
      expect(images[0].url).toBe(SHARE_IMAGE_PATH);
    }
  });

  it('returns a not-found title for an unknown slug', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'no-such-post-exists' }),
    });

    expect(metadata.title).toBe('Post Not Found');
  });
});
