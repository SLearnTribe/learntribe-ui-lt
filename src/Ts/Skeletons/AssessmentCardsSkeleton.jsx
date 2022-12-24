import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Tabs,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import { CandidateTabs } from "../Configs/Dashboards/DashboardsConfig";

export const AssessmentCardsSkeleton = () => {
  return (
    <Grid item xs={12}>
      <Box>
        <Box>
          <Tabs value={0} aria-label="basic tabs example">
            {CandidateTabs.map(() => (
              <Skeleton width={100} height={50} />
            ))}
          </Tabs>
        </Box>

        <div
          role="tabpanel"
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}>
          <Box sx={{ p: 3 }}>
            <Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Skeleton />
                </Grid>
                {[1, 2, 3].map(() => {
                  return (
                    <Grid item xs={12} key={uniqueId()}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}>
                        <CardHeader
                          action={
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Skeleton width={200} height={20} />
                              <Skeleton width={200} height={20} />
                            </Box>
                          }
                          title={
                            <Box sx={{ display: "flex" }}>
                              <Typography
                                sx={{ fontSize: 20, fontWeight: 600, pr: 2 }}>
                                <Skeleton width={200} height={40} />
                              </Typography>
                              <Skeleton width={200} height={30} />
                            </Box>
                          }
                        />
                        <CardContent sx={{ pt: 0 }}>
                          <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                              <Skeleton width={200} height={30} />
                            </Typography>
                          </Box>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            mt: "auto",
                            pr: 3,
                          }}>
                          <Skeleton width={200} height={30} />
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontWeight: 500,
                            }}>
                            <Skeleton width={200} height={30} />
                          </Typography>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Typography>
          </Box>
        </div>
      </Box>
    </Grid>
  );
};
