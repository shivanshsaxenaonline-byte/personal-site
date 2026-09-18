import type { Project } from '@/data/projects';

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.website && (
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          Visit website <span aria-hidden="true">↗</span>
          <span className="sr-only">
            {' '}
            for {project.title} (opens in a new tab)
          </span>
        </a>
      )}
      {project.source && (
        <a href={project.source} target="_blank" rel="noopener noreferrer">
          View code <span aria-hidden="true">↗</span>
          <span className="sr-only">
            {' '}
            for {project.title} (opens in a new tab)
          </span>
        </a>
      )}
      {!project.website && !project.source && (
        <span className="project-link-note">Public link not available</span>
      )}
    </>
  );
}
