import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderTestComponent } from 'common';

describe('App', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  it('renders home page with willwin wang text', () => {
    renderTestComponent(<App />);

    const element = screen.getByText(/willwin wang/i);

    expect(element).toBeInTheDocument();
  });

  it('renders home page with fullstack software developer text', () => {
    renderTestComponent(<App />);

    const element = screen.getByText(/fullstack software developer/i);

    expect(element).toBeInTheDocument();
  });

  it('renders about page', () => {
    renderTestComponent(<App />, { route: '/about' });

    const element = screen.getByText(/about/i);

    expect(element).toBeInTheDocument();
  });

  describe('When I goto the portfolio route', () => {
    it('renders tictactoe', () => {
      const { getByText } = renderTestComponent(<App />, {
        route: '/portfolio',
      });

      const element = getByText(/tictactoe/i);

      expect(element).toBeInTheDocument();
    });

    it('renders sudoku', () => {
      const { getByText } = renderTestComponent(<App />, {
        route: '/portfolio',
      });

      const element = getByText(/sudoku/i);

      expect(element).toBeInTheDocument();
    });
  });

  it('renders contact page', () => {
    renderTestComponent(<App />, { route: '/contact' });

    const element = screen.getByText(/contact/i);

    expect(element).toBeInTheDocument();
  });
});
