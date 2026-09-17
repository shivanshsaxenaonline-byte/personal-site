'use client';

import { CURRENT_CITY } from '@/lib/telemetry';

import type { StatData } from '../../components/Stats/types';

/**
 * Figures that are true and checkable.
 *
 * The upstream site opened this list with a live age readout ticking at absurd
 * precision. That machinery is still here — `useLiveAge`, `ageAt`, and the
 * precision tokens in `src/lib/telemetry.ts` — but it is not rendered, because
 * `profile.birthDate` is a placeholder and a wrong age published to the web is
 * worse than no age at all. Put a real date in `src/data/profile.json`, then
 * add the entry back:
 *
 *   const ref = useLiveAge<HTMLSpanElement>(AGE_PRECISION_FULL);
 *   { key: 'age', label: 'Current age', value: <span ref={ref} /> }
 */
const data: StatData[] = [
  {
    key: 'location',
    label: 'Current city',
    value: CURRENT_CITY,
  },
  {
    key: 'records-migrated',
    label: 'Legacy CRM records migrated',
    value: '52,000+',
  },
  {
    key: 'systems-replaced',
    label: 'Tools replaced by one CRM',
    value: 'Zoho, 9 sheets, WATI',
  },
];

export default data;
