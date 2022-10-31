import { isEqual } from "lodash";
import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Modal from "../Components/CommonComponents/Modal/Modal";
import { rolesConfig } from "../Configs/AppConfig";
import { dashboardRoute } from "../Configs/RoutesConfig";
import { getUserData } from "../Redux/Ducks/userSlice";
import { getUserDetails } from "../Redux/Selectors/AppSelectors";
import RouterMap, { RenderRoute } from "./Routes";

export default function RootRouter() {
  const dispatch = useDispatch();

  const { role } = useSelector(getUserDetails);

  const firstRender = useRef(true);

  const routerMap = useMemo(() => {
    return RouterMap.filter(({ permission }) =>
      isEqual(permission, rolesConfig[role])
    );
  }, [role]);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(getUserData());
      firstRender.current = false;
    }
  }, [dispatch]);

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
