import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import projects from '@/data/projects';
import { SHARE_IMAGE_PATH, SITE_URL } from '@/lib/utils';
import ProjectPage, {
  generateMetadata,
  generateStaticParams,
} from '../projects/[slug]/page';
import sitemap from '../sitemap';

vi.mock('next/navigation', () => ({
  notFound: () => {
    throw new Error('NEXT_NOT_FOUND');
  },
}));

describe('project case studies', () => {
  it('exports every unique, URL-safe project slug and includes it in the sitemap', () => {
    const params = generateStaticParams();
    expect(params).toHaveLength(projects.length);
    expect(new Set(params.map(({ slug }) => slug)).size).toBe(projects.length);
    const urls = sitemap().map(({ url }) => url);
    for (const { slug } of params) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(urls).toContain(`${SITE_URL}/projects/${slug}/`);
    }
  });

  it.each(projects)(
    'renders $title with all case-study sections and working anchors',
    async (project) => {
      const { container } = render(
        await ProjectPage({ params: Promise.resolve({ slug: project.slug }) }),
      );
      expect(
        screen.getByRole('heading', { level: 1, name: project.title }),
      ).toBeInTheDocument();
      for (const name of [
        'The goal',
        'What I implemented',
        'How it works',
        'Stack & tools',
        'Design considerations',
        'Future possibilities',
      ]) {
        expect(
          screen.getByRole('heading', { level: 2, name }),
        ).toBeInTheDocument();
        const link = screen.getByRole('link', { name });
        expect(
          container.querySelector(link.getAttribute('href')!),
        ).toBeInTheDocument();
      }
      expect(screen.getByText(/Potential next steps/)).toBeInTheDocument();
    },
  );

  it.each(projects)(
    'gives $title its own canonical and share metadata',
    async (project) => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: project.slug }),
      });
      expect(metadata.title).toBe(project.title);
      expect(metadata.alternates?.canonical).toBe(
        `${SITE_URL}/projects/${project.slug}/`,
      );
      expect(metadata.openGraph?.description).toBe(metadata.description);
      expect(metadata.twitter?.description).toBe(metadata.description);
      expect(JSON.stringify(metadata.openGraph?.images)).toContain(
        SHARE_IMAGE_PATH,
      );
    },
  );

  it('returns not found for an unknown project instead of an empty case study', async () => {
    const props = { params: Promise.resolve({ slug: 'missing-project' }) };
    await expect(ProjectPage(props)).rejects.toThrow('NEXT_NOT_FOUND');
    await expect(generateMetadata(props)).rejects.toThrow('NEXT_NOT_FOUND');
  });
});
