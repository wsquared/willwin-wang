import React from "react";
import { Typography } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography align="center" variant="h1" component="h1" gutterBottom>
          Willwin Wang
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
