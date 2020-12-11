import { fireEvent } from '@testing-library/react';
import React from 'react';
import { BottomNav } from './index';
import { renderWithThemeProviderWithRouter, createMatchMedia } from 'common';
import { PORTFOLIO_ROUTE } from 'routes';

describe('Given BottomNav', () => {
  let matchMedia: ((query: string) => MediaQueryList) &
    ((query: string) => MediaQueryList);

  beforeAll(() => {
    matchMedia = window.matchMedia;
    window.matchMedia = createMatchMedia(window.innerWidth);
  });

  afterAll(() => {
    window.matchMedia = matchMedia;
  });

  describe('When I click on home', () => {
    it('should route to home', () => {
      const { getByText } = renderWithThemeProviderWithRouter(<BottomNav />);

      fireEvent.click(getByText(/home/i));

      expect(window.location.pathname).toBe('/home');
    });
  });

  describe('When I click on about', () => {
    it('should route to about', () => {
      const { getByText } = renderWithThemeProviderWithRouter(
        <BottomNav />,
        {}
      );

      fireEvent.click(getByText(/about/i));

      expect(window.location.pathname).toBe('/about');
    });
  });

  describe('When I click on portfolio', () => {
    it('should route to portfolio', () => {
      const { getByText } = renderWithThemeProviderWithRouter(<BottomNav />, {
        route: PORTFOLIO_ROUTE,
      });

      fireEvent.click(getByText(/portfolio/i));

      expect(window.location.pathname).toBe('/portfolio');
    });
  });

  describe('When I click on contact', () => {
    it('should route to contact', () => {
      const { getByText } = renderWithThemeProviderWithRouter(<BottomNav />, {
        route: PORTFOLIO_ROUTE,
      });

      fireEvent.click(getByText(/contact/i));

      expect(window.location.pathname).toBe('/contact');
    });
  });
});
