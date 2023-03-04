import axios from "axios";
const LOCALHOST = "localhost";

export function requestGetUser(hashCode) {
  const localhost = window.location.hostname === LOCALHOST ? "local" : "";
  return axios.request({
    method: "get",
    url: `http://www.smilebat.xyz/sb-auth/app/token/${localhost}?code=${hashCode}`,
  });
}

export function requestPostLogout(accessToken) {
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    url: "http://www.smilebat.xyz/sb-auth/app/signout",
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
