import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

export const CandidateProfileSkeleton = () => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 3,
            }}>
            <Skeleton width={100} height={100} variant="circular" />
          </Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="h4">
            <Skeleton width={200} height={50} />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="body2"
            color="text.secondary">
            <Skeleton width={200} height={40} />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="body2"
            color="text.secondary">
            <Skeleton width={200} height={30} />
          </Typography>
        </CardContent>
        <CardActions>
          <Skeleton width={"100%"} height={40} />
        </CardActions>
      </Card>
    </Grid>
  );
};
