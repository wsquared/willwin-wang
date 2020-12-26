import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import reportWebVitals from './reportWebVitals';
import { loadLocaleData, KnownLanguages } from 'lang';

const bootstrapApplication = (locale: KnownLanguages) => {
  const messages = loadLocaleData(locale);

  ReactDOM.render(
    <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      <App />
    </IntlProvider>,
    document.getElementById('root')
  );
};

bootstrapApplication((process.env.REACT_APP_LOCALE as KnownLanguages) || 'en');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
