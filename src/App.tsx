import { OidcProvider } from "@axa-fr/react-oidc";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainLayout from "./Ts/Components/ContainerComponents/MainLayout";
import { customTheme } from "./Ts/Utils/Themes/CustomTheme";
import {configurationIdentityServerWithoutDiscovery} from './configurations'
import { LoadingAssessment } from "./Ts/Components/Pages/Dashboards/Candidate/LoadingAssessment";

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
      <OidcProvider loadingComponent={LoadingAssessment} 
      configuration={configurationIdentityServerWithoutDiscovery} 
      configurationName='default'>
      <Router>
        <MainLayout />
      </Router>
      </OidcProvider>
    </ThemeProvider>
  );
}

export default App;
