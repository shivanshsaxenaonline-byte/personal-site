import type { Project } from '@/data/projects';

/** A responsive schematic, using real text so it remains readable at text zoom. */
export default function ProjectDiagram({ project }: { project: Project }) {
  return (
    <figure
      className="project-diagram"
      aria-label={`${project.title} workflow schematic`}
    >
      <figcaption>
        How it connects <span>Simplified workflow</span>
      </figcaption>
      <ol className="project-diagram-flow">
        {project.workflow.map((step, index) => (
          <li key={step}>
            <span className="project-diagram-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
