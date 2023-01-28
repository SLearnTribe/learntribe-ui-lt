import { cloneDeep, has, uniqBy, uniqueId } from "lodash";
import { getCandidateJobsCompaniesBarChartConfig } from "../../Configs/Charts/CandidateJobsCompaniesChartConfig";
import { CandidateStatsConfig } from "../../Configs/Dashboards/DashboardsConfig";
import { CandidateDashboardTexts } from "../Text";

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

export const getJobsComapniesChartConfig = ({ series, categories }) => {
  const chartConfig = getCandidateJobsCompaniesBarChartConfig();

  const config = cloneDeep(chartConfig);

  config.xAxis.categories = categories;

  config.series = series;

  config.title.text =
    "Top" + CandidateDashboardTexts.jobsCompaniesConsideringYou;

  return config;
};

export const getAssessmentsChartConfig = ({ series, categories }) => {
  const chartConfig = getCandidateJobsCompaniesBarChartConfig();

  const config = cloneDeep(chartConfig);

  config.xAxis.categories = categories;

  config.series = series;

  config.title.text = "Top Recommended Assessments";

  return config;
};

export const handleAssessmentsChartData = (data) => {
  let beginnerCount = 0,
    intermediateCount = 0,
    advancedCount = 0;

  const series = [
    {
      name: "Beginner",
      data: [],
    },
    {
      name: "Intermediate",
      data: [],
    },
    {
      name: "Advanced",
      data: [],
    },
  ];

  const categories = ["Beginner", "Intermediate", "Advanced"];

  data.forEach(({ difficulty, title, id }) => {
    if (difficulty === "BEGINNER") {
      beginnerCount++;
    } else if (difficulty === "INTERMEDIATE") {
      intermediateCount++;
    } else if (difficulty === "ADVANCED") {
      advancedCount++;
    }
  });

  series[0].data = [beginnerCount, 0, 0];
  series[1].data = [0, intermediateCount, 0];
  series[2].data = [0, 0, advancedCount];

  return { series, categories };
};

export const handleJobsOrCompaniesChartData = (data) => {
  const series = {};

  const len = uniqBy(data, "businessName").length;

  const categories = [];

  let businessNameIndex = 0;

  data.forEach(({ businessName }) => {
    categories.push(businessName);

    if (!has(series, businessName)) {
      const data = new Array(len).fill(0);

      data[businessNameIndex] = 1;

      series[businessName] = {
        name: businessName,
        data: data,
      };

      businessNameIndex++;
    } else {
      const index = Object.keys(series).findIndex(
        (key) => key === businessName
      );

      series[businessName].data[index] = series[businessName].data[index] + 1;
    }
  });

  return {
    series: Object.values(series),
    categories: [...new Set(categories)],
  };
};
