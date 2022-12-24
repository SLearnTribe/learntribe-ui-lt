import { Grid } from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { CandidateActivitiesIconMap } from "../../../../Configs/Dashboards/DashboardsConfig";
import { getCandidateActivitiesData } from "../../../../Redux/Selectors/Dashboard/CandidateDashboardSelectors";
import { getIsUserDataLoading } from "../../../../Redux/Selectors/UserSelectors/UserSelectors";
import { CandidateActivitiesSkeleton } from "../../../../Skeletons/CandidateActivitiesSkeleton";
import DashboardStatsCard from "../../../CommonComponents/StatsCard";

export const StatCards = () => {
  const activities = useSelector(getCandidateActivitiesData);

  const isLoading = useSelector(getIsUserDataLoading);

  return (
    <>
      {isLoading ? (
        <CandidateActivitiesSkeleton />
      ) : (
        <>
          {activities.map(({ title, total, color }) => (
            <Grid key={uniqueId()} item xs={12} sm={6} md={4}>
              <DashboardStatsCard
                title={title}
                total={total}
                color={color}
                Icon={CandidateActivitiesIconMap[title]}
              />
            </Grid>
          ))}
        </>
      )}
    </>
  );
};
