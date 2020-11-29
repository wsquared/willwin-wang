import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, Portfolio, Contact } from "pages";
import { BottomNav } from "components";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: ["poppins", "Helvetica", "sans-serif", "Arial"].join(","),
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#04b4e0",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
        <BottomNav />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
