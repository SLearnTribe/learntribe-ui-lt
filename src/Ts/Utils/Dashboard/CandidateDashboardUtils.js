import { cloneDeep, uniqueId } from "lodash";
import { CandidateStatsConfig } from "../../Configs/Dashboards/DashboardsConfig";

export const handleCandidateActivitiesResponse = ({
  completed,
  interviewCalls,
  jobsApplied,
}) => {
  const copyCandidateStatsConfig = cloneDeep(CandidateStatsConfig);

  copyCandidateStatsConfig[0].total = completed;

  copyCandidateStatsConfig[1].total = jobsApplied;

  copyCandidateStatsConfig[2].total = interviewCalls;

  return copyCandidateStatsConfig;
};

export const handleHiringDashboardData = (data) => {
  data.forEach((element) => {
    element.id = uniqueId();
  });

  return data;
};
