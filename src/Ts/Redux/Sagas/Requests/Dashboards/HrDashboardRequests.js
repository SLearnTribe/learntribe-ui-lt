import axios from "axios";

export function requestGetHrActivities({ category, page, limit, accessToken }) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: `http://www.smilebat.xyz/sb-inq/api/v1/analytics/hr/activities?page=${page}&limit=${limit}&category=${category}`,
  });
}
