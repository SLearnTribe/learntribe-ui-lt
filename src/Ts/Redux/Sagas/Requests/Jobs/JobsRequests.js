import axios from "axios";

export function requestGetCandidateJobs(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/api/v1/analytics/candidate/jobs",
  });
}
