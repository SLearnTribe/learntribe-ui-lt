import { Card, Grid } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { useSelector } from "react-redux";
import { getJobsOrCompaniesChartData } from "../../../../Redux/Selectors/Jobs/JobsSelectors";
import { getJobsComapniesChartConfig } from "../../../../Utils/Dashboard/CandidateDashboardUtils";

export const CandidateJobsComapaniesChart = () => {
  const chartData = useSelector(getJobsOrCompaniesChartData);

  const options = getJobsComapniesChartConfig(chartData);
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>
    </Grid>
  );
};
