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
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: updatedResumeDetails,
    url: "http://www.smilebat.xyz/sb-rsp/api/v1/resume",
  });
}

export function requestGetResumeDownload({ accessToken, email }) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `http://www.smilebat.xyz/sb-rsp/api/v1/resume/download?email=${email}`,
  });
}

export function requestPostResumeUpload({ accessToken, formData, email }) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
    data: formData,
    url: `http://www.smilebat.xyz/sb-rsp/api/v1/resume/upload?email=${email}`,
  });
}
