import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { PortfolioCard } from './PortfolioCard';
import { renderTestComponent } from 'common';
import { TICTACTOE_ROUTE } from 'routes';

describe('Given PortfolioCard', () => {
  it('should display title text', () => {
    const title = 'Tictactoe';

    renderTestComponent(
      <PortfolioCard title={title} tsCodeLink={'#'} link={TICTACTOE_ROUTE} />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  describe('When I click on view code', () => {
    it('should have href to code repo and target _blank', () => {
      const tsCodeLink = '/coderepo';

      renderTestComponent(
        <PortfolioCard
          tsCodeLink={tsCodeLink}
          title={'Tictactoe'}
          link={TICTACTOE_ROUTE}
        />
      );

      fireEvent.click(screen.getByText(/view code/i));

      expect(screen.getByText(/view code/i).closest('a')).toHaveAttribute(
        'href',
        tsCodeLink
      );
      expect(screen.getByText(/view code/i).closest('a')).toHaveAttribute(
        'target',
        '_blank'
      );
    });
  });

  describe('When I click on play tictactoe', () => {
    it('should route to tictactoe', () => {
      renderTestComponent(
        <PortfolioCard
          tsCodeLink={'#'}
          title={'Tictactoe'}
          link={TICTACTOE_ROUTE}
        />
      );

      fireEvent.click(screen.getByText(/play/i));

      expect(window.location.pathname).toBe(TICTACTOE_ROUTE);
    });
  });
});
