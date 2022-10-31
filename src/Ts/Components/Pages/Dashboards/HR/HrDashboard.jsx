import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  HrHiringInLastMonthTableColumns,
  HrHiringInProgressTableColumns,
} from "../../../../Configs/Dashboards/TableConfigs";
import {
  getHrDashboardHiringInLastMonthData,
  getHrDashboardHiringInProgressData,
} from "../../../../Redux/Selectors/Dashboard/HrDashboardSelectors";
import { HrDashboardTexts } from "../../../../Utils/Text";
import { DataGridTable } from "../../../CommonComponents/DataGridTable";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";

export const HrDashboard = () => {
  const hiringInLastMonth = useSelector(getHrDashboardHiringInLastMonthData);

  const hiringInProgress = useSelector(getHrDashboardHiringInProgressData);

  return (
    <Grid container spacing={3}>
      <HeaderLink
        mainText={HrDashboardTexts.hiringsInTheLastMonth}
        hideLink={true}
      />
      <Grid item xs={12}>
        <DataGridTable
          data={hiringInLastMonth}
          columns={HrHiringInLastMonthTableColumns}
        />
      </Grid>
      <HeaderLink
        mainText={HrDashboardTexts.hiringsInProgress}
        hideLink={true}
      />
      <Grid item xs={12}>
        <DataGridTable
          data={hiringInProgress}
          columns={HrHiringInProgressTableColumns}
        />
      </Grid>
    </Grid>
  );
};
