import { Card, Grid, Skeleton, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { uniqueId } from "lodash";
import React from "react";
import { IconWrapperStyle } from "../Components/CommonComponents/StatsCard";
import { CandidateActivitiesData } from "../Utils/MockData/DashboardData";

export const CandidateActivitiesSkeleton = () => {
  return (
    <>
      {CandidateActivitiesData.map(({ title, total, color }) => (
        <Grid key={uniqueId()} item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: 4,
              py: 1,
              textAlign: "center",
              color: (theme) => theme.palette[color].darker,
            }}>
            <IconWrapperStyle
              sx={{
                color: (theme) => theme.palette[color].dark,
                backgroundImage: (theme) =>
                  `linear-gradient(135deg, ${alpha(
                    theme.palette[color].dark,
                    0
                  )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
              }}>
              <Skeleton width={80} height={65} variant="circular" />
            </IconWrapperStyle>

            <Typography variant="h3">
              <Skeleton />
            </Typography>

            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
              <Skeleton />
            </Typography>
          </Card>
        </Grid>
      ))}
    </>
  );
};
