import axios from "axios";

export function requestGetJobs(accessToken) {
  return axios.request({
    method: "get",
    url: `http://www.smilebat.xyz/api/v1/profile/user?code=${accessToken}`,
  });
}
