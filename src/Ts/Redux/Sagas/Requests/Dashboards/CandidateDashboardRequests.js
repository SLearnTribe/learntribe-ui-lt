import axios from "axios";

export function requestGetCandidateActivities(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/api/v1/analytics/candidate/activities",
  });
}
