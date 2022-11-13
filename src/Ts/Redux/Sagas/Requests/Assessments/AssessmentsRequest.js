import axios from "axios";

export function requestGetCandidateRecommendedAssessments({
  accessToken,
  page = 1,
  limit = 25,
  filters = ["COMPLETED", "PENDING", "BLOCKED", "FAILED", "PASSED"],
}) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `http://www.smilebat.xyz/api/v1/assessments/user?page=${page}&limit=${limit}&filters=${filters}`,
  });
}
