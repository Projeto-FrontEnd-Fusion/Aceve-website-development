import axios from "axios";

export const httpAdmin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ADMURL,
  timeout: 10000,
});
