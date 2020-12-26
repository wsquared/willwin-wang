import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { loadLocaleData } from 'lang';
import mediaQuery from 'css-mediaquery';

export const renderTestComponent = (
  children: React.ReactElement,
  { route } = { route: '/' }
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <BrowserRouter>
      <IntlProvider
        locale="en"
        defaultLocale="en"
        messages={loadLocaleData('en')}
      >
        {children}
      </IntlProvider>
    </BrowserRouter>
  );
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
