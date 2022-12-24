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

export const CandidateJobsCardSkeleton = () => {
  return (
    <>
      <Grid item xs={12}>
        <Box sx={scrollAssessmentSxStyles}>
          {[1, 2, 3, 4].map(() => {
            return (
              <Card
                sx={{ ...HrAssessmentCardSxStyles, width: "25rem" }}
                key={uniqueId()}>
                <CardHeader
                  avatar={
                    <Skeleton width={80} height={80} variant="circular" />
                  }
                  action={null} //For adding button at top corner of card
                  title={
                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                      <Skeleton width={"100%"} height={50} />
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                        <Skeleton width={100} height={30} />
                      </Typography>
                    </Box>
                  }
                />
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Skeleton width={30} height={30} sx={{ mr: 1 }} />
                    <Skeleton width={"100%"} height={30} />
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Skeleton width={30} height={30} sx={{ mr: 1 }} />
                    <Skeleton width={"100%"} height={30} />
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: "auto",
                  }}>
                  <Skeleton width={200} height={30} />
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Grid>
    </>
  );
};
