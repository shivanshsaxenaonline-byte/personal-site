import dayjs from 'dayjs';
import Image from 'next/image';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Project;
}

/** Up to three initials from the project title, for the no-screenshot tile. */
function monogram(title: string): string {
  return title
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join('');
}

export default function Cell({ data }: CellProps) {
  const { title, subtitle, link, image, date, desc, tech, featured } = data;

  const hasLink = Boolean(link);

  const cardContent = (
    <>
      <div
        className={`project-card-image ${image ? '' : 'project-card-image--fallback'}`}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            width={PROJECT_IMAGE.width}
            height={PROJECT_IMAGE.height}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        ) : (
          /* Not every project has a screenshot worth showing. A monogram
             built from the title keeps the card's aspect ratio and reads as
             deliberate, where a missing `src` would 404 into a broken image. */
          <span className="project-card-monogram" aria-hidden="true">
            {monogram(title)}
          </span>
        )}
      </div>

      <div className="project-card-content">
        <header className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {hasLink && (
            <span className="project-card-affordance" aria-hidden="true">
              ↗
            </span>
          )}
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        </header>

        <p className="project-card-desc">{desc}</p>

        {tech && tech.length > 0 && (
          <div className="project-card-tech">
            {tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <time className="project-card-date" dateTime={date}>
          {dayjs(date).format('YYYY')}
        </time>
      </div>
    </>
  );

  return (
    <article
      className={`project-card ${featured ? 'project-card--featured' : ''} ${hasLink ? 'project-card--linked' : 'project-card--static'}`}
    >
      {hasLink ? (
        <a href={link} className="project-card-link" aria-label={title}>
          {cardContent}
        </a>
      ) : (
        <div className="project-card-static">{cardContent}</div>
      )}
    </article>
  );
}
