import { useOidcAccessToken } from "@axa-fr/react-oidc";
import { isEqual } from "lodash";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AlertSnackbar } from "../Components/CommonComponents/Controls/Snackbar";
import Modal from "../Components/CommonComponents/Modal/Modal";
import { rolesConfig } from "../Configs/AppConfig";
import { dashboardRoute } from "../Configs/RoutesConfig";
import { setUserData, setUserDataLoading } from "../Redux/Ducks/userSlice";
//import { getUserDetails } from "../Redux/Selectors/UserSelectors/UserSelectors";
// import { ErrorPage } from "../../Authentication/ErrorPage";
import { OidcSecure } from "@axa-fr/react-oidc";
import { getUserProfile } from "../Redux/Ducks/Profile/ProfileSlice";
import RouterMap, { RenderRoute } from "./Routes";

export default function RootRouter() {
  const dispatch = useDispatch();
  const { accessToken, accessTokenPayload } = useOidcAccessToken();

  //const { role } = useSelector(getUserDetails);

  // const isLoading = useSelector(getIsUserDataLoading);

  // const { hash } = useLocation();

  // const firstRender = useRef(true);

  const routerMap = useMemo(() => {
    return RouterMap.filter(({ permission }) =>
      isEqual(
        permission,
        rolesConfig[
          accessTokenPayload && accessTokenPayload.role
            ? accessTokenPayload.role
            : "default"
        ]
      )
    );
  }, [accessTokenPayload]);

  useEffect(() => {
    console.log("inside effect");
    //if (firstRender.current) {
    dispatch(setUserDataLoading(true));
    const access_token = accessToken;
    const userDetails = accessTokenPayload;
    if (access_token && userDetails) {
      dispatch(setUserData({ userDetails, access_token }));
    }
    // const hashParams = new URLSearchParams(hash);

    // const hashCode = hashParams.get("code");

    dispatch(getUserProfile(access_token));

    // firstRender.current = false;
    //}
  }, [accessToken, accessTokenPayload, dispatch]);

  return (
    <>
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading && 0}>
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <Modal />
      <AlertSnackbar />
      <Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}

        <Route
          path="/"
          element={
            <OidcSecure>
              <Navigate to={dashboardRoute} replace />
            </OidcSecure>
          }
        />
        {routerMap.map(RenderRoute)}
        {/* <Route path="*" element={<Navigate to={dashboardRoute} replace />} /> */}
      </Routes>
    </>
  );
}
