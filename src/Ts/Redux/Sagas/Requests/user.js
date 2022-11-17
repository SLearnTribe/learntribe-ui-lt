import axios from "axios";

export function requestGetUser(hashCode) {
  return axios.request({
    method: "get",
    url: `http://www.smilebat.xyz/auth/token/candidate?code=${hashCode}`,
  });
}
