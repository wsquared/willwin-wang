import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderTestComponent } from 'common';
import { Tictactoe } from './Tictactoe';

describe('Tictactoe', () => {
  it('should render nine boxes by default', () => {
    renderTestComponent(<Tictactoe />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(9);
  });

  it('should render buttons without circle or cross by default', () => {
    renderTestComponent(<Tictactoe />);

    expect(screen.queryByTestId('circle')).not.toBeInTheDocument();
    expect(screen.queryByTestId('cross')).not.toBeInTheDocument();
  });

  describe('When I click on the first box', () => {
    it('should render circle in that box', () => {
      renderTestComponent(<Tictactoe />);

      fireEvent.click(screen.getAllByRole('button')[0]);

      expect(
        screen.getAllByRole('button')[0].querySelector('[data-testid="circle"]')
      ).toBeInTheDocument();
    });

    describe('When I click in that same box again', () => {
      it('should render circle in that box', () => {
        renderTestComponent(<Tictactoe />);

        fireEvent.click(screen.getAllByRole('button')[0]);
        fireEvent.click(screen.getAllByRole('button')[0]);

        expect(
          screen
            .getAllByRole('button')[0]
            .querySelector('[data-testid="circle"]')
        ).toBeInTheDocument();
      });
    });
  });

  it('should render cross in that box', () => {
    renderTestComponent(<Tictactoe />);

    fireEvent.click(screen.getAllByRole('button')[1]);
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(
      screen.getAllByRole('button')[0].querySelector('[data-testid="cross"]')
    ).toBeInTheDocument();
  });

  describe('When I click on the same box as a second player', () => {
    it('should render cross in that box', () => {
      renderTestComponent(<Tictactoe />);

      fireEvent.click(screen.getAllByRole('button')[1]);
      fireEvent.click(screen.getAllByRole('button')[0]);
      fireEvent.click(screen.getAllByRole('button')[0]);

      expect(
        screen.getAllByRole('button')[0].querySelector('[data-testid="cross"]')
      ).toBeInTheDocument();
    });
  });

  describe('When I click on the last box', () => {
    it('should render circle in that box', () => {
      renderTestComponent(<Tictactoe />);

      const buttons = screen.getAllByRole('button');

      fireEvent.click(buttons[buttons.length - 1]);

      expect(
        screen
          .getAllByRole('button')
          [buttons.length - 1].querySelector('[data-testid="circle"]')
      ).toBeInTheDocument();
    });

    it('should render cross in that box', () => {
      renderTestComponent(<Tictactoe />);

      const buttons = screen.getAllByRole('button');

      fireEvent.click(buttons[0]);
      fireEvent.click(screen.getAllByRole('button')[buttons.length - 1]);

      expect(
        screen
          .getAllByRole('button')
          [buttons.length - 1].querySelector('[data-testid="cross"]')
      ).toBeInTheDocument();
    });
  });

  describe('When I match diagonal requirement', () => {
    it('should show me as a winner', () => {
      renderTestComponent(<Tictactoe />);

      fireEvent.click(screen.getAllByRole('button')[0]);
      fireEvent.click(screen.getAllByRole('button')[1]);
      fireEvent.click(screen.getAllByRole('button')[4]);
      fireEvent.click(screen.getAllByRole('button')[2]);
      fireEvent.click(screen.getAllByRole('button')[8]);

      expect(screen.getByText(/won/i)).toBeInTheDocument();
    });
  });

  describe('When I match reverse diagonal requirement', () => {
    it('should show me as a winner', () => {
      renderTestComponent(<Tictactoe />);

      fireEvent.click(screen.getAllByRole('button')[0]);
      fireEvent.click(screen.getAllByRole('button')[2]);
      fireEvent.click(screen.getAllByRole('button')[1]);
      fireEvent.click(screen.getAllByRole('button')[4]);
      fireEvent.click(screen.getAllByRole('button')[3]);
      fireEvent.click(screen.getAllByRole('button')[6]);

      expect(screen.getByText(/won/i)).toBeInTheDocument();
    });
  });

  describe('When I match row requirement', () => {
    it('should show me as a winner', () => {
      renderTestComponent(<Tictactoe />);

      fireEvent.click(screen.getAllByRole('button')[0]);
      fireEvent.click(screen.getAllByRole('button')[3]);
      fireEvent.click(screen.getAllByRole('button')[1]);
      fireEvent.click(screen.getAllByRole('button')[4]);
      fireEvent.click(screen.getAllByRole('button')[2]);

      expect(screen.getByText(/won/i)).toBeInTheDocument();
    });
  });

  describe('When I match column requirement', () => {
    it('should show me as a winner', () => {
      renderTestComponent(<Tictactoe />);

      fireEvent.click(screen.getAllByRole('button')[0]);
      fireEvent.click(screen.getAllByRole('button')[1]);
      fireEvent.click(screen.getAllByRole('button')[3]);
      fireEvent.click(screen.getAllByRole('button')[2]);
      fireEvent.click(screen.getAllByRole('button')[6]);

      expect(screen.getByText(/won/i)).toBeInTheDocument();
    });
  });
});
