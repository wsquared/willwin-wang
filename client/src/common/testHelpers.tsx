import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { loadLocaleData } from 'lang';
import mediaQuery from 'css-mediaquery';
import { NewGameProvider } from 'stores';

const renderTestComponent = (
  ui: React.ReactElement,
  { route } = { route: '/' },
  options?: RenderOptions
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  const Wrapper: React.FC = ({ children }) => {
    return (
      <BrowserRouter>
        <NewGameProvider>
          <IntlProvider
            locale="en"
            defaultLocale="en"
            messages={loadLocaleData('en')}
          >
            {children}
          </IntlProvider>
        </NewGameProvider>
      </BrowserRouter>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
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

export { renderTestComponent };
