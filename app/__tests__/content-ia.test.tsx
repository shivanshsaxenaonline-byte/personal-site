import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getWritingItems } from '@/lib/writing';
import HomePage from '../page';
import WritingPage from '../writing/page';

/**
 * These assertions describe how writing is organised, not which posts exist.
 * The upstream version named specific essays and assumed there was always
 * external writing and at least three dated items, so a fork with one starter
 * post failed all of it before writing anything.
 */
describe('writing information architecture', () => {
  const items = getWritingItems();
  const dated = items.filter((item) => item.date);
  const internal = items.filter((item) => !item.isExternal);
  const external = items.filter((item) => item.isExternal && item.date);
  const guides = items.filter((item) => item.isExternal && !item.date);

  it('surfaces the newest dated items on the homepage, at most three', () => {
    const expected = dated.slice(0, 3);

    const { container } = render(<HomePage />);
    const section = screen.getByRole('region', { name: 'Latest writing' });
    const cards = container.querySelectorAll('.home-writing-item');

    expect(cards).toHaveLength(expected.length);
    expect(
      [...cards].map((card) => card.querySelector('h3')?.textContent),
    ).toEqual(expected.map((item) => item.title));
    expect(
      within(section).getByRole('link', { name: 'View all' }),
    ).toHaveAttribute('href', '/writing');
  });

  it('renders a heading for each non-empty group and none for empty ones', () => {
    render(<WritingPage />);

    const groups: [string, number][] = [
      ['Essays on this site', internal.length],
      ['Selected writing elsewhere', external.length],
      ['Guides', guides.length],
    ];

    for (const [name, count] of groups) {
      const heading = screen.queryByRole('heading', { level: 2, name });

      if (count > 0) {
        expect(heading).toBeInTheDocument();
      } else {
        expect(heading).not.toBeInTheDocument();
      }
    }
  });

  it('lists every item exactly once across the groups', () => {
    const { container } = render(<WritingPage />);

    expect(container.querySelectorAll('.writing-item h3')).toHaveLength(
      items.length,
    );
  });

  it('features exactly the newest dated item, wherever it is grouped', () => {
    const newest = dated[0];
    const { container } = render(<WritingPage />);
    const featured = container.querySelectorAll('.writing-item--featured');

    if (!newest) {
      expect(featured).toHaveLength(0);
      return;
    }

    expect(featured).toHaveLength(1);

    /* Local posts render through next/link and external ones through a plain
       anchor, so the href is read off the element rather than assuming a tag.
       `trailingSlash` is build configuration that next/link does not see in a
       unit test, so it drops the slash here while the export keeps it — the
       exported HTML is what `npm run verify-export` checks. */
    const href = featured[0].getAttribute('href');
    expect(href?.replace(/\/$/, '')).toBe(newest.url.replace(/\/$/, ''));
  });

  it('shows provenance beside every external-link arrow', () => {
    const externalItems = items.filter((item) => item.isExternal);
    const { container } = render(<WritingPage />);
    const externalLinks = [
      ...container.querySelectorAll('a.writing-item[target="_blank"]'),
    ];

    expect(externalLinks).toHaveLength(externalItems.length);
    externalLinks.forEach((link, index) => {
      expect(link.querySelector('.writing-source')).toHaveTextContent(
        externalItems[index].source,
      );
      expect(link.querySelector('.writing-external')).toHaveTextContent('↗');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link.querySelector('.sr-only')).toHaveTextContent(
        'opens in a new tab',
      );
    });
  });
});
