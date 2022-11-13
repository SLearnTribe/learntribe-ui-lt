import { cloneDeep } from "lodash";
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
