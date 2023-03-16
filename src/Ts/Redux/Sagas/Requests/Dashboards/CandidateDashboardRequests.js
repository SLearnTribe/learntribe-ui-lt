import axios from "axios";

export function requestGetCandidateActivities(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "https://www.smilebat.xyz/sb-inq/api/v1/analytics/candidate/activities",
  });
}
