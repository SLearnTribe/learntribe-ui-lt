import axios from "axios";

export function requestGetJobs({ accessToken, page = 1, limit = 25 }) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `http://www.smilebat.xyz/api/v1/jobs/user?page=${page}&limit=${limit}`,
  });
}

export function requestPostJobs({
  accessToken,
  payload: { postJobData, method },
}) {
  return axios.request({
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: postJobData,
    url: "http://www.smilebat.xyz/api/v1/jobs/user",
  });
}
