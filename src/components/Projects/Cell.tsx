import Link from 'next/link';

import type { Project } from '@/data/projects';

import ProjectDiagram from './ProjectDiagram';
import ProjectLinks from './ProjectLinks';

export default function Cell({ data }: { data: Project }) {
  return (
    <article className="project-entry">
      <div className="project-entry-copy">
        <p className="project-eyebrow">
          {data.subtitle} <span aria-hidden="true"> / </span>
          <time dateTime={data.date}>{data.date.slice(0, 4)}</time>
        </p>
        <h3>
          <Link href={`/projects/${data.slug}/`}>{data.title}</Link>
        </h3>
        <p className="project-summary">{data.summary}</p>
        <p className="project-benefit">{data.benefit}</p>
        <ul
          className="project-stack"
          aria-label={`${data.title} technologies and implementation areas`}
        >
          {data.tech?.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link className="project-more" href={`/projects/${data.slug}/`}>
            See more<span className="sr-only"> about {data.title}</span>
            <span aria-hidden="true"> →</span>
          </Link>
          <ProjectLinks project={data} />
        </div>
      </div>
      <ProjectDiagram project={data} />
    </article>
  );
}
