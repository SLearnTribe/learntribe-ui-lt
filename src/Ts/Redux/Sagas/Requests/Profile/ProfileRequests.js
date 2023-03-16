import axios from "axios";

export function requestGetUserProfile(accessToken) {
  return axios.request({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "https://www.smilebat.xyz/sb-inq/api/v1/profile/user",
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
    url: "https://www.smilebat.xyz/sb-inq/api/v1/profile/user",
  });
}
