import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from 'common';

describe('App', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  it('renders home page with willwin wang text', () => {
    render(<App />);

    const element = screen.getByText(/willwin wang/i);

    expect(element).toBeInTheDocument();
  });

  it('renders home page with fullstack software developer text', () => {
    render(<App />);

    const element = screen.getByText(/fullstack software developer/i);

    expect(element).toBeInTheDocument();
  });

  it('renders about page', () => {
    renderWithRouter(<App />, { route: '/about' });

    const element = screen.getByText(/about/i);

    expect(element).toBeInTheDocument();
  });

  describe('When I goto the portfolio route', () => {
    it('renders tictactoe', () => {
      const { getByText } = renderWithRouter(<App />, { route: '/portfolio' });

      const element = getByText(/tictactoe/i);

      expect(element).toBeInTheDocument();
    });

    it('renders sudoku', () => {
      const { getByText } = renderWithRouter(<App />, { route: '/portfolio' });

      const element = getByText(/sudoku/i);

      expect(element).toBeInTheDocument();
    });
  });

  it('renders contact page', () => {
    renderWithRouter(<App />, { route: '/contact' });

    const element = screen.getByText(/contact/i);

    expect(element).toBeInTheDocument();
  });
});
