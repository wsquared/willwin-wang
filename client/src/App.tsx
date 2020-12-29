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
import {
  Home,
  About,
  Portfolio,
  Contact,
  Tictactoe,
  Sudoku,
  NotFound,
} from 'pages';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PORTFOLIO_ROUTE,
  SUDOKU_ROUTE,
  TICTACTOE_ROUTE,
} from 'routes';
import { DefaultLayout, PortfolioLayout } from 'layouts';
import { NewGameProvider } from 'stores';

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
            <Route exact path="/">
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            </Route>
            <Route exact path={HOME_ROUTE}>
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            </Route>
            <Route exact path={ABOUT_ROUTE}>
              <DefaultLayout>
                <About />
              </DefaultLayout>
            </Route>
            <Route exact path={CONTACT_ROUTE}>
              <DefaultLayout>
                <Contact />
              </DefaultLayout>
            </Route>
            <NewGameProvider>
              <Route exact path={PORTFOLIO_ROUTE}>
                <DefaultLayout>
                  <Portfolio />
                </DefaultLayout>
              </Route>
              <Route exact path={`${PORTFOLIO_ROUTE}${TICTACTOE_ROUTE}`}>
                <PortfolioLayout>
                  <Tictactoe />
                </PortfolioLayout>
              </Route>
              <Route exact path={`${PORTFOLIO_ROUTE}${SUDOKU_ROUTE}`}>
                <PortfolioLayout>
                  <Sudoku />
                </PortfolioLayout>
              </Route>
            </NewGameProvider>
            <Route>
              <DefaultLayout>
                <NotFound />
              </DefaultLayout>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
