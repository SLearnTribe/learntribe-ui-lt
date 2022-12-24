import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";

export const PostedJobCardsSkelton = () => {
  return (
    <>
      {[1, 2, 3]?.map(() => (
        <Grid key={uniqueId()} item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
            <CardHeader
              avatar={
                <Skeleton
                  width={80}
                  height={80}
                  variant="circular"
                  sx={{ fontSize: "2.25rem" }}
                />
              }
              action={<Skeleton variant="circular" width={40} height={40} />} //For adding button at top corner of card
              title={
                <>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                      <Skeleton width={200} height={30} />
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                      <Skeleton width={200} height={20} />
                    </Typography>
                  </Box>
                </>
              }
              subheader={
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                    <Skeleton width={200} height={20} />
                  </Typography>
                </Box>
              }
            />

            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                <Skeleton width={200} height={30} />
              </Typography>

              <Typography
                sx={{ color: "#9D9D9F", fontSize: 16, fontWeight: 400 }}>
                <Skeleton width={200} height={30} />
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};
