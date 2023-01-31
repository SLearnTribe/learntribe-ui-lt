import { Card, Grid } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { useSelector } from "react-redux";
import { getHiringInLastMonthChartData } from "../../../../Redux/Selectors/Dashboard/HrDashboardSelectors";
import { getHiringInLastMonthChartConfig } from "../../../../Utils/Dashboard/CandidateDashboardUtils";

export const HiringInLastMonthChart = () => {
  const hiringInLastMonth = useSelector(getHiringInLastMonthChartData);

  const options = getHiringInLastMonthChartConfig(hiringInLastMonth);
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>
    </Grid>
  );
};
