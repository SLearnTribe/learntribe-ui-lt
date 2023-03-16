import axios from "axios";

export function requestGetApplicants({
  accessToken,
  page,
  limit,
  skill,
  keyword,
}) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `https://www.smilebat.xyz/sb-inq/api/v1/profile?page=${page}&limit=${limit}&skill=${skill}&keyword=${keyword}`,
  });
}
