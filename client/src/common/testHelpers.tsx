import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import mediaQuery from 'css-mediaquery';

const ThemeProviderWithRouter: React.FC = ({ children }) => (
  <ThemeProvider theme={createMuiTheme()}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

export const renderWithThemeProviderWithRouter = (
  ui: React.ReactElement,
  { route }: { route?: string } = { route: '/' }
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: ThemeProviderWithRouter });
};

export const renderWithRouter = (
  ui: React.ReactElement,
  { route = '/' }: { route?: string }
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export const createMatchMedia = (width: number) => (query: string) => ({
  matches: mediaQuery.match(query, { width }),
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
  media: '',
  onchange: () => undefined,
  addListener: () => undefined,
  removeListener: () => undefined,
  dispatchEvent: () => true,
});
