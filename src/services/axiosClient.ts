import axios from "axios";

export const axiosClient = (
  baseURL = "https://aceve-api-development.onrender.com/api"
) => {
  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return api;
};
