import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SubHeaderText } from "../../CommonJsx/CommonJsxUtils";
import { getIsUserDataLoading } from "../../Redux/Selectors/UserSelectors/UserSelectors";
import { ViewAllSkeleton } from "../../Skeletons/ViewAllSkeletion";

export const HeaderLink = ({ mainText, linkText, route, hideLink = false }) => {
  const isLoading = useSelector(getIsUserDataLoading);

  return (
    <>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <SubHeaderText text={mainText} />
      </Grid>

      {isLoading ? (
        <ViewAllSkeleton />
      ) : (
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          {!hideLink && (
            <Link
              to={route}
              style={{
                color: "inherit",
                fontSize: 24,
                fontWeight: 600,
                float: "right",
                textDecoration: "underline",
              }}>
              {linkText}
            </Link>
          )}
        </Grid>
      )}
    </>
  );
};
