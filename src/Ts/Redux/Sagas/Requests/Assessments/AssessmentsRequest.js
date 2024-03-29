import axios from "axios";

export function requestGetCandidateRecommendedAssessments({
  accessToken,
  page = 1,
  limit = 25,
  filters = ["COMPLETED", "PENDING", "BLOCKED", "FAILED", "PASSED"],
  keyword,
}) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `https://www.smilebat.xyz/sb-ast/api/v1/assessments/user?page=${page}&limit=${limit}&filter=${filters}&keyword=${keyword}`,
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
    url: "https://www.smilebat.xyz/sb-ast/api/v1/assessments/user",
  });
}

export function requestDefaultAssessmentOptions(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "https://www.smilebat.xyz/sb-ast/api/v1/assessments/preceding",
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
    url: `https://www.smilebat.xyz/sb-ast/api/v1/assessments/id/${assessmentId}?assigneeEmail=${assigneeEmail}`,
  });
}

export function requestGetAssessmentForCandidate({
  accessToken,
  assessmentId,
}) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `https://www.smilebat.xyz/sb-ast/api/v1/assessments/id/${assessmentId}`,
  });
}

export function requestPostSubmitAssessment({
  accessToken,
  assessmentId,
  submitAssessmentDetails,
}) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: submitAssessmentDetails,
    url: `https://www.smilebat.xyz/sb-ast/api/v1/assessments/id/${assessmentId}`,
  });
}
