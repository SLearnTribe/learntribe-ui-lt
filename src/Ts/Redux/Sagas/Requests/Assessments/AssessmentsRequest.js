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
    url: `http://www.smilebat.xyz/api/v1/assessments/user?page=${page}&limit=${limit}&filter=${filters}`,
  });
}

export function requestPostAssessments({
  accessToken,
  assessmentToBeGenerated,
}) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: assessmentToBeGenerated,
    url: "http://www.smilebat.xyz/api/v1/assessments/user",
  });
}

export function requestDefaultAssessmentOptions(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/api/v1/assessments/preceding",
  });
}

export function requestAssignAssessment({
  accessToken,
  assessmentId,
  assigneeEmail,
}) {
  return axios.request({
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `http://www.smilebat.xyz/api/v1/assessments/id/${assessmentId}?assigneeEmail=${assigneeEmail}`,
  });
}
