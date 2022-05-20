import axios from "axios";
import { baseUrl } from "./baseUrl";

export const get = (url) => {
  let token = localStorage.getItem("token");

  return axios.get(baseUrl + url, {
    Authorization: { Headers: `Bearer ${token}` },
  });
};

export const post = (url, body) => {
  let token = localStorage.getItem("token");

  return axios.post(baseUrl + url, body, {
    Authorization: { Headers: `Bearer ${token}` },
  });
};
