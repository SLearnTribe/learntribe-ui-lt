import { Card, Grid } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { useSelector } from "react-redux";
import { getHiringInProgressChartData } from "../../../../Redux/Selectors/Dashboard/HrDashboardSelectors";
import { getHiringInProgressChartConfig } from "../../../../Utils/Dashboard/CandidateDashboardUtils";

export const HiringInProgressChart = () => {
  const hiringInProgress = useSelector(getHiringInProgressChartData);

  const options = getHiringInProgressChartConfig(hiringInProgress);
  return (
    <Grid item xs={6}>
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>
    </Grid>
  );
};
