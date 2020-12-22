import { fireEvent } from '@testing-library/react';
import React from 'react';
import { PortfolioCard } from './index';
import { renderWithRouter } from 'common';
import { TICTACTOE_ROUTE } from 'routes';

describe('Given PortfolioCard', () => {
  it('should display title text', () => {
    const title = 'Tictactoe';

    const { getByText } = renderWithRouter(
      <PortfolioCard title={title} link={TICTACTOE_ROUTE} />
    );

    expect(getByText(title)).toBeInTheDocument();
  });

  describe('When I click on play tictactoe', () => {
    it('should route to tictactoe', () => {
      const { getByText } = renderWithRouter(
        <PortfolioCard title={'Tictactoe'} link={TICTACTOE_ROUTE} />
      );

      fireEvent.click(getByText(/play/i));

      expect(window.location.pathname).toBe(TICTACTOE_ROUTE);
    });
  });
});
