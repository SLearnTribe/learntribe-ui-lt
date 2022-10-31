export const HrHiringInLastMonthTableColumns = [
  { field: "id", headerName: "ID", hide: true },
  { field: "role", headerName: "Role", sortable: true, minWidth: 300, flex: 1 },
  {
    field: "skills",
    headerName: "Skills",
    sortable: true,
    minWidth: 300,
    flex: 1,
  },
  {
    field: "hiredCount",
    headerName: "Hired Count",
    sortable: true,
    minWidth: 150,
  },
  {
    field: "jobPostedOn",
    headerName: "Job Posted On",
    sortable: true,
    minWidth: 150,
  },
  {
    field: "jobStatus",
    headerName: "Job Status",
    sortable: true,
    minWidth: 150,
  },
];

export const HrHiringInProgressTableColumns = [
  { field: "id", headerName: "ID", hide: true },
  { field: "role", headerName: "Role", sortable: true, flex: 1, minWidth: 300 },
  {
    field: "skills",
    headerName: "Skills",
    sortable: true,
    flex: 1,
    minWidth: 300,
  },
  {
    field: "interviewsInProgress",
    headerName: "No of Interviews in Progress(TBD)",
    sortable: true,
    minWidth: 200,
  },
  {
    field: "jobPostedOn",
    headerName: "Job Posted On",
    sortable: true,
    minWidth: 150,
  },
  {
    field: "jobStatus",
    headerName: "Job Status",
    sortable: true,
    minWidth: 150,
  },
];
