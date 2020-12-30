import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { PortfolioCard } from './PortfolioCard';
import { renderTestComponent } from 'common';
import { Routes } from 'config';

describe('Given PortfolioCard', () => {
  it('should display title text', () => {
    const title = 'Tictactoe';

    renderTestComponent(
      <PortfolioCard title={title} tsCodeLink={'#'} link={Routes.tictactoe} />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should have href to code repo and target _blank', () => {
    const tsCodeLink = '/coderepo';

    renderTestComponent(
      <PortfolioCard
        tsCodeLink={tsCodeLink}
        title={'Tictactoe'}
        link={Routes.tictactoe}
      />
    );

    expect(screen.getByLabelText(/typescript/i).closest('a')).toHaveAttribute(
      'href',
      tsCodeLink
    );
    expect(screen.getByLabelText(/typescript/i).closest('a')).toHaveAttribute(
      'target',
      '_blank'
    );
  });

  describe('When I click on play tictactoe', () => {
    it('should route to tictactoe', () => {
      renderTestComponent(
        <PortfolioCard
          tsCodeLink={'#'}
          title={'Tictactoe'}
          link={Routes.tictactoe}
        />
      );

      fireEvent.click(screen.getByText(/play/i));

      expect(window.location.pathname).toBe(Routes.tictactoe);
    });
  });
});
