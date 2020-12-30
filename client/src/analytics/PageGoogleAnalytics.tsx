import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

export const PageGoogleAnalytics: React.FC = ({ children }) => {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID || '');

  const location = useLocation();

  useEffect(() => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }, [location]);

  return <>{children} </>;
};
