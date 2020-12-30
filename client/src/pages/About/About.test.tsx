import React from 'react';
import { screen } from '@testing-library/react';
import { renderTestComponent } from 'common';
import { About } from './About';

describe('About', () => {
  it('should render text about me', () => {
    renderTestComponent(<About />);

    expect(screen.getByText(/live/gi)).toBeInTheDocument();
    expect(screen.getByText(/eat/gi)).toBeInTheDocument();
    expect(screen.getByText(/code/gi)).toBeInTheDocument();
    expect(screen.getByText(/dance/gi)).toBeInTheDocument();
    expect(screen.getByText(/sleep/gi)).toBeInTheDocument();
    expect(screen.getByText(/repeat/gi)).toBeInTheDocument();
  });
});
