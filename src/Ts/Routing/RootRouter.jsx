import { Box, CircularProgress } from "@mui/material";
import { isEqual } from "lodash";
import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Modal from "../Components/CommonComponents/Modal/Modal";
import { rolesConfig } from "../Configs/AppConfig";
import { dashboardRoute } from "../Configs/RoutesConfig";
import { getUserData, setUserDataLoading } from "../Redux/Ducks/userSlice";
import {
  getIsUserDataLoading,
  getUserDetails,
} from "../Redux/Selectors/UserSelectors/UserSelectors";
import RouterMap, { RenderRoute } from "./Routes";

export default function RootRouter() {
  const dispatch = useDispatch();

  const { role } = useSelector(getUserDetails);

  const isLoading = useSelector(getIsUserDataLoading);

  const { hash } = useLocation();

  const firstRender = useRef(true);

  const routerMap = useMemo(() => {
    return RouterMap.filter(({ permission }) =>
      isEqual(permission, rolesConfig[role])
    );
  }, [role]);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(setUserDataLoading(true));

      const hashParams = new URLSearchParams(hash);

      const hashCode = hashParams.get("code");

      dispatch(getUserData(hashCode));

      firstRender.current = false;
    }
  }, [dispatch, hash]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", height: "90vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Modal />
      <Routes>
        {routerMap.map(RenderRoute)}
        <Route path="*" element={<Navigate to={dashboardRoute} replace />} />
      </Routes>
    </>
  );
}
