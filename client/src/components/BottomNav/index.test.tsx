import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BottomNav } from './index';
import { renderTestComponent, createMatchMedia } from 'common';
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
      const { getByText } = renderTestComponent(<BottomNav />);

      fireEvent.click(getByText(/home/i));

      expect(window.location.pathname).toBe('/home');
    });
  });

  describe('When I click on about', () => {
    it('should route to about', () => {
      const { getByText } = renderTestComponent(<BottomNav />);

      fireEvent.click(getByText(/about/i));

      expect(window.location.pathname).toBe('/about');
    });
  });

  describe('When I click on portfolio', () => {
    it('should route to portfolio', () => {
      const { getByText } = renderTestComponent(<BottomNav />, {
        route: PORTFOLIO_ROUTE,
      });

      waitFor(() => fireEvent.click(getByText(/portfolio/i)));

      expect(window.location.pathname).toBe('/portfolio');
    });
  });

  describe('When I click on contact', () => {
    it('should route to contact', () => {
      const { getByText } = renderTestComponent(<BottomNav />, {
        route: PORTFOLIO_ROUTE,
      });

      waitFor(() => fireEvent.click(getByText(/contact/i)));

      expect(window.location.pathname).toBe('/contact');
    });
  });
});
