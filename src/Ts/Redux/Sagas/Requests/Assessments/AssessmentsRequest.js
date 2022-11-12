import axios from "axios";

export function requestGetAssessments(accessToken) {
  return axios.request({
    method: "get",
    url: `http://www.smilebat.xyz/api/v1/profile/user?code=${accessToken}`,
  });
}
