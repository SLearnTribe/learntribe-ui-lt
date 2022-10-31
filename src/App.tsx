import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppContainer from './Ts/Components/ContainerComponents/AppContainer';
import { getIsDarkTheme } from "./Ts/Redux/Selectors/ExamSelectors";
import theme from "./Ts/Utils/Themes/Themes";

export interface AppContainerProps {
  window?: () => Window;
}

function App() {

  const isDarkTheme: boolean = useSelector(getIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
