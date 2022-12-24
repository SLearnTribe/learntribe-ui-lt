import {
  Card,
  CardContent,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import {
  Font14Weight500SxStyles,
  Font15Weight500SxStyles,
  Font18Weight400SxStyles,
  Font18Weight600SxStyles,
  Font20Weight600SxStyles,
} from "../CommonStyles/CommonSxStyles";
import { AssessmentTexts } from "../Utils/Text";

export const JobsCardSkeleton = () => {
  return (
    <>
      <Grid item xs={12}>
        <Skeleton height={50} />
      </Grid>

      {[1, 2, 3, 4].map(() => (
        <Grid item xs={12} key={uniqueId()}>
          <Card sx={{ cursor: "pointer" }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography sx={Font20Weight600SxStyles}>
                        <Skeleton width={200} height={30} />
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={Font18Weight600SxStyles}>
                        <Skeleton width={200} height={30} />
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={Font18Weight400SxStyles}>
                        <Skeleton width={200} height={30} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Divider orientation="vertical" />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography sx={Font18Weight600SxStyles}>
                        {AssessmentTexts.assessmentsRequired}
                      </Typography>
                    </Grid>
                    {[1, 2, 3, 4]?.map(() => (
                      <React.Fragment key={uniqueId()}>
                        <Grid item xs={7} sm={6} md={8} lg={8} xl={8}>
                          <Typography sx={Font15Weight500SxStyles}>
                            <Skeleton width={30} height={10} />
                          </Typography>
                        </Grid>
                        <Grid item xs={5} sm={6} md={4} lg={4} xl={4}>
                          <Typography
                            sx={{
                              ...Font14Weight500SxStyles,
                            }}>
                            <Skeleton width={30} height={10} />
                          </Typography>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
