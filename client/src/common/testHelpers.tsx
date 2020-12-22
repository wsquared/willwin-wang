import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mediaQuery from 'css-mediaquery';

export const renderWithRouter = (
  ui: React.ReactElement,
  { route } = { route: '/' }
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export const createMatchMedia = (width: number) => (
  query: string
): MediaQueryList => ({
  matches: mediaQuery.match(query, { width }),
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
  media: '',
  onchange: () => undefined,
  addListener: () => undefined,
  removeListener: () => undefined,
  dispatchEvent: () => true,
});
