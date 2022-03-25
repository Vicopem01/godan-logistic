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
export const checkOrders = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/unsettled/orders`,
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

export const createNewBooking = async (data) => {
  const response = await axios({
    method: "POST",
    url: `${baseUrl}/user/auth/booking`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
  });
  return response;
};

export const bookARider = async (riderId, bookingId) => {
  const response = await axios({
    method: "POST",
    url: `${baseUrl}/user/auth/booking-rider/${riderId}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      bookingId: bookingId,
    },
  });
  return response;
};
export const payForOrder = async (data) => {
  const response = await axios({
    method: "PUT",
    url: `${baseUrl}/user/auth/pay-for-ride`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: data,
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

export const getSingleOrderInfo = async (id) => {
  const response = await axios({
    method: "GET",
    url: `${baseUrl}/user/auth/order-history/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
