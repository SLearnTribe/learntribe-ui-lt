import { Card, Grid } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { useSelector } from "react-redux";
import { getAssessmentsChartData } from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { getAssessmentsChartConfig } from "../../../../Utils/Dashboard/CandidateDashboardUtils";

export const CandidateJobsComapaniesDonutChart = () => {
  const chartData = useSelector(getAssessmentsChartData);

  const options = getAssessmentsChartConfig(chartData);
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>
    </Grid>
  );
};
