import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import projects from '@/data/projects';

import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = projects[1];

  it('keeps case-study navigation separate from the live website', () => {
    render(<Cell data={mockProject} />);
    const link = screen.getByRole('link', { name: mockProject.title });
    // Next's standalone test runtime normalises Link hrefs without trailing slashes.
    expect(link).toHaveAttribute('href', `/projects/${mockProject.slug}`);
    expect(screen.getByRole('link', { name: /see more/i })).toHaveAttribute(
      'href',
      `/projects/${mockProject.slug}`,
    );
    const website = screen.getByRole('link', { name: /visit website/i });
    expect(website).toHaveAttribute('href', mockProject.website);
    expect(website).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders project description', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText(mockProject.summary)).toBeInTheDocument();
    expect(screen.getByText(mockProject.benefit)).toBeInTheDocument();
  });

  it('renders project date in correct format', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText('2025')).toBeInTheDocument();
  });

  it('renders the project-specific schematic as accessible text', () => {
    render(<Cell data={mockProject} />);
    expect(
      screen.getByRole('figure', {
        name: `${mockProject.title} workflow schematic`,
      }),
    ).toBeInTheDocument();
    for (const step of mockProject.workflow)
      expect(screen.getByText(step)).toBeInTheDocument();
  });

  it('keeps the case study available when there is no public link', () => {
    render(
      <Cell data={{ ...mockProject, website: undefined, source: undefined }} />,
    );

    expect(screen.getByRole('link', { name: /see more/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /visit website|view code/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Public link not available')).toBeInTheDocument();
  });

  it('labels a repository as code rather than a live website', () => {
    render(<Cell data={projects[0]} />);
    expect(screen.getByRole('link', { name: /view code/i })).toHaveAttribute(
      'href',
      projects[0].source,
    );
    expect(
      screen.queryByRole('link', { name: /visit website/i }),
    ).not.toBeInTheDocument();
  });
});
