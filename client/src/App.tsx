import React, { Suspense } from 'react';
import {
  createTheme,
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
import { Routes } from 'config';
import { DefaultLayout, PortfolioLayout } from 'layouts';
import { NewGameProvider } from 'stores';
import { PageGoogleAnalytics } from 'components/PageGoogleAnalytics';

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
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
          <PageGoogleAnalytics>
            <Switch>
              <Route exact path="/">
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              </Route>
              <Route exact path={Routes.home}>
                <DefaultLayout>
                  <Home />
                </DefaultLayout>
              </Route>
              <Route exact path={Routes.about}>
                <DefaultLayout>
                  <About />
                </DefaultLayout>
              </Route>
              <Route exact path={Routes.contact}>
                <DefaultLayout>
                  <Contact />
                </DefaultLayout>
              </Route>
              <NewGameProvider>
                <Route exact path={Routes.portfolio}>
                  <DefaultLayout>
                    <Portfolio />
                  </DefaultLayout>
                </Route>
                <Route exact path={`${Routes.portfolio}${Routes.tictactoe}`}>
                  <PortfolioLayout>
                    <Tictactoe />
                  </PortfolioLayout>
                </Route>
                <Route exact path={`${Routes.portfolio}${Routes.sudoku}`}>
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
          </PageGoogleAnalytics>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
