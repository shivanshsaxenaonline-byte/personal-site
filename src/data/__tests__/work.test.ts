import { describe, expect, it } from 'vitest';

import work from '../resume/work';

describe('work data', () => {
  it('exports an array of positions', () => {
    expect(Array.isArray(work)).toBe(true);
    expect(work.length).toBeGreaterThan(0);
  });

  it('each position has required properties', () => {
    for (const job of work) {
      expect(job).toHaveProperty('name');
      expect(job).toHaveProperty('position');
      expect(job).toHaveProperty('url');
      expect(job).toHaveProperty('startDate');

      expect(typeof job.name).toBe('string');
      expect(typeof job.position).toBe('string');
      expect(typeof job.url).toBe('string');
      expect(typeof job.startDate).toBe('string');
    }
  });

  it('startDate is a valid date string', () => {
    for (const job of work) {
      const date = new Date(job.startDate);
      expect(date.toString()).not.toBe('Invalid Date');
    }
  });

  it('endDate is valid when present', () => {
    for (const job of work) {
      if (job.endDate) {
        const date = new Date(job.endDate);
        expect(date.toString()).not.toBe('Invalid Date');
      }
    }
  });

  /* Dates are stored at the precision actually known — `YYYY` for a role whose
     months are not recorded, `YYYY-MM-DD` where they are. A year-only role
     therefore has an end equal to its start, which is correct rather than
     backwards, so equality is only tolerated when both ends share a format. */
  it('endDate is not before startDate when present', () => {
    for (const job of work) {
      if (!job.endDate) continue;

      const start = new Date(job.startDate).getTime();
      const end = new Date(job.endDate).getTime();
      const samePrecision = job.startDate.length === job.endDate.length;

      if (samePrecision) {
        expect(end).toBeGreaterThanOrEqual(start);
      } else {
        expect(end).toBeGreaterThan(start);
      }
    }
  });

  it('urls are valid', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const job of work) {
      expect(job.url).toMatch(urlRegex);
    }
  });

  // Resume should show at least one current/active position
  it('has at least one current position (no endDate)', () => {
    const currentJobs = work.filter((job) => !job.endDate);
    expect(currentJobs.length).toBeGreaterThanOrEqual(1);
  });

  it('highlights are arrays when present', () => {
    for (const job of work) {
      if (job.highlights) {
        expect(Array.isArray(job.highlights)).toBe(true);
        expect(job.highlights.length).toBeGreaterThan(0);
      }
    }
  });

  it('has positions from different years', () => {
    const years = work.map((job) => new Date(job.startDate).getFullYear());
    const uniqueYears = new Set(years);

    // Resume should contain work from multiple years
    expect(uniqueYears.size).toBeGreaterThan(1);
  });

  it('company names are non-empty', () => {
    for (const job of work) {
      expect(job.name.trim().length).toBeGreaterThan(0);
    }
  });
});
