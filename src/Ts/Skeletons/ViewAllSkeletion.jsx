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
