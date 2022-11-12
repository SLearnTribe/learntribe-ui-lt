import axios from "axios";

export function requestGetHrDashboard(accessToken) {
  return axios.request({
    method: "get",
    url: `http://www.smilebat.xyz/api/v1/profile/user?code=${accessToken}`,
  });
}
