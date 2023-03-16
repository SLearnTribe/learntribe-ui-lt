import axios from "axios";

export function requestGetResumeDetails({ accessToken }) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "https://www.smilebat.xyz/sb-rsp/api/v1/resume",
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
    url: "https://www.smilebat.xyz/sb-rsp/api/v1/resume",
  });
}

export function requestGetResumeDownload({ accessToken, email }) {
  return axios
    .request({
      method: "get",
      responseType: "blob",
      headers: {
        "Content-Type": "text/plain",
        Authorization: `Bearer ${accessToken}`,
      },
      url: `https://www.smilebat.xyz/sb-rsp/api/v1/resume/download?email=${email}`,
    })
    .then((response) => response.data)
    .then((blob) => {
      const file = new Blob([blob], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
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
    url: `https://www.smilebat.xyz/sb-rsp/api/v1/resume/upload?email=${email}`,
  });
}

export function requestPostSave({ accessToken, payload }) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: payload,
    url: `https://www.smilebat.xyz/sb-rsp/api/v1/resume`,
  });
}
