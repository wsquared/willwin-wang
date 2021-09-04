import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { DesktopNavigation } from './DesktopNavigation';
import { renderTestComponent } from 'common';
import { Routes } from 'config';

jest.mock('react-ga');

describe('FloatNav', () => {
  it('should have back and forward arrow', () => {
    renderTestComponent(<DesktopNavigation>{'foo'}</DesktopNavigation>);

    expect(screen.getByTitle(/forward/gi)).toBeInTheDocument();
    expect(screen.getByTitle(/back/gi)).toBeInTheDocument();
  });

  describe('When I click on the back arrow', () => {
    it('should route to contact', () => {
      renderTestComponent(<DesktopNavigation>{'foo'}</DesktopNavigation>);

      fireEvent.click(screen.getByTitle(/back/gi));

      expect(window.location.pathname).toBe(Routes.contact);
    });
  });

  describe('When I click on the forward arrow', () => {
    it('should route to about', () => {
      renderTestComponent(<DesktopNavigation>{'foo'}</DesktopNavigation>);

      fireEvent.click(screen.getByTitle(/forward/gi));

      expect(window.location.pathname).toBe(Routes.about);
    });
  });
});
