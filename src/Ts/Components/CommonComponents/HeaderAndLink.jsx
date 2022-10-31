import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SubHeaderText } from "../../CommonJsx/CommonJsxUtils";

export const HeaderLink = ({ mainText, linkText, route, hideLink = false }) => {
  return (
    <>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <SubHeaderText text={mainText} />
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        {!hideLink && (
          <Link
            to={route}
            style={{
              color: "inherit",
              textDecoration: "inherit",
              fontSize: 24,
              fontWeight: 600,
              float: "right",
              textDecoration: "underline",
            }}>
            {linkText}
          </Link>
        )}
      </Grid>
    </>
  );
};
