import { CandidateDashboardTexts } from "../../Utils/Text";

export const getCandidateJobsCompaniesBarChartConfig = () => {
  return {
    chart: {
      type: "column",
    },
    title: {
      text: CandidateDashboardTexts.jobsCompaniesConsideringYou,
      align: "left",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {},
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    plotOptions: {
      series: {
        pointWidth: 20,
      },
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [],
  };
};

// {
//   name: "ReactJs",
//   data: [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
//   // color: "#00c853",
// },
// {
//   name: "Redux",
//   data: [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
//   // color: "#01579b",
// },
// {
//   name: "JavaScript",
//   data: [0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
//   // color: "#ffc107",
// },

// "Imperva",
// "Oracle Cerner",
// "Thomson Reuters",
// "SmileBat",
// "CGI",
// "Delliot",
// "Maersk",
// "Informatica",
// "Nagarro",
// "Capgemini",
// "Nineleaps",
// "TCS",
// "Epicor",
// "No Broker",
// "EPAM",
// "Amazon",
// "Flipkar",
// "Target",
// "Intuit",
