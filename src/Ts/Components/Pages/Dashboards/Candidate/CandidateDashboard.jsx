import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { assessmentsRoute, jobsRoute } from "../../../../Configs/RoutesConfig";
import { getCandidateActivities } from "../../../../Redux/Ducks/Dashboard/CandidateDashboardSlice";
import { getCandidatesJobsData } from "../../../../Redux/Ducks/Jobs/JobsSlice";
import { CandidateDashboardTexts, CommonTexts } from "../../../../Utils/Text";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";
import { JobsCard } from "../../../CommonComponents/JobsCard";
import { RecommendedJobs } from "./RecommendedJobs";
import { StatCards } from "./StatCards";

export const CandidateDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandidateActivities());
    dispatch(getCandidatesJobsData());
  }, [dispatch]);
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
