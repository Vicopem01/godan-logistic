import { baseUrl } from "../axios/baseUrl";
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

export const verifyUserEmail = async (token) => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/verify-email?token=${token}`,
  });
  return response;
};

export const createNewOrder = async (data) => {
  const response = await axios({
    method: "POST",
    url: `${baseUrl}/user/auth/booking`,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    data: data,
  });
  return response;
};

export const getAllAvailableRiders = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/available-riders`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getSingleRider = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/available-rider/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getSingleUserInfo = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/user-info`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getUserOrderHistory = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/order-history`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
