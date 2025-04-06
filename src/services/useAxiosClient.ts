import { axiosClient } from "./axiosClient"

export const useAxiosClient = () => {
  const api = axiosClient();
  return api;
}