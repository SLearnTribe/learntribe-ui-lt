import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import {
  HrAssessmentCardSxStyles,
  scrollAssessmentSxStyles,
} from "../CommonStyles/CommonSxStyles";

export const RecommendedAssessmentSkeleton = () => {
  return (
    <Grid key={uniqueId()} item xs={12}>
      <Box sx={scrollAssessmentSxStyles}>
        {[1, 2, 3, 4, 5].map(() => (
          <Card
            sx={HrAssessmentCardSxStyles}
            row
            key={uniqueId()}
            variant="outlined">
            <CardHeader
              action={
                <Skeleton
                  sx={{ mt: "50%" }}
                  variant="rectangular"
                  width={20}
                  height={20}
                />
              }
              title={
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  <Skeleton width={200} height={30} />
                </Typography>
              }
            />
            <CardContent sx={{ pt: 0 }}>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                  <Skeleton width={200} height={20} />
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="textSecondary"
                  sx={{ fontSize: 14, fontWeight: 500 }}>
                  <Skeleton width={200} height={10} />
                </Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", mt: "auto" }}>
              <Skeleton width={200} height={20} />
            </CardActions>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};
