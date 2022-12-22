import axios from "axios";

export function requestGetUser(hashCode) {
  return axios.request({
    method: "get",
    url: `http://www.smilebat.xyz/auth/token?code=${hashCode}`,
  });
}

export function requestPostLogout(accessToken) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/auth/logout",
  });
}

export function requestGetAllCities() {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      country: "india",
    },
    url: "https://countriesnow.space/api/v0.1/countries/cities",
  });
}
