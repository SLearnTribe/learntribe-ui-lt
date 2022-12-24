import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

export const PostJobsViewAllSkeleton = ({ variant = "h3" }) => {
  return (
    <Grid item xs={12}>
      <Typography
        sx={{ float: "right" }}
        component="div"
        key={variant}
        variant={variant}>
        <Skeleton width={300} />
      </Typography>
    </Grid>
  );
};

export const ViewAllSkeleton = ({ variant = "h3" }) => {
  return (
    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Typography
        sx={{ float: "right" }}
        component="div"
        key={variant}
        variant={variant}>
        <Skeleton width={300} />
      </Typography>
    </Grid>
  );
};
