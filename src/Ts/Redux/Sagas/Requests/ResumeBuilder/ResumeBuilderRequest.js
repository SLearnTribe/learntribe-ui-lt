import axios from "axios";

export function requestGetResumeDetails({ accessToken }) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/sb-rsp/api/v1/resume",
  });
}

export function requestPostResumeDetails({
  accessToken,
  updatedResumeDetails,
}) {
  return axios.request({
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: updatedResumeDetails,
    url: "http://www.smilebat.xyz/sb-rsp/api/v1/resume",
  });
}
