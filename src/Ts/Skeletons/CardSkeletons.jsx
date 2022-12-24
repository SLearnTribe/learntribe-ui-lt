import { Grid, Skeleton } from "@mui/material";
import React from "react";

export const CandidateActivitiesSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map(() => (
        <Grid
          key={crypto.randomUUID()}
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}>
          <Skeleton variant="rectangular" width="100%">
            <div style={{ paddingTop: "50%" }} />
          </Skeleton>
        </Grid>
      ))}
    </>
  );
};
