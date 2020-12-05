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
import { Home, About, Portfolio, Contact, Tictactoe, NotFound } from 'pages';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PORTFOLIO_ROUTE,
  TICTACTOE_ROUTE,
} from 'routes';
import { DefaultLayout } from 'layouts';

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
              <Route exact path={`${PORTFOLIO_ROUTE}${TICTACTOE_ROUTE}`}>
                <Tictactoe />
              </Route>
              <Route exact path={CONTACT_ROUTE}>
                <Contact />
              </Route>
            </DefaultLayout>
            <DefaultLayout>
              <Route>
                <NotFound />
              </Route>
            </DefaultLayout>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
