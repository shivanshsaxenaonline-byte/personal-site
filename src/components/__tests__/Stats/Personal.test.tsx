import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import data from '@/data/stats/personal';
import { CURRENT_CITY } from '@/lib/telemetry';

import Personal from '../../Stats/Personal';

describe('Personal', () => {
  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders a row for every stat', () => {
    render(<Personal />);

    for (const stat of data) {
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it('displays the current city', () => {
    render(<Personal />);

    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText(CURRENT_CITY)).toBeInTheDocument();
  });
});
