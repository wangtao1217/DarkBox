import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
