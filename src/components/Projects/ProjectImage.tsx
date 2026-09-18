import Image from 'next/image';

import type { Project } from '@/data/projects';

export default function ProjectImage({
  project,
  fullWidth = false,
}: {
  project: Project;
  fullWidth?: boolean;
}) {
  return (
    <figure className="project-image">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={
          fullWidth
            ? '(max-width: 896px) 100vw, 832px'
            : '(max-width: 760px) 100vw, 440px'
        }
        loading={fullWidth ? 'eager' : 'lazy'}
      />
      <figcaption>
        <span>{project.image.caption}</span>
        <span className="project-image-label">Concept illustration</span>
      </figcaption>
    </figure>
  );
}
