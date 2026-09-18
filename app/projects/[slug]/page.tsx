import Link from 'next/link';
import { notFound } from 'next/navigation';

import ProjectDiagram from '@/components/Projects/ProjectDiagram';
import ProjectLinks from '@/components/Projects/ProjectLinks';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import projects from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import { breadcrumbNode, HOME_URL, SITE_URL } from '@/lib/schema';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  return createPageMetadata({
    title: project.title,
    description: `${project.summary} ${project.benefit}`,
    path: `/projects/${project.slug}/`,
  });
}

const sections = [
  ['goal', 'The goal'],
  ['implementation', 'What I implemented'],
  ['workflow', 'How it works'],
  ['stack', 'Stack & tools'],
  ['considerations', 'Design considerations'],
  ['future', 'Future possibilities'],
] as const;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  const projectUrl = `${SITE_URL}/projects/${project.slug}/`;

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          breadcrumbNode(projectUrl, [
            { name: 'Home', url: HOME_URL },
            { name: 'Projects', url: `${SITE_URL}/projects/` },
            { name: project.title, url: projectUrl },
          ]),
        ]}
      />
      <article className="project-detail">
        <Link href="/projects/" className="project-back">
          ← All projects
        </Link>
        <header className="project-detail-header">
          <p className="project-eyebrow">
            {project.subtitle} /{' '}
            <time dateTime={project.date}>{project.date.slice(0, 4)}</time>
          </p>
          <h1 className="page-title">{project.title}</h1>
          <p className="project-summary">{project.summary}</p>
          <p>{project.benefit}</p>
          <div className="project-actions">
            <ProjectLinks project={project} />
          </div>
        </header>
        <nav className="project-section-nav" aria-label="In this project">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="project-detail-body">
          <section id="goal" aria-labelledby="goal-title">
            <span className="project-eyebrow">01 / Purpose</span>
            <h2 id="goal-title">The goal</h2>
            <p>{project.goal}</p>
          </section>
          <section id="implementation" aria-labelledby="implementation-title">
            <span className="project-eyebrow">02 / The build</span>
            <h2 id="implementation-title">What I implemented</h2>
            <p>{project.desc}</p>
            <div className="project-implementation">
              {project.implementation.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="workflow" aria-labelledby="workflow-title">
            <span className="project-eyebrow">03 / The system</span>
            <h2 id="workflow-title">How it works</h2>
            <ProjectDiagram project={project} />
            <p>{project.workflowNote}</p>
          </section>
          <section id="stack" aria-labelledby="stack-title">
            <span className="project-eyebrow">04 / Under the hood</span>
            <h2 id="stack-title">Stack &amp; tools</h2>
            <ul className="project-stack">
              {project.tech?.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.stackNote && <p>{project.stackNote}</p>}
          </section>
          <section id="considerations" aria-labelledby="considerations-title">
            <span className="project-eyebrow">05 / Trade-offs</span>
            <h2 id="considerations-title">Design considerations</h2>
            <p>{project.considerations}</p>
          </section>
          <section id="future" aria-labelledby="future-title">
            <span className="project-eyebrow">06 / Looking ahead</span>
            <h2 id="future-title">Future possibilities</h2>
            <p className="project-future-note">
              Potential next steps, rather than features already implemented.
            </p>
            <ul className="project-future-list">
              {project.future.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="project-detail-footer">
          <Link href="/projects/" className="project-back">
            ← Explore all projects
          </Link>
        </div>
      </article>
    </PageWrapper>
  );
}
