import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from 'common';

describe('App', () => {
  test('renders home page with willwin wang text', () => {
    render(<App />);

    const element = screen.getByText(/willwin wang/i);

    expect(element).toBeInTheDocument();
  });

  test('renders home page with fullstack software developer text', () => {
    render(<App />);

    const element = screen.getByText(/fullstack software developer/i);

    expect(element).toBeInTheDocument();
  });

  test('renders about page', () => {
    renderWithRouter(<App />, { route: '/about' });

    const element = screen.getByText(/about/i);

    expect(element).toBeInTheDocument();
  });

  test('renders portfolio page', () => {
    renderWithRouter(<App />, { route: '/portfolio' });

    const element = screen.getByText(/portfolio/i);

    expect(element).toBeInTheDocument();
  });

  test('renders contact page', () => {
    renderWithRouter(<App />, { route: '/contact' });

    const element = screen.getByText(/contact/i);

    expect(element).toBeInTheDocument();
  });
});
