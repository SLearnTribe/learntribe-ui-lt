import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppContainer from './Ts/Components/ContainerComponents/AppContainer';
// import { postLogout } from "./Ts/Redux/Ducks/userSlice";
import { getIsDarkTheme } from "./Ts/Redux/Selectors/ExamSelectors";
// import { getExpirationToken } from "./Ts/Redux/Selectors/UserSelectors/UserSelectors";
import theme from "./Ts/Utils/Themes/Themes";

export interface AppContainerProps {
  window?: () => Window;
}

function App() {
  const dispatch = useDispatch()

  const isDarkTheme: boolean = useSelector(getIsDarkTheme);

  // const expiratiomTime = useSelector(getExpirationToken)


  // const onCompleteTimer = () => {
  //   dispatch(postLogout());
  // }

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      {/* <Countdown
        onComplete={onCompleteTimer}
        date={Date.now() + 500000000}
      /> */}
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
