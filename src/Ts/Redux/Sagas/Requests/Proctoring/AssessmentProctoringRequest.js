import axios from "axios";

export function requestPostAssessmentProctoring({
  accessToken,
  payload: images,
  procData,
}) {
  const { good, many, bad, message } = procData;
  return axios.request({
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: { data: images, good, many, bad, message },
    url: `http://www.smilebat.xyz/sb-proc/proc`,
  });
}
