import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { assessmentsRoute, jobsRoute } from "../../../../Configs/RoutesConfig";
import { getCandidateActivities } from "../../../../Redux/Ducks/Dashboard/CandidateDashboardSlice";
import { getJobsData } from "../../../../Redux/Ducks/Jobs/JobsSlice";
import { CandidateDashboardTexts, CommonTexts } from "../../../../Utils/Text";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";
import { JobsCard } from "../../../CommonComponents/JobsCard";
import { CandidateJobsComapaniesDonutChart } from "./CandidateAssessmentsChart";
import { CandidateJobsComapaniesChart } from "./CandidateJobsComapaniesChart";
import { RecommendedAssessments } from "./RecommendedAssessments";
import { StatCards } from "./StatCards";

export const CandidateDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandidateActivities());
    dispatch(getJobsData({ page: 1, limit: 25 }));
  }, [dispatch]);

  // const createPDF = async () => {
  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //   });
  //   const data = await html2canvas(document.querySelector("#exportResume"));
  //   const img = data.toDataURL("image/png");
  //   const imgProperties = pdf.getImageProperties(img);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
  //   pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save("shipping_label.pdf");
  // };
  return (
    <Grid
      container
      spacing={3}
      // id="exportResume" onClick={createPDF}
    >
      <HeaderLink
        mainText={CandidateDashboardTexts.yourActivities}
        linkText={CommonTexts.viewStats}
        route={assessmentsRoute}
        hideLink={true}
      />
      <StatCards />
      <CandidateJobsComapaniesChart />
      <CandidateJobsComapaniesDonutChart />
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
      <RecommendedAssessments />
    </Grid>
  );
};
