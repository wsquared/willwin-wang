import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { FloatingNav } from './FloatingNav';
import { renderTestComponent } from 'common';
import { ABOUT_ROUTE, CONTACT_ROUTE } from 'routes';

describe('FloatNav', () => {
  it('should have back and forward arrow', () => {
    renderTestComponent(<FloatingNav />);

    expect(screen.getByTitle(/forward/gi)).toBeInTheDocument();
    expect(screen.getByTitle(/back/gi)).toBeInTheDocument();
  });

  describe('When I click on the back arrow', () => {
    it('should route to contact', () => {
      renderTestComponent(<FloatingNav />);

      fireEvent.click(screen.getByTitle(/back/gi));

      expect(window.location.pathname).toBe(CONTACT_ROUTE);
    });
  });

  describe('When I click on the forward arrow', () => {
    it('should route to about', () => {
      renderTestComponent(<FloatingNav />);

      fireEvent.click(screen.getByTitle(/forward/gi));

      expect(window.location.pathname).toBe(ABOUT_ROUTE);
    });
  });
});
