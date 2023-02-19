import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainLayout from "./Ts/Components/ContainerComponents/MainLayout";
import { customTheme } from "./Ts/Utils/Themes/CustomTheme";

export interface AppContainerProps {
  window?: () => Window;
}

function App() {
  // const dispatch = useDispatch()

  // const isDarkTheme: boolean = useSelector(getIsDarkTheme);

  // const expiratiomTime = useSelector(getExpirationToken)


  // const onCompleteTimer = () => {
  //   dispatch(postLogout());
  // }

  return (
    <ThemeProvider theme={customTheme()}>
      <CssBaseline />
      {/* <Countdown
        onComplete={onCompleteTimer}
        date={Date.now() + 500000000}
      /> */}
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
