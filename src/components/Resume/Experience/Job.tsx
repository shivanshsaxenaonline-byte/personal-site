import dayjs from 'dayjs';

import type { Position } from '@/data/resume/work';

import JobSummary from './JobSummary';

/** How much weight a role carries on the timeline spine. */
export type JobTier = 'lead' | 'primary' | 'early';

interface JobProps {
  data: Position;
  tier?: JobTier;
}

/**
 * Renders a date at the precision it was actually given.
 *
 * `MMMM YYYY` was applied unconditionally, so a résumé that only knows the
 * year of a role still displayed a confident "January 2026" — dayjs fills the
 * missing parts in silently. A bare `YYYY` now renders as the year alone, and
 * `YYYY-MM` as month and year, so the page never claims more precision than
 * the data holds.
 */
function formatJobDate(date: string): string {
  if (/^\d{4}$/.test(date)) return date;
  if (/^\d{4}-\d{2}$/.test(date))
    return dayjs(`${date}-01`).format('MMMM YYYY');
  return dayjs(date).format('MMMM YYYY');
}

export default function Job({ data, tier = 'primary' }: JobProps) {
  const { name, position, url, startDate, endDate, summary, highlights } = data;
  const isCurrent = !endDate;

  return (
    <article
      className={`jobs-container jobs-container--${tier}${
        isCurrent ? ' jobs-container--current' : ''
      }`}
    >
      <span className="job-marker" aria-hidden="true" />

      {/* A role known only to the year has the same start and end, and
          rendering that as a range gave "2025 – 2025". One date reads as the
          fact it is. */}
      {endDate && formatJobDate(endDate) === formatJobDate(startDate) ? (
        <p className="daterange">
          <time dateTime={startDate}>{formatJobDate(startDate)}</time>
        </p>
      ) : (
        <p className="daterange">
          <time dateTime={startDate}>{formatJobDate(startDate)}</time>
          {/* The dash is decorative, so a screen reader would otherwise run the
              dates together as "March 2026 Present". */}
          <span className="daterange-sep" aria-hidden="true">
            –
          </span>
          <span className="sr-only"> to </span>
          {endDate ? (
            <time dateTime={endDate}>{formatJobDate(endDate)}</time>
          ) : (
            <span className="daterange-present">Present</span>
          )}
        </p>
      )}

      <div className="job-body">
        <header>
          <h3>
            <a href={url} className="job-company">
              {name}
            </a>
            <span className="job-position">{position}</span>
          </h3>
        </header>
        {summary ? <JobSummary summary={summary} /> : null}
        {highlights ? (
          <ul className="points">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
