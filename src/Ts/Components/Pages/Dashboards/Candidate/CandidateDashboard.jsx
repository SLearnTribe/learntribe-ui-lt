import { Grid } from "@mui/material";
import React from "react";
import { assessmentsRoute, jobsRoute } from "../../../../Configs/RoutesConfig";
import { CandidateDashboardTexts, CommonTexts } from "../../../../Utils/Text";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";
import { JobsCard } from "../../../CommonComponents/JobsCard";
import { RecommendedJobs } from "./RecommendedJobs";
import { StatCards } from "./StatCards";

export const CandidateDashboard = () => {
  return (
    <Grid container spacing={3}>
      <HeaderLink
        mainText={CandidateDashboardTexts.yourActivities}
        linkText={CommonTexts.viewStats}
        route={assessmentsRoute}
        hideLink={true}
      />
      <StatCards />
      <HeaderLink
        mainText={CandidateDashboardTexts.jobsCompaniesConsideringYou}
        linkText={CommonTexts.viewAll}
        route={jobsRoute}
      />
      <JobsCard />
      <HeaderLink
        mainText={CandidateDashboardTexts.recommendedAssessmentsForYou}
        linkText={CommonTexts.viewAll}
        route={assessmentsRoute}
      />
      <RecommendedJobs />
    </Grid>
  );
};
