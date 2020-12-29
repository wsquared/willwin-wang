import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { PortfolioBottomNav } from './PortfolioBottomNav';
import { renderTestComponent } from 'common';
import { PORTFOLIO_ROUTE } from 'routes';
import { useGameState } from 'stores';

describe('PortfolioBottomNav', () => {
  describe('When I click on exit', () => {
    it('should route back to portfolio', () => {
      renderTestComponent(<PortfolioBottomNav />);

      fireEvent.click(screen.getByText(/exit/gi));

      expect(window.location.pathname).toBe(PORTFOLIO_ROUTE);
    });
  });

  describe('When I click on new game', () => {
    it('should reset my tictactoe game', () => {
      let game: number[][] = [[]];

      const PortfolioBottomNavTestCmp: React.FC = () => {
        const { tictactoe } = useGameState();

        game = tictactoe.game;

        return <PortfolioBottomNav />;
      };

      renderTestComponent(<PortfolioBottomNavTestCmp />, {
        route: '/portfolio/tictactoe',
      });

      fireEvent.click(screen.getByText(/new/gi));

      for (let row = 0; row < game.length; row++) {
        for (let col = 0; col < game[0].length; col++) {
          expect(game[row][col]).toBe(0);
        }
      }

      expect(game.length).toBe(3);
      expect(game[0].length).toBe(3);
    });
  });
});
