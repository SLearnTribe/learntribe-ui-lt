import { OidcProvider } from "@axa-fr/react-oidc";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./Authentication/ErrorPage";
import { LoadingComponent } from "./Authentication/LoadingComponent";
import MainLayout from "./Ts/Components/ContainerComponents/MainLayout";
import { customTheme } from "./Ts/Utils/Themes/CustomTheme";
import { configurationIdentityServerWithoutDiscovery } from "./configurations";

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

  const onEvent = (configurationName = "", eventName = "", data = "") => {
    // console.log(`oidc:${configurationName}:${eventName}`, data);
    //loginCallbackAsync_error
    // console.log(configurationName + " -- " + eventName + " -- " + JSON.stringify(data));
    if (eventName === 'loginCallbackAsync_error') {
      window.location.href = 'http://www.smilebat.xyz/smile-bat/help';
    }
  };



  return (
    <ThemeProvider theme={customTheme()}>
      <CssBaseline />
      {/* <Countdown
        onComplete={onCompleteTimer}
        date={Date.now() + 500000000}
      /> */}
      <OidcProvider
        loadingComponent={LoadingComponent}
        authenticatingComponent={LoadingComponent}
        authenticatingErrorComponent={ErrorPage}
        configuration={configurationIdentityServerWithoutDiscovery}
        configurationName="default"
        onEvent={onEvent}
      >
        <Router>
          <MainLayout />
        </Router>
      </OidcProvider>
    </ThemeProvider>
  );
}

export default App;
