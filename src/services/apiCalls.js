import { baseUrl } from "../base/baseUrl";
import axios from "axios";

export const registerNewUser = async (data) => {
  const response = await axios({
    method: "POST",
    url: `${baseUrl}/user/auth/signup`,
    data: data,
  });
  return response;
};
export const login = async (data) => {
  const response = await axios({
    method: "POST",
    url: `${baseUrl}/user/auth/login`,
    data: data,
  });
  return response;
};
