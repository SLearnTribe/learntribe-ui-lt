export const postedJobsSkeletonData = () => {
  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      title: "N/A",
      businessName: "N/A",
      employmentType: "N/A",
      companyShortName: "N/A",
      location: "N/A",
      jobLocation: "N/A",
      daysBetween: "N/A",
    });
  }
  return data;
};
