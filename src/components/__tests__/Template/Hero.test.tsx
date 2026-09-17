import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import profile from '@/data/profile.json';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(profile.name);
  });

  /* The wording of the tagline is content and changes freely. What this
     guards is the shape: the current role and employer are stated, and every
     link woven into the sentence is a real external target carrying the
     highlight class. Pinning the full sentence made every copy edit a test
     edit, which is how the upstream version broke on the first fork. */
  it('states the current role and employer, and highlights its links', () => {
    const { container } = render(<Hero />);

    const tagline = container.querySelector('.hero-tagline');
    expect(tagline).toHaveTextContent(profile.role);
    expect(tagline).toHaveTextContent(profile.employer);

    const highlights = Array.from(
      container.querySelectorAll('.hero-tagline a'),
    );
    expect(highlights.length).toBeGreaterThan(0);

    for (const link of highlights) {
      expect(link).toHaveClass('hero-highlight');
      expect(link.getAttribute('href')).toMatch(/^https:\/\//);
    }
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('Records migrated')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
