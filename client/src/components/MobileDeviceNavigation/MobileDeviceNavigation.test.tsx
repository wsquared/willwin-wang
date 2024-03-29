import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { MobileDeviceNavigation } from './MobileDeviceNavigation';
import { renderTestComponent, createMatchMedia } from 'common';
import { Routes } from 'config';

jest.mock('react-ga');

describe('Given MobileDeviceNavigation', () => {
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
      const { getByText } = renderTestComponent(<MobileDeviceNavigation />);

      fireEvent.click(getByText(/home/i));

      expect(window.location.pathname).toBe('/home');
    });
  });

  describe('When I click on about', () => {
    it('should route to about', () => {
      const { getByText } = renderTestComponent(<MobileDeviceNavigation />);

      fireEvent.click(getByText(/about/i));

      expect(window.location.pathname).toBe('/about');
    });
  });

  describe('When I click on portfolio', () => {
    it('should route to portfolio', () => {
      const { getByText } = renderTestComponent(<MobileDeviceNavigation />, {
        route: Routes.portfolio,
      });

      waitFor(() => fireEvent.click(getByText(/portfolio/i)));

      expect(window.location.pathname).toBe('/portfolio');
    });
  });

  describe('When I click on contact', () => {
    it('should route to contact', () => {
      const { getByText } = renderTestComponent(<MobileDeviceNavigation />, {
        route: Routes.portfolio,
      });

      waitFor(() => fireEvent.click(getByText(/contact/i)));

      expect(window.location.pathname).toBe('/contact');
    });
  });
});
