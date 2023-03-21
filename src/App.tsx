import { OidcProvider } from "@axa-fr/react-oidc";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { SessionLostComponent } from "./Authentication/CommonComponents";
import { ErrorPage } from "./Authentication/ErrorPage";
import { LoadingComponent } from "./Authentication/LoadingComponent";
import MainLayout from "./Ts/Components/ContainerComponents/MainLayout";
import { customTheme } from "./Ts/Utils/Themes/CustomTheme";
import { configurationReact } from "./configurations";

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
    if (eventName === "loginCallbackAsync_error") {
      //window.location.href = "https://www.smilebat.xyz/smile-bat/help";
    }
  };

  return (
    <ThemeProvider theme={customTheme()}>
      <CssBaseline />
      <OidcProvider
        sessionLostComponent={SessionLostComponent}
        loadingComponent={LoadingComponent}
        authenticatingComponent={LoadingComponent}
        callbackSuccessComponent={LoadingComponent}
        authenticatingErrorComponent={ErrorPage}
        configuration={configurationReact}
        configurationName="default"
        onEvent={onEvent}>
        <Router>
          <MainLayout />
        </Router>
      </OidcProvider>
    </ThemeProvider>
  );
}

export default App;
