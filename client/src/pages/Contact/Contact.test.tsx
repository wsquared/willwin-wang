import React from 'react';
import { screen } from '@testing-library/react';
import { renderTestComponent } from 'common';
import { Contact } from './Contact';

describe('Contact', () => {
  it('should render email', () => {
    renderTestComponent(<Contact />);

    expect(screen.getByLabelText(/email/gi)).toBeInTheDocument();
  });

  it('should render linkedIn', () => {
    renderTestComponent(<Contact />);

    expect(screen.getByLabelText(/linkedIn/gi)).toBeInTheDocument();
  });

  it('should render twitter', () => {
    renderTestComponent(<Contact />);

    expect(screen.getByLabelText(/twitter/gi)).toBeInTheDocument();
  });

  it('should render gitHub', () => {
    renderTestComponent(<Contact />);

    expect(screen.getByLabelText(/github/gi)).toBeInTheDocument();
  });
});
