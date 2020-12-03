import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (
  ui: React.ReactElement,
  { route = '/' } = {}
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};
