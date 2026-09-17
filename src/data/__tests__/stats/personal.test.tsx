import { describe, expect, it } from 'vitest';

import { CURRENT_CITY } from '@/lib/telemetry';

import data from '../../stats/personal';

/**
 * These assertions describe the contract the stats table relies on, not one
 * particular set of figures. The upstream version pinned the author's own
 * numbers — 53 countries, "New York, NY", a link to his personal map — so the
 * suite failed the moment anyone put their own facts in.
 */
describe('personal stats data', () => {
  it('exports a non-empty array of stats', () => {
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  /* `key` is optional on StatData, but the table uses it as the React key for
     each row, so every entry here should carry one. */
  it('each stat has a key, a label, and a value', () => {
    for (const stat of data) {
      expect(stat.key).toBeTruthy();
      expect(typeof stat.label).toBe('string');
      expect(stat.label.length).toBeGreaterThan(0);
      expect(stat.value).toBeDefined();
    }
  });

  it('has unique keys', () => {
    const keys = data.map((s) => s.key);

    expect(new Set(keys).size).toBe(keys.length);
  });

  it('reports the current city from the shared profile', () => {
    const locationStat = data.find((s) => s.key === 'location');

    expect(locationStat).toBeDefined();
    expect(locationStat!.value).toBe(CURRENT_CITY);
  });

  it('only attaches absolute links', () => {
    for (const stat of data.filter((s) => s.link !== undefined)) {
      expect(stat.link).toMatch(/^https?:\/\//);
    }
  });
});
