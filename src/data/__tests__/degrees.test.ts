import { describe, expect, it } from 'vitest';

import degrees from '../resume/degrees';

describe('degrees data', () => {
  it('exports an array of degrees', () => {
    expect(Array.isArray(degrees)).toBe(true);
    expect(degrees.length).toBeGreaterThan(0);
  });

  it('each degree has required properties', () => {
    for (const degree of degrees) {
      expect(degree).toHaveProperty('school');
      expect(degree).toHaveProperty('degree');
      expect(degree).toHaveProperty('link');
      expect(degree).toHaveProperty('year');

      expect(typeof degree.school).toBe('string');
      expect(typeof degree.degree).toBe('string');
      expect(typeof degree.link).toBe('string');
      expect(typeof degree.year).toBe('number');
    }
  });

  it('degree years are reasonable (between 1950 and current year + 10)', () => {
    const currentYear = new Date().getFullYear();

    for (const degree of degrees) {
      expect(degree.year).toBeGreaterThanOrEqual(1950);
      expect(degree.year).toBeLessThanOrEqual(currentYear + 10);
    }
  });

  /* Not every school has a site worth linking to. `Degree` renders those as
     plain text, so an empty string is a supported value — but anything
     non-empty still has to be a real absolute URL. */
  it('links are absolute URLs when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const degree of degrees.filter((d) => d.link !== '')) {
      expect(degree.link).toMatch(urlRegex);
    }
  });

  it('degrees are ordered by year (most recent first)', () => {
    for (let i = 0; i < degrees.length - 1; i++) {
      expect(degrees[i].year).toBeGreaterThanOrEqual(degrees[i + 1].year);
    }
  });

  /* One school can legitimately award more than one qualification, so the
     identity of a row is the school *and* the degree, not the school alone. */
  it('has unique school and degree pairs', () => {
    const pairs = degrees.map((d) => `${d.school}::${d.degree}`);

    expect(new Set(pairs).size).toBe(pairs.length);
  });

  it('each degree has a non-empty degree name', () => {
    for (const degree of degrees) {
      expect(degree.degree.trim().length).toBeGreaterThan(0);
    }
  });
});
