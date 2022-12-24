import {
  Box,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";

export const ApplicantsCardsSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4]?.map(() => (
        <Grid item xs={12} key={uniqueId()}>
          <Card>
            <CardHeader
              avatar={<Skeleton width={80} height={80} variant="circular" />}
              action={
                <Skeleton
                  sx={{ mt: "50%" }}
                  variant="rectangular"
                  width={20}
                  height={20}
                />
              }
              title={
                <>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500, pr: 2 }}>
                      <Skeleton width={200} height={30} />
                    </Typography>
                    <IconButton sx={{ p: "unset", mr: 2 }}>
                      <Skeleton variant="rectangular" width={8} height={8} />
                    </IconButton>
                    <Typography sx={{ fontSize: 16, fontWeight: 500, pr: 2 }}>
                      <Skeleton width={200} height={20} />
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, pr: 2 }}>
                      <Skeleton width={200} height={20} />
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, pr: 2 }}>
                      <Skeleton width={200} height={20} />
                    </Typography>
                  </Box>
                </>
              }
            />
          </Card>
        </Grid>
      ))}
    </>
  );
};
