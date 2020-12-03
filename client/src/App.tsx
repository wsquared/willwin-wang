import React, { Suspense } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  CircularProgress,
  Container,
} from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Portfolio, Contact, NotFound } from 'pages';
import { BottomNav } from 'components';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PORTFOLIO_ROUTE,
} from '../src/routes';
import { DefaultLayout } from 'Layouts';

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ['poppins', 'Helvetica', 'sans-serif', 'Arial'].join(','),
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#04b4e0',
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense
        fallback={
          <Container>
            <CircularProgress />
          </Container>
        }
      >
        <BrowserRouter>
          <Switch>
            <DefaultLayout>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path={HOME_ROUTE}>
                <Home />
              </Route>
              <Route exact path={ABOUT_ROUTE}>
                <About />
              </Route>
              <Route exact path={PORTFOLIO_ROUTE}>
                <Portfolio />
              </Route>
              <Route exact path={CONTACT_ROUTE}>
                <Contact />
              </Route>
            </DefaultLayout>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <BottomNav />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
