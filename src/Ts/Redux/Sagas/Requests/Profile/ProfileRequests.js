import axios from "axios";

export function requestGetUserProfile(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/api/v1/profile/user",
  });
}

export function requestPostUserProfile({ accessToken, updatedUserInfo }) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: updatedUserInfo,
    url: "http://www.smilebat.xyz/api/v1/profile/user",
  });
}
