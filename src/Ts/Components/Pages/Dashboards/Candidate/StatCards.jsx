import { Grid } from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import { CandidateStatsConfig } from "../../../../Configs/Dashboards/DashboardsConfig";
import DashboardStatsCard from "../../../CommonComponents/StatsCard";

export const StatCards = () => {
  return (
    <>
      {CandidateStatsConfig.map(({ title, total, color, icon }) => (
        <Grid key={uniqueId()} item xs={12} sm={6} md={3}>
          <DashboardStatsCard
            title={title}
            total={total}
            color={color}
            Icon={icon}
          />
        </Grid>
      ))}
    </>
  );
};
